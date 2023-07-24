rules.JSRule({
  name: "Electricity sum consumption calculator",
  description: "Calculating electricity consumption for meters reporting current consumption",
  triggers: [triggers.GroupStateChangeTrigger('gCurrentConsumption',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    // var logger = Java.type('org.slf4j.LoggerFactory').getLogger('org.openhab.rule.' + ctx.ruleUID);
    LogAction.logInfo("electricity","#####################Začenjam preračunavanje sumarne porabe električne energije#####################")

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logDebug("electricity","Current time: " + h + ":" + min);

    var calcCons;

    function nameEquals(value) {
      LogAction.logDebug("electricity","Filtriram item porabe - " + value.name);
      LogAction.logDebug("electricity","Item porabe substring - " + value.name.substring(4, 8) + ", Item za urno porabo substring - " + this.name.substring(4, 8));
      LogAction.logDebug("electricity","Ali smo najdli kandidata - " + value.name.substring(4, 8).equalsIgnoreCase(this.name.substring(4, 8)));
      return value.name.substring(4, 8).equalsIgnoreCase(this.name.substring(4, 8));
    }

    function calculateCons(loopCons) {
      LogAction.logDebug("electricity","============Računam porabo za: {} z vrednostjo - {} ===============", loopCons.name, loopCons.state);
      calcCons = items.getItem("gConsumption").members.filter(nameEquals, loopCons)[0];
      if (calcCons != null) {
        LogAction.logDebug("electricity","Pa poglejmo kaj smo najdl po filtriranju: {}.", calcCons.name);
        LogAction.logDebug("electricity","In kakšna je vrednost: {}.", calcCons.state);
        var tempCons = calcCons.rawState + loopCons.rawState;
        LogAction.logDebug("electricity","Suma porabe je {}", tempCons);
        calcCons.postUpdate(tempCons);
        LogAction.logInfo("electricity","Shranil preračunano vrednost porabe {} za {}", calcCons.state, calcCons.name);
      } else {
        LogAction.logWarn("electricity", "Nisem uspel najti poraba item za {}", loopCons.name);
      }
    }


    LogAction.logDebug("electricity", "Podatek je prišel za meter {}.", event.itemName);
    var triggeringItem = items.getItem(event.itemName);
    LogAction.logInfo("electricity", "In to je item {}.", triggeringItem);

    calculateCons(triggeringItem);
    LogAction.logInfo("electricity","#####################Končal preračunavanje sumarne porabe električne energije#########################")
},
  tags: ["Electricity", "Consumption"],
  id: "electricitySumConsumptionJS"
});