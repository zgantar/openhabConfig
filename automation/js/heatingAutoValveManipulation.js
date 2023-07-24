rules.JSRule({
  name: "Heating Auto Valve Manipulation",
  description: "Need to manipulate all the valves according to set temperatures",
  triggers: [triggers.GroupStateUpdateTrigger('gLog',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("heating", "VALVE - #########################Dobil informacijo o spremembi Log* ventila ##############################");
    LogAction.logInfo("heating", "VALVE - Procesiranje je sprožil {}", event.itemName);
    
    const orderItem = items.getItem(event.itemName);
    const Heating = items.getItem("Heating");
    if (items.getItem("Override").state == null) items.getItem("Override").sendCommand("OFF");

    // const manValve =  orderItem.groupNames.filter(group => group === "gMan").length > 0;
    // const isManual = items.getItem("Override").state == "ON" && manValve;
    
    // const logicValve = orderItem.groupNames.filter(group => group === "gLog").length > 0;
    // const isAuto = items.getItem("Override").state == "OFF" && logicValve;
    
    // if (isManual || isAuto) {
      valveName = orderItem.name.substring(3);
      LogAction.logInfo("heating", "VALVE - Ime ventila je {}", valveName);
      if (orderItem.state == "ON") {
        LogAction.logInfo("heating", "VALVE - Ker je ukaz za pričetek gretja, preverjam NO ventile ali jih je potrebno zapreti.");
        items.getItem("gFhsRev").members.forEach(fhsRevItem => {
          LogAction.logInfo("heating", "VALVE - Preverjam ventil {}", fhsRevItem.name);
          if (!fhsRevItem.name.includes(valveName)) {
            const logValveItem = items.getItem("gLog").members.filter(item => item.name.includes(fhsRevItem.name.substring(3)))[0];
            if (logValveItem != null && logValveItem.state == "OFF"){
              LogAction.logInfo("heating", "VALVE - Ker ventil {} ni ventil, ki ga spreminjamo in ni zaprt in je ukaz za ogrevanje, ga moram zapreti.", logValveItem.name);
              fhsRevItem.sendCommand("ON");
            }
          }
        });
      }
      fhsItem = items.getItem("gFhs").members.filter(fhsTmpItem => fhsTmpItem.name.includes(valveName))[0];
      if (fhsItem != null) {
        const valveIsNC = fhsItem.groupNames.filter(group => group === "gFhsRev").length == 0;
        // LogAction.logInfo("heating", "VALVE - Fizični ima grupe {}", fhsItem.groupNames.forEach(group => {LogAction.logInfo("heating", "VALVE - Grupa je {}", group)}));
        LogAction.logInfo("heating", "VALVE - Ali je fizični ventil NC - {}", valveIsNC);
        if (orderItem.state == "ON") {
            LogAction.logInfo("heating", "VALVE - Logični ukaz je ON");
          if (valveIsNC) {
            LogAction.logInfo("heating", "VALVE - Logični ventil je ON in ventil je NC");
            fhsItem.state == "OFF" ? fhsItem.sendCommand("ON") : LogAction.logInfo("heating", "VALVE - Fizični ventil je že odprt!!!");
          } else{
            LogAction.logInfo("heating", "VALVE - Logični ventil je ON in ventil je NO.");
            fhsItem.state == "ON" ? fhsItem.sendCommand("OFF") : LogAction.logInfo("heating", "VALVE - Fizični ventil je že odprt, ker je NO!!!");
          }
        } else {
          LogAction.logInfo("heating", "VALVE - Logični ukaz je {}", orderItem.state);
          if (items.getItem("gLog").state == "OFF") {
              LogAction.logInfo("heating", "VALVE - Ker je ogrevanje OFF ni važno ali je ventil NC ali NO, v vsakem primeru ga nastavim na OFF.");
              fhsItem.sendCommand("OFF");
          } else {
            if (valveIsNC) {
              LogAction.logInfo("heating", "VALVE - Logični ventil je OFF in ventil je NC, zato zaprem ventil.");
              fhsItem.state == "ON" ? fhsItem.sendCommand("OFF") : LogAction.logInfo("heating", "VALVE - Fizični ventil je že zaprt!!!");
            } else {
              LogAction.logInfo("heating", "VALVE - Logični ventil je OFF in ventil je NO.");
              fhsItem.state == "OFF" ? fhsItem.sendCommand("ON") : LogAction.logInfo("heating", "VALVE - Fizični ventil je že zaprt, ker je NO!!!");
            }  
          }
        }
      } else {
        LogAction.logInfo("heating", "VALVE - Nisem našel primernega fizičnega ventila", valveName);
      }    
    // } else {
      // LogAction.logInfo("heating", "VALVE - Ročni - {} ali avtomatski - {} ukaz za spremembo ventila?", isManual, isAuto);
    // }
    // LogAction.logInfo("heating", "VALVE - Ali je še kakšen Log* {} ventil odprt?", items.getItem("gLog").state);
    // if (items.getItem("gLog").state == "OFF" && Heating.state == "ON") {
    //   LogAction.logInfo("heating", "VALVE - Ni Log* ventila za gretje je pa še prižgana peč, zato ugašam ogrevanje.");
    //   Heating.sendCommand("OFF");
    // }
    LogAction.logInfo("heating", "VALVE - #########################Sprocesiral spremembo Log* ventila ######################################");
  },
  tags: ["Heating", "Valve manipulation"],
  id: "heatingAutoValveManipulationJS"
});