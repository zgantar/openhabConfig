rules.JSRule({
  name: "System set up rule",
  description: "Setting everything needed for openhab in general",
  triggers: [triggers.SystemStartlevelTrigger(70)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("setUp", "###############Začetna nastavitev sistema###########################")

    //nastavimo spremenljivko za prazno hišo
    items.getItem("Away").sendCommand("OFF");
    LogAction.logInfo("setUp", "Away je na OFF")

    //nastavimo spremenljivko za ignoriranje gibanja
    items.getItem("ignoreMovementForLights").sendCommand("OFF");
    LogAction.logInfo("setUp", "ignoreMovementForLights je na OFF")

    LogAction.logInfo("setUp", "###############Konec začetne nastavitve sistema#####################")
  },
  tags: ["System", "SetUp"],
  id: "systemSetUpJS"
});