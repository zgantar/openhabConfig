rules.JSRule({
  name: "Stairway Lights Off",
  description: "Light will turn off at 23:00 unless TV is on or there is some movement in the house",
  triggers: [triggers.GenericCronTrigger('0 0 23 * * ? *')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("lights", "###########################Ura je enajst in preverjam ali lahko ugasnem luči na stopnišču##################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("lights", "Current time: "+h+":"+min);

    var gMot = items.getItem("gMot");
    var plugTiViPower = items.getItem("plugTiViPower");
    var plugLiSt2Switch2 = items.getItem("plugLiSt2Switch2");

    LogAction.logInfo("lights", "Trenutna poraba TVja je - {}", plugTiViPower.rawState);
    if (plugTiViPower.rawState < 50 && gMot.state == "OFF") {
      LogAction.logInfo("lights", "Ker TV ni prižgana in ni gibanja, ugašam luč na stopnišču");
      plugLiSt2Switch2.sendCommand("OFF");
    } else {
      LogAction.logInfo("lights", "Ker je prižgana TV oziroma je gibanje, prestavljam ugašanje luči na stopnišču za 5 min");
      var lightShuttOffTimer = actions.ScriptExecution.createTimer(x.plusMinutes(5),() => {
        LogAction.logInfo("lights", "Preverjam ali je prižgan TV {} in gibanje {}", plugTiViPower.state, gMot.state);
        if (plugTiViPower.rawState > 50) {
          LogAction.logInfo("lights", "TV je prižgan zato prestavim ugašanje za 5 minut");
          lightShuttOffTimer.reschedule(time.ZonedDateTime.now().plusMinutes(5));
        } else if (gMot.state == "ON") {
          LogAction.logInfo("lights", "Še vedno je gibanje v hiši");
          lightShuttOffTimer.reschedule(time.ZonedDateTime.now().plusMinutes(5));
        } else {
          LogAction.logInfo("lights", "TV ni več prižgan in tudi gibanja ni več, zato ugašam luči");
          plugLiSt2Switch2.sendCommand("OFF");
          lightShuttOffTimer.cancel();
          lightShuttOffTimer = null;
        }
      });
    }
    LogAction.logInfo("lights", "###########################Konec preverjanja ali lahko ugasnem luči na stopnišču###########################");
},
  tags: ["Stairway", "Lights"],
  id: "stairwayLightsOffJS"
});