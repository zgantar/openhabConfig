rules.JSRule({
  name: "Inverter monthly production calculator",
  description: "Calculating monthly inverter production",
  triggers: [triggers.GenericCronTrigger('0 0 0 1 * ?')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("inverter","#####################Začenjam preračunavanje mesečne proizvodnje električne energije#####################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("inverter","Current time: " + h + ":" + min);

    var InverterMonthlyProduction = items.getItem("InverterMonthlyProduction");
    var InverterDailyProduction = items.getItem("InverterDailyProduction");
    var InverterCurrentMonthlyProduction = items.getItem("InverterCurrentMonthlyProduction");
    //resetiram mesečno vrednost
    InverterCurrentMonthlyProduction.postUpdate(0);

    // LogAction.logInfo("inverter","Danes znaša življenska proizvodnja - {}",InverterDailyProduction.state);
    
    var since = x.minusMonths(1);
    var motnhlyAmount = InverterDailyProduction.persistence.sumSince(since);
    
    LogAction.logInfo("inverter","Ta mesec znaša mesečna proizvodnja - {}", motnhlyAmount.state);
    InverterMonthlyProduction.postUpdate(motnhlyAmount.state);


    LogAction.logInfo("inverter","#####################Končal preračunavanje mesečne porabe električne energije#########################");
},
  tags: ["inverter", "electricity"],
  id: "inverterMonthlyProductionJS"
});