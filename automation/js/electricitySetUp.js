rules.JSRule({
  name: "Electricity set up rule",
  description: "Setting everything needed for working with electricity",
  triggers: [triggers.SystemStartlevelTrigger(70)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    logDebug("electricity", "###############Začetna nastavitev vsega potrebnega za delo z elektriko###########################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("electricity","Current time: "+h+":"+min);

    if (x > 6 && x < 22 && (x.dayOfWeek().value() != 6 && x.dayOfWeek().value() != 7)) {
      items.getItem("LowElectricity").sendCommand("OFF");
    } else {
      items.getItem("LowElectricity").sendCommand("ON");
    }
    logDebug("electricity", "###############Vse potrebno za delo z elektriko je nastavljeno###################################");
  },
  tags: ["Electricity", "SetUp"],
  id: "electricitySetUpJS"
});