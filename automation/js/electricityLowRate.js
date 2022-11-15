rules.JSRule({
  name: "Electricity low rate setter",
  description: "Setting low rate for electricity price",
  triggers: [triggers.GenericCronTrigger('0 0 22 ? * * *')],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("electricity","#####################Nastavljam nizko ceno elektrike##########################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("electricity","Current time: "+h+":"+min);
    
    LogAction.logInfo("electricity","Danes je {}. dan v tednu.",time.ZonedDateTime.now().dayOfWeek().value());
    if (x.dayOfWeek().value() < 6) {
      items.getItem("LowElectricity").sendCommand("ON");
      LogAction.logInfo("electricity", "Ker je med tednom, je to začetek poceni elektrike - " + items.getItem("LowElectricity").state);
    } else {
      LogAction.logInfo("electricity", "Ker je konec tedna, je že itak poceni elektrika - " + items.getItem("LowElectricity").state);
    }
    LogAction.logInfo("electricity","#####################Nizka cena elektrike nastavljena#########################");
},
  tags: ["Electricity", "Price"],
  id: "electricityLowRateJS"
});