rules.JSRule({
  name: "Aljaž PC OFF when not home",
  description: "We need to shutdown PC when Aljaž is not at home since it waists electricity.",
  triggers: [triggers.ItemStateChangeTrigger('gAljazPhonePing','ON','OFF')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");

    LogAction.logDebug("plug", "#####################Aljažev telefon ni na WiFi, preverjam ali je PC prižgan##########################");
    
    var x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logDebug("plug", "Current time: "+h+":"+min);
    
    var plugAljazPCSwitch2 = items.getItem("plugAljazPCSwitch2");
    var plugAljazPCSwitch1 = items.getItem("plugAljazPCSwitch1");
    var networkPingableAljazPC = items.getItem("networkPingableAljazPC");
    var pcTurnOnTimer;

    LogAction.logDebug("plug", "Preverjam trenutno porabo PCja, ki je {}.", networkPingableAljazPC.state);  
    if (networkPingableAljazPC.state == "ON") {
      LogAction.logDebug("plug", "Ugašam PC.");  
      plugAljazPCSwitch2.sendCommand("OFF");
      plugAljazPCSwitch1.sendCommand("OFF");
      NotificationAction.sendBroadcastNotification("Ugasnil Aljažev PC, ker je odšel ampak pustil prižgan PC!");
      pcTurnOnTimer = actions.ScriptExecution.createTimer(x.plusSeconds(60),() => {
        LogAction.logInfo("plug", "###########################Prižigam stikalo za PC nazaj ON#########################");
        LogAction.logInfo("plug", "###########################Timer start#########################");
        plugAljazPCSwitch2.sendCommand("ON");
        plugAljazPCSwitch1.sendCommand("ON");
        pcTurnOnTimer.cancel();
        pcTurnOnTimer = null;
        LogAction.logInfo("plug", "###########################Timer stoped########################");
      });

    } else {
      LogAction.logDebug("plug", "Očitno Aljaž nima prižganega računalnika zato ne naredim nič.");  
    }
    LogAction.logDebug("plug", "#####################Aljažev telefon ni na WiFi, konec preverjanja PCja##########################");
},
  tags: ["Plug", "Aljaž PC"],
  id: "aljazPCAwayOFFJS"
});