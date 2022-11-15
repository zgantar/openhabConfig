rules.JSRule({
  name: "Chromecast Change Radio Station",
  description: "Setting everything needed for working with electricity",
  triggers: [triggers.ItemStateChangeTrigger('NextRadioStation',null,null), triggers.ItemStateChangeTrigger('PrevRadioStation',null,null)],
  execute: (event) => {
    var LogAction = Java.type('org.openhab.core.model.script.actions.Log');
    LogAction.logInfo("radio","###########################Spreminjam radijsko postajo######################");

    x = time.ZonedDateTime.now();
    h = x.hour();
    min = x.minute();
    LogAction.logInfo("radio","Current time: " + h + ":" + min);

    var index = parseInt(items.getItem("RadioStationURL").state);
    var tmpIndex = index;
    var naslovToka

    LogAction.logInfo("radio","Preverim kateri index je trenutno - "+index);
    if (event.itemName === "NextRadioStation") {
      index == 14 ? tmpIndex = 1 : tmpIndex = tmpIndex + 1;
    } else {
      tmpIndex == 1 ? tmpIndex = 14 : tmpIndex = tmpIndex - 1;
    }
    LogAction.logInfo("radio","Preverim kateri index je po spremembi - "+tmpIndex.toString());
    items.getItem("RadioStationURL").postUpdate(tmpIndex);
    naslovToka = Transformation.transform("MAP", "radio_stations.map", tmpIndex.toString());
    LogAction.logInfo("radio","Naslov toka je - "+naslovToka);
    // ControlAudio.sendCommand(PAUSE)
    items.getItem("CC_PlayURIOnkyo").postUpdate(naslovToka);
    items.getItem("RadioStation").postUpdate(Transformation.transform("MAP", "radio_stations.map", naslovToka))
    //RadioStationURL.persist
    LogAction.logInfo("radio","Preverim kako je chromecast pred ukazom za igranje - "+items.getItem("CC_ControlOnkyo").state);
    items.getItem("CC_ControlOnkyo").sendCommand("PLAY");
    LogAction.logInfo("radio","Preverim kako je chromecast po ukazu za igranje - "+items.getItem("CC_ControlOnkyo").state);

    LogAction.logInfo("radio","###########################Radijska postaja je spremenjena##################");
},
  tags: ["Chromecast", "Radio"],
  id: "chromecastChangeRadioStationJS"
});