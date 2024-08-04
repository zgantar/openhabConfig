rules.JSRule({
  name: "Shelly shelly Consumption Reset",
  description: "Calculating shelly consumption for shelly meters since they reset counter when power cuts out",
  triggers: [triggers.GroupStateChangeTrigger('gConsumptionReset', null, null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    var PersistenceExtensions = Java.type("org.openhab.core.persistence.extensions.PersistenceExtensions");
    LogAction.logInfo("shelly", "#####################Začenjam preverjanje ali je bila ponastavitev števca porabljene električne energije#####################")

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("shelly", "Current time: " + h + ":" + min);

    var consumption;

    function nameEquals(value) {
      LogAction.logDebug("shelly", "Filtriram item porabe - " + value.name);
      LogAction.logDebug("shelly", "Item porabe substring - " + value.name.substring(4, 8) + ", Item za urno porabo substring - " + this.name.substring(4, 8));
      LogAction.logDebug("shelly", "Ali smo najdli kandidata - " + value.name.substring(4, 8).equalsIgnoreCase(this.name.substring(4, 8)));
      return value.name.substring(4, 8).equalsIgnoreCase(this.name.substring(4, 8));
    }

    function calculateCons(reportedConsumption) {
      LogAction.logInfo("shelly", "============Preverjam poročano količino porabljene energije za: {}, ki je tipa - {}, z vrednostjo - {} ===============", reportedConsumption.name, reportedConsumption.type , reportedConsumption.quantityState);
      consumption = items.getItem("gConsumption").members.filter(nameEquals, reportedConsumption)[0];
      if (consumption != null) {
        LogAction.logInfo("shelly", "Pa poglejmo kaj smo najdl po filtriranju: {}.", consumption.name);
        LogAction.logInfo("shelly", "In kakšna je vrednost: {}.", consumption.state);
        if (consumption.quantityState == "NULL" ||  consumption.quantityState == '') {
          // var qty = Quantity('0.0 k*W*h');
          consumption.postUpdate(0);
        } else {
          LogAction.logInfo("shelly", "Nisem nastavil vrednosti 0.");
        }
        // const previousState = reportedConsumption.persistence.previousState(true).numericState;
        // LogAction.logInfo("shelly","In kakšna je prejšnja vrednost: {}.", previousState);
        LogAction.logInfo("shelly","In kakšna je vrednost reportedConsumption: {}.", reportedConsumption.quantityState);
        if(reportedConsumption.quantityState.lessThan(consumption.quantityState)) {
          LogAction.logInfo("shelly", "Števec je nižji kot zadnji poslan podatek, kar pomeni, da se je števec resetiral");
          consumption.postUpdate(reportedConsumption.quantityState.add(consumption.quantityState));
        } else {
          LogAction.logInfo("shelly", "Števec je višji kot zadnji poslan podatek, kar pomeni, da se števec ni resetiral in samo shranim vrednost");
          consumption.postUpdate(reportedConsumption.quantityState);

        }
        // var delta = reportedConsumption.quantityState.subtract(consumption.quantityState);
        // LogAction.logInfo("shelly", "Delta pa je: {}.", delta);
        // if (delta.lessThan(0) < 0.0) {
        //   LogAction.logInfo("shelly", "Očitno je bila ponastavitev!");
        //   delta = reportedConsumption.rawState;
        // }
        // var sum = delta + consumption.rawState;
        // LogAction.logWarn("shelly", "Sum vrednost je - {}", sum);
        // consumption.postUpdate(sum);
        // LogAction.logWarn("shelly", "Nova vrednost je - {}", consumption.state);
      } else {
        LogAction.logWarn("shelly", "Nisem uspel najti poraba item za {}", reportedConsumption.name);
      }
    }

    LogAction.logInfo("shelly", "Podatek je prišel za meter {}.", event.itemName);
    var triggeringItem = items.getItem(event.itemName);
    LogAction.logInfo("shelly", "In to je item {}.", triggeringItem);

    calculateCons(triggeringItem);
    LogAction.logDebug("shelly", "#####################Končal preverjanje ali je bila ponastavitev števca porabljene električne energije#########################")
  },
  tags: ["shelly", "Consumption"],
  id: "shellyElectricityConsumptionResetJS"
});