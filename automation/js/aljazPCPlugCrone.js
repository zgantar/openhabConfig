rules.JSRule({
  name: "Boiler plug crone",
  description: "We need to change the state of the boiler plug according to the timer set depending on the part of the day",
  triggers: [triggers.GenericCronTrigger("0 */5 * * * ?")],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");

    LogAction.logDebug("boiler", "#####################Checking if we need to change heater state#####################");

    // *************************************************
    // **************Function for turning ON the boiler
    function boilerOn() {
      var plugBoilerSwitch = items.getItem("plugBoilerSwitch");
      var boilerCheckPowerTimer;
      LogAction.logDebug("boiler", "Trenutno stanje stikala za bojler - " + plugBoilerSwitch.state);
    
      LogAction.logDebug("boiler", "Dobili klic za prižig bojlerja");
      if (items.getItem("Away").state != "ON") {
        LogAction.logDebug("boiler", "Nismo na dopustu tako da prižigam bojler");
        if (plugBoilerSwitch.state != "ON") {  
          LogAction.logDebug("boiler", "Bojler še ni prižgan");
          plugBoilerSwitch.sendCommand("ON");
          boilerCheckPowerTimer = actions.ScriptExecution.createTimer(x.plusSeconds(60),() => {
            LogAction.logDebug("boiler", "###########################Zaganjam timer########################");
            LogAction.logDebug("boiler", "Preverjam vrednost odjema elektrike {}", items.getItem("plugBoilerPower").rawState);
            if (items.getItem("plugBoilerPower").rawSate < 100) {
              LogAction.logDebug("boiler", "Vrednost je manjša od 100 zato pošiljam sporočilo.");
              NotificationAction.sendBroadcastNotification("Po eni minuti od predvidenega začetka gretja vode, bojler še vedno ne porablja elektrike!");
            } else {
              LogAction.logDebug("boiler", "Vrednost je včja od 0 zato končujem timer.");
            }
            boilerCheckPowerTimer.cancel();
            boilerCheckPowerTimer = null;
            LogAction.logDebug("boiler", "###########################Timer končan########################");
          });
        } else {
          NotificationAction.sendBroadcastNotification("Bojler je že prižgan čeprav bi se šele moral prižgati!");
          LogAction.logDebug("boiler", "Bojler je že prižgan");
        }
      } else {
        LogAction.logDebug("boiler", "Smo na dopustu, tako da preverjam ali je že minilo več kot 5 dni od zadnjega prižiga");
        if (plugBoilerSwitch.history.lastUpdate.isBefore(time.ZonedDateTime.now().minusDays(5))) {
          LogAction.logDebug("boiler", "Je že minilo več kot 5 dni od zadnjega prižiga zato prižigam");
          if (plugBoilerSwitch.state == "OFF") {
            plugBoilerSwitch.sendCommand("ON");
          }
        } else {
          LogAction.logDebug("boiler", "Še ni minilo več kot 5 dni od zadnjega prižiga zato ne prižigam");
        }
      }
    }

    // *************************************************
    // **************Function for turning OFF the boiler
    function boilerOff() {
      var plugBoilerSwitch = items.getItem("plugBoilerSwitch");
    
      var hoursStartItem;
      var minutesStartItem;
      //var hoursStopItem;
      var minutes = 0;
      var hours = 0;
    
      if (plugBoilerSwitch.state != "OFF") {
        LogAction.logDebug("boiler", "Bojler je prižgan zato nadaljujem");
        // preverim ali je jutranji vžig
        if (h < 12) {
          LogAction.logDebug("boiler", "Je jutranje gretje zato izberem XStartSetter");
          hoursStartItem = items.getItem("HoursStartSetter");
          minutesStartItem = items.getItem("MinutesStartSetter");
        } else {
          LogAction.logDebug("boiler", "Je večerno gretje zato izberem XStartSetter2");
          hoursStartItem = items.getItem("HoursStartSetter2");
          minutesStartItem = items.getItem("MinutesStartSetter2");
        }
        minutes = parseInt(minutesStartItem.state);
        hours = parseInt(hoursStartItem.state);

        if (items.getItem("plugBoilerPower").state > 0) {
          LogAction.logDebug("boiler", "Ker bojler še vedno ogreva vodo, premaknem uro prižiga 10 min nazaj s trenutne: " + hours + ":" + minutes);
          if (minutes == 0) {
            LogAction.logDebug("boiler", "Ker so minute na 0 moram prestaviti uro");
            hours--;
            minutes = 50;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
          } if (minutes == 5) {
            LogAction.logDebug("boiler", "Ker so minute na 5 moram prestaviti uro");
            hours--;
            minutes = 55;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
          } else {
            minutes -= 10;
            minutesStartItem.postUpdate(minutes);
          }
          LogAction.logDebug("boiler", "Nastavil sem novo uro prižiga - " + hours + ":" + minutes);
        } else {
          LogAction.logDebug("boiler", "Ker bojler ne ogreva več vode, premaknem uro prižiga 5 min naprej s trenutne: " + hours + ":" + minutes);
          if (minutes == 55) {
            LogAction.logDebug("boiler", "Ker so minute na 55 moram prestaviti uro");
            hours++;
            minutes = 0;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
          } else {
            minutes += 5;
            minutesStartItem.postUpdate(minutes);
          }
          LogAction.logDebug("boiler", "Nastavil sem novo uro prižiga - " + hours + ":" + minutes);
        }
        plugBoilerSwitch.sendCommand("OFF");
      } else {
        NotificationAction.sendBroadcastNotification("Bojler je že ugasnjen čeprav bi še moral biti prižgan!");
        LogAction.logDebug("boiler", "Stikalo je izklopljeno, tako da ni nič za narest.");
      }
    }

    var x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logDebug("boiler", "Current time: "+h+":"+min);
    var minDiff = 0;

    if (items.getItem("Away").state == null) items.getItem("Away").sendCommand("OFF");

    if (h < 12) {
      LogAction.logDebug("boiler", "Gledamo jutranji timer.")
      if (h == items.getItem("HoursStartSetter").state) {
        LogAction.logDebug("boiler", "1. ura za prižig je prava, preverjam še minute");
        minDiff = min - items.getItem("MinutesStartSetter").state;
        LogAction.logDebug("boiler", "Razlika je "+ minDiff+" ampak Setter je "+items.getItem("MinutesStartSetter").state);
        if ( minDiff < 0 ) {
          minDiff = minDiff*(-1);
        }
        if ( minDiff < 5 ) {
          LogAction.logDebug("boiler", "Prišel je čas "+items.getItem("HoursStartSetter").state+":"+items.getItem("MinutesStartSetter").state+" za vžig bojlerja, kličem start lambda");
          boilerOn();
        } else {
          LogAction.logDebug("boiler", "1. ura za prižig OK, minute ne.");
        }
      } if (h == items.getItem("HoursStopSetter").state) { //pregledujem prvi stop timer
        LogAction.logDebug("boiler", "1. ura za ugašanje je prava, preverjam še minute");
        minDiff = min - items.getItem("MinutesStopSetter").state;
        LogAction.logDebug("boiler", "Razlika je "+ minDiff+" ampak Setter je "+items.getItem("MinutesStopSetter").state);
        if ( minDiff < 0 ) {
          minDiff *= -1;
        }
        if ( minDiff < 5 ) {
          LogAction.logDebug("boiler", "Prišel je čas "+items.getItem("HoursStopSetter").state+":"+items.getItem("MinutesStopSetter").state+" za ugašanje bojlerja");
          boilerOff();
        } else {
          LogAction.logDebug("boiler", "1. ura za ugašanje OK, minute ne.");
        }
      }
    } else {
      LogAction.logDebug("boiler", "Gledamo popoldanski timer.")
      if (h == items.getItem("HoursStartSetter2").state) { //pregledujem drugi start timer
        LogAction.logDebug("boiler", "2. ura za prižig je prava, preverjam še minute");
        minDiff = min - items.getItem("MinutesStartSetter2").state;
        LogAction.logDebug("boiler", "Razlika je "+ minDiff+" ampak Setter je "+items.getItem("MinutesStartSetter2").state);
        if ( minDiff < 0 ) {
          minDiff = minDiff*(-1);
        }
        if ( minDiff < 5 ) {
          LogAction.logDebug("boiler", "Prišel je drugi čas "+items.getItem("HoursStartSetter2").state+":"+items.getItem("MinutesStartSetter2").state+" za vžig bojlerja.");
          boilerOn();
        } else {
          LogAction.logDebug("boiler", "2. ura za prižig OK, minute ne.")
        }
      } if (h == items.getItem("HoursStopSetter2").state) { //pregledujem drugi stop timer
        LogAction.logDebug("boiler", "2. ura za ugašanje je prava, preverjam še minute");
        minDiff = min - items.getItem("MinutesStopSetter2").state;
        LogAction.logDebug("boiler", "Razlika je "+ minDiff);
        if ( minDiff < 0 ) {
          minDiff = minDiff*(-1);
        }
        if ( minDiff < 5 ) {
          LogAction.logDebug("boiler", "Prišel je drugi čas "+items.getItem("HoursStopSetter2").state+":"+items.getItem("MinutesStopSetter2").state+" za ugašanje bojlerja");
          items.getItem("plugBoilerSwitch").sendCommand("OFF");
          // boilerOff();
          // rules.runRule("BoilerOff");
        } else {
          LogAction.logDebug("boiler", "2. ura za ugašanje OK, minute ne.")
        }
      }
    }
    LogAction.logDebug("boiler", "#####################End of heater state check######################################")
},
  tags: ["Plug", "Boiler Plug"],
  id: "boilerPlogCroneJS"
});