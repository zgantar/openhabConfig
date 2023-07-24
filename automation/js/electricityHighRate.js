rules.JSRule({
  name: "Electricity high rate setter",
  description: "Setting high rate for electricity price",
  triggers: [triggers.GenericCronTrigger('0 0 6 ? * * *')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("electricity","#####################Nastavljam visoko ceno elektrike##########################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("electricity","Current time: "+h+":"+min);
    
    if (x.dayOfWeek().value() < 6) {
      items.getItem("LowElectricity").sendCommand("OFF");
      LogAction.logInfo("electricity","Ker je med tednom, je to konec poceni elektrike - " + items.getItem("LowElectricity").state);
    } else {
      LogAction.logInfo("electricity","Ker je konec tedna, ostane poceni elektrika - " + items.getItem("LowElectricity").state);
    }
    
    LogAction.logInfo("electricity","#####################Visoka cena elektrike nastavljena#########################");
},
  tags: ["Electricity", "Price"],
  id: "electricityHighRateJS"
});