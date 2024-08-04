rules.JSRule({
  name: "Blinds All Down",
  description: "All blinds are closing",
  triggers: [triggers.ItemStateChangeTrigger('AllCompleteDo', 'OFF', 'ON')],
  execute: (event) => {
    const LogAction = Java.type('org.openhab.core.model.script.actions.Log');

    LogAction.logInfo("blinds", "All blinds down - ====================Vse žaluzije dol=========================")
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("blinds", "Current time: " + h + ":" + min);

    var gBlindActDo = items.getItem("gBlindActDo");
    LogAction.logInfo("blinds", "Imamo {} žaluzij.", gBlindActDo.members.length)
    var blindOffTimer

    gBlindActDo.members.forEach(actItemDo => {
      LogAction.logInfo("blinds", "Sem v zanki s stikalom za - {}", actItemDo.name)
      if (actItemDo != null) {
        actItemDo.sendCommand("ON");
        blindOffTimer = actions.ScriptExecution.createTimer(x.plusMinutes(1), () => {
          LogAction.logInfo("blinds", "###########################Timer se je sprožil########################");
          LogAction.logInfo("blinds", "Pošiljam OFF stikalu - {}", actItemDo.name)
          actItemDo.sendCommand("OFF");
          LogAction.logInfo("blinds", "###########################Timer se je končal########################");
        });
      }
    });
    LogAction.logInfo("blinds", "All blinds down - =========================Konec vse žaluzije dol=========================")
    items.getItem("AllCompleteDo").sendCommand("OFF");
  },
  tags: ["Blinds", "All Blinds Down"],
  id: "blindsAllDownJS"
});