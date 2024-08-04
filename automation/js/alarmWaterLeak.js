rules.JSRule({
  name: "Water leak alarm",
  description: "We got an event, using profile=system:hysteresis, that there is a sensor that has its battery lower than 15%",
  triggers: [triggers.GroupStateChangeTrigger('gWaterLeak', 'OFF', 'ON')],
  execute: (event) => {
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("alarm", "###########################Obdelujem alarm za zaznano puščanje vode#################################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("alarm", "Current time: " + h + ":" + min);

    const xiaomiMiGatewaySound = items.getItem("xiaomiMiGatewaySound");
    const xiaomiMiGatewaySoundSwitch = items.getItem("xiaomiMiGatewaySoundSwitch");
    var soundOffTimer;

    var triggeringItem = items.getItem(event.itemName);
    LogAction.logInfo("alarm", "Alarm je sprožil senzor {}.", triggeringItem.name);
    if (triggeringItem.state == "ON") {
      LogAction.logInfo("alarm", "Prožim alarm!!");
      xiaomiMiGatewaySound.sendCommand(2);
      soundOffTimer = actions.ScriptExecution.createTimer(x.plusSeconds(30), () => {
        LogAction.logInfo("alarm", "###########################Timer se je sprožil########################");
        LogAction.logInfo("alarm", "Pošiljam OFF stikalu - {}", xiaomiMiGatewaySoundSwitch.name)
        xiaomiMiGatewaySoundSwitch.sendCommand("OFF");
        LogAction.logInfo("alarm", "###########################Timer se je končal########################");
      });
      LogAction.logInfo("alarm", "Dobil obvestilo o puščanju vode s strani - {}", triggeringItem.name);
      NotificationAction.sendBroadcastNotification("Dobil obvestilo o puščanju vode s strani - {}", triggeringItem.name);
    }
    LogAction.logInfo("alarm", "###########################Alarm za zaznano puščanje vode obdelan##################################");
  },
  tags: ["Alarm", "Water leak"],
  id: "alarmWaterLeakJS"
});