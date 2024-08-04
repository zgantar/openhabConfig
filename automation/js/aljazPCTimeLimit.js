rules.JSRule({
  name: "Aljaž PC Time limit checker",
  description: "Aljaž PC is limited to a preset time limit.",
  triggers: [triggers.ItemStateChangeTrigger('networkPingableAljazPC','OFF','ON')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");

    LogAction.logInfo("plug", "#####################Aljažev PC se je prižgal, preverjam koliko časa je že prižgan##########################");
    
    var x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("plug", "Current time: "+h+":"+min);
    
    var plugAljazPCSwitch2 = items.getItem("plugAljazPCSwitch2");
    var plugAljazPCSwitch1 = items.getItem("plugAljazPCSwitch1");
    var networkPingableAljazPC = items.getItem("networkPingableAljazPC");
    var AljazPCTimeSum = items.getItem("AljazPCTimeSum");
    var AljazPCTimeAllowed = items.getItem("AljazPCTimeAllowed");
    var aljazCheckAliveTimer;

    LogAction.logInfo("plug", "Preverjam koliko časa je PC že prižgan danes - {}.", AljazPCTimeSum.state);  
    if (AljazPCTimeAllowed.rawState < AljazPCTimeSum.rawState) {
      LogAction.logInfo("plug", "PC je prižgan že dalj časa od dovoljenega, zato ugašam.");
      plugAljazPCSwitch2.sendCommand("OFF");
      plugAljazPCSwitch1.sendCommand("OFF");
      NotificationAction.sendBroadcastNotification("Ugasnil Aljažev PC, ker je presegel odobren čas uporabe!");  
    } else {
      LogAction.logInfo("plug", "Odobren čas uporabe še ni presežen zato kreiram timer");
      aljazCheckAliveTimer = actions.ScriptExecution.createTimer(x.plusMinutes(5),() => {
        LogAction.logInfo("plug", "###########################Zaganjam timer########################");
        LogAction.logInfo("plug", "Preverjam ali je PC še prižgan {}", networkPingableAljazPC.state);
        if (networkPingableAljazPC.state == "ON") {
          LogAction.logInfo("plug", "PC je še prižgan in razlika je {}", AljazPCTimeAllowed.rawState - AljazPCTimeSum.rawState);
          if (AljazPCTimeAllowed.rawState < AljazPCTimeSum.rawState) {
            LogAction.logInfo("plug", "PC je prižgan že dalj časa od dovoljenega, zato ugašam.");
            plugAljazPCSwitch2.sendCommand("OFF");
            plugAljazPCSwitch1.sendCommand("OFF");
            NotificationAction.sendBroadcastNotification("Ugasnil Aljažev PC, ker je presegel odobren čas uporabe!");
            aljazCheckAliveTimer.cancel();
            aljazCheckAliveTimer = null;
            LogAction.logInfo("plug", "###########################Timer končan########################");    
          } else {
            LogAction.logInfo("plug", "Odobren čas uporabe še ni presežen zato podaljšam timer");
            var tmp = AljazPCTimeSum.rawState + 5;
            AljazPCTimeSum.postUpdate(tmp);
            LogAction.logInfo("plug", "Nova vrednost sum spremenljivke je {}.", AljazPCTimeSum.state);
            aljazCheckAliveTimer.reschedule(time.ZonedDateTime.now().plusMinutes(5));
          }
        } else {
          LogAction.logInfo("plug", "PC je ugasnjen zato končam timer.");
          aljazCheckAliveTimer.cancel();
          aljazCheckAliveTimer = null;
          LogAction.logInfo("plug", "###########################Timer končan########################");  
        }
      });
    }
    LogAction.logInfo("plug", "#####################Preverjanje koliko časa je že Aljažev PC prižgan je končano##########################");
},
  tags: ["Plug", "Aljaž PC", "Time Limit"],
  id: "aljazPCTimeLimitJS"
});