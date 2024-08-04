rules.JSRule({
  name: "Electricity set up rule",
  description: "Setting everything needed for working with electricity",
  triggers: [triggers.SystemStartlevelTrigger(70)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logDebug("electricity", "###############Začetna nastavitev vsega potrebnega za delo z elektriko###########################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("electricity","Current time: "+h+":"+min);

    if (h > 6 && h < 22 && !(x.dayOfWeek().equals(6) && x.dayOfWeek().equals(7))) {
      items.getItem("LowElectricity").sendCommand("OFF");
    } else {
      items.getItem("LowElectricity").sendCommand("ON");
    }
    LogAction.logDebug("electricity", "###############Vse potrebno za delo z elektriko je nastavljeno###################################");
  },
  tags: ["Electricity", "SetUp"],
  id: "electricitySetUpJS"
});