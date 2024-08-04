rules.JSRule({
  name: "Inverter daily production calculator",
  description: "Calculating daily inverter production",
  triggers: [triggers.GenericCronTrigger('0 0 0 * * ?')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("inverter","#####################Začenjam preračunavanje dnevne proizvodnje inverterja#####################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("inverter","Current time: " + h + ":" + min);
            
    var InverterDailyProduction = items.getItem("InverterDailyProduction");
    var InverterLifetimeEnergyAC = items.getItem("InverterLifetimeEnergyAC");
    var InverterCurrentDailyProduction = items.getItem("InverterCurrentDailyProduction");
    //resetiram dnevno vrednost
    InverterCurrentDailyProduction.postUpdate(0);

    LogAction.logInfo("inverter","Danes znaša življenska proizvodnja - {}",InverterLifetimeEnergyAC.state);
    
    var since = x.minusDays(1).minusSeconds(0);
    var dailyAmount = InverterLifetimeEnergyAC.persistence.deltaSince(since);
    
    LogAction.logInfo("inverter","Danes znaša dnevna proizvodnja - {}", dailyAmount.state);
    InverterDailyProduction.postUpdate(dailyAmount.state);
    InverterDailyProduction.persistence.persist();

    LogAction.logInfo("inverter","#####################Končal preračunavanje dnevne proizvodnje električne energije#########################");
},
  tags: ["inverter", "electricity"],
  id: "inverterDailyProductionJS"
});