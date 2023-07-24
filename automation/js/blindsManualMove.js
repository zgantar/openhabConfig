rules.JSRule({
  name: "Blinds Manual Move",
  description: "Light will turn on when one of the windows or doors are opened",
  triggers: [triggers.GroupStateChangeTrigger('gBlindSwi',null,null)],
  execute: (event) => {
    const LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    var PersistenceExtensions = Java.type("org.openhab.core.persistence.extensions.PersistenceExtensions");

    LogAction.logInfo("blinds", "###########################Dobil obvestilo o ročnem premiku žaluzije##############################");
    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("blinds", "Current time: " + h + ":" + min);

    function getStringFromItem(item, whatToGet) {
      var returnString;

      LogAction.logInfo("blinds", "getStringFromItem klican z item  {} in ukaz {} ", item.name, whatToGet);
      switch  (whatToGet) {
        case 1:
          LogAction.logInfo("blinds", "getStringFromItem - Iščemo ukaz " + item.name.substring(item.name.length - 2, item.name.length));
          returnString = item.name.substring(item.name.length - 2, item.name.length);
          break;
        case 2:
          LogAction.logInfo("blinds", "getStringFromItem - Iščemo ime " + item.name.substring(3, item.name.length - 2));
          returnString = item.name.substring(3, item.name.length - 2);
          break;
        case 3:
          LogAction.logInfo("blinds", "getStringFromItem - Iščemo ime z ukazom " + item.name.substring(3, item.name.length));
          returnString = item.name.substring(3, item.name.length);
          break;
        case 4:
          LogAction.logInfo("blinds", "getStringFromItem - Iščemo nasprotno ime z ukazom");
          if (item.name.substring(item.name.length - 2, item.name.length) === "Up") {
            LogAction.logInfo("blinds", "getStringFromItem - Iščemo nasprotno ime z ukazom " + item.name.substring(3, item.name.length - 2).concat("Do"));
            returnString = item.name.substring(3, item.name.length - 2).concat("Do");
          } else {
            LogAction.logInfo("blinds", "getStringFromItem - Iščemo nasprotno ime z ukazom " + item.name.substring(3, item.name.length - 2).concat("Up"));
            returnString = item.name.substring(3, item.name.length - 2).concat("Up");
          }
          break;
        case 5:
          LogAction.logInfo("blinds", "getStringFromItem - Iščem ime za peek/dimm stikalo " + item.toString);
          returnString = item.name.substring(0, item.name.length-4);
          break;
      }
      LogAction.logInfo("blinds", "getStringFromItem vrača vrednost {} ", returnString);
      return returnString
    }
    

    LogAction.logInfo("blinds", "Ukaz je prišel za žaluzijo {}.", event.itemName);
    var triggeringItem = items.getItem(event.itemName);
    LogAction.logInfo("blinds", "In to je item {}.", triggeringItem);
    
    var name = getStringFromItem(triggeringItem, 3);
    var justName = getStringFromItem(triggeringItem, 2);
    var order = getStringFromItem(triggeringItem, 1);
    var stateItem = items.getItem("gBlindState").members.filter(filtItem => filtItem.name.includes(justName))[0];
    
    if (stateItem != null) {
      LogAction.logInfo("blinds", "Stanje žaluzije {} je {} ", name, stateItem.state);
      LogAction.logInfo("blinds", "Ukaz je {}.", order);
      
      if (triggeringItem.state == "OFF") {
        var prevoiusState = PersistenceExtensions.previousState(triggeringItem.rawItem, true); //history.prevoiusState.timestamp;
        LogAction.logInfo("blinds", "oldState je {} ", prevoiusState);
        var lastUpdateTime = prevoiusState.timestamp.toEpochSecond();
        LogAction.logInfo("blinds", "Zadnja sprememba je bila {} ", lastUpdateTime);
        LogAction.logInfo("blinds", "Trenutni čas je {}", x.toEpochSecond());
        var timeDifference = x.toEpochSecond() - lastUpdateTime;
        LogAction.logInfo("blinds", "Razlika med začetkom in koncem premika je {}", timeDifference);
        if (order.equals("Do")) {
          LogAction.logInfo("blinds", "Dobil obvestilo o končanju premika žaluzije {} nižje, zato posodabljam stanje", name);
          var razlika = stateItem.rawState - timeDifference;
          if (razlika < 0) {
            LogAction.logInfo("blinds", "Ker je bila žaluzija aktivna dalj časa kot je potrebno za premik po celotni višini, nastavim stanje na 0");
            stateItem.postUpdate(0);
          } else {
            LogAction.logInfo("blinds", "Žaluzija je bila aktivna krajši čas, kot pa je potrbeno za celoten premik, zato posodobim stanje na {}", razlika);
            stateItem.postUpdate(razlika);
          }
        } else {
          LogAction.logInfo("blinds", "Dobil obvestilo o končanju premika žaluzije {} višje, zato posodabljam stanje", name);
          var vsota = stateItem.rawState + timeDifference;
          var length = 58000;
          if (vsota > length) {
            LogAction.logInfo("blinds", "Ker je dolžina premika daljša, kot je čas celotnega premika, nastavim stanje na {}", length);
            stateItem.postUpdate(length);
          } else {
            LogAction.logInfo("blinds", "Ker je dolžina premika krajša, kot je čas preostalega premika, nastavim stanje na {}", vsota);
            stateItem.postUpdate(vsota);
          }
          LogAction.logInfo("blinds", "activateActBlind - PREVERJAM: 60000");
        }
      } else {
        LogAction.logInfo("blinds", "Premik se je začel, zato še ne naredim nič");
      }
    } else {
      LogAction.logWarn("blinds", "Nisem našel stateItem za žaluzijo {}.", name);
    }
    LogAction.logInfo("blinds", "###########################Shranil novo stanje po ročnem premiku žaluzije#########################");
  },
  tags: ["Blinds", "Manual move"],
  id: "blindsManualMoveJS"
});