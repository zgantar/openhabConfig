rules.JSRule({
  name: "Heating SetUp",
  description: "Setting everything needed for working with chromecast",
  triggers: [triggers.SystemStartlevelTrigger(70)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("heating","#####################Nastavljam vse potrebno za ogrevanje#############################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("heating","Current time: "+h+":"+min);

    items.getItem("Heating").sendCommand("OFF");
    items.getItem("LogOgrevanje").sendCommand("OFF");
    items.getItem("ManOgrevanje").sendCommand("OFF");
    items.getItem("gLog").sendCommand("OFF");
    items.getItem("gMan").sendCommand("OFF");
    items.getItem("gFhs").sendCommand("OFF");
    //gDif.members.forEach((item) => {
    //  if (item.state == NULL) item.postUpdate(0)
    //});
    LogAction.logInfo("heating","#####################Vse potrebno za ogrevanje je nastavljeno#########################");
},
  tags: ["Heating", "SetUp"],
  id: "heatingSetUp"
});