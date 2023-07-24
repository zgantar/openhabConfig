rules.JSRule({
  name: "Contact Sensor Group Off JS",
  description: "Light will turn on when movement is detected",
  triggers: [triggers.GroupStateChangeTrigger('gDoor','ON', 'OFF')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logDebug("contact", "###########################Preverjam spremembo na OFF na skupini kontaktnih senzorjev##################");
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logDebug("contact", "Current time: " + h + ":" + min);

    var AlarmLightRaised = items.getItem("AlarmLightRaised");

    if (AlarmLightRaised.state == "ON" && items.getItem("gDoor").state == "OFF") {
      LogAction.logDebug("contact", "Ugašam lučko");
      AlarmLightRaised.sendCommand("OFF");
    } else {
      LogAction.logDebug("contact", "Lučka ni bila prižgana, zato ne naredim nič");
    }
    LogAction.logDebug("contact", "###########################Konec preverjanja spremembe na OFF na skupini kontaktnih senzorjev##########");
  },
  tags: ["Windows", "Contact sensor"],
  id: "contactSensorGroupOffJS"
});