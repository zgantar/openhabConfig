rules.JSRule({
  name: "Contact Sensor Group Change JS",
  description: "Light will turn on when one of the windows or doors are opened",
  triggers: [triggers.ItemStateChangeTrigger('frontDoorContact',null,null), triggers.ItemStateChangeTrigger('raiseWindowContact',null,null), triggers.ItemStateChangeTrigger('tiltWindowContact',null,null)],
  execute: (event) => {
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("contact", "###########################Preverjam spremembo na skupini kontaktnih senzorjev#########################");
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("contact", "Current time: " + h + ":" + min);

    var AlarmLightRaised = items.getItem("AlarmLightRaised");
    var gPhonePing = items.getItem("gPhonePing");
    var contactShuttOff;
    var triggerringContact = items.getItem(event.itemName);

    if (triggerringContact.state == "ON") {
      LogAction.logInfo("contact", "Ker je novo stanje ON gremo preverjat lučko");
      if (AlarmLightRaised.state == "OFF") {
        
        LogAction.logInfo("contact", "Lučka je ugasnjena, zato jo prižigam.");
        AlarmLightRaised.sendCommand("ON");
        //checking to see if no parent is at home
        if (gPhonePing.state == "OFF") {
          LogAction.logInfo("contact", "Telefona staršev še nista prijavljena na Wifi, počakam še 30 sekund");
          contactShuttOff = actions.ScriptExecution.createTimer(x.plusSeconds(60),() => {
            LogAction.logInfo("contact", "###########################Preverjam spremembo na ON na skupini kontaktnih senzorjev#########################");
            LogAction.logInfo("contact", "###########################Timer start#########################");
            if (gPhonePing.state == "OFF") {
              LogAction.logInfo("contact", "Tudi po tridesetih sekundah ni prijavljenih telefonov, prožim sporočilo");
              NotificationAction.sendBroadcastNotification("Zaznal odprta vrata, ko staršev ni doma ob "+ x + " - " + gPhonePing);
            }
            contactShuttOff.cancel();
            contactShuttOff = null;
            LogAction.logInfo("contact", "###########################Timer stoped########################");
          });
        } else {
          LogAction.logInfo("contact", "Vsaj eden od staršev je doma, zato ne pošiljam obvestila");
        }
      } else {
        LogAction.logInfo("contact", "Lučka je prižgana, zato ignoriram");
      }
    } else {
      LogAction.logInfo("contact", "Ker je novo stanje OFF gremo preverjat lučko");
      if (AlarmLightRaised.state == "ON" && items.getItem("gDoor").members.filter(tmpItem => tmpItem.state == "ON").length == 0) {
        LogAction.logInfo("contact", "Ugašam lučko");
        AlarmLightRaised.sendCommand("OFF");
      } else {
        LogAction.logInfo("contact", "Lučka je "+AlarmLightRaised.state+" skupina vrat pa je - "+items.getItem("gDoor").state);
      }
    }
    LogAction.logInfo("contact", "###########################Konec preverjanja spremembe na skupini kontaktnih senzorjev#################");
},
  tags: ["Windows", "Contact sensor"],
  id: "contactSensorGroupChangeJS"
});