rules.JSRule({
  name: "Blinds Activate ActBlind",
  description: "Will move the actual blind",
  triggers: [triggers.GroupStateChangeTrigger('gBlindSwi',null,null)],
  execute: (event) => {
    const LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    val Functions$Function5 activateActBlind = [ 
      SwitchItem item,
      Boolean onOrOff,
      Integer time,
      Map<String, Timer> timers,
      Functions$Function2 getStringFromItem|
      
      var Timer timer = null
      var Timer shutDownTimer = null
      var int timeToMove = time
      LogAction.logInfo("blinds", "activateActBlind - Klic activateActBlind za " + item)
      val String nameWithCommand = getStringFromItem.apply(item, 3).toString
      val String justName = getStringFromItem.apply(item, 2).toString
      val String oppName = getStringFromItem.apply(item, 4).toString
      val SwitchItem actItem = gBlindAct.members.filter(loopItem | loopItem.name.contains(nameWithCommand)).head as SwitchItem
      if (time.intValue() == -1) {
        if (!actItem.groupNames.filter(group|group.equals("gBlindD")).empty) {
          timeToMove = 58000
          LogAction.logInfo("blinds", "activateActBlind - Čas za premik žaluzije je daljši - ", timeToMove)
        } else {
          timeToMove = 55000
          LogAction.logInfo("blinds", "activateActBlind - Čas za premik žaluzije je krajši - ", timeToMove)
        }
      }
      LogAction.logInfo("blinds", "activateActBlind - Čas za premik žaluzije je - " + timeToMove)
      val boolean downCommand = actItem.name.substring(actItem.name.length - 2, actItem.name.length).equals("Do")
      LogAction.logInfo("blinds", "activateActBlind - Ali je ukaz za spust, {}", downCommand)
      if (onOrOff && !actItem.groupNames.filter(group|group.equals("BlindsOnDoors")).empty && downCommand){
        LogAction.logInfo("blinds", "activateActBlind - Žaluzija je na vratih zato moramo preveriti ali so vrata odprta")
        if (justName.contains("KuhinjaDes")) {
          LogAction.logInfo("blinds", "activateActBlind - Imam ukaz za spust žaluzijo dvižno drsnih vratih {}", gRaiseWindowContact)
          if (gRaiseWindowContact.state == OPEN) {
            LogAction.logInfo("blinds", "activateActBlind - Vrata so odprta zato ignoriram ukaz za spust žaluzije")
            return null
          }
        } else if (justName.contains("DnevnaDes")) {
          LogAction.logInfo("blinds", "activateActBlind - Imam ukaz za spust žaluzijo nagibno drsnih vratih {}", gTiltWindowContact)
          if (gTiltWindowContact.state == OPEN) {
            LogAction.logInfo("blinds", "activateActBlind - Vrata so odprta zato ignoriram ukaz za spust žaluzije")
            return null
          }
        }
      }
      var oppItem = gBlindAct.members.filter(filtItem | filtItem.name.contains(oppName)).head
      LogAction.logInfo("blinds", "activateActBlind - Našli nasprotni aktuator " + oppItem.toString)
      val stateItem = gBlindState.members.filter(filtItem | filtItem.name.contains(justName)).head
      LogAction.logInfo("blinds", "activateActBlind - Našli stanje " + stateItem.toString)
      var int stanje
      if (stateItem.state != NULL) stanje = stateItem.state as Number else stanje = 0
      LogAction.logInfo("blinds", "activateActBlind - Stanje žaluzije - " + stanje)
      if (onOrOff) {
        LogAction.logInfo("blinds", "activateActBlind - Stanje nasprotnega aktuatorja {} je {} ", oppItem.name, oppItem.state)
        if (oppItem.state == ON) {
          LogAction.logInfo("blinds", "activateActBlind - !!!!!!!!!!!!!!!Našel signal na aktuatorju za nasprotno smer " + oppItem.toString + " Izklapljam!!!!!!!!!!!!!!!!!!!!!!!!")
          //preklicat mormo timer in nastvati pravilno stanje
          val lastUpdateTime = oppItem.previousState.timestamp.toInstant().toEpochMilli()
          LogAction.logInfo("blinds", "activateActBlind - Preverjam nasprotni aktuator koliko časa " + oppItem.name+ " ----- " + lastUpdateTime)
          LogAction.logInfo("blinds", "activateActBlind - V našem času je to " + "----" + oppItem.lastUpdate)
          LogAction.logInfo("blinds", "activateActBlind - Trenutni čas " + "----" + now)
          val timeDifference = now.toInstant().toEpochMilli() - lastUpdateTime
          LogAction.logInfo("blinds", "activateActBlind - Razlika je " + "----" + timeDifference)
          if (timeDifference > 300000) {
            LogAction.logInfo("blinds", "Nasprotna stran je bila aktivirana več kot 5 min nazaj, {} milisekund, zato jo izklopim!" + timeDifference)
            oppItem.sendCommand(OFF)
            LogAction.logInfo("blinds", "activateActBlind -----------Izvajam posredovani ukaz po preverjanju nasprotnega za žaluzijo " + actItem.toString + "--------------------------")
            actItem.sendCommand(ON)
            if (time > 0) {
              val int timeToMoveLambda = timeToMove
              LogAction.logInfo("blinds", "activateActBlind - Nastavljam čas delovanja na " + timeToMoveLambda + " s pomočjo predhodnika " + timeToMove)
              shutDownTimer = createTimer(now.plusSeconds(timeToMoveLambda/1000)) [|
                LogAction.logInfo("blinds", "activateActBlind ---------------Končal posredovani ukaz za žaluzijo " + actItem.toString + "--------------------------")
                actItem.sendCommand(OFF) 
                item.sendCommand(OFF)
                if (downCommand) stateItem.postUpdate(stateItem.state as Number - timeToMoveLambda)
                else stateItem.postUpdate(stateItem.state as Number + timeToMoveLambda)
                LogAction.logInfo("blinds", "activateActBlind - Stanje žaluzije - " + stateItem.state as Number)
              ]
              timers.put(nameWithCommand, shutDownTimer)
              LogAction.logInfo("blinds", "activateActBlind - Vstavimo nov timer " + nameWithCommand + ", kar poveča mapo na " + timers.size)
            }
          } else {
            LogAction.logInfo("blinds", "Nasprotna stran je bila aktivirana manj kot 5 min nazaj, {} milisekund, zato trenuten ukaz ignoriram!" + timeDifference)
            item.sendCommand(OFF)
          }
        } else {
          LogAction.logInfo("blinds", "activateActBlind ---------------Izvajam posredovani ukaz za žaluzijo {}, ker nasprotni aktuator ni aktiven--------------------------", actItem.toString)
          actItem.sendCommand(ON)
          val nameWithCommandLambda = nameWithCommand
          if (time > 0) {
            LogAction.logInfo("blinds", "activateActBlind - Imam nastavljen čas premika")
            val timeToMoveLambda = timeToMove
            LogAction.logInfo("blinds", "activateActBlind - Nastavljam čas delovanja na {} s pomočjo predhodnika in ustvarim timer za izklop aktuatorja {}", timeToMove, nameWithCommandLambda)
            shutDownTimer = createTimer(now.plusSeconds(timeToMoveLambda/1000)) [|
              LogAction.logInfo("blinds", "activateActBlind - Timer za izklop aktuatorja {} se je sprožil, nastavim še stanje ", nameWithCommandLambda)
              actItem.sendCommand(OFF)
              item.sendCommand(OFF)
              if (downCommand) {
                val razlika = stateItem.state as Number - timeToMoveLambda
                LogAction.logInfo("blinds", "activateActBlind - Ker je ukaz za konec spusta, moramo stanje zmanjšati za " + timeToMoveLambda)
                if (razlika < 0) stateItem.sendCommand(0)
                else stateItem.sendCommand(razlika) 
              } else {
                val vsota = stateItem.state as Number + timeToMoveLambda
                LogAction.logInfo("blinds", "activateActBlind - Ker je ukaz za konec dviga, moramo stanje povečati za " + timeToMoveLambda)
                if (vsota > timeToMoveLambda) stateItem.sendCommand(timeToMoveLambda)
                else stateItem.sendCommand(vsota)
              }
              LogAction.logInfo("blinds", "activateActBlind - Novo stanje žaluzije je {} ", stateItem.state as Number)
              val timerTmp = timers.remove(nameWithCommandLambda)
              LogAction.logInfo("blinds", "activateActBlind - Ker smo prekinili premik žaluzij prekinjamo timer - kar zmanjša mapo na " + timers.size)
              if (timerTmp !== null) timerTmp.cancel
            ]
            timers.put(nameWithCommand, shutDownTimer)
            LogAction.logInfo("blinds", "activateActBlind - Vstavimo nov timer " + nameWithCommand + ", kar poveča mapo na " + timers.size)
          } else {
            LogAction.logInfo("blinds", "activateActBlind - Čas premika ni definiran, ker avtomatika premika žaluzije, samo preverim ali se je aktuator izklopil po koncu premika")
            if (!actItem.groupNames.filter(group|group.equals("BlindD")).empty) {
              timeToMove = 58000
              LogAction.logInfo("blinds", "activateActBlind - Čas za premik žaluzije je daljši - ", timeToMove)
            } else {
              timeToMove = 55000
              LogAction.logInfo("blinds", "activateActBlind - Čas za premik žaluzije je krajši - ", timeToMove)
            }
            val timeToMoveLambda2 = timeToMove
            shutDownTimer = createTimer(now.plusSeconds(timeToMoveLambda2/1000)) [|
                LogAction.logInfo("blinds", "activateActBlind - Preverjamo ali se je aktuator {} izklopil", nameWithCommand)
                if (actItem.state == ON) {
                  LogAction.logInfo("blinds", "activateActBlind - Ker se aktuator {} ni izklopil, ga izklopim in nastavim stanje", nameWithCommand)
                  actItem.sendCommand(OFF)
                  item.sendCommand(OFF)
                  LogAction.logInfo("blinds", "activateActBlind - Aktuator {} ima stanje {}", nameWithCommand, stanje)
                  if (downCommand) stateItem.sendCommand(0)
                  else stateItem.sendCommand(timeToMoveLambda2)
                }
              LogAction.logInfo("blinds", "activateActBlind - Novo stanje žaluzije je - " + stateItem.state as Number)
            ]
    
          }
        }
      } else {
        LogAction.logInfo("blinds", "activateActBlind ---------------Končujem akcijo na žaluziji {}, ker je ukaz OFF ---------------------", actItem.name.toUpperCase)
        //preklicat mormo timer in nastvati pravilno stanje
        val lastUpdateTime = actItem.previousState.timestamp.toInstant().toEpochMilli()
        LogAction.logInfo("blinds", "activateActBlind - Preverjam aktuator pred koliko časa je bil zadnji premik " + actItem.toString+ " ----- " + lastUpdateTime)
        LogAction.logInfo("blinds", "activateActBlind - V našem času je to " + "----" + actItem.lastUpdate)
        LogAction.logInfo("blinds", "activateActBlind - Trenutni čas " + "----" + now)
        if (actItem.state == ON ) actItem.sendCommand(OFF)
        val timeDifference = now.toInstant().toEpochMilli() - lastUpdateTime
        LogAction.logInfo("blinds", "activateActBlind - Razlika v času je " + "----" + timeDifference)
        if (!actItem.groupNames.filter(group|group.equals("BlindD")).empty) {
          timeToMove = 58000
          LogAction.logInfo("blinds", "activateActBlind - Čas za premik žaluzije je daljši - ", timeToMove)
        } else {
          timeToMove = 55000
          LogAction.logInfo("blinds", "activateActBlind - Čas za premik žaluzije je krajši - ", timeToMove)
        }
        if (downCommand) {
          LogAction.logInfo("blinds", "activateActBlind - Ker je ukaz za konec spusta, moramo stanje zmanjšati za " + timeDifference)
          val razlika = stateItem.state as Number - timeDifference
          if (razlika < 0) {
            stateItem.sendCommand(0)
            LogAction.logInfo("blinds", "activateActBlind - Novo stanje kjer je razlika {} manjša od 0 je - {}", razlika, stateItem.state)
          } else {
            stateItem.sendCommand(razlika)
            LogAction.logInfo("blinds", "activateActBlind - Novo stanje kjer je razlika {} večja od 0 je - {}",razlika, stateItem.state)
          }
        } else {
          LogAction.logInfo("blinds", "activateActBlind - Ker je ukaz za konec dviga, moramo stanje povečati za " + timeDifference)
          val vsota = stateItem.state as Number + timeDifference
          LogAction.logInfo("blinds", "activateActBlind - PREVERJAM: 60000")
          if (vsota > timeToMove) {
            stateItem.sendCommand(timeToMove)
            LogAction.logInfo("blinds", "activateActBlind - Novo stanje kjer je timeToMove {} večja od 0 je - {}", timeToMove, stateItem.state)
          } else {
            stateItem.sendCommand(vsota)
            LogAction.logInfo("blinds", "activateActBlind - Novo stanje je vsota {}, ker ni timeToMove, je - {}", vsota, stateItem.state)
          }
        }
        LogAction.logInfo("blinds", "activateActBlind - Novo stanje je: " + stateItem.toString)
        }
      LogAction.logInfo("blinds", "activateActBlind - Mapa je - " + timers)
      if (timers !== null) {
        LogAction.logInfo("blinds", "activateActBlind - Trenutna velikost mape je - " + timers.size)
      } else {
        LogAction.logInfo("blinds", "activateActBlind - Trenutna velikost mape je - 0")
      }
      return true
    ]
    
  },
  tags: ["Blinds", "Manual move"],
  id: "blindsManualMoveJS"
});