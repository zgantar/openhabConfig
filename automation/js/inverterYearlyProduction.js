rules.JSRule({
  name: "Inverter yearly production calculator",
  description: "Calculating yearly inverter production",
  triggers: [triggers.GenericCronTrigger('0 0 0 1 JAN ? *')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("inverter","#####################Začenjam preračunavanje mesečne proizvodnje električne energije#####################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("inverter","Current time: " + h + ":" + min);

    var InverterYearlyProduction = items.getItem("InverterYearlyProduction");
    var InverterMonthlyProduction = items.getItem("InverterMonthlyProduction");
    var InverterCurrentYearlyProduction = items.getItem("InverterCurrentYearlyProduction");
    //resetiram letno vrednost
    InverterCurrentYearlyProduction.postUpdate(0);

    // LogAction.logInfo("inverter","Danes znaša življenska proizvodnja - {}",InverterLifetimeEnergyAC.state);
    
    var since = x.minusYears(1);
    var yearlyAmount = InverterMonthlyProduction.persistence.sumSince(since);
    
    LogAction.logInfo("inverter","To leto znaša letna proizvodnja - {}", yearlyAmount.state);
    InverterYearlyProduction.postUpdate(yearlyAmount.state);


    LogAction.logInfo("inverter","#####################Končal preračunavanje mesečne porabe električne energije#########################");
},
  tags: ["inverter", "electricity"],
  id: "inverterYearlyProductionJS"
});