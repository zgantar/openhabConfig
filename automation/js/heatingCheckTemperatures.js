rules.JSRule({
  name: "Heating Check Temperatures",
  description: "We need to check temperatures in every room and heat accordingly",
  triggers: [triggers.GenericCronTrigger("0 1/5 * * * ?")],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    // var logger = Java.type('org.slf4j.LoggerFactory').getLogger('org.openhab.rule.' + ctx.ruleUID);

    const gTemp = items.getItem("gTemp");
    var startHeating1;
    var stopHeating;
    const Away = items.getItem ("Away");
    const LowElectricity = items.getItem("LowElectricity");
    const Override = items.getItem("Override");
    // const LogOgrevanje = items.getItem("LogOgrevanje");
    // const ManOgrevanje = items.getItem("ManOgrevanje");

    function filterTempValues() {      
      LogAction.logInfo("heating", "Preverjam ali je potrebno filtrirati vrednosti");
      gTemp.members.forEach(loopItem => {
        LogAction.logInfo("heating", "Preverjam za sobo - " + loopItem.name);
        var temp = 18.0
        if (loopItem.state != null) temp = parseFloat(loopItem.state);
        if ((temp <= 10.0 || temp >= 35.0) && !loopItem.name.includes("Lopa")) {
          temp = loopItem.persistence.averageSince(time.ZonedDateTime.now().minusHours(2));
          LogAction.logInfo("heating", "!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Filtracija izvedena, nova vrednost za {} je {} !!!!!!!!!!!!!!!!!!!!!!!!!!!", loopItem.name, temp);
          loopItem.postUpdate(temp);
        }
        LogAction.logInfo("heating", "Ni potrebno filtrirati");
        // loopItem.persist;
      });
    }

    function checkTrend (tempItem, minutes) {      
      LogAction.logInfo("heating", "Preverjam temperaturni trend za {}", tempItem.name);
      var temp = tempItem.rawState;
      var delta = tempItem.persistence.deltaSince(time.ZonedDateTime.now().minusMinutes(60));
      LogAction.logInfo("heating", "Delta je {}", delta);
      var deviation = delta/60;
      LogAction.logInfo("heating", "Deviation je {}", deviation);
      var prediction = deviation * minutes + temp;
      LogAction.logInfo("heating", "Prediction je {}", prediction);
      return Math.round(prediction*1000)/1000;
    }

    LogAction.logInfo("heating", "**********************Preverjamo temperature**************************");
    // startHeating1 = false;
    // stopHeating = false;
    // LogAction.logInfo("heating", "Nastvail sem startHeating1 - {} in stopHeating - {}", startHeating1, stopHeating);
    if (Away.state == null) Away.sendCommand("OFF");
    if (LowElectricity.state == null) LowElectricity.sendCommand("OFF");
    LogAction.logInfo("heating", "Pogledam spremenljivki za if: Away - {}, LowElectricity - {}", Away.state, LowElectricity.state);
    // filterTempValues();
    gTemp.members.forEach(tempItem => {
      const now = time.ZonedDateTime.now();
      var name = tempItem.name.substring(4);
      LogAction.logInfo("heating", "###################Preverjam sobo {}", name);
      
      const setItem = items.getItem("gSet").members.filter(item => item.name.includes(name))[0];
      const difItem = items.getItem("gDif").members.filter(item => item.name.includes(name))[0];
      const logValveItem = items.getItem("gLog").members.filter(item => item.name.includes(name))[0];
      const manValveItem = items.getItem("gMan").members.filter(item => item.name.includes(name))[0];
      
      if (setItem != null && logValveItem != null && difItem != null && manValveItem != null) {
        LogAction.logInfo("heating", "Dobil setter {}", setItem.name);
        LogAction.logInfo("heating", "Dobil differ {}", difItem.name);
        LogAction.logInfo("heating", "Našel sem ventil {}, stanje pa je {}", logValveItem.name, logValveItem.state);
        var currentTemp = 0.0;
        if (tempItem.state != null) currentTemp = tempItem.rawState;
        var mejnaTemp = 0.0;
        var calcMejnaTemp = 0.0;
        var timeTillStop = 0;
        if (setItem.state != null) mejnaTemp = setItem.rawState;
        LogAction.logInfo("heating", "Nastavljena temperatura za sobo {} je {}, mejna pa {}", name, setItem.state, mejnaTemp);
        var predTemp = 0.0;
        if (Away.state == "ON" && LowElectricity.state == "OFF") {
          mejnaTemp -= 3;
          LogAction.logInfo("heating", "Ker ni nobenega doma in ni poceni elektrika je mejna temperatura zmanjšana za 3 {} ", mejnaTemp);
        } else if (Away.state == "ON" && LowElectricity.state == "ON") {
          mejnaTemp -= 2
          LogAction.logInfo("heating", "Ker ni nobenega doma in je poceni elektrika je mejna temperatura zmanjšana za 2 {} ", mejnaTemp);
        } else if (LowElectricity.state == "ON") {
          LogAction.logInfo("heating", "Ker je nizka cena elektrike preverjam temperaturni trend");
          if (now.hour() < 6 && now.dayOfWeek().value() < 6) {
            LogAction.logInfo("heating", "Zgodaj zjutraj med tednom");
            timeTillStop = (time.ZonedDateTime.now().withHour(6).withMinute(00).toEpochSecond() - now.toEpochSecond())/60;
            LogAction.logInfo("heating", "Izračun minut je {}", timeTillStop);
            // timeTillStop = MINUTES.between(now, now.withHour(6).withMinute(00));
            predTemp = checkTrend(tempItem, timeTillStop);
            LogAction.logInfo("heating", "Pričakovana temperatura za sobo {} čez {} minut je {}", name, timeTillStop, predTemp);
            if (timeTillStop <= 240) {
              if (predTemp < mejnaTemp) calcMejnaTemp = mejnaTemp;
              else if (logValveItem.state == "ON" && predTemp < mejnaTemp + 0.3) calcMejnaTemp = mejnaTemp + 0.3;
              else if (logValveItem.state == "ON" && currentTemp < mejnaTemp + 0.3) mejnaTemp += 0.3;
            } else mejnaTemp -= 0.5;
          } else if (now.dayOfWeek().value() < 6) {
            LogAction.logInfo("heating", "Zvečer po 22. med tednom");
            mejnaTemp -= 0.5;
          //weekend
          } else if (now.dayOfWeek().value() >= 6) {
            LogAction.logInfo("heating", "Konec tedna");
            if (currentTemp < mejnaTemp - 0.1) mejnaTemp -= 0.1;
            else if (logValveItem.state == "ON" && currentTemp <= mejnaTemp + 0.1) mejnaTemp += 0.1;
          } //calculating the differences to predicted temp
        //High electricity price
        } else {
          LogAction.logInfo("heating", "Delovni dan in mejnaTemp je {}", mejnaTemp);
          if (now.hour() == 6) mejnaTemp -= 0.3;
          else if (now.hour() < 18) {
            LogAction.logInfo("heating", "Pred 18. uro");
            LogAction.logInfo("heating", "mejnaTemp je {}", mejnaTemp)
            var timeTill18 = (time.ZonedDateTime.now().withHour(18).withMinute(00).toEpochSecond() - now.toEpochSecond())/60;
            predTemp = checkTrend(tempItem, timeTill18);
            LogAction.logInfo("heating", "Pričakovana temperatura za sobo {} čez {} minut je {}", name, timeTill18, predTemp);
            if (timeTill18 <= 120 && predTemp < mejnaTemp) {
              calcMejnaTemp = mejnaTemp;
            } else if (logValveItem.state == "ON" && predTemp < mejnaTemp) {
              calcMejnaTemp = mejnaTemp + 0.1;
            } else if (logValveItem.state == "ON" && currentTemp < mejnaTemp) {
              mejnaTemp += 0.1;
            } else {
              mejnaTemp -= 0.3;
            }
          } else {
            LogAction.logInfo("heating", "Po 18. uri");
            mejnaTemp -= 0.3;
          }
          LogAction.logInfo("heating", "mejnaTemp je {}", mejnaTemp);
        }
        //ending with trends and looking at the hard values
        LogAction.logInfo("heating", "calcMejnaTemp je {}", calcMejnaTemp);
        LogAction.logInfo("heating", "mejnaTemp je {}", mejnaTemp);
        var difTemp = 0.0;
        if (calcMejnaTemp == 0) {
          difTemp = currentTemp - mejnaTemp;
          LogAction.logInfo("heating", "Običajni dif je {}", difTemp);
        } else {
          difTemp = predTemp - calcMejnaTemp;
          LogAction.logInfo("heating", "Prediktivni dif je {}", difTemp);
        }
        difTemp = Math.round(difTemp*1000)/1000;
        difItem.postUpdate(difTemp);
        LogAction.logInfo("heating", "Temperatura sobe je {}", currentTemp);
        LogAction.logInfo("heating", "Temperatura sobe bi morala biti {}, predvidena pa {}", mejnaTemp, predTemp);
        if (difTemp <= 0) {
          LogAction.logInfo("heating", "Temperatura je PRENIZKA");
          if (Override.state == "OFF") {
            if (logValveItem.state == "OFF") {
              logValveItem.sendCommand("ON");
              LogAction.logInfo("heating", "Ker je trenutno ventil zaprt, izdam ukaz za odprtje logičnega stikala {}", logValveItem.name);
            }
          } else {
            if (manValveItem.state == "ON") {
              logValveItem.sendCommand("ON");
              LogAction.logInfo("heating", "Ker je trenutno ventil zaprt in je ročno ogrevanje in ročni ventil je odprt, izdam ukaz za odprtje logičnega ventila {}", logValveItem.name);
            }
          }
        } else {
          LogAction.logInfo("heating", "Temperatura je PREVISOKA");
          if (logValveItem.state == "ON") {
            logValveItem.sendCommand("OFF");
            LogAction.logInfo("heating", "Ker je trenutno ventil odprt, izdam ukaz za zaprtje logičnega stikala {}", logValveItem.name);
          }
        }
        LogAction.logInfo("heating", "Preverjam ali kaj sprememb pri temperaturi, {}, {}", tempItem.state, tempItem.persistence.averageSince(now.minusHours(2)));
        if ( tempItem.state == tempItem.persistence.averageSince(now.minusHours(2))) {
          logWarn("heating", "Zadnja sprememba temperature za {} je bila shranjena {}, kar je zelo čudno. Preverjam še vlažnost", name, tempItem.persistence.lastUpdate);
          var humItem = gHum.members.filter(humer => humer.name === name)[0];
          if (humItem !== null && humItem.state == humItem.persistence.averageSince(now.minusHours(1))) {
            logWarn("heating", "Zadnja sprememba vlažnosti je bila shranjena {}, kar je zelo čudno. Prožim alarm", humItem.persistence.lastUpdate);
            // actions.NotificationAction.sendBroadcastNotification(m)
            // sendNotification("Ob "+ now +" sta temperatura in vlažnost v "+ name +" enaka kot eno uro nazaj, kar kaže na morebitno napako! PREVERI!!!!")
          }
        }
      } else {
        LogAction.logInfo("heating", "En izmed potrebnih itemov je null: setItem - {}; logValveItem - {}; difItem - {}; manValveItem - {}", setItem, logValveItem, difItem, manValveItem);  
      }
      LogAction.logInfo("heating", "###################Konec preverjanja sobe {}", name);
    });
    // LogAction.logInfo("heating", "startHeating1 je {}, LogOgrevanje je {}, Log pa je {}", startHeating1, LogOgrevanje.state, items.getItem("gLog").state);
    // LogAction.logInfo("heating", "ManOgrevanje je {}, Man pa je {}", ManOgrevanje.state, items.getItem("gMan").state);
    // if (startHeating1 == true) LogOgrevanje.sendCommand("ON");
    // if (stopHeating == true) {
      // LogAction.logInfo("heating", "stopHeating je {} in pošljem OFF na LogOgrevanje");
      // if (LogOgrevanje.state == "ON") {
        // LogOgrevanje.sendCommand("OFF");
        // LogAction.logInfo("heating", "LogOgrevanje nastavim na OFF");
      // } else {
        // LogAction.logWarn("heating", "LogOgrevanje je že nastavljeno na OFF zato ne naredim nič!");
      // }
    // }
    if (items.getItem("gLog").state == "ON" && items.getItem("Heating").state == "OFF") {
      LogAction.logInfo("heating", "Ker smo nastavili vsaj en logični ventil za ogrevanje in peč ni prižgana, prižigam peč");
      items.getItem("Heating").sendCommand("ON");
    } else if (items.getItem("gLog").state == "OFF" && items.getItem("Heating").state == "ON") {
      LogAction.logInfo("heating", "Ker smo vse logične ventile zaprli in je peč prižgana, ugašam peč");
      items.getItem("Heating").sendCommand("OFF");
    }
    LogAction.logInfo("heating", "**********************Konec preverjanja temperatur********************");
  },
  tags: ["Heating", "Temperature"],
  id: "heatingCheckTemperaturesJS"
});