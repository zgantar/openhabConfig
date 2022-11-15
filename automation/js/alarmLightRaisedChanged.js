rules.JSRule({
  name: "Alarm Light Raised Changed JS",
  description: "We need to change the state of the alarm light according to the AlarmLightRaised item state",
  triggers: [triggers.ItemStateChangeTrigger('AlarmLightRaised',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    
    LogAction.logInfo("alarm", "###########################Preverjam spremembo na AlarmLightRaised#################################");
    
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("alarm", "Current time: " + h + ":" + min);

    var AlarmLightRaised = items.getItem("AlarmLightRaised");
    // const runtime = require("runtime");
    // var hsbType = runtime.HSBType;

    if (AlarmLightRaised.state == "ON") {
      LogAction.logInfo("alarm", "Dobil obvestilo za prižgati luč - " + AlarmLightRaised.state)
      items.getItem("xiaomiMiGatewayColor").sendCommand("0,100,20");
      items.getItem("xiaomiMiGatewayLightSwitch").sendCommand("ON");
    } else {
      LogAction.logInfo("alarm", "Dobil obvestilo za ugasniti luč - " + AlarmLightRaised.state)
      items.getItem("xiaomiMiGatewayLightSwitch").sendCommand("OFF");
    }
  
    LogAction.logInfo("alarm", "###########################Konec preverjanja spremembe na AlarmLightRaised#########################");
},
  tags: ["Alarm", "Alarm light"],
  id: "alarmLightRaisedChangedJS"
});