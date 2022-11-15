rules.JSRule({
  name: "Heating Valve Manipulation",
  description: "Need to manipulate all the valves according to set temperatures",
  triggers: [triggers.ItemStateChangeTrigger('LogOgrevanje',null,null), triggers.ItemStateChangeTrigger('ManOgrevanje',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("heating", "*************************Pregled in vklop zahtevanih ventilov**************************");
    
    var startHeating2 = false;
    var valveName;
    var difItem;
    var difTemp = 0;
    var manValve;
    var logValve;
    const Heating = items.getItem("Heating");
    const gFhs = items.getItem("gFhs");
    const gMan = items.getItem("gMan");
    const gLog = items.getItem("gLog");

    LogAction.logInfo("heating", "Nastavljam seznam stikal za ON");
    itemsOn = new Array();
    LogAction.logInfo("heating", "Nastavljam seznam stikal za OFF");
    itemsOff = new Array();
  
    
    gFhs.members.forEach(fhsItem => {
      LogAction.logInfo("heating", "#####################Preverimo začetno stanje ventila {}", fhsItem.name)
  //		val boolean noVent = !fhsItem.groupNames.filter(group|group.equalsIgnoreCase("FhsRev")).empty
  //		LogAction.logInfo("heating", "Ali je NO ventil {}", noVent)
      valveName = fhsItem.name.substring(3);
      if (items.getItem("Override").state == "ON") {
        LogAction.logInfo("heating", "Ročno ogrevanje je aktivno");
        difItem = items.getItem("gDif").members.filter(differ => differ.name.includes(valveName))[0];
        if (difItem != "undefined" && difItem != null) {
          LogAction.logInfo("heating", "Dobil difItem - {}", difItem.name);
          difTemp = difItem.rawState;
          manValve = gMan.members.filter(manTmpItem => manTmpItem.name.includes(valveName))[0];
          if (manValve != null) {
            LogAction.logInfo("heating", "Našel ročni ventil {}", manValve.name);
            if (manValve.state == "ON" && difTemp < 0.0) {
              startHeating2 = true;
              LogAction.logInfo("heating", "Ročni ventil je odprt in temperatura {} je nižja od nastavljene", difTemp);
              itemsOn.push(fhsItem);
              // if (!noVent) fhsItem.sendCommand(ON) else fhsItem.sendCommand(OFF)
            } else if ((manValve.state == "OFF" || difTemp > 0.0)) {
              itemsOff.push(fhsItem);
              LogAction.logInfo("heating", "Ali je ročni ventil zaprt ali pa je temperatura {} višja od nastavljene", difTemp);
              // if (!noVent) fhsItem.sendCommand(OFF) else if (Man.state == ON)fhsItem.sendCommand(ON)
            }
          } else LogAction.logInfo("heating", "Nisem našel ročnega ventila");
        } else {
          LogAction.logInfo("heating", "Nisem našel diffa za {}", valveName);
        }
      } else {
        LogAction.logInfo("heating", "Logično ogrevanje je aktivno");
        logValve = gLog.members.filter(logTmpItem => logTmpItem.name.includes(valveName))[0];
        if (logValve != null) {
          LogAction.logInfo("heating", "Našel logični ventil {}", logValve.name);
          if (logValve.state == "ON") {
            startHeating2 = true;
            LogAction.logInfo("heating", "Logični ventil je odprt, dodajam na seznam za odpret!");
            itemsOn.push(fhsItem);
  //					if (!noVent) fhsItem.sendCommand(ON) else fhsItem.sendCommand(OFF)
          } else if (logValve.state == "OFF") {
            LogAction.logInfo("heating", "Logični ventil je zaprt, dodajam na seznam za zapret!")
            itemsOff.push(fhsItem)
  //					if (!noVent) fhsItem.sendCommand(OFF) else if (Log.state == ON) fhsItem.sendCommand(ON)
          }
        } else LogAction.logInfo("heating", "Nisem našel logičnega ventila");
      }
      LogAction.logInfo("heating", "Konec pregleda vseh ventilov.");
  //		LogAction.logInfo("heating", "Preverimo končno stanje ventila {}", fhsItem.toString)
    });
    LogAction.logInfo("heating", "Stanje Heating je {}, stanje startHeating2 pa je {}", Heating.state, startHeating2);
    if (startHeating2) {
      LogAction.logInfo("heating", "Imam seznam z {} ventili, ki jih potrebno odpreti", itemsOn.length);
      itemsOn.forEach(tmpItemOn => {
        if (tmpItemOn.state == "OFF" && tmpItemOn.groupNames.filter(group => group === "gFhsRev").length == 0) {
          tmpItemOn.sendCommand("ON");
          LogAction.logInfo("heating", "Odpiram nc venitl {}", tmpItemOn.name )
        } else if (tmpItemOn.state == "ON" && !tmpItemOn.groupNames.filter(group => group === "gFhsRev").length == 0) {
          tmpItemOn.sendCommand("OFF");
          LogAction.logInfo("heating", "Odpiram no venitl {}", tmpItemOn.name);
        }
      })
      LogAction.logInfo("heating", "Imam seznam z {} ventili, ki jih potrebno zapreti", itemsOff.length);
      itemsOff.forEach(tmpItemOff => {
        //first nc valves
        if (tmpItemOff.state == "ON" && tmpItemOff.groupNames.filter(group => group === "gFhsRev").length == 0) {
          tmpItemOff.sendCommand("OFF");
          LogAction.logInfo("heating", "Zapiram nc venitl {}", tmpItemOff.name );
        } 
        //then no valves
        else if (tmpItemOff.state == "OFF" && !tmpItemOff.groupNames.filter(group => group === "gFhsRev").length == 0) {
          tmpItemOff.sendCommand("ON");
          LogAction.logInfo("heating", "Zapiram no venitl {}", tmpItemOff.name );
        } 
      })
      LogAction.logInfo("heating", "Vklopimo ogrevanje.");
      if (Heating.state == "OFF") {
        Heating.sendCommand("ON");
      }
    } else {
      LogAction.logInfo("heating", "Stanje Heating je {}, stanje gLog je {} in gMan je {}", Heating.state, gLog.state, gMan.state);
      if (Heating.state == "ON") {
        LogAction.logInfo("heating", "Izklopim ogrevanje");
        Heating.sendCommand("OFF");
        if (gFhs.state == "ON") {
          LogAction.logInfo("heating", "Vsaj en ventil je še odprt, preverjam in zapiram!");
          gFhs.members.forEach(fhsItem => {
            LogAction.logInfo("heating", "Preverjam ventil {}!", fhsItem.name);
            if (fhsItem.state == "ON") {
              fhsItem.sendCommand("OFF")
              LogAction.logInfo("heating", "Zapiram ventil {}!", fhsItem.name);
            }
          });
        }
      }
    }
    LogAction.logInfo("heating", "Pucam seznam za odpret in zapret");
    itemsOn = null;
    itemsOff = null;
    LogAction.logInfo("heating", "*************************Konec pregleda in vklopa zahtevanih ventilov**************************");
  },
  tags: ["Heating", "Valve manipulation"],
  id: "heatingValveManipulationJS"
});