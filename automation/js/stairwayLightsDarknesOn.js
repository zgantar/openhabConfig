rules.JSRule({
  name: "Stairway Lights Darknes On",
  description: "Light will turn on when outside lights is to low",
  triggers: [triggers.ItemStateChangeTrigger('gOutSolarRad',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("lights", "#####################Preverjam ali prižgati luči na stopnišču#####################");
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("lights","Current time: " + h + ":" + min);

    const lum = items.getItem("gOutSolarRad");
    const stairwayLum = items.getItem("gibanjeHodnikZLum");
    const lightSwitch = items.getItem("plugLiSt2Switch2");
    var lightsCheckPowerTimer;

    if (lum.rawState.intValue() <= 8 || stairwayLum.rawState <= 10) {
      LogAction.logInfo("lights", "Ker je sprememba zunanje osvetljenosti na - {} manjša od 8 ali pa nad stopnicami na - {} manjša od 10, preverjam stanje luči.", lum.state, stairwayLum.state);
      if (lightSwitch.state == "OFF") {
        if (lum.history.previousState > lum.state) {
          lightSwitch.sendCommand("ON");
          LogAction.logInfo("lights", "Prižigam luči");
          lightsCheckPowerTimer = actions.ScriptExecution.createTimer(x.plusSeconds(60),() => {
            LogAction.logInfo("lights", "###########################Zaganjam timer########################");
            LogAction.logInfo("lights", "Preverjam vrednost odjema elektrike {}", items.getItem("plugLiSt2Switch2Power").rawState.intValue());
            if (items.getItem("plugLiSt2Switch2Power").rawState.intValue() < 5) {
              LogAction.logInfo("lights", "Vrednost je manjša od 5 zato pošiljam sporočilo.");
              NotificationAction.sendBroadcastNotification("Po eni minuti od predvidenega prižiga luči, luči še vedno ne porabljajo elektrike!");
            } else {
              LogAction.logInfo("lights", "Vrednost je večja od 5 zato končujem timer.");
            }
            lightsCheckPowerTimer.cancel();
            lightsCheckPowerTimer = null;
            LogAction.logInfo("lights", "###########################Timer končan########################");
          });
        }   
      }
    } else {
      LogAction.logInfo("lights", "Ker je sprememba zunanje osvetljenosti na - {} večja od 8 preverjam stanje luči.", lum.state);
      if (lightSwitch.state == "ON") {
        LogAction.logInfo("lights", "Ugašam luči");
        lightSwitch.sendCommand("OFF");
      } else {
        LogAction.logInfo("lights", "Luči so že ugasnjene.");
      }

    }
    LogAction.logInfo("lights", "#####################Končal preverjanje luči na stopnišču#########################");
  },
  tags: ["Stairway", "Lights"],
  id: "stairwayLightsDarknesOnJS"
});