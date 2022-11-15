var logger = Java.type('org.slf4j.LoggerFactory').getLogger('org.openhab.rule.' + ctx.ruleUID);
x = new Date();
h = x.getHours();
min = x.getMinutes();

var plugBoilerSwitch = items.getItem("plugBoilerSwitch");

var hoursStartItem;
var minutesStartItem;
//var hoursStopItem;
var minutes = 0;
var hours = 0;

if (plugBoilerSwitch.state == "ON") {
    // preverim ali je jutranji vžig
    if (x < 12) {
        hoursStartItem = items.getItem("HoursStartSetter");
        minutesStartItem = items.getItem("MinutesStartSetter");;
        //hoursStopItem = items.getItem("HoursStopSetter");;
        minutes = minutesStartItem.state;
        hours = hoursStartItem.state;
    } else {
        hoursStartItem = items.getItem("HoursStartSetter2");
        minutesStartItem = items.getItem("MinutesStartSetter2");;
        //hoursStopItem = items.getItem("HoursStopSetter2");;
        minutes = minutesStartItem.state;
        hours = hoursStartItem.state;
    }
    if (items.getItem("plugBoilerPower").state > 0) {
        logger.info("Ker bojler še vedno ogreva vodo, premaknem uro prižiga 10 min nazaj s trenutne: " + hours + ":" + minutes);
        if (minutes == 0) {
            logger.info("Ker so minute na 0 moram prestaviti uro");
            hours--;
            minutes = 50;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
        } if (minutes == 5) {
            logger.info("Ker so minute na 5 moram prestaviti uro");
            hours--;
            minutes = 55;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
        } else {
            minutes = minutes - 10;
            minutesStartItem.postUpdate(minutes);
        }
        logger.info("Nastavil sem novo uro prižiga - " + hours + ":" + minutes);
    } else {
        logger.info("Ker bojler ne ogreva več vode, premaknem uro prižiga 5 min naprej s trenutne: " + hours + ":" + minutes);
        if (minutes == 55) {
            logger.info("Ker so minute na 55 moram prestaviti uro");
            hours++;
            minutes = 0;
            hoursStartItem.postUpdate(hours);
            minutesStartItem.postUpdate(minutes);
        } else {
            minutes = minutes + 5;
            minutesStartItem.postUpdate(minutes);
        }
        logger.info("Nastavil sem novo uro prižiga - " + hours + ":" + minutes);
    }
    plugBoilerSwitch.sendCommand("OFF");
} else {
    logger.info("Stikalo je izklopljeno, tako da ni nič za narest.");
}
