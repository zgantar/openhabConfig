rules.JSRule({
  name: "Ajlaž PC SetUp",
  description: "Setting everything needed for working with Aljaž PC allowed time",
  triggers: [triggers.SystemStartlevelTrigger(70)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("plug", "###############Nastavljam vse potrebno za delo z Aljaževim PCjem######################")

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("electricity","Current time: "+h+":"+min);

    var AljazPCTimeAllowed = items.getItem("AljazPCTimeAllowed");
    LogAction.logInfo("plug", "Preverjam in nastavljam AljazPCTimeAllowed spremenljivko, če že ni - {}", AljazPCTimeAllowed.state);
    if (AljazPCTimeAllowed.state == "NULL") {
      LogAction.logInfo("blinds", "Dovoljen čas ni nastavljen, zato nastavljam");
      AljazPCTimeAllowed.postUpdate(130);
    }
    LogAction.logInfo("plug", "Spremenljivka za dovoljen čas nastavljena na - {}", AljazPCTimeAllowed.state);
    LogAction.logInfo("plug", "###############Vse potrebno za delo z Aljaževim PCjem nastavljeno#####################")
},
  tags: ["Plug", "Aljaž PC", "SetUp"],
  id: "ajlazPCSetUpJS"
});