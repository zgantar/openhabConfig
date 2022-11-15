configuration: {}
triggers:
  - id: "1"
    configuration:
      startlevel: 100
    type: core.SystemStartlevelTrigger
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

        logger.debug("#####################Nastavljam vse potrebno za ogrevanje#############################");


        x = time.ZonedDateTime.now();

        h = x.hour();

        min = x.minute();

        logger.debug("Current time: "+h+":"+min);


        items.getItem("Heating").sendCommand("OFF");

        items.getItem("LogOgrevanje").sendCommand("OFF");

        items.getItem("ManOgrevanje, OFF").sendCommand("OFF");

        items.getItem("gLog").sendCommand("OFF");

        items.getItem("gMan").sendCommand("OFF");

        items.getItem("gFhs").sendCommand("OFF");

        //gDif.members.forEach((item) => {

        //  if (item.state == NULL) item.postUpdate(0)

        //});

        logger.debug("#####################Vse potrebno za ogrevanje je nastavljeno#########################");
    type: script.ScriptAction
