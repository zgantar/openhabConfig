rules.JSRule({
  name: "Electricity daily consumption calculator",
  description: "Calculating daily electricity consumption",
  triggers: [triggers.GenericCronTrigger('10 0 0 * * ? *')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("electricity","#####################Začenjam preračunavanje dnevne porabe električne energije#####################")
      
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("electricity","Current time: " + h + ":" + min);
    
    var calcCons;
    
    function nameEquals(value) {
      LogAction.logDebug("electricity","Filtriram item porabe - " + value.name);
      LogAction.logDebug("electricity","Item porabe substring - " + value.name.substring(4, 8) + ", Item za urno porabo substring - " + this.name.substring(4, 8));
      LogAction.logDebug("electricity","Ali smo najdli kandidata - " + value.name.substring(4, 8).equalsIgnoreCase(this.name.substring(4, 8)));
      return value.name.substring(4, 8).equalsIgnoreCase(this.name.substring(4, 8));
    }
    
    function calculateCons(loopCons) {
      LogAction.logInfo("electricity","============Računam porabo za " + loopCons.name + " ===============")
      calcCons = items.getItem("gCalcConsDay").members.filter(nameEquals, loopCons)[0];
      if (calcCons != null) {
        LogAction.logDebug("electricity","Pa poglejmo kaj smo najdl po filtriranju: {}.", calcCons.name);
        var time = x.minusDays(1).minusSeconds(10);
        // LogAction.logInfo("electricity","Preračunavam porabo od {}", time);
        var tempCons = loopCons.history.deltaSince(time);
        LogAction.logInfo("electricity","Delta porabe je {}", tempCons);
        if (tempCons == null) {
          LogAction.logDebug("electricity","Delta porabe je null");
          if (loopCons.countStateChangesSince(time) == 0) {
            LogAction.logDebug("electricity","Poraba se v vmesnem obdobju ni spreminjala");
            tempCons = loopCons.rawState;
          } else {
            LogAction.logDebug("electricity","Poraba se je v vmesnem obdobju spremenila {}", loopCons.countStateChangesSince(time));
            tempCons = 0;
          }
        }
        LogAction.logDebug("electricity","Vrednost, ki jo bom shranil je - {}", tempCons);
        calcCons.postUpdate(tempCons);
        LogAction.logInfo("electricity","Shranil preračunano vrednost porabe {} za {}", calcCons.state, calcCons.name);
      } else {
        LogAction.logWarn("electricity", "Nisem uspel najti poraba item za {}", loopCons.name);
      }
    }
        
    var consumptionItems = items.getItem("gConsumption").members;
    consumptionItems.forEach(calculateCons);
    LogAction.logInfo("electricity","#####################Končal preračunavanje dnevne porabe električne energije#########################")
},
  tags: ["Electricity", "Consumption"],
  id: "electricityDailyConsumptionJS"
});