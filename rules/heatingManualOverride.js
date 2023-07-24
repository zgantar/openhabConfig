configuration: {}
triggers:
  - id: "1"
    configuration:
      itemName: Override
    type: core.ItemCommandTrigger
conditions: []
actions:
  - inputs: {}
    id: "2"
    configuration:
      type: application/javascript;version=ECMAScript-2021
      script: >-
        var logger =
        Java.type('org.slf4j.LoggerFactory').getLogger('org.openhab.rule.' +
        ctx.ruleUID);

        logger.info("###########################Izvajam ukaz za ročno ogrevanje############################");


        x = time.ZonedDateTime.now();

        h = x.hour();

        min = x.minute();

        logger.info("Current time: " + h + ":" + min);


        var Override = items.getItem("Override");

        var manValveName;

        var noVent;

        var valve;


        if (Override.state == "ON") {
          logger.info("Dobil ukaz za začetek ročnega upravljanja ogrevanja");
          items.getItem("gMan").members.forEach((manItem) =>{
            logger.info("Nastavljamo ročno stikal -"+manItem.name);
            manValveName = manItem.name.substring(3);
            logger.info("manValveName -"+manValveName);
            noVent = manItem.groupNames.members.indexOf("ManRev") != -1 ? true : false;
            logger.info("Ali je NO ventil -"+noVent);
            valve = gFhs.members.find((fhsTmpItem) => {fhsTmpItem.name.includes(name)});
            logger.info("Ventil -"+valve.name);
            if (valve != null) {
              if (items.getItem("Heating").state == "ON") {
                logger.info("Ker se trenutno ogreva, se nastavi na stanje ventila -"+valve.state);
                if (valve.state == ON) { 
                  noVent ? manItem.sendCommand("OFF") : manItem.sendCommand("ON")
                } else {
                  noVent ? manItem.sendCommand("ON") : manItem.sendCommand("OFF")
                }
              } else {
                logger.info("Ker se trenutno ne ogreva, se nastavi na stanje ventila na OFF");
                manItem.sendCommand("OFF");
              }
            } else {
              logger.warn("heating", "Nisem našel ventila za ročno stikalo - "+manItem.name);
            }
            logger.info("In zaključim z - ", manItem.name);
          })
          logger.info("Nastavim vsa logična stikala na OFF");
          items.getItem("gLog").sendCommand("OFF");
          items.getItem("LogOgrevanje").sendCommand("OFF");
        } else {
          logger.info("Dobil ukaz za konec ročnega upravljanja ogrevanja");
          items.getItem("gMan").sendCommand("OFF");
          items.getItem("ManOgrevanje").sendCommand("OFF");
        }

        logger.info("###########################Ukaz za ročno ogrevanje je izveden#########################");
    type: script.ScriptAction
