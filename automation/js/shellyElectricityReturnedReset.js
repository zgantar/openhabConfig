rules.JSRule({
  name: "Shelly returned energy calculator",
  description: "Shelly reports consumption every minute in Wm so we need to change to kWh",
  triggers: [triggers.GroupStateChangeTrigger('gReturnedReset', null, null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    
    LogAction.logInfo("shelly", "###########################Preračunavam vrnjeno energijo na shelly napravah#########################");
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("shelly", "Current time: " + h + ":" + min);
    

    items.getItem("gReturnedReset").members.forEach(itemReportedReturned => {
      var itemName = itemReportedReturned.name;
      LogAction.logInfo("shelly", "*******************Preračunavam vrnjeno energijo za - {}", itemName);
  
      // var currentReturnedValue = (itemReportedReturned.state.floatValue()/60.0)/1000;
      // currentReturnedValue = Math.round(currentReturnedValue*1000)/1000;
      LogAction.logInfo("shelly", "Poročana vrnjena energija je - {}", itemReportedReturned.state);
      // LogAction.logInfo("shelly", "Poročana pretvorjena vrnjena energija je - {}", currentReturnedValue);
    
      var itemReturned = items.getItem(itemName.slice(0,9).concat("Returned"));
      if (itemReturned == null) {
        LogAction.logWarn("shelly","Nisem našel Item za skupno porabo");
      } else {
        LogAction.logInfo("shelly","Item za skupno porabo pa je - {}", itemReturned.name);
        LogAction.logInfo("shelly","Njegova vrednost pa je - {}", itemReturned.state);
        if (itemReportedReturned.quantityState.lessThan(itemReturned.quantityState)) {
          LogAction.logInfo("shelly", "Števec je nižji kot zadnji poslan podatek, kar pomeni, da se je števec resetiral");
          itemReturned.postUpdate(itemReportedReturned.quantityState.add(itemReturned.quantityState));
        } else {
          LogAction.logInfo("shelly", "Števec je višji kot zadnji poslan podatek, kar pomeni, da se števec ni resetiral in samo shranim vrednost");
          itemReturned.postUpdate(itemReportedReturned.quantityState);
        }
        LogAction.logInfo("shelly", "Vrednost porabe po končanem procesiranju pa je - {}", itemReturned.state);
      }
    });
    LogAction.logInfo("shelly", "###########################Preračunal vrnjeno energijo na shelly napravah#########################");
},
  tags: ["Shelly", "Returned energy"],
  id: "shellyElectricityReturnedResetJS"
});