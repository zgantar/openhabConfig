rules.JSRule({
  name: "Smoke alarm",
  description: "",
  triggers: [triggers.ItemStateChangeTrigger('dimCumnataSmokeAlarm', 'OFF', 'ON')],
  execute: (event) => {
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("alarm", "###########################Obdelujem alarm za zaznan dim#################################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("alarm", "Current time: " + h + ":" + min);

    const xiaomiMiGatewaySoundSwitch = items.getItem("xiaomiMiGatewaySoundSwitch");
    var soundOffTimer;
    var triggeringItem = items.getItem(event.itemName);

    if (triggeringItem.state == "ON") {
      xiaomiMiGatewaySound.sendCommand(1);
      soundOffTimer = actions.ScriptExecution.createTimer(x.plusSeconds(30), () => {
        LogAction.logInfo("alarm", "###########################Timer se je sprožil########################");
        LogAction.logInfo("alarm", "Pošiljam OFF stikalu - {}", xiaomiMiGatewaySoundSwitch.name)
        xiaomiMiGatewaySoundSwitch.sendCommand("OFF");
        LogAction.logInfo("alarm", "###########################Timer se je končal########################");
      });
      LogAction.logInfo("alarm", "Dobil obvestilo o dimu s strani - {}", triggeringItem.name);
      NotificationAction.sendBroadcastNotification("Dobil obvestilo o dimu s strani - {}", triggeringItem.name);
    }
    LogAction.logInfo("alarm", "###########################Alarm za zaznan dim obdelan##################################");
  },
  tags: ["Alarm", "Smoke"],
  id: "alarmSmokeJS"
});