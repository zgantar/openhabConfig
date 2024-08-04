rules.JSRule({
  name: "Inverter sum of current production",
  description: "Calculating daily production up to this moment",
  triggers: [triggers.GenericCronTrigger("0 */5 * * * ?")],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("inverter", "#####################Preračunavam trenutno proizvodnjo#####################")

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("shelly", "Current time: " + h + ":" + min);

    var InverterLifetimeEnergyAC = items.getItem("InverterLifetimeEnergyAC");
    LogAction.logInfo("inverter", "Življenska proizvodnja je - {}", InverterLifetimeEnergyAC.quantityState.toString());

    var timeStartDay = x.withHour(0).withMinute(0).withSecond(0).withNano(0);
    var InverterCurrentDailyProduction = items.getItem("InverterCurrentDailyProduction");
    LogAction.logInfo("inverter", "Dnevna proizvodnja je - {}", InverterCurrentDailyProduction.quantityState.toString());
    var delta = InverterLifetimeEnergyAC.persistence.deltaBetween(timeStartDay, x).quantityState.subtract(InverterCurrentDailyProduction.quantityState);
    LogAction.logInfo("inverter", "Nova dnevna proizvodnja je - {}", delta.toString());
    LogAction.logInfo("inverter", "Nova dnevna proizvodnja je - {}", delta.float);
    if (delta.greaterThan("0 kWh")) {
      InverterCurrentDailyProduction.postUpdate(delta.add(InverterCurrentDailyProduction.quantityState));

      // var timeStartMonth = x.withDayOfMonth(1).withHour(0).withMinute(0).withSecond(0).withNano(0);
      var InverterCurrentMonthlyProduction = items.getItem("InverterCurrentMonthlyProduction");
      // LogAction.logInfo("inverter", "Mesečna proizvodnja je - {}", InverterCurrentMonthlyProduction.quantityState.toString());
      LogAction.logInfo("inverter", "Mesečna proizvodnja je - {}", items.getItem("InverterCurrentMonthlyProduction").quantityState.toString());
      var sumMonth = InverterCurrentMonthlyProduction.quantityState.add(delta);
      LogAction.logInfo("inverter", "Nova mesečna proizvodnja je - {}", sumMonth.toString());
      items.getItem("InverterCurrentMonthlyProduction").postUpdate(sumMonth);

      // var timeStartYear = x.withMonth(1).withDayOfMonth(1).withHour(0).withMinute(0).withSecond(0).withNano(0);
      // LogAction.logInfo("inverter", "Začetni čas je - {}", timeStartYear.toString());
      var InverterCurrentYearlyProduction = items.getItem("InverterCurrentYearlyProduction");
      LogAction.logInfo("inverter", "Letna proizvodnja je - {}", items.getItem("InverterCurrentYearlyProduction").quantityState.toString());
      var sumYear = InverterCurrentYearlyProduction.quantityState.add(delta);
      // if (sumYear == null) {
      //   //moram nastaviti na prvi zapis v bazi
      //   var timeStartLessThanYear = x.withMonth(7).withDayOfMonth(5).withHour(13).withMinute(48).withSecond(54).withNano(30);
      //   LogAction.logInfo("inverter", "Inverter ne dela še celo leto");
      //   sumYear = InverterLifetimeEnergyAC.persistence.deltaBetween(timeStartLessThanYear, x);
      //   LogAction.logInfo("inverter", "Zato je letna proizvodnja - {}", sumYear.quantityState.toString());
      // }
      LogAction.logInfo("inverter", "Nova letna proizvodnja je - {}", sumYear.toString());
      items.getItem("InverterCurrentYearlyProduction").postUpdate(sumYear);
    } else {
      LogAction.logInfo("inverter", "Ni bilo spremembe dnevne proizvodnje zato ne shranjujem vrednosti in ne preračunavam mesečne in letne proizvodnje");
    }

    LogAction.logInfo("inverter", "#####################Konec preračunavanja trenutne proizvodnje#####################")
  },
  tags: ["Inverter", "Production", "Electricity"],
  id: "inverterCurrentProductionSumJS"
});