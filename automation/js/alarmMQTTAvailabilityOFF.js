rules.JSRule({
  name: "Alarm MQTT Availability OFF",
  description: "We need to be informed when a connection to one of the MQQT devices is lost",
  triggers: [triggers.GroupStateChangeTrigger('gMqttAvailability', 'ON', 'OFF')],
  execute: (event) => {
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("alarm", "###########################Obdelujem alarm za izgubo povezave z mqtt napravo#################################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("alarm", "Current time: " + h + ":" + min);

    // LogAction.logInfo("alarm", "Filtriram katera naprava je sprožila alarm.");
    // var triggeringItems = items.getItem("gMqttAvailability").members.filter(batteryLowItem => {
    //   batteryLowItem.state == "OFF";
    // });
    var triggeringItem = items.getItem(event.itemName);
    LogAction.logInfo("alarm", "Alarm sprožila naprava {}.", triggeringItem);
    var timerr = actions.ScriptExecution.createTimer(x.plusSeconds(10),() => {
      LogAction.logInfo("alarm", "Preverjam ali je naprava {} še vedno offline {}", triggeringItem, triggeringItem.state);
      if (triggeringItem.state)
    });
    NotificationAction.sendBroadcastNotification("Dobil obvestilo o izgubi povezave z napravo - "+ triggeringItem.name);
    LogAction.logInfo("alarm", "###########################Alarm za izgubo povezave z mqtt napravo obdelan##################################");
  },
  tags: ["Alarm", "MQTT Availability"],
  id: "alarmMqttAvailablityJS"
});