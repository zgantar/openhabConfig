rules.JSRule({
  name: "Heating manual override",
  description: "We need to change the state of the alarm light according to the AlarmLightRaised item state",
  triggers: [triggers.ItemStateChangeTrigger('AllCompleteUp','OFF','ON')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    logDebug("blinds", "###############Vse žaluzije gor###########################")
    
    var gBlindLogUp = items.getItem("gBlindLogUp");

    logDebug("blinds", "Imamo {} žaluzij.", gBlindLogUp.members.length);
    gBlindLogUp.members.forEach(logItem => {
      logDebug("blinds", "Sem v zanki s stikalom za žaluzijo - {}", logItem.name);
      rules.runRule(activateActBlind,logItem, true, -1, timers, getStringFromItem);
    });
    logDebug("blinds", "###############Konec vse žaluzije gor#####################")
    items.getItem("AllCompleteUp").sendCommand("OFF");
  },
  tags: ["Heating", "Manual override"],
  id: "heatingManualOverrideJS"
});