rules.JSRule({
  name: "Shelly consumption calculator",
  description: "Shelly reports consumption every minute in Wm so we need to change to kWh",
  triggers: [triggers.GenericCronTrigger('0 0/15 * * * ? *')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    
    LogAction.logInfo("shelly", "###########################Preračunavam porabo na shelly napravah#########################");
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("shelly", "Current time: " + h + ":" + min);
    

    items.getItem("gShellyConsumption").members.forEach(itemReportedConsumption => {
      var itemName = itemReportedConsumption.name;
      LogAction.logInfo("shelly", "*******************Preračunavam za - "+itemName);
  
      var currentConsumptionValue = (itemReportedConsumption.rawState.floatValue()/60.0)/1000;
      currentConsumptionValue = Math.round(currentConsumptionValue*1000)/1000;
      LogAction.logInfo("shelly", "Poročana pretvorjena poraba je - "+currentConsumptionValue);
    
      var itemConsumption = items.getItem(itemName.slice(0,8).concat("Consumption"));
      if (itemConsumption == null) {
        LogAction.logWarn("shelly","Nisem našel Item za skupno porabo");
      } else {
        LogAction.logInfo("shelly","Item za skupno porabo pa je - "+itemConsumption.name);
        LogAction.logInfo("shelly","Njegova vrednost pa je - "+itemConsumption.rawState);
        if (currentConsumptionValue < itemConsumption.rawState) {
          LogAction.logInfo("shelly", "Števec je nižji kot zadnji poslan podatek, kar pomeni, da se je števec resetiral");
          itemConsumption.postUpdate(currentConsumptionValue + itemConsumption.rawState);
        } else {
          LogAction.logInfo("shelly", "Števec je višji kot zadnji poslan podatek, kar pomeni, da se števec ni resetiral in samo shranim vrednost");
          itemConsumption.postUpdate(currentConsumptionValue);
        }
        LogAction.logInfo("shelly", "Vrednost porabe po končanem procesiranju pa je - "+itemConsumption.state);
      }
    });
    LogAction.logInfo("shelly", "###########################Preračunal porabo na shelly napravah#########################");
},
  tags: ["Shelly", "Consumption"],
  id: "shellyConsumptionCalcJS"
});