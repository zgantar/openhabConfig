rules.JSRule({
  name: "Heating manual override",
  description: "We need to change the state of the alarm light according to the AlarmLightRaised item state",
  triggers: [triggers.ItemStateChangeTrigger('Override',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("heating","###########################Izvajam ukaz za ročno ogrevanje############################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("heating","Current time: " + h + ":" + min);

    var valveName;
    var noVent;
    var manValve;

    if (items.getItem("Override").state == "ON") {
      LogAction.logInfo("heating","Dobil ukaz za začetek ročnega upravljanja ogrevanja");
      items.getItem("gFhs").members.forEach((valveItem) =>{
        LogAction.logInfo("heating","Gledam ventil {}", valveItem.name);
        valveName = valveItem.name.substring(3);
        LogAction.logInfo("heating","valveName {}", valveName);
        noVent = valveItem.groupNames.indexOf("gFhsRev") != -1 ? true : false;
        LogAction.logInfo("heating","Ali je NO ventil - {}", noVent);
        manValve = items.getItem("gMan").members.find(manTmpItem => manTmpItem.name.substring(3) === valveName);
        if (manValve != null) {
          LogAction.logInfo("heating","Ročni ventil je {}", manValve.name);
          if (items.getItem("Heating").state == "ON") {
            LogAction.logInfo("heating","Ker se trenutno ogreva, se nastavi ročni ventil {} na stanje fizičnega ventila {}", manValve.state, valveItem.state);
            if (valveItem.state == "ON") { 
              noVent ? manValve.sendCommand("OFF") : manValve.sendCommand("ON");
            } else {
              noVent ? manValve.sendCommand("ON") : manValve.sendCommand("OFF");
            }
          } else {
            LogAction.logInfo("heating","Ker se trenutno ne ogreva, se nastavi na stanje ročnega ventila na OFF");
            manValve.state == "ON" ? manValve.sendCommand("OFF") : LogAction.logInfo("heating","Ker je ventil že zaprt, ne naredim nič");
          }
        } else {
          LogAction.logInfo("heating", "Nisem našel ventila za ročno stikalo {}", valveName);
        }
        LogAction.logInfo("heating","In zaključim z {}", manValve.name);
      })
      LogAction.logInfo("heating","Nastavim vsa logična stikala na OFF");
      items.getItem("gLog").sendCommand("OFF");
      items.getItem("LogOgrevanje").sendCommand("OFF");
    } else {
      LogAction.logInfo("heating","Dobil ukaz za konec ročnega upravljanja ogrevanja");
      items.getItem("gMan").sendCommand("OFF");
      items.getItem("ManOgrevanje").sendCommand("OFF");
    }
    LogAction.logInfo("heating","###########################Ukaz za ročno ogrevanje je izveden#########################");
},
  tags: ["Heating", "Manual override"],
  id: "heatingManualOverrideJS"
});