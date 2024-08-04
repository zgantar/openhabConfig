rules.JSRule({
  name: "Chromecast SetUp",
  description: "Setting everything needed for working with chromecast",
  triggers: [triggers.SystemStartlevelTrigger(100)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("chromecast","#####################Nastavljam vse potrebno za delo s chromecastom#########################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("chromecast","Current time: "+h+":"+min);

    var RadioStationURL = items.getItem("RadioStationURL");
    
    LogAction.logInfo("chromecast","Current state of RadioStationURL is - {}", RadioStationURL.state);
    if (RadioStationURL.state == null) {  
      RadioStationURL.postUpdate(1);
      LogAction.logInfo("chromecast","Nastavljam na prvo radijsko postajo")
    } else {
      LogAction.logInfo("chromecast","Ker je že nastavljena vrednost {}, ne naredim nič", RadioStationURL.state);
    }
    LogAction.logInfo("chromecast","#####################Vse potrebno za delo s chromecastom nastavjeno#########################")
},
  tags: ["Chromecast", "SetUp"],
  id: "chromecastRadioSetUpJS"
});