rules.JSRule({
  name: "Electricity monthly reconciliation calculator",
  description: "Calculating monthly electricity production vs consumption",
  triggers: [triggers.GenericCronTrigger('15 0 0 1 * ?')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("inverter","#####################Začenjam preračunavanje mesečne razlike med proizvedeno in porabljeno električno energijo#####################")
      
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("inverter","Current time: " + h + ":" + min);
    
        
    var consumptionItem = items.getItem("PlugElCoMonthCons");
    LogAction.logInfo("inverter","Mesečna poraba elektrike je bila - {}", consumptionItem.state);
    var productionItem = items.getItem("InverterMonthlyProduction");
    LogAction.logInfo("inverter","Mesečna proizvodnja elektrike je bila - {}", productionItem.state);
    
    var reconciliation = items.getItem("monthlyReconciliation");
    LogAction.logInfo("inverter","Predprejšnji mesec je bila razlika med proizvodnjo in porabo elektrike - {}", reconciliation.state);

    var reconciliation = consumptionItem.quantityState.subtract(productionItem.quantityState);
    LogAction.logInfo("inverter","Prejšnji mesec je bila razlika med proizvodnjo in porabo elektrike - {}", reconciliation.float);
    reconciliation.postUpdate(reconciliation);
    
    LogAction.logInfo("inverter","#####################Končal preračunavanje dnevne razlike med proizvedeno in porabljeno električno energijo#####################")},

  tags: ["Electricity", "Consumption", "Inverter"],
  id: "electricityMonthlyReconciliationJS"
});