rules.JSRule({
  name: "Blinds All Up on Ground Floor",
  description: "All blinds are opening on Ground Floor",
  triggers: [triggers.ItemStateChangeTrigger('BlindsGroundFlorUp', 'OFF', 'ON')],
  execute: (event) => {
    const LogAction = Java.type('org.openhab.core.model.script.actions.Log');

    LogAction.logInfo("blinds", "All blinds down - ====================Vse žaluzije v pritličju gor=========================")
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("blinds", "Current time: " + h + ":" + min);

    var gBlindActGFUp = items.getItem("gBlindActGFUp");
    LogAction.logInfo("blinds", "Imamo {} žaluzij.", gBlindActGFUp.members.length)
    var blindOffTimer;

    gBlindActGFUp.members.forEach(actItemUp => {
      LogAction.logInfo("blinds", "Sem v zanki s stikalom za - {}", actItemUp.toString)
      if (actItemUp != null) {
        actItemUp.sendCommand("ON");
        blindOffTimer = actions.ScriptExecution.createTimer(x.plusMinutes(1), () => {
          LogAction.logInfo("blinds", "###########################Timer se je sprožil########################");
          LogAction.logInfo("blinds", "Pošiljam OFF stikalu - {}", actItemUp.name)
          actItemUp.sendCommand("OFF");
          LogAction.logInfo("blinds", "###########################Timer se je končal########################");
        });
      }
    });
    LogAction.logInfo("blinds", "All blinds down - =========================Konec vse žaluzije v pritličju gor=========================")
    items.getItem("BlindsGroundFlorUp").sendCommand("OFF");
  },
  tags: ["Blinds", "All Blinds Up on Ground Floor"],
  id: "blindsAllUpGFJS"
});