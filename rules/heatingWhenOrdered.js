configuration: {}
triggers:
  - id: "1"
    configuration:
      itemName: Heating
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

        logger.info("###########################Prišel je ukaz za ogrevanje###################################");


        x = time.ZonedDateTime.now();

        h = x.hour();

        min = x.minute();

        logger.info("Current time: " + h + ":" + min);


        var fhsHeater = items.getItem("fhsHeater");

          if (items.getItem("Heating").state == "ON") {
            logger.info("Prišel je ukaz za ogrevanje, zato vklopim peč");
            if (fhsHeater.state == "ON") {
              logger.warn("Prišel je ukaz za ogrevanje, vendar je peč že prižgana");
            } else {
              fhsHeater.sendCommand("ON");
            }
          } else {
            logger.info("Prišel je ukaz za konec ogrevanja, zato izklopim peč in vse morebitne vklopljene ventile");
            if (fhsHeater.state == "ON") {
              fhsHeater.sendCommand("OFF");
            } else {
              logger.warn("Prišel je ukaz za konec ogrevanja, vendar peč sploh ni bila prižgana");
            }
            items.getItem("gFhs").sendCommand("OFF");
          }
        logger.info("###########################Ukaz za ogrevanje je izveden##################################");
    type: script.ScriptAction
