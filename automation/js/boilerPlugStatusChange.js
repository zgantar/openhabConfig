rules.JSRule({
  name: "Boiler plug status change",
  description: "We need to check the state of the boiler plug when coming back online",
  triggers: [triggers.ThingStatusChangeTrigger('zwave:shenzhen_coolcampwrplug_00_000:zwaveStick:boilerPlug',null,null)], //'ONLINE','OFFLINE'
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");

    LogAction.logDebug("boiler", "#####################Boiler plug came back online so checking if we need to change state#####################");
    var x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logDebug("boiler", "Current time: "+h+":"+min);
    var turnOn = false;

    LogAction.logDebug("boiler", "Katera sprememba statusa je sprožila procesiranje - {}.", event.status);
    // if (event.status == "ONLINE") {
      if (h < 12) {
        LogAction.logDebug("boiler", "Gledamo jutranji timer.")
        if (h >= items.getItem("HoursStartSetter").state) {
          if (min >= items.getItem("MinutesStartSetter").state || (min < items.getItem("MinutesStartSetter").state && h > items.getItem("HoursStartSetter").state)) {
            LogAction.logDebug("boiler", "Čas je po uri za prižig, preverjam uro ugašanja");
            if (h <= items.getItem("HoursStopSetter").state) {
              if (min <= items.getItem("MinutesStopSetter").state) {
                LogAction.logDebug("boiler", "Čas je pravi za prižig bojlerja zato ga prižgem");
                turnOn = true;
                if (items.getItem("plugBoilerSwitch").state == "OFF") {
                  items.getItem("plugBoilerSwitch").sendCommand("ON");
                } else {
                  LogAction.logWarn("boiler", "Boiler je že prižgan zato ne naredim nič");
                }
              }
            }
          }
        }
        if (!turnOn) {
          LogAction.logDebug("boiler", "Čas ni pravi za prižig zato ugašam bojler.");
          if (items.getItem("plugBoilerSwitch").state == "ON") {
            items.getItem("plugBoilerSwitch").sendCommand("OFF");
          } else {
            LogAction.logWarn("boiler", "Boiler je že ugasnjen zato ne naredim nič");
          }
        }
      } else {
        LogAction.logDebug("boiler", "Gledamo večerni timer.")
        if (h >= items.getItem("HoursStartSetter2").state) {
          if (min >= items.getItem("MinutesStartSetter2").state || (min < items.getItem("MinutesStartSetter2").state && h > items.getItem("HoursStartSetter2").state)) {
            LogAction.logDebug("boiler", "Čas je po uri za prižig, preverjam uro ugašanja");
            if (h <= items.getItem("HoursStopSetter2").state) {
              if (min <= items.getItem("MinutesStopSetter2").state) {
                LogAction.logDebug("boiler", "Čas je pravi za prižig bojlerja zato ga prižgem");
                turnOn = true;
                if (items.getItem("plugBoilerSwitch").state == "OFF") {
                  items.getItem("plugBoilerSwitch").sendCommand("ON");
                } else {
                  LogAction.logWarn("boiler", "Boiler je že prižgan zato ne naredim nič");
                }
              }
            }
          }
        } 
        if (!turnOn) {
          LogAction.logDebug("boiler", "Čas ni pravi za prižig zato ugašam bojler.");
          if (items.getItem("plugBoilerSwitch").state == "ON") {
            items.getItem("plugBoilerSwitch").sendCommand("OFF");
          } else {
            LogAction.logWarn("boiler", "Boiler je že ugasnjen zato ne naredim nič");
          }
        }
      }
    // }
    LogAction.logDebug("boiler", "#####################Finished checking boiler plug state after it came back online###########################");
},
  tags: ["Plug", "Boiler Plug"],
  id: "boilerPlugStatusChangeJS"
});