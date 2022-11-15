rules.JSRule({
  name: "Alarm for battery low",
  description: "We got an event, using profile=system:hysteresis, that there is a sensor that has its battery lower than 15%",
  triggers: [triggers.GroupStateChangeTrigger('gBatteryLow','OFF','ON')],
  execute: (event) => {
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("alarm", "###########################Obdelujem alarm za nizko vrednost baterije#################################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("alarm", "Current time: " + h + ":" + min);

    LogAction.logInfo("alarm", "Filtriram katera baterija je sprožila alarm.");
    var triggeringItems = items.getItem("gBatteryLow").members.filter(batteryLowItem => {
      batteryLowItem.state == "ON";
    });
    triggeringItems.forEach(triggeringItem => {
      LogAction.logInfo("alarm", "Dobil obvestilo o prazni bateriji s strani - " + triggeringItem.name);
      NotificationAction.sendBroadcastNotification("Dobil obvestilo o prazni bateriji s strani - "+triggeringItem.name);
    })
    LogAction.logInfo("alarm", "###########################Alarm za nizko vrednost baterije obdelan ##################################");
},
  tags: ["Alarm", "Battery low"],
  id: "alarmBatteryLowJS"
});