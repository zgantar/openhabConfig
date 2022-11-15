rules.JSRule({
  name: "Contact Sensor Group SetUp",
  description: "Setting everything needed for working with chromecast",
  triggers: [triggers.SystemStartlevelTrigger(100)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("contact","#####################Nastavim vse potrebno za kontaktne senzorje###########################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("contact","Current time: "+h+":"+min);

    var AlarmLightRaised = items.getItem("AlarmLightRaised");

    if (items.getItem("gDoor").state == "ON") {
      LogAction.logInfo("contact","Vsaj ena vrata so odprta, zato prižigam alarmno lučko");
      AlarmLightRaised.sendCommand("ON");
    } else {
      LogAction.logInfo("contact","Noben kontakt ni vklopljen, zato ugašam alarmno lučko");
      AlarmLightRaised.sendCommand("OFF");
    }
    LogAction.logInfo("contact","#####################Vse potrebno za kontaktne senzorje je nastavljeno#####################");
},
  tags: ["Contact", "SetUp"],
  id: "contactSensorGroupSetUpJS"
});