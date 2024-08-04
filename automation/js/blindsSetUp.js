rules.JSRule({
  name: "Blinds set up rule",
  description: "Setting everything needed for working with blinds",
  triggers: [triggers.SystemStartlevelTrigger(70)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("blinds", "###############Nastavljam vse potrebno za delo z žaluzijami######################")

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("electricity","Current time: "+h+":"+min);

    items.getItem("AllCompleteUp").sendCommand("OFF");
    items.getItem("BlindsGroundFlorUp").sendCommand("OFF");
    items.getItem("AllCompleteDo").sendCommand("OFF");
    items.getItem("AllPeek").sendCommand("OFF");
    items.getItem("GroundFlorPeek").sendCommand("OFF");
    

    LogAction.logInfo("blinds", "Nastavljam stanje");
    items.getItem("gBlindState").members.forEach(stateItem => {
      LogAction.logInfo("blinds", "Preverjam stanje za {}", stateItem.name)
      if ( stateItem.state == null ) {
        stateItem.postUpdate(0.0);
        LogAction.logInfo("blinds", "Novo stanje je {}.", stateItem.state);
      }
    });
    LogAction.logInfo("blinds", "Nastavljam logična stikala");
    items.getItem("gBlindLog").members.forEach(logItem => {
      LogAction.logInfo("blinds", "Preverjam stanje za {}.", logItem.toString);
      logItem.sendCommand("OFF");
    });
    LogAction.logInfo("blinds", "Nastavljam releje");
    items.getItem("gBlindAct").members.forEach(blindsItem => {
      LogAction.logInfo("blinds", "Preverjam stanje za {}.", blindsItem.toString);
      blindsItem.sendCommand("OFF");
      LogAction.logInfo("blinds", "Novo stanje je {}.", blindsItem.state);
    });
    LogAction.logInfo("blinds", "###############Vse potrebno za delo z žaluzijami nastavljeno#####################")
},
  tags: ["Blinds", "SetUp"],
  id: "blindsSetUpJS"
});