rules.JSRule({
  name: "Boiler plug crone",
  description: "We need to change the state of the boiler plug according to the timer set depending on the part of the day",
  triggers: [triggers.GenericCronTrigger("0 */5 * * * ?")],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    var NotificationAction = Java.type("org.openhab.io.openhabcloud.NotificationAction");

    LogAction.logInfo("boiler", "#####################Checking if we need to change heater state#####################");

    // *************************************************
    // **************Function for turning ON the boiler
    function boilerOn() {
      var plugBoilerSwitch = items.getItem("plugBoilerSwitch");
      var boilerCheckPowerTimer;
      LogAction.logInfo("boiler", "Trenutno stanje stikala za bojler - " + plugBoilerSwitch.state);
    
      LogAction.logInfo("boiler", "Dobili klic za prižig bojlerja");
      if (items.getItem("Away").state == "OFF") {
        LogAction.logInfo("boiler", "Nismo na dopustu tako da prižigam bojler");
        if (plugBoilerSwitch.state == "OFF") {
          LogAction.logInfo("boiler", "Bojler še ni prižgan");
          plugBoilerSwitch.sendCommand("ON");
          boilerCheckPowerTimer = actions.ScriptExecution.createTimer(x.plusSeconds(60),() => {
            LogAction.logInfo("boiler", "###########################Zaganjam timer########################");
            LogAction.logInfo("boiler", "Preverjam vrednost odjema elektrike {}", items.getItem("plugBoilerPower").rawState);
            if (items.getItem("plugBoilerPower").rawSate < 100) {
              LogAction.logInfo("boiler", "Vrednost je manjša od 100 zato pošiljam sporočilo.");
              NotificationAction.sendBroadcastNotification("Po eni minuti od predvidenega začetka gretja vode, bojler še vedno ne porablja elektrike!");
            } else {
              LogAction.logInfo("boiler", "Vrednost je včja od 0 zato končujem timer.");
            }
            boilerCheckPowerTimer.cancel();
            boilerCheckPowerTimer = null;
            LogAction.logInfo("boiler", "###########################Timer končan########################");
          });
        } else {
          LogAction.logInfo("boiler", "Bojler je že prižgan");
        }
      } else {
        LogAction.logInfo("boiler", "Smo na dopustu, tako da preverjam ali je že minilo več kot 5 dni od zadnjega prižiga");
        if (plugBoilerSwitch.history.lastUpdate.isBefore(time.ZonedDateTime.now().minusDays(5))) {
          LogAction.logInfo("boiler", "Je že minilo več kot 5 dni od zadnjega prižiga zato prižigam");
          if (plugBoilerSwitch.state == "OFF") {
            plugBoilerSwitch.sendCommand("ON");
          }
        } else {
          LogAction.logInfo("boiler", "Še ni minilo več kot 5 dni od zadnjega prižiga zato ne prižigam");
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
    
      if (plugBoilerSwitch.state == "ON") {
        LogAction.logInfo("boiler", "Bojler je prižgan zato nadaljujem");
        // preverim ali je jutranji vžig
        if (h < 12) {
          LogAction.logInfo("boiler", "Je jutranje gretje zato izberem XStartSetter");
          hoursStartItem = items.getItem("HoursStartSetter");
          minutesStartItem = items.getItem("MinutesStartSetter");
        } else {
          LogAction.logInfo("boiler", "Je večerno gretje zato izberem XStartSetter2");
          hoursStartItem = items.getItem("HoursStartSetter2");
          minutesStartItem = items.getItem("MinutesStartSetter2");
        }
        minutes = parseInt(minutesStartItem.state);
        hours = parseInt(hoursStartItem.state);

        if (items.getItem("plugBoilerPower").state > 0) {
          LogAction.logInfo("boiler", "Ker bojler še vedno ogreva vodo, premaknem uro prižiga 10 min nazaj s trenutne: " + hours + ":" + minutes);
          if (minutes == 0) {
            LogAction.logInfo("boiler", "Ker so minute na 0 moram prestaviti uro");
            hours--;
            minutes = 50;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
          } if (minutes == 5) {
            LogAction.logInfo("boiler", "Ker so minute na 5 moram prestaviti uro");
            hours--;
            minutes = 55;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
          } else {
            minutes -= 10;
            minutesStartItem.postUpdate(minutes);
          }
          LogAction.logInfo("boiler", "Nastavil sem novo uro prižiga - " + hours + ":" + minutes);
        } else {
          LogAction.logInfo("boiler", "Ker bojler ne ogreva več vode, premaknem uro prižiga 5 min naprej s trenutne: " + hours + ":" + minutes);
          if (minutes == 55) {
            LogAction.logInfo("boiler", "Ker so minute na 55 moram prestaviti uro");
            hours++;
            minutes = 0;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
          } else {
            minutes += 5;
            minutesStartItem.postUpdate(minutes);
          }
          LogAction.logInfo("boiler", "Nastavil sem novo uro prižiga - " + hours + ":" + minutes);
        }
        plugBoilerSwitch.sendCommand("OFF");
      } else {
        LogAction.logInfo("boiler", "Stikalo je izklopljeno, tako da ni nič za narest.");
      }
    }

    var x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("boiler", "Current time: "+h+":"+min);
    var minDiff = 0;

    if (items.getItem("Away").state == null) items.getItem("Away").sendCommand("OFF");

    if (h < 12) {
      LogAction.logInfo("boiler", "Gledamo jutranji timer.")
      if (h == items.getItem("HoursStartSetter").state) {
        LogAction.logInfo("boiler", "1. ura za prižig je prava, preverjam še minute");
        minDiff = min - items.getItem("MinutesStartSetter").state;
        LogAction.logInfo("boiler", "Razlika je "+ minDiff+" ampak Setter je "+items.getItem("MinutesStartSetter").state);
        if ( minDiff < 0 ) {
          minDiff = minDiff*(-1);
        }
        if ( minDiff < 5 ) {
          LogAction.logInfo("boiler", "Prišel je čas "+items.getItem("HoursStartSetter").state+":"+items.getItem("MinutesStartSetter").state+" za vžig bojlerja, kličem start lambda");
          boilerOn();
        } else {
          LogAction.logInfo("boiler", "1. ura za prižig OK, minute ne.");
        }
      } if (h == items.getItem("HoursStopSetter").state) { //pregledujem prvi stop timer
        LogAction.logInfo("boiler", "1. ura za ugašanje je prava, preverjam še minute");
        minDiff = min - items.getItem("MinutesStopSetter").state;
        LogAction.logInfo("boiler", "Razlika je "+ minDiff+" ampak Setter je "+items.getItem("MinutesStopSetter").state);
        if ( minDiff < 0 ) {
          minDiff *= -1;
        }
        if ( minDiff < 5 ) {
          LogAction.logInfo("boiler", "Prišel je čas "+items.getItem("HoursStopSetter").state+":"+items.getItem("MinutesStopSetter").state+" za ugašanje bojlerja");
          boilerOff();
        } else {
          LogAction.logInfo("boiler", "1. ura za ugašanje OK, minute ne.");
        }
      }
    } else {
      LogAction.logInfo("boiler", "Gledamo popoldanski timer.")
      if (h == items.getItem("HoursStartSetter2").state) { //pregledujem drugi start timer
        LogAction.logInfo("boiler", "2. ura za prižig je prava, preverjam še minute");
        minDiff = min - items.getItem("MinutesStartSetter2").state;
        LogAction.logInfo("boiler", "Razlika je "+ minDiff+" ampak Setter je "+items.getItem("MinutesStartSetter2").state);
        if ( minDiff < 0 ) {
          minDiff = minDiff*(-1);
        }
        if ( minDiff < 5 ) {
          LogAction.logInfo("boiler", "Prišel je drugi čas "+items.getItem("HoursStartSetter2").state+":"+items.getItem("MinutesStartSetter2").state+" za vžig bojlerja.");
          boilerOn();
        } else {
          LogAction.logInfo("boiler", "2. ura za prižig OK, minute ne.")
        }
      } if (h == items.getItem("HoursStopSetter2").state) { //pregledujem drugi stop timer
        LogAction.logInfo("boiler", "2. ura za ugašanje je prava, preverjam še minute");
        minDiff = min - items.getItem("MinutesStopSetter2").state;
        LogAction.logInfo("boiler", "Razlika je "+ minDiff);
        if ( minDiff < 0 ) {
          minDiff = minDiff*(-1);
        }
        if ( minDiff < 5 ) {
          LogAction.logInfo("boiler", "Prišel je drugi čas "+items.getItem("HoursStopSetter2").state+":"+items.getItem("MinutesStopSetter2").state+" za ugašanje bojlerja");
          items.getItem("plugBoilerSwitch").sendCommand("OFF");
          // boilerOff();
          // rules.runRule("BoilerOff");
        } else {
          LogAction.logInfo("boiler", "2. ura za ugašanje OK, minute ne.")
        }
      }
    }
    LogAction.logInfo("boiler", "#####################End of heater state check######################################")
},
  tags: ["Plug", "Boiler Plug"],
  id: "boilerPlogCroneJS"
});