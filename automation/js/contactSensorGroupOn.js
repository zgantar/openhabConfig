rules.JSRule({
  name: "Contact Sensor Group On JS",
  description: "Light will turn on when movement is detected",
  triggers: [triggers.GroupStateChangeTrigger('gDoor','OFF', 'ON')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logDebug("contact", "###########################Preverjam spremembo na ON na skupini kontaktnih senzorjev#########################");
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logDebug("contact", "Current time: " + h + ":" + min);

    var AlarmLightRaised = items.getItem("AlarmLightRaised");
    var gPhonePing = items.getItem("gPhonePing");
    var contactShuttOff;

    if (AlarmLightRaised.state == "OFF") {
      LogAction.logDebug("contact", "Lučka je ugasnjena, zato jo prižigam.");
      AlarmLightRaised.sendCommand("ON");
      //checking to see if no parent is at home
      if (gPhonePing.state == "OFF") {
        LogAction.logDebug("contact", "Telefona staršev še nista prijavljena na Wifi, počakam še 30 sekund");
        contactShuttOff = actions.ScriptExecution.createTimer(x.plusSeconds(30),() => {
          LogAction.logDebug("contact", "###########################Preverjam spremembo na ON na skupini kontaktnih senzorjev#########################");
          LogAction.logDebug("contact", "###########################Timer start#########################");
          if (gPhonePing.state == "OFF") {
            LogAction.logDebug("contact", "Tudi po tridesetih sekundah ni prijavljenih telefonov, prožim sporočilo");
            NotificationAction.sendBroadcastNotification("Zaznal odprta vrata, ko staršev ni doma ob "+ x + " - " + gPhonePing);
          }
          contactShuttOff.cancel();
          contactShuttOff = null;
          LogAction.logDebug("contact", "###########################Timer stoped########################");
        });
      } else {
        LogAction.logDebug("contact", "Vsaj eden od staršev je doma, zato ne pošiljam obvestila");
      }
    } else {
      LogAction.logDebug("contact", "Lučka je prižgana, zato ignoriram");
    }
    LogAction.logDebug("contact", "###########################Konec preverjanja spremembe na ON na skupini kontaktnih senzorjev#################");
},
  tags: ["Windows", "Contact sensor"],
  id: "contactSensorGroupOnJS"
});