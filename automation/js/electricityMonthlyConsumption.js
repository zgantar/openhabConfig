rules.JSRule({
  name: "Electricity monthly consumption calculator",
  description: "Calculating monthly electricity consumption",
  triggers: [triggers.GenericCronTrigger('15 0 0 1 * ?')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("electricity","#####################Začenjam preračunavanje mesečne porabe električne energije#####################")
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("electricity","Current time: " + h + ":" + min);
    
    var calcCons;
    
    function nameEquals(value) {
      LogAction.logInfo("electricity","Filtriram item porabe - " + value.name);
      LogAction.logInfo("electricity","Item porabe substring - " + value.name.substring(4, 8) + ", Item za urno porabo substring - " + this.name.substring(4, 8));
      LogAction.logInfo("electricity","Ali smo najdli kandidata - " + value.name.substring(4, 8).equalsIgnoreCase(this.name.substring(4, 8)));
      return value.name.substring(4, 8).equalsIgnoreCase(this.name.substring(4, 8));
    }
    
    function calculateCons(loopCons) {
      LogAction.logInfo("electricity","============Računam porabo za " + loopCons.name + " ===============")
      calcCons = items.getItem("gCalcConsMonth").members.filter(nameEquals, loopCons)[0];
      if (calcCons != null) {
        LogAction.logInfo("electricity","Pa poglejmo kaj smo najdl po filtriranju: {}.", calcCons.name);
        var time = x.minusMonths(1).minusSeconds(15);
        LogAction.logInfo("electricity","Preračunavam porabo od {}", time);
        var tempCons = loopCons.history.deltaSince(time);
        LogAction.logInfo("electricity","Delta porabe je {}", tempCons);
        if (tempCons == null) {
          if (loopCons.countStateChangesSince(time) == 0) {
            tempCons = loopCons.rawState;
          } else {
            tempCons = 0;
          }
        }
        calcCons.postUpdate(tempCons);
        LogAction.logInfo("electricity","Shranil preračunano vrednost porabe {} za {}", calcCons.state, calcCons.name);
      } else {
        LogAction.logWarn("electricity", "Nisem uspel najti poraba item za {}", loopCons.name);
      }
    }

    var consumptionItems = items.getItem("gConsumption").members;
    consumptionItems.forEach(calculateCons);
    LogAction.logInfo("electricity","#####################Končal preračunavanje mesečne porabe električne energije#########################")
},
  tags: ["Electricity", "Consumption"],
  id: "electricityMonthlyConsumptionJS"
});