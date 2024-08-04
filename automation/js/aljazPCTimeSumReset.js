rules.JSRule({
  name: "Aljaž PC Time Sum Reset",
  description: "Aljaž PC is limited to a preset time limit.",
  triggers: [triggers.GenericCronTrigger("0 0 8 ? * * *")],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    var Ephemeris = Java.type("org.openhab.core.model.script.actions.Ephemeris");

    LogAction.logInfo("plug", "#####################Resetiram števec časa za Aljažev PC##########################");
    
    var x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("plug", "Current time: "+h+":"+min);

    function resetCounter() {
      LogAction.logInfo("plug", "Resetiram števec porabe računalnika");
      items.getItem("AljazPCTimeSum").postUpdate(0);
      items.getItem("plugAljazPCSwitch2").sendCommand("ON");
      items.getItem("plugAljazPCSwitch1").sendCommand("ON");
    }
    
    if (Ephemeris.isWeekend() || Ephemeris.isBankHoliday()) {
      LogAction.logInfo("plug", "Ker je konec tedna ali praznik, zamikam reset za eno uro");
      var resetTimer = actions.ScriptExecution.createTimer(x.plusHours(1),() => {
        resetCounter();
        resetTimer.cancel();
        resetTimer = null;
        });
    } else {
      resetCounter();
    }
    LogAction.logInfo("plug", "#####################Števec časa za Aljažev PC je resetiran##########################");
},
  tags: ["Plug", "Aljaž PC", "Time Limit Reset"],
  id: "aljazPCTimeSumResetJS"
});