rules.JSRule({
  name: "Blinds All Up",
  description: "All blinds are opening",
  triggers: [triggers.ItemStateChangeTrigger('AllCompleteUp','OFF','ON')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("blinds", "###############Vse žaluzije gor###########################")
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("blinds", "Current time: " + h + ":" + min);

    var gBlindActUp = items.getItem("gBlindActUp");
    LogAction.logInfo("blinds", "Imamo {} žaluzij.", gBlindActUp.members.length)
    var blindOffTimer

    gBlindActUp.members.forEach(actItemUp => {
      LogAction.logInfo("blinds", "Sem v zanki s stikalom za - {}", actItemUp.name)
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
    LogAction.logInfo("blinds", "###############Konec vse žaluzije gor#####################")
    items.getItem("AllCompleteUp").sendCommand("OFF");
  },
  tags: ["Blinds", "All blinds up"],
  id: "blindsAllUpJS"
});