rules.JSRule({
  name: "MQQT Availability OFF",
  description: "We need to be informed when a connection to one of the MQQT devices is lost",
  triggers: [triggers.GroupStateChangeTrigger('gMqttAvailability','ON','OFF')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("alarm", "###########################Obdelujem alarm za izgubo povezave z mqtt napravo#################################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("alarm", "Current time: " + h + ":" + min);

    LogAction.logInfo("alarm", "Filtriram katera naprava je sprožila alarm.");
    var triggeringItems = items.getItem("gMqttAvailability").members.filter(batteryLowItem => {
      batteryLowItem.state == "OFF";
    });
    triggeringItems.forEach(triggeringItem => {
      LogAction.logInfo("alarm", "Dobil obvestilo o izgubi povezave z napravo - {}", triggeringItem.name);
      NotificationAction.sendBroadcastNotification("Dobil obvestilo o izgubi povezave z napravo - {}", triggeringItem.name);
    })
    LogAction.logInfo("alarm", "###########################Alarm za izgubo povezave z mqtt napravo obdelan##################################");
},
  tags: ["Alarm", "MQQT Availability"],
  id: "alarmMqttAvailablityJS"
});