rules.JSRule({
  name: "Generator for AWTRIX",
  description: "This rule generates all the messages that get to be sent to AWTRIX",
  triggers: [triggers.GenericCronTrigger("0 */5 * * * ?")],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("awtrix", "#####################Awtrix Mqtt pošiljanje sporočil#########################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("awtrix", "Current time: " + h + ":" + min);


    //temperatura
    var arsoNapovedTemp = items.getItem("arsoNapovedTemp").rawState;
    var gOutTemp = items.getItem("gOutTemp").rawState;
    var avgOutTemp = Math.ceil(items.getItem("gOutsideTempAvg").rawState * 100) / 100;
    var shownTemp;

    if (arsoNapovedTemp == "UNDEF" || gOutTemp == "UNDEF") {
      shownTemp = avgOutTemp;
    } else if (Math.abs(gOutTemp - arsoNapovedTemp) > 1) {
      shownTemp = arsoNapovedTemp;
    } else {
      shownTemp = avgOutTemp;
    }
    var tempString = "{ \"icon\":2422, \"text\":\"" + items.getItem("tempKuhinja").rawState + "/" + shownTemp + "\"}";
    actions.get("mqtt", "mqtt:broker:mosquitto").publishMQTT("awtrix/custom/temp", tempString);

    //vlažnost
    // var arsoNapovedHum = items.getItem("arsoNapovedHum").rawState;
    // var gOutHum = items.getItem("gOutHum").rawState;
    // var avgOutHum = Math.ceil(items.getItem("gOutsideHumAvg").rawState*100)/100;
    // var shownHum;

    // if (arsoNapovedHum == "UNDEF" || gOutHum == "UNDEF") {
    //   shownHum = avgOutHum;
    // } else if (Math.abs(gOutHum - arsoNapovedHum) > 1) {
    //   shownHum = arsoNapovedHum;
    // } else {
    //   shownHum = avgOutHum;
    // }
    // var humString = "{ \"icon\":2423, \"text\":\"" + items.getItem("humKuhinja").rawState + "/" +shownHum+ "\"}";
    // actions.get("mqtt", "mqtt:broker:mosquitto").publishMQTT("awtrix/custom/hum",humString);

    //napoved
    var next = items.getItem("next").state;
    var nextPart = items.getItem("nextPart").state;
    var tempNext = items.getItem("tempNext").state;
    var forecastNext = items.getItem("forecastNext").state;
    var weatherPojavNextTxt = items.getItem("weatherPojavNextTxt").state;
    var weatherPojavNextIcon = items.getItem("weatherPojavNextIcon").state;
    var afterNext = items.getItem("afterNext").state;
    var afterNextPart = items.getItem("afterNextPart").state;
    var tempAfterNext = items.getItem("tempAfterNext").state;
    var forecastAfterNext = items.getItem("forecastAfterNext").state;
    var weatherPojavAfterNextTxt = items.getItem("weatherPojavAfterNextTxt").state;
    var weatherPojavAfterNextIcon = items.getItem("weatherPojavAfterNextIcon").state;
    var third = items.getItem("third").state;
    var thirdPart = items.getItem("thirdPart").state;
    var tempThird = items.getItem("tempThird").state;
    var forecastThird = items.getItem("forecastThird").state;
    var weatherPojavThirdTxt = items.getItem("weatherPojavThirdTxt").state;
    var weatherPojavThirdIcon = items.getItem("weatherPojavThirdIcon").state;

    generateString(1, next, nextPart, forecastNext, tempNext, weatherPojavNextTxt, weatherPojavNextIcon);
    generateString(2, afterNext, afterNextPart, forecastAfterNext, tempAfterNext, weatherPojavAfterNextTxt, weatherPojavAfterNextIcon);
    generateString(3, third, thirdPart, forecastThird, tempThird, weatherPojavThirdTxt, weatherPojavThirdIcon);

    function generateString(run, day, partOfDay, inpForecast, inpTemp, weatherTypeTxt, weatherTypeIcon) {
      var day, forecast, forecastType, forecastString, iconForecast, iconType, forecastType, icon, address;
      LogAction.logInfo("awtrix", "run - {}, day - {}, partOfDay - {}, inpForecast - {}, inpTemp - {}, weatherTypeTxt - {}, weatherTypeIcon - {}", run, day, partOfDay, inpForecast, inpTemp, weatherTypeTxt, weatherTypeIcon);

      LogAction.logInfo("awtrix", "Prvi podatek je {}", day);
      if (day.substring(day.length - 2, day.length).equalsIgnoreCase("ST")) {
        day = day.substring(0, day.length - 5);
      } else {
        day = day.substring(0, day.length - 4);
      }
      if (day.includes("Četrtek")) day = "Cetrtek";
      LogAction.logInfo("awtrix", "Dan je {}", day);

      //ikona
      LogAction.logInfo("awtrix", "Vremenski pojav ikona podatek {} in pojav tekst podatek {}", weatherTypeIcon, weatherTypeTxt);
      switch (weatherTypeIcon) {
        case "DZ":
          forecastType = "-drizle";
          iconType = "2286";
          break;
        case "RASN":
          forecastType = "-dez s snegom";
          iconType = "160";
          break;
        case "RA":
          forecastType = "-dez";
          iconType = "2284";
          break;
        case "SN":
          forecastType = "-sneg";
          iconType = "2289";
          break;
        case "TS":
          forecastType = "-nevihte";
          iconType = "11428";
          break;
        case "TSGR":
          forecastType = "-nevihta s toco";
          iconType = "53286";
          break;
        default:
          forecastType = "";
          iconType = "";
      }
      LogAction.logInfo("awtrix", "Vremenski pojav ikona {} in pojav tekst {}", weatherTypeIcon, weatherTypeTxt);

      //Napoved
      LogAction.logInfo("awtrix", "Vremenska napoved podatek {}", inpForecast);
      switch (inpForecast) {
        case "delno oblačno":
          forecast = "delno oblacno";
          iconForecast = "2286";
          break;
        case "rahlo oblačno":
          forecast = "rahlo oblacno";
          iconForecast = "2286";
          break;
        case "oblačno":
          forecast = "oblacno";
          iconForecast = "2283";
          break;
        case "pretežno oblačno":
          forecast = "pretezno oblacno";
          iconForecast = "2283";
          break;
        case "zmerno oblačno":
          forecast = "zmerno oblacno";
          iconForecast = "2283";
          break;
        case "pretežno jasno":
          forecast = "pretezno jasno";
          iconForecast = "11201";
          break;
        case "jasno":
          forecast = "jasno";
          iconForecast = "11201";
          break;
        case "megla":
          forecast = "megla";
          iconForecast = "17054";
          break;
      }
      LogAction.logInfo("awtrix", "Vremenska napoved je {}, ikona pa {} ", forecast, iconForecast);

      LogAction.logInfo("awtrix", "Ikona za pojav je {}, ikona za napoved je {} ", iconType, iconForecast);
      if (iconType == null || iconType.equalsIgnoreCase("")) {
        icon = iconForecast;
      } else {
        icon = iconType;
      }
      LogAction.logInfo("awtrix", "Ikona je {}", icon.toString);

      forecastString = "{ \"icon\":" + icon + ", \"text\":\"" + day + " " + partOfDay + "/" + forecast + forecastType + ": " + inpTemp + "\"}"
      address = "awtrix/custom/forecast" + run;
      LogAction.logInfo("awtrix", "Celoten tekst je {}", forecastString);
      LogAction.logInfo("awtrix", "Celoten ukaz je {}", address);
      actions.get("mqtt", "mqtt:broker:mosquitto").publishMQTT("awtrix/custom/forecast" + run, forecastString);
    }


    //notifications
    var notifyString = "";
    if (items.getItem("tempKuhinja").rawState < items.getItem("tempCumnata").rawState) {
      LogAction.logInfo("awtrix", "Temperatura v čumnati je previsoka zato pošiljam obvestilo!");
      notifyString = "{\"text\":\"Cumnata!\", \"icon\":24582} ";
    } else {
      LogAction.logInfo("awtrix", "Temperatura v čumnati ni previsoka");
    }
    if (items.getItem("tempKopalnicaZ").rawState < items.getItem("tempHodnikZ").rawState) {
      notifyString = "{\"text\":\"Kopalnica zgoraj\", \"icon\":24582} ";
    } else {
      LogAction.logInfo("awtrix", "Temperatura v kopalnici zgoraj ni prenizka");
    }
    if (notifyString.length > 0) {
      actions.get("mqtt", "mqtt:broker:mosquitto").publishMQTT("awtrix/indicator1", "{\"color\":[255,0,0],\"blink\":500}");
    } else {
      actions.get("mqtt", "mqtt:broker:mosquitto").publishMQTT("awtrix/indicator1", "");
    }
    actions.get("mqtt", "mqtt:broker:mosquitto").publishMQTT("awtrix/custom/obvestila", notifyString);

    LogAction.logInfo("awtrix", "#####################Konec testa Awtrix Mqtt pošiljanja sporočil#########################");
  },
  tags: ["AWTRIX", "Generator"],
  id: "generatorAWTRIXJS"
});