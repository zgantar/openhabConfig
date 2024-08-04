rules.JSRule({
  name: "Electricity daily reconciliation calculator",
  description: "Calculating daily electricity production vs consumption",
  triggers: [triggers.GenericCronTrigger('30 0 0 * * ? *')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("inverter","#####################Začenjam preračunavanje dnevne razlike med proizvedeno in porabljeno električno energijo#####################")
      
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("inverter","Current time: " + h + ":" + min);
    
        
    var consumptionItem = items.getItem("PlugElCoDayCons");
    LogAction.logInfo("inverter","Dnevna poraba elektrike je bila - {}", consumptionItem.state);
    var productionItem = items.getItem("InverterDailyProduction");
    LogAction.logInfo("inverter","Dnevna proizvodnja elektrike je bila - {}", productionItem.state);
    
    var timeVar = x.withHour(0).withMinute(0).withSecond(0).withNano(0);

    var reconciliation = items.getItem("dailyReconciliation");
    LogAction.logInfo("inverter","Včerajšnja dnevna razlika med proizvodnjo in porabo elektrike je bila - {}", reconciliation.state);

    var reconciliation = consumptionItem.persistence.persistedState(timeVar.minusSeconds(1)).quantityState.subtract(productionItem.persistence.persistedState(timeVar.minusSeconds(1).state));
    LogAction.logInfo("inverter","Današnja dnevna razlika med proizvodnjo in porabo elektrike pa je - {}", reconciliation.float);
    reconciliation.postUpdate(reconciliation);
    
    LogAction.logInfo("inverter","#####################Končal preračunavanje dnevne razlike med proizvedeno in porabljeno električno energijo#####################")},

  tags: ["Electricity", "Consumption", "Inverter"],
  id: "electricityDailyReconciliationJS"
});