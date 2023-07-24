var logger = Java.type('org.slf4j.LoggerFactory').getLogger('org.openhab.rule.' + ctx.ruleUID);
x = new Date();
var plugBoilerSwitch = items.getItem("plugBoilerSwitch");
logger.info("Trenutno stanje stikala za bojler - " + plugBoilerSwitch.state);

logger.info("Dobili klic za prižig bojlerja")
if (items.getItem("Away").state == "OFF") {
    logger.info("Nismo na dopustu tako da prižigam bojler");
    if (plugBoilerSwitch.state == "OFF") {
        logger.info("Bojler še ni prižgan");
        plugBoilerSwitch.sendCommand("ON");
    } else {
        logger.info("Bojler je že prižgan");
    }
} else {
    logger.info("Smo na dopustu, tako da preverjam ali je že minilo več kot 5 dni od zadnjega prižiga");
    if (x.isAfter(plugBoilerSwitch.lastUpdate.plusDays(5))) {
        logger.info("Je že minilo več kot 5 dni od zadnjega prižiga zato prižigam");
        if (plugBoilerSwitch.state == "OFF") {
            plugBoilerSwitch.sendCommand("ON");
        }
    } else {
        logger.info("Še ni minilo več kot 5 dni od zadnjega prižiga zato ne prižigam");
    }
}