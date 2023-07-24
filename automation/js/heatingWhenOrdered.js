rules.JSRule({
  name: "Heating When Ordered",
  description: "Need to process state change in heating on/off item and act accordingly",
  triggers: [triggers.ItemStateChangeTrigger('Heating',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("heating","###########################Prišel je ukaz za ogrevanje###################################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("heating", "Current time: " + h + ":" + min);

    var fhsHeater = items.getItem("fhsHeater");

    if (items.getItem("Heating").state == "ON") {
      LogAction.logInfo("heating", "Prišel je ukaz za ogrevanje, zato vklopim peč");
      if (fhsHeater.state == "ON") {
        LogAction.logWarn("heating", "Prišel je ukaz za ogrevanje, vendar je peč že prižgana");
      } else {
        if (items.getItem("gLog").state == "ON") {
          fhsHeater.sendCommand("ON");
        } else {
          LogAction.logWarn("heating", "Prišel je ukaz za ogrevanje, vendar sta tako gLog kot gMan OFF");
        }
      }
    } else {
      LogAction.logInfo("heating", "Prišel je ukaz za konec ogrevanja, zato izklopim peč in vse morebitne vklopljene ventile");
      if (fhsHeater.state == "ON") {
        if (items.getItem("gLog").state == "OFF") {
          fhsHeater.sendCommand("OFF");
        } else {
          LogAction.logWarn("heating", "Prišel je ukaz za konec ogrevanje, vendar je vrednost gLog - {}", items.getItem("gLog").state);
        }
      } else {
        LogAction.logWarn("heating", "Prišel je ukaz za konec ogrevanja, vendar peč sploh ni bila prižgana");
      }
      items.getItem("gFhs").sendCommand("OFF");
      items.getItem("gLog").sendCommand("OFF");
    }
    LogAction.logInfo("heating","###########################Ukaz za ogrevanje je izveden##################################");
},
  tags: ["Heating", "When ordered"],
  id: "heatingWhenOrderedJS"
});