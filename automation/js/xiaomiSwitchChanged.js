rules.JSRule({
  name: "xiaomi Switch Changed JS",
  description: "Action depending on the number of times xiaomi switch gets pressed",
  triggers: [triggers.ItemStateChangeTrigger('stikaloZaluzijeSwitch',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("xiaomi","###########################Izvajam ukaz s Xiaomi brezžičnega stikala##################################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("xiaomi","Current time: " + h + ":" + min);

    switch (items.getItem("stikaloZaluzijeSwitch").state) {
      case "single":
        LogAction.logInfo("xiaomi","Enojni klik");
        items.getItem("GroundFlorPeek").sendCommand("ON");
      case "double":
        LogAction.logInfo("xiaomi","Dvojni klik");
        items.getItem("AllCompleteDo").sendCommand("ON");
      case "triple":
        LogAction.logInfo("xiaomi","Trojni klik");
        items.getItem("BlindsGroundFlorUp").sendCommand("ON");
      case "quadruple":
        LogAction.logInfo("xiaomi","Četvorni klik");
        // items.getItem("ZalKuhinjaDesDo").sendCommand("ON");
      case "many":
        LogAction.logInfo("xiaomi","Več klikov");
      case "hold":
        LogAction.logInfo("xiaomi","Dolgi klik");
      case "release":
        LogAction.logInfo("xiaomi","Konec dolgega klika");
    }
    LogAction.logInfo("xiaomi","###########################Konec izvajanja ukaza s Xiaomi brezžičnega stikala#########################");
},
  tags: ["Xiaomi", "Switch"],
  id: "xiaomiSwitchChanged"
});