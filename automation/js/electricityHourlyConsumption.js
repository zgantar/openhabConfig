rules.JSRule({
  name: "Electricity hourly consumption calculator",
  description: "Calculating hourly electricity consumption",
  triggers: [triggers.GenericCronTrigger('5 0 * * * ?')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    // var logger = Java.type('org.slf4j.LoggerFactory').getLogger('org.openhab.rule.' + ctx.ruleUID);
    LogAction.logInfo("electricity","#####################Začenjam preračunavanje urne porabe električne energije#####################")

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
      LogAction.logDebug("electricity","============Računam porabo za " + loopCons.name + " ===============")
      calcCons = items.getItem("gCalcConsHour").members.filter(nameEquals, loopCons)[0];
      if (calcCons != null) {
        LogAction.logDebug("electricity","Pa poglejmo kaj smo najdl po filtriranju: {}.", calcCons.name);
        var timeVar = x.withMinute(0).withSecond(0).withNano(0);
        LogAction.logDebug("electricity","Preračunavam porabo od {}", timeVar.minusHours(1).toString());
        LogAction.logDebug("electricity","Preračunavam porabo do {}", timeVar.minusSeconds(1).toString());
        // var tempCons = Math.ceil(loopCons.persistence.deltaSince(time)*100)/100;
        var tempCons = loopCons.persistence.deltaBetween(timeVar.minusHours(1), timeVar.minusSeconds(1)).quantityState;
        LogAction.logInfo("electricity","Delta porabe je {}", tempCons.toString());
        if (tempCons == "NULL" || tempCons == "UNDEF" || tempCons == null) {
          LogAction.logDebug("electricity","Delta porabe je NULL, UNDEF, null ali 0 - {}. Zato ignoriramo", tempCons);
        } else if (!tempCons.equal("0 kWh")) {
          LogAction.logDebug("electricity","Delta porabe je {}", tempCons.toString());
          calcCons.postUpdate(tempCons);
          LogAction.logInfo("electricity","Shranil preračunano vrednost porabe {} za {}", calcCons.state, calcCons.name);
        }
      } else {
        LogAction.logWarn("electricity", "Nisem uspel najti poraba item za {}", loopCons.name);
      }
    }

    var consumptionItems = items.getItem("gConsumption").members;
    consumptionItems.forEach(calculateCons);
    LogAction.logInfo("electricity","#####################Končal preračunavanje urne porabe električne energije#########################")
},
  tags: ["Electricity", "Consumption"],
  id: "electricityHourlyConsumptionJS"
});