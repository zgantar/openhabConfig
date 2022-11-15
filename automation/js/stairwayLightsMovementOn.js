rules.JSRule({
  name: "Stairway Lights Movement On",
  description: "Light will turn on when movement is detected",
  triggers: [triggers.GroupStateChangeTrigger('gMot','OFF', 'ON')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("lights", "#####################Gibanje zato preverjam ali prižgati luči na stopnišču#########################################");
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("lights", "Current time: "+h+":"+min);

    var gOutSolarRad = items.getItem("gOutSolarRad");
    var plugLiSt2Switch2 = items.getItem("plugLiSt2Switch2");
    var shutDownTimer;

    if (items.getItem("ignoreMovementForLights").state == "OFF") {
      LogAction.logInfo("lights", "Ne ignoriramo gibanja");
      if (gOutSolarRad.rawState.intValue() <= 8) {
        LogAction.logInfo("lights", "Zunanje osvetlitev je manjša od 8");
        if (plugLiSt2Switch2.state == "OFF") {
          LogAction.logInfo("lights", "Ker so luči ugasnjene, jih prižigam.");
          plugLiSt2Switch2.sendCommand("ON");
          if (h < 6 || h == 23) {
            LogAction.logInfo("lights", "Ker je nočni čas nastavim ugašanje čez 5 minut.");
            shutDownTimer = actions.ScriptExecution.createTimer(x.plusMinutes(5),() => {
              if (items.getItem("gMot").state == "OFF") {
                LogAction.logInfo("lights", "Ker trenutno ni gibanja, ugašam luči");
                plugLiSt2Switch2.sendCommand("OFF");
                shutDownTimer.cancel();
                shutDownTimer = null;
              } else {
                LogAction.logInfo("lights", "Še vedno zaznavam gibanje, zato prestavim ugašanje za 5 minut.");
                shutDownTimer.reschedule(time.ZonedDateTime.now().plusMinutes(5));
              }
            });
          } else {
            LogAction.logInfo("lights", "Ker ni nočni čas, ne nastavim ugašanja čez 5 min.");
          }
        } else {
            LogAction.logInfo("lights", "Ker so luči že prižgane, ignoriram.");
        }
      } else {
        LogAction.logInfo("lights", "Ker je zunaj svetlo, ignoriram.");
      }
    } else {
      LogAction.logInfo("lights", "Ker je nastavljeno ignoriranje gibanja, ignoriram.");
    }
    LogAction.logInfo("lights", "#####################Konec preverjanja ali prižgati luči na stopnišču zaradi zaznanega gibanja#####################");
  },
  tags: ["Stairway", "Lights"],
  id: "stairwayLightsMovementOnJS"
});