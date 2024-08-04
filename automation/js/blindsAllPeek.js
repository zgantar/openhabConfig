rules.JSRule({
  name: "Blinds All Peek",
  description: "All blinds are peeking",
  triggers: [triggers.ItemStateChangeTrigger('AllPeek', 'OFF', 'ON')],
  execute: (event) => {
    const LogAction = Java.type('org.openhab.core.model.script.actions.Log');

    LogAction.logInfo("blinds", "All blinds down - ====================Vse žaluzije premik=========================")
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("blinds", "Current time: " + h + ":" + min);

    var gBlindActUp = items.getItem("gBlindActUp");
    LogAction.logInfo("blinds", "Imamo {} žaluzij.", gBlindActUp.members.length)
    var blindOffTimer;

    gBlindActUp.members.forEach(actItemUp => {
      LogAction.logInfo("blinds", "Sem v zanki s stikalom za - {}", actItemUp.toString)
      if (actItemUp != null) {
        actItemUp.sendCommand("ON");
        blindOffTimer = actions.ScriptExecution.createTimer(x.plusSeconds(1), () => {
          LogAction.logInfo("blinds", "###########################Timer se je sprožil########################");
          LogAction.logInfo("blinds", "Pošiljam OFF stikalu - {}", actItemUp.name)
          actItemUp.sendCommand("OFF");
          LogAction.logInfo("blinds", "###########################Timer se je končal########################");
        });
      }
    });
    LogAction.logInfo("blinds", "All blinds down - =========================Konec vse žaluzije premik=========================")
    items.getItem("AllPeek").sendCommand("OFF");
  },
  tags: ["Blinds", "All Blinds Peek"],
  id: "blindsAllPeekJS"
});