rules.JSRule({
  name: "Electricity reconciliation calculator",
  description: "Calculating current electricity production vs consumption",
  triggers: [triggers.GenericCronTrigger("0 */5 * * * ?")],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("inverter", "#####################Začenjam preračunavanje trenutne razlike med proizvedeno in porabljeno električno energijo#####################")

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("inverter", "Current time: " + h + ":" + min);


    var consumptionItem = items.getItem("plugElComConsumption");
    LogAction.logInfo("inverter", "Trenutna količina porabljene elektrike je - {}", consumptionItem.state);
    var productionItem = items.getItem("plugElComReturned");
    LogAction.logInfo("inverter", "Trenutna količina proizvedene elektrike je - {}", productionItem.state);

    var reconciliationItem = items.getItem("currentElectricityBalance");
    if (reconciliationItem == null || reconciliationItem == "UNDEF" || reconciliationItem == "NULL") {
      reconciliationItem.postUpdate(0);
    }
    LogAction.logInfo("inverter", "Prejšnja razlika med proizvedeno in porabljeno elektriko je - {}", reconciliationItem.state);

    var reconciliationValue = consumptionItem.quantityState.subtract(productionItem.quantityState);
    LogAction.logInfo("inverter", "Trenutna razlika med proizvedeno in porabljeno elektriko pa je - {}", reconciliationValue.float);
    reconciliationItem.postUpdate(reconciliationValue);

    LogAction.logInfo("inverter", "#####################Končal preračunavanje trenutne razlike med proizvedeno in porabljeno električno energijo#####################")
  },

  tags: ["Electricity", "Consumption", "Inverter"],
  id: "electricityReconciliationJS"
});