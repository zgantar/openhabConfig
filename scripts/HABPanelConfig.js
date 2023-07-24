{
    "dashboards": [
        {
            "id": "Julija",
            "name": "Julija",
            "row": 0,
            "col": 3,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempJulija",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humJulija",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempJulija",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humJulija",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:21"
        },
        {
            "id": "Spalnica",
            "name": "Spalnica",
            "row": 0,
            "col": 2,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempSpalnica",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humSpalnica",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempSpalnica",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humSpalnica",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:20"
        },
        {
            "id": "Kopalnica zgoraj",
            "name": "Kopalnica zgoraj",
            "row": 0,
            "col": 1,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempKopalnicaZ",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humKopalnicaZ",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "liveUpdates": {
                        "enabled": false
                    },
                    "row": 0,
                    "col": 3,
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempKopalnicaZ",
                            "color": "#FF3300",
                            "name": "Temperatura"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humKopalnicaZ",
                            "name": "Vlažnost",
                            "color": "#0066FF"
                        }
                    ],
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:19"
        },
        {
            "id": "Hodnik zgoraj",
            "name": "Hodnik zgoraj",
            "row": 0,
            "col": 4,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempHodnikZ",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humHodnikZ",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempHodnikZ",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humHodnikZ",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikZ",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 0,
                    "usedescription": false,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikZLum",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "slider",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 2,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 6,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": false,
                            "display_area": true,
                            "item": "gibanjeHodnikZLum",
                            "name": "Osvetljenost",
                            "color": "#FFFF00"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "gibanjeHodnikZ",
                            "name": "Gibanje",
                            "color": "#FF0000",
                            "display_dots": false
                        }
                    ],
                    "liveUpdates": {},
                    "row": 7,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikKopalnicaZ",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 6,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikKopalnicaZlum",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "slider",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 8,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 6,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": false,
                            "display_area": true,
                            "item": "gibanjeHodnikKopalnicaZlum",
                            "name": "Osvetljenost",
                            "color": "#FFFF00"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "gibanjeHodnikKopalnicaZ",
                            "name": "Gibanje",
                            "color": "#FF0000",
                            "display_dots": false
                        }
                    ],
                    "liveUpdates": {},
                    "row": 7,
                    "col": 6,
                    "type": "chart"
                },
                {
                    "name": "Nad stopnicami",
                    "sizeX": 6,
                    "sizeY": 1,
                    "row": 4,
                    "col": 0,
                    "font_size": "40",
                    "type": "label"
                },
                {
                    "name": "Pred kopalnico",
                    "sizeX": 6,
                    "sizeY": 1,
                    "font_size": "40",
                    "row": 4,
                    "col": 6,
                    "type": "label"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikZBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikKopalnicaZBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 10,
                    "usedescription": true,
                    "type": "dummy"
                }
            ],
            "$$hashKey": "object:22"
        },
        {
            "id": "Hodnik spodaj",
            "name": "Hodnik spodaj",
            "row": 1,
            "col": 1,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempHodnikS",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humHodnikS",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempHodnikS",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humHodnikS",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                },
                {
                    "name": "Vrata",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "gGroundCorridorFrontDoorContact",
                    "font_size": "30",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "frontdoor",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikS",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 7,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikSLum",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "slider",
                    "backdrop_center": true,
                    "row": 7,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 6,
                    "sizeY": 5,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": false,
                            "display_area": true,
                            "item": "gibanjeHodnikSLum",
                            "name": "Osvetljenost",
                            "color": "#FFFF00"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "gibanjeHodnikS",
                            "name": "Gibanje",
                            "color": "#FF0000",
                            "display_dots": false
                        }
                    ],
                    "liveUpdates": {},
                    "row": 9,
                    "col": 6,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeVhod",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 7,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeVhodLum",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "slider",
                    "backdrop_center": true,
                    "row": 7,
                    "col": 2,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 6,
                    "sizeY": 5,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": false,
                            "display_area": true,
                            "item": "gibanjeVhodLum",
                            "name": "Osvetljenost",
                            "color": "#FFFF00"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "gibanjeVhod",
                            "name": "Gibanje",
                            "color": "#FF0000",
                            "display_dots": false
                        }
                    ],
                    "liveUpdates": {},
                    "row": 9,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "Pod stopnicami",
                    "sizeX": 6,
                    "sizeY": 1,
                    "row": 6,
                    "col": 6,
                    "font_size": "40",
                    "type": "label"
                },
                {
                    "name": "Vhod",
                    "sizeX": 6,
                    "sizeY": 1,
                    "font_size": "40",
                    "row": 6,
                    "col": 0,
                    "type": "label"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeHodnikSBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 7,
                    "col": 10,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeVhodBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 7,
                    "col": 4,
                    "type": "dummy"
                }
            ],
            "$$hashKey": "object:24"
        },
        {
            "id": "Kopalnica spodaj",
            "name": "Kopalnica spodaj",
            "row": 1,
            "col": 2,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempKopalnicaS",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humKopalnicaS",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempKopalnicaS",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humKopalnicaS",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:25"
        },
        {
            "id": "Dnevna",
            "name": "Dnevna",
            "row": 2,
            "col": 0,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempDnevna",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humDnevna",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempDnevna",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humDnevna",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                },
                {
                    "name": "Dvižno drsno okno",
                    "sizeX": 6,
                    "sizeY": 1,
                    "item": "gRaiseWindowContact",
                    "font_size": "30",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "window",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Nagibno drsno okno",
                    "sizeX": 6,
                    "sizeY": 1,
                    "item": "gTiltWindowContact",
                    "font_size": "30",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "window",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Panoramski steni",
                    "sizeX": 12,
                    "sizeY": 1,
                    "row": 4,
                    "col": 0,
                    "background": "#66CCFF",
                    "font_size": "40",
                    "type": "label"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeDnevna",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 6,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Svetlost",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeDnevnalum",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "slider",
                    "backdrop_center": true,
                    "row": 6,
                    "col": 2,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": false,
                            "display_area": true,
                            "item": "gibanjeDnevnalum",
                            "name": "Osvetljenost",
                            "color": "#FFFF00"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "gibanjeDnevna",
                            "name": "Gibanje",
                            "color": "#FF0000",
                            "display_dots": false
                        }
                    ],
                    "liveUpdates": {},
                    "row": 8,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "Stikalo",
                    "sizeX": 4,
                    "sizeY": 1,
                    "item": "plugTVSwitch",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 12,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Trenutna moč",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugTVPower",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 12,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Urna poraba TV&HiFi",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugTVHiHourCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 12,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna poraba TV&HiFi",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugTVHiDayCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 12,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "Poraba TV&HiFi",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugTVHiConsumption",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 12,
                    "col": 10,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": false
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugTVHiPower",
                            "name": "Moč",
                            "color": "#66CCFF"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 13,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2W",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugTVHiDayCons",
                            "name": "Dnevna poraba",
                            "color": "#FF9900"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugTVHiHourCons",
                            "name": "Urna poraba",
                            "color": "#FF3300"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 17,
                    "col": 0,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:28"
        },
        {
            "id": "Kabinet",
            "name": "Kabinet",
            "row": 2,
            "col": 1,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempKabinet",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humKabinet",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempKabinet",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humKabinet",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:29"
        },
        {
            "id": "Čumnata",
            "name": "Čumnata",
            "row": 1,
            "col": 4,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempCumnata",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humCumnata",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempCumnata",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humCumnata",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                },
                {
                    "name": "Število delcev",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "dimCumnataSmokeDensity",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "fire",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Stikalo",
                    "sizeX": 4,
                    "sizeY": 1,
                    "item": "plugFreeSwitch",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 6,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Trenutna moč",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugFreePower",
                    "font_size": "15",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "unit": "W",
                    "row": 6,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Urna poraba skrinje",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugFreeHourCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 6,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna poraba skrinje",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugFreeDayCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 6,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "Poraba skrinje",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugFreeConsumption",
                    "font_size": "15",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "kW",
                    "row": 6,
                    "col": 10,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2D",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugFreePower",
                            "name": "Moč",
                            "color": "#66CCFF"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 7,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2W",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugFreeDayCons",
                            "name": "Dnevna poraba",
                            "color": "#FF9900"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugFreeHourCons",
                            "name": "Urna poraba",
                            "color": "#FF3300"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 11,
                    "col": 0,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:27"
        },
        {
            "id": "Aljaž",
            "name": "Aljaž",
            "row": 1,
            "col": 0,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempAljaz",
                    "row": 0,
                    "col": 0,
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "nolinebreak": false,
                    "icon_size": 32,
                    "icon_nolinebreak": false,
                    "icon_replacestext": false,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "item": "TempAljaz",
                    "row": 0,
                    "col": 3,
                    "charttype": "interactive",
                    "period": "D",
                    "liveUpdates": {
                        "enabled": true,
                        "fillValues": true
                    },
                    "isgroup": false,
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true,
                            "includezero": false
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempAljaz",
                            "name": "Temperatura",
                            "color": "#FF0000"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humAljaz",
                            "name": "Vlažnost",
                            "color": "#3399FF"
                        }
                    ],
                    "type": "chart"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humAljaz",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Čas za PCjem",
                    "sizeX": 9,
                    "sizeY": 2,
                    "row": 4,
                    "col": 3,
                    "period": "D",
                    "colorMaps": [
                        {
                            "state": "ON",
                            "color": "#0db9f0"
                        },
                        {
                            "state": "OFF",
                            "color": "#89a"
                        },
                        {
                            "state": "OPEN",
                            "color": "#CCCC00"
                        },
                        {
                            "state": "CLOSED",
                            "color": "#CC99FF"
                        },
                        {
                            "state": "UP",
                            "color": "#FFCC66"
                        },
                        {
                            "state": "DOWN",
                            "color": "#9999FF"
                        },
                        {
                            "state": "0",
                            "color": "#FFF"
                        },
                        {
                            "state": "1",
                            "color": "#FFCCCC"
                        },
                        {
                            "state": "2",
                            "color": "#FF9999"
                        },
                        {
                            "state": "3",
                            "color": "#FF6666"
                        },
                        {
                            "state": "4",
                            "color": "#CC0000"
                        },
                        {
                            "state": "5",
                            "color": "#993333"
                        }
                    ],
                    "series": [
                        {
                            "item": "networkPingableAljazPC",
                            "name": "PC"
                        }
                    ],
                    "type": "timeline"
                },
                {
                    "name": "Stikalo PC",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "plugAljazPCSwitch2",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 4,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Trenutna moč",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "plugAljazPCPower",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 6,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Urna poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "PlugAljazPCHourCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 6,
                    "col": 3,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "PlugAljazPCDayCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 6,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2D",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugAljazPCPower",
                            "name": "Moč",
                            "color": "#66CCFF"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 7,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "Mesečna poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "PlugAljazPCMonthCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 6,
                    "col": 9,
                    "type": "dummy"
                },
                {
                    "name": "Stikalo ostalo",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "plugAljazPCSwitch1",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 5,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "W",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugAljazPCHourCons",
                            "name": "Urna poraba",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugAljazPCDayCons",
                            "name": "Dnevna poraba",
                            "color": "#FF9900"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 11,
                    "col": 0,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:23"
        },
        {
            "id": "Zunaj",
            "name": "Zunaj",
            "row": 4,
            "col": 4,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "gOutTemp",
                    "row": 0,
                    "col": 0,
                    "font_size": "30",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "usedescription": false,
                    "type": "dummy"
                },
                {
                    "name": "Občutena temperatura",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gOutFeelTemp",
                    "font_size": "30",
                    "useserverformat": false,
                    "row": 4,
                    "col": 0,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "usedescription": false,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "gOutHum",
                    "font_size": "30",
                    "useserverformat": true,
                    "row": 1,
                    "col": 0,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "Hitrost vetra",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gOutWindSpeed",
                    "font_size": "30",
                    "useserverformat": true,
                    "row": 5,
                    "col": 0,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "wind",
                    "backdrop_center": true,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "Smer vetra",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gOutWindDir",
                    "font_size": "30",
                    "useserverformat": true,
                    "row": 6,
                    "col": 0,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "wind",
                    "backdrop_center": true,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "Pritisk",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gOutPressure",
                    "font_size": "25",
                    "useserverformat": true,
                    "row": 8,
                    "col": 5,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "pressure",
                    "backdrop_center": true,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "Sončno sevanje",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gOutSolarRad",
                    "font_size": "25",
                    "useserverformat": true,
                    "row": 8,
                    "col": 3,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "sun",
                    "backdrop_center": true,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "Trenutne padavine",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gOutPercipInten",
                    "font_size": "30",
                    "useserverformat": true,
                    "row": 7,
                    "col": 0,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "rain",
                    "backdrop_center": true,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "Današnje padavine",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gOutPercipToday",
                    "font_size": "30",
                    "useserverformat": false,
                    "row": 8,
                    "col": 0,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "rain",
                    "backdrop_center": true,
                    "usedescription": false,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "row": 0,
                    "col": 3,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "gOutTemp",
                            "name": "Temperatura",
                            "color": "#0099FF"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "gOutSolarRad",
                            "name": "Sončno sevanje",
                            "color": "#FFFF00"
                        }
                    ],
                    "liveUpdates": {},
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "gOutPercipInten",
                            "name": "Intenziteta padavin",
                            "color": "#0099FF"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "gOutPressure",
                            "name": "Zračni pritisk",
                            "color": "#FFFF00"
                        },
                        {
                            "axis": "y",
                            "display_line": false,
                            "display_area": true,
                            "item": "gOutPercipToday",
                            "name": "Dnevna količina padavin",
                            "color": "#9999FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 4,
                    "col": 3,
                    "type": "chart"
                },
                {
                    "name": "Začetna stran",
                    "sizeX": 2,
                    "sizeY": 1,
                    "action_type": "navigate",
                    "font_size": "20",
                    "navigate_type": "dashboard",
                    "navigate_dashboard": "Začetno okno",
                    "row": 8,
                    "col": 7,
                    "type": "button"
                }
            ],
            "$$hashKey": "object:41"
        },
        {
            "id": "Energetski prostor",
            "name": "Energetski prostor",
            "row": 2,
            "col": 2,
            "widgets": [
                {
                    "name": "Stikalo",
                    "sizeX": 4,
                    "sizeY": 1,
                    "item": "plugBoilerSwitch",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "row": 4,
                    "col": 0,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "type": "button"
                },
                {
                    "name": "Trenutna moč",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugBoilerPower",
                    "font_size": "15",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 4,
                    "unit": "W",
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "W",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugBoilerPower",
                            "name": "Moč",
                            "color": "#66CCFF"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 5,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "Poraba bojler",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugBoilerConsumption",
                    "font_size": "15",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 10,
                    "unit": "kW",
                    "type": "dummy"
                },
                {
                    "name": "Dnevna poraba bojler",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugBoilerDayCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 4,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "Minute",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "MinutesStartSetter",
                    "row": 14,
                    "col": 2,
                    "floor": 0,
                    "ceil": 55,
                    "step": 5,
                    "ranges": [],
                    "type": "knob"
                },
                {
                    "name": "Ura",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "HoursStartSetter",
                    "floor": 0,
                    "ceil": 24,
                    "step": 1,
                    "ranges": [],
                    "row": 14,
                    "col": 0,
                    "type": "knob"
                },
                {
                    "name": "Ura",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "HoursStopSetter",
                    "floor": 0,
                    "ceil": 24,
                    "step": 1,
                    "ranges": [],
                    "row": 14,
                    "col": 4,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Minute",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "MinutesStopSetter",
                    "floor": 0,
                    "ceil": 55,
                    "step": 5,
                    "ranges": [],
                    "row": 14,
                    "col": 6,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Začetek",
                    "sizeX": 4,
                    "sizeY": 1,
                    "row": 13,
                    "col": 0,
                    "type": "label"
                },
                {
                    "name": "Konec",
                    "sizeX": 4,
                    "sizeY": 1,
                    "row": 13,
                    "col": 4,
                    "type": "label"
                },
                {
                    "name": "Urna poraba bojler",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugBoilerHourCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 4,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempEnergetski",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "nolinebreak": false,
                    "icon_size": 32,
                    "icon_nolinebreak": false,
                    "icon_replacestext": false,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humEnergetski",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempEnergetski",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humEnergetski",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                },
                {
                    "name": "Začetek",
                    "sizeX": 4,
                    "sizeY": 1,
                    "row": 16,
                    "col": 0,
                    "type": "label"
                },
                {
                    "name": "Konec",
                    "sizeX": 4,
                    "sizeY": 1,
                    "row": 16,
                    "col": 4,
                    "type": "label"
                },
                {
                    "name": "Ura",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "HoursStartSetter2",
                    "floor": 0,
                    "ceil": 24,
                    "step": 1,
                    "ranges": [],
                    "row": 17,
                    "col": 0,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Minute",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "MinutesStartSetter2",
                    "floor": 0,
                    "ceil": 55,
                    "step": 5,
                    "ranges": [],
                    "row": 17,
                    "col": 2,
                    "type": "knob"
                },
                {
                    "name": "Ura",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "HoursStopSetter2",
                    "floor": 0,
                    "ceil": 24,
                    "step": 1,
                    "ranges": [],
                    "readOnly": false,
                    "row": 17,
                    "col": 4,
                    "type": "knob"
                },
                {
                    "name": "Minute",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "MinutesStopSetter2",
                    "floor": 0,
                    "ceil": 55,
                    "step": 5,
                    "ranges": [],
                    "readOnly": false,
                    "row": 17,
                    "col": 6,
                    "type": "knob"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "W",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugBoilerHourCons",
                            "name": "Urna poraba",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugBoilerDayCons",
                            "name": "Dnevna poraba",
                            "color": "#FF9900"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 9,
                    "col": 0,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:30"
        },
        {
            "id": "Rekuperacija",
            "name": "Rekuperacija",
            "row": 2,
            "col": 3,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempRekuperacija",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "nolinebreak": false,
                    "icon_size": 32,
                    "icon_nolinebreak": false,
                    "icon_replacestext": false,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humRekuperacija",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempRekuperacija",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humRekuperacija",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                },
                {
                    "name": "Stikalo",
                    "sizeX": 4,
                    "sizeY": 1,
                    "item": "plugRekuSwitch",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 4,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Trenutna moč",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugRekuPower",
                    "font_size": "15",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "unit": "W",
                    "row": 4,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Urna poraba rekuperacija",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugRekuHourCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 4,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna poraba rekuperacija",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugRekuDayCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 4,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "Poraba rekuperacija",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugRekuConsumption",
                    "font_size": "15",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "kW",
                    "row": 4,
                    "col": 10,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2D",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugRekuPower",
                            "name": "Moč",
                            "color": "#66CCFF"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 5,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2W",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugRekuDayCons",
                            "name": "Dnevna poraba",
                            "color": "#FF9900"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugRekuHourCons",
                            "name": "Urna poraba",
                            "color": "#FF3300"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 9,
                    "col": 0,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:31"
        },
        {
            "id": "Razno",
            "name": "Razno",
            "row": 3,
            "col": 4,
            "widgets": [
                {
                    "name": "Dopust",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "Away",
                    "row": 0,
                    "col": 0,
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF0000",
                    "background_active": "#33CC33",
                    "type": "button",
                    "$$hashKey": "object:657"
                },
                {
                    "name": "Radio",
                    "sizeX": 2,
                    "sizeY": 2,
                    "row": 0,
                    "col": 2,
                    "backdrop_iconset": "freepik-gadgets",
                    "backdrop_icon": "audio-speaker",
                    "backdrop_center": true,
                    "choices_columns": 3,
                    "choices_source": "csv",
                    "choices": "RockRadio=http://stream.rockradio.si:9034/;stream/1,RockBalade=http://stream.rockradio.si:9036/;stream/1,Hard&Heavy=http://stream.rockradio.si:9040/;stream/1",
                    "type": "selection",
                    "$$hashKey": "object:658"
                },
                {
                    "name": "Onesposobi luč na stopnišču",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "ignoreMovementForLights",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF0000",
                    "background_active": "#33CC33",
                    "row": 0,
                    "col": 4,
                    "type": "button",
                    "$$hashKey": "object:659"
                }
            ],
            "$$hashKey": "object:37"
        },
        {
            "id": "Sesalec",
            "name": "Sesalec",
            "row": 3,
            "col": 0,
            "widgets": [
                {
                    "name": "Vtičnica",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugVacuSwitch",
                    "row": 0,
                    "col": 0,
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF0000",
                    "background_active": "#009900",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "show_item_value": true,
                    "type": "button"
                },
                {
                    "name": "Sesalec",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "vacActionControl",
                    "row": 0,
                    "col": 9,
                    "choices_columns": 3,
                    "choices_source": "server",
                    "type": "selection"
                },
                {
                    "name": "Moč sesanja",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "vacActionsFanControl",
                    "choices_columns": 3,
                    "choices_source": "server",
                    "row": 1,
                    "col": 9,
                    "type": "selection"
                },
                {
                    "name": "Vklop sesalca",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "vacActionCommand",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF0000",
                    "background_active": "#009900",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "show_item_value": true,
                    "row": 0,
                    "col": 7,
                    "type": "button"
                },
                {
                    "name": "Temperatura",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "VticnicaTemp",
                    "row": 0,
                    "col": 2,
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "type": "dummy"
                },
                {
                    "name": "Baterija",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "vacStatusBat",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 1,
                    "col": 7,
                    "type": "dummy"
                },
                {
                    "name": "Moč sesanja",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "vacStatusFanPow",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "pump",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 9,
                    "type": "dummy"
                },
                {
                    "name": "Stanje",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "vacStatusStatus",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "keyring",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 7,
                    "type": "dummy"
                },
                {
                    "name": "Napaka",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "vacStatusError",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "siren",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 7,
                    "sizeY": 5,
                    "row": 1,
                    "col": 0,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "vacStatusBat",
                            "name": "Baterija",
                            "color": "#33CC33"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugVacuSwitch",
                            "name": "Vtičnica"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "type": "chart"
                },
                {
                    "name": "Začetna stran",
                    "sizeX": 2,
                    "sizeY": 1,
                    "action_type": "navigate",
                    "font_size": "20",
                    "navigate_type": "dashboard",
                    "navigate_dashboard": "Začetno okno",
                    "row": 0,
                    "col": 4,
                    "type": "button"
                }
            ],
            "$$hashKey": "object:33"
        },
        {
            "id": "Kuhinja",
            "name": "Kuhinja",
            "row": 1,
            "col": 3,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempKuhinja",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "nolinebreak": false,
                    "icon_size": 32,
                    "icon_nolinebreak": false,
                    "icon_replacestext": false,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humKuhinja",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempKuhinja",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humKuhinja",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeKuhinja",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Svetlost",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "gibanjeKuhinjalum",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "slider",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 2,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": false,
                            "display_area": true,
                            "item": "gibanjeKuhinjalum",
                            "name": "Osvetljenost",
                            "color": "#FFFF00"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "gibanjeKuhinja",
                            "name": "Gibanje",
                            "color": "#FF0000",
                            "display_dots": false
                        }
                    ],
                    "liveUpdates": {},
                    "row": 6,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "Stikalo",
                    "sizeX": 4,
                    "sizeY": 1,
                    "item": "plugFridSwitch",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 10,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Trenutna moč",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugFridPower",
                    "font_size": "15",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "unit": "W",
                    "row": 10,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Urna poraba hladilnika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugFridHourCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 10,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna poraba hladilnika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "PlugFridDayCons",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "",
                    "row": 10,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "Poraba hladilnika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugFridConsumption",
                    "font_size": "15",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "poweroutlet",
                    "backdrop_center": true,
                    "unit": "kW",
                    "row": 10,
                    "col": 10,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2D",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugFridPower",
                            "name": "Moč",
                            "color": "#66CCFF"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 11,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2W",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugFridDayCons",
                            "name": "Dnevna poraba",
                            "color": "#FF9900"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugFridHourCons",
                            "name": "Urna poraba",
                            "color": "#FF3300"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 15,
                    "col": 0,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:26"
        },
        {
            "id": "Stroja",
            "name": "Stroja",
            "row": 3,
            "col": 1,
            "widgets": [
                {
                    "name": "Vtičnica",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "plugPralSwitch",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "transparent",
                    "foreground": "#B3B3B3",
                    "font_size": "",
                    "foreground_active": "#33CC33",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "washingmachine",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Trenutna moč",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugPralPower",
                    "font_size": "15",
                    "useserverformat": true,
                    "row": 0,
                    "col": 1,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "type": "dummy"
                },
                {
                    "name": "Poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "plugPralConsumption",
                    "font_size": "20",
                    "useserverformat": true,
                    "row": 0,
                    "col": 3,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "type": "dummy"
                },
                {
                    "name": "Urna poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "PlugPralHourCons",
                    "font_size": "20",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "PlugPralDayCons",
                    "font_size": "20",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 9,
                    "type": "dummy"
                },
                {
                    "name": "Vtičnica",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "plugSusiSwitch",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "transparent",
                    "foreground": "#B3B3B3",
                    "font_size": "",
                    "foreground_active": "#33CC33",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "dryer",
                    "backdrop_center": true,
                    "row": 9,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Trenutna moč",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "plugSusiPower",
                    "font_size": "15",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "row": 9,
                    "col": 1,
                    "type": "dummy"
                },
                {
                    "name": "Poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "plugSusiConsumption",
                    "font_size": "20",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "row": 9,
                    "col": 3,
                    "type": "dummy"
                },
                {
                    "name": "Urna poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "PlugSusiHourCons",
                    "font_size": "20",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "row": 9,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna poraba",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "PlugSusiDayCons",
                    "font_size": "20",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "energy",
                    "backdrop_center": true,
                    "row": 9,
                    "col": 9,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugPralPower",
                            "name": "Moč",
                            "color": "#66CCFF"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 1,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "M",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugPralDayCons",
                            "name": "Dnevna poraba",
                            "color": "#FF9900"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugPralHourCons",
                            "name": "Urna poraba",
                            "color": "#FF3300"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 5,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "2D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "plugSusiPower",
                            "name": "Moč",
                            "color": "#66CCFF"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 10,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "M",
                    "axis": {
                        "y": {}
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugSusiDayCons",
                            "name": "Dnevna poraba",
                            "color": "#FF9900"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "PlugSusiHourCons",
                            "name": "Urna poraba",
                            "color": "#FF3300"
                        }
                    ],
                    "liveUpdates": {
                        "enabled": true
                    },
                    "row": 14,
                    "col": 0,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:34"
        },
        {
            "id": "Ogrevanje",
            "name": "Ogrevanje",
            "row": 3,
            "col": 3,
            "widgets": [
                {
                    "name": "Kopalnica",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetKopalnicaZ",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [
                        {
                            "min": 17,
                            "max": 25
                        }
                    ],
                    "row": 3,
                    "col": 0,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Zgoraj",
                    "sizeX": 10,
                    "sizeY": 1,
                    "row": 2,
                    "col": 0,
                    "font_size": "40",
                    "type": "label"
                },
                {
                    "name": "Spalnica",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetSpalnica",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 3,
                    "col": 2,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Julija",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetJulija",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 3,
                    "col": 4,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Aljaž",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetAljaz",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 3,
                    "col": 6,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Hodnik",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetHodnikZ",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 3,
                    "col": 8,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Pritličje",
                    "sizeX": 10,
                    "sizeY": 1,
                    "row": 8,
                    "col": 0,
                    "font_size": "40",
                    "type": "label"
                },
                {
                    "name": "Kopalnica",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetKopalnicaS",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 9,
                    "col": 0,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Hodnik",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetHodnikS",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 9,
                    "col": 2,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Kuhinja",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetKuhinja",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 9,
                    "col": 4,
                    "readOnly": false,
                    "useserverformat": false,
                    "type": "knob"
                },
                {
                    "name": "Dnevna",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetDnevna",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 9,
                    "col": 6,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Kabinet",
                    "sizeX": 2,
                    "sizeY": 2,
                    "item": "SetKabinet",
                    "floor": 17,
                    "ceil": 25,
                    "step": 0.1,
                    "subTextEnabled": true,
                    "ranges": [],
                    "row": 9,
                    "col": 8,
                    "readOnly": false,
                    "type": "knob"
                },
                {
                    "name": "Ročni način",
                    "sizeX": 5,
                    "sizeY": 1,
                    "item": "Override",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 0,
                    "col": 5,
                    "type": "button"
                },
                {
                    "name": "Fizično ogrevanje",
                    "sizeX": 10,
                    "sizeY": 1,
                    "item": "fhsHeater",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 1,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Časovnica ogrevanja",
                    "sizeX": 12,
                    "sizeY": 4,
                    "row": 14,
                    "col": 0,
                    "period": "D",
                    "colorMaps": [
                        {
                            "state": "ON",
                            "color": "#00CC00"
                        },
                        {
                            "state": "OFF",
                            "color": "#89a"
                        }
                    ],
                    "series": [
                        {
                            "item": "LogOgrevanje",
                            "name": "Ogrevanje"
                        },
                        {
                            "item": "LogKopalnicaZ",
                            "name": "Kopalnica zgoraj"
                        },
                        {
                            "item": "LogSpalnica",
                            "name": "Spalnica"
                        },
                        {
                            "item": "LogJulija",
                            "name": "Julija"
                        },
                        {
                            "item": "LogAljaz",
                            "name": "Aljaž"
                        },
                        {
                            "item": "LogHodnikZ",
                            "name": "Hodnik zgoraj"
                        },
                        {
                            "item": "LogHodnikS",
                            "name": "Hodnik spodaj"
                        },
                        {
                            "item": "LogKopalnicaS",
                            "name": "Kopalnica spodaj"
                        },
                        {
                            "item": "LogKuhinja",
                            "name": "Kuhinja"
                        },
                        {
                            "item": "LogDnevna",
                            "name": "Dnevna"
                        },
                        {
                            "item": "LogKabinet",
                            "name": "Kabinet"
                        },
                        {
                            "item": "fhsHeater",
                            "name": "Peč"
                        }
                    ],
                    "type": "timeline"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManKopalnicaZ",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 6,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManSpalnica",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 6,
                    "col": 2,
                    "type": "button"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManJulija",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 6,
                    "col": 4,
                    "type": "button"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManAljaz",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 6,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManHodnikZ",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 6,
                    "col": 8,
                    "type": "button"
                },
                {
                    "name": "Začetna stran",
                    "sizeX": 2,
                    "sizeY": 1,
                    "row": 0,
                    "col": 10,
                    "action_type": "navigate",
                    "font_size": "20",
                    "navigate_type": "dashboard",
                    "navigate_dashboard": "Začetno okno",
                    "type": "button"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 5,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": false
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempSpalnica",
                            "name": "Spalnica",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempKopalnicaZ",
                            "name": "Kopalnica zgoraj",
                            "color": "#FFFF00"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempJulija",
                            "name": "Julija",
                            "color": "#99FF33"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempAljaz",
                            "name": "Aljaž",
                            "color": "#FF9999"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempHodnikZ",
                            "name": "Hodnik zgoraj",
                            "color": "#006600"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempKopalnicaS",
                            "name": "Kopalnica spodaj",
                            "color": "#FF00FF"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempKuhinja",
                            "name": "Kuhinja",
                            "color": "#669999"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempDnevna",
                            "name": "Dnevna",
                            "color": "#663300"
                        },
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempKabinet",
                            "name": "Kabinet",
                            "color": "#FF9900"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 18,
                    "col": 0,
                    "type": "chart"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsKopalnicaS",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogKopalnicaS",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 1,
                    "type": "button"
                },
                {
                    "name": "Logično stikalo za ogrevanje",
                    "sizeX": 5,
                    "sizeY": 1,
                    "item": "Heating",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 0,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsKopalnicaZ",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogKopalnicaZ",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 1,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsSpalnica",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 2,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsJulija",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 4,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsAljaz",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsHodnikZ",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 8,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogJulija",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 5,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogSpalnica",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 3,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogAljaz",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 7,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogHodnikZ",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 7,
                    "col": 9,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsDnevna",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsKuhinja",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 4,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsKabinet",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 8,
                    "type": "button"
                },
                {
                    "name": "Fizični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "fhsHodnikS",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 2,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogHodnikS",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 3,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogKabinet",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 9,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogDnevna",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 7,
                    "type": "button"
                },
                {
                    "name": "Logični ventil",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "LogKuhinja",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 13,
                    "col": 5,
                    "type": "button"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "row": 5,
                    "col": 0,
                    "config": {
                        "value": "DifKopalnicaZ",
                        "dashboard": "Kopalnica zgoraj",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifHodnikZ",
                        "dashboard": "Hodnik zgoraj",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 5,
                    "col": 8,
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifAljaz",
                        "dashboard": "Aljaž",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 5,
                    "col": 6,
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifJulija",
                        "dashboard": "Julija",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 5,
                    "col": 4,
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifSpalnica",
                        "dashboard": "Spalnica",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 5,
                    "col": 2,
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifKopalnicaS",
                        "dashboard": "Kopalnica spodaj",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 11,
                    "col": 0,
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifHodnikS",
                        "dashboard": "Hodnik spodaj",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 11,
                    "col": 2,
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifKuhinja",
                        "dashboard": "Kuhinja",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 11,
                    "col": 4,
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifDnevna",
                        "dashboard": "Dnevna",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 11,
                    "col": 6,
                    "type": "template"
                },
                {
                    "name": "Razlika",
                    "sizeX": 2,
                    "sizeY": 1,
                    "customwidget": "Button - Display",
                    "config": {
                        "value": "DifKabinet",
                        "dashboard": "Kabinet",
                        "font_size": 30,
                        "unit": "°C",
                        "background": "transparent",
                        "foreground": "#66CCFF"
                    },
                    "row": 11,
                    "col": 8,
                    "type": "template"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManKopalnicaS",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 12,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManHodnikS",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 12,
                    "col": 2,
                    "type": "button"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManKuhinja",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 12,
                    "col": 4,
                    "type": "button"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManDnevna",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 12,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Ročni",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ManKabinet",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 12,
                    "col": 8,
                    "type": "button"
                },
                {
                    "name": "Dnevna",
                    "sizeX": 6,
                    "sizeY": 5,
                    "customwidget": "thermo-knob",
                    "row": 23,
                    "col": 1,
                    "config": {
                        "barcolor": "#FFAE1A",
                        "min": "15",
                        "max": "35",
                        "step": "1",
                        "current": "tempDnevna",
                        "setpoint": "SetDnevna",
                        "heating": "fhsDnevna",
                        "label": "Dnevna"
                    },
                    "type": "template"
                }
            ],
            "$$hashKey": "object:36"
        },
        {
            "id": "Gibanje",
            "name": "Gibanje",
            "row": 4,
            "col": 3,
            "widgets": [
                {
                    "name": "Hodnik zgoraj",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeHodnikZ",
                    "row": 2,
                    "col": 0,
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "type": "dummy"
                },
                {
                    "name": "Nad stopnicami",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeHodnikZ",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 2,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeDnevna",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Pod stopnicami",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeHodnikS",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Kuhinja",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeKuhinja",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 2,
                    "type": "dummy"
                },
                {
                    "name": "Vhod",
                    "sizeX": 4,
                    "sizeY": 2,
                    "item": "gibanjeVhod",
                    "useserverformat": false,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "motion",
                    "backdrop_center": true,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                }
            ],
            "$$hashKey": "object:40"
        },
        {
            "id": "Lopa",
            "name": "Lopa",
            "row": 5,
            "col": 4,
            "widgets": [
                {
                    "name": "Temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "tempLopa",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "nolinebreak": false,
                    "icon_size": 32,
                    "icon_nolinebreak": false,
                    "icon_replacestext": false,
                    "row": 0,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Vlažnost",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "humLopa",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "humidity",
                    "backdrop_center": true,
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 9,
                    "sizeY": 4,
                    "charttype": "interactive",
                    "period": "D",
                    "axis": {
                        "y": {},
                        "y2": {
                            "enabled": true
                        }
                    },
                    "series": [
                        {
                            "axis": "y",
                            "display_line": true,
                            "display_area": false,
                            "item": "tempLopa",
                            "name": "Temperatura",
                            "color": "#FF3300"
                        },
                        {
                            "axis": "y2",
                            "display_line": true,
                            "display_area": false,
                            "item": "humLopa",
                            "name": "Vlažnost",
                            "color": "#0000FF"
                        }
                    ],
                    "liveUpdates": {},
                    "row": 0,
                    "col": 3,
                    "type": "chart"
                }
            ],
            "$$hashKey": "object:42"
        },
        {
            "id": "Chromecast",
            "name": "Chromecast",
            "row": 2,
            "col": 4,
            "widgets": [
                {
                    "name": "Začetna stran",
                    "sizeX": 2,
                    "sizeY": 1,
                    "action_type": "navigate",
                    "font_size": "20",
                    "navigate_type": "dashboard",
                    "navigate_dashboard": "Začetno okno",
                    "row": 0,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "New Widget",
                    "sizeX": 4,
                    "sizeY": 2,
                    "customwidget": "Selection",
                    "row": 1,
                    "col": 0,
                    "config": {
                        "title": "Radijske postaje",
                        "labels": "RockRadio,RockRadio Balade,RockRadio Hard&Heavy,Radio1,Val 202,Antenne Bayern Chillout,Antenne Bayern Classic Rock Live,Antenne Bayern Rock,Antenne Bayern Heavy Metal, Antenne Bayern Hip Hop,N-Joy,Black Beats,Workout Hits,Relax",
                        "values": "http://stream.rockradio.si:9034/;stream/1,http://stream.rockradio.si:9036/;stream/1,http://stream.rockradio.si:9040/;stream/1,http://live.radio1.si/Radio1GOR,http://mp3.rtvslo.si/val202,https://mp3channels.webradio.de/chillout,https://mp3channels.webradio.de/classic-rock-live,https://mp3channels.webradio.de/rockantenne,https://mp3channels.webradio.de/heavy-metal,https://mp3channels.webradio.de/hip-hop,https://ndr-njoy-live.sslcast.addradio.de/ndr/njoy/live/mp3/128/stream.mp3,https://mp3channels.webradio.de/black-beatz,https://mp3channels.webradio.de/workout-hits,https://mp3channels.webradio.de/relax",
                        "item": "CC_PlayURIOnkyo"
                    },
                    "type": "template"
                },
                {
                    "name": "Onkyo",
                    "sizeX": 4,
                    "sizeY": 4,
                    "item": "CC_VolumeOnkyo",
                    "row": 0,
                    "col": 4,
                    "floor": 0,
                    "ceil": 100,
                    "step": 1,
                    "useserverformat": false,
                    "subTextEnabled": true,
                    "scaleEnabled": true,
                    "ranges": [],
                    "type": "knob"
                }
            ],
            "$$hashKey": "object:32"
        },
        {
            "id": "Začetno okno",
            "name": "Začetno okno",
            "row": 0,
            "col": 0,
            "widgets": [
                {
                    "name": "Ogrevanje",
                    "sizeX": 3,
                    "sizeY": 2,
                    "row": 3,
                    "col": 0,
                    "action_type": "navigate",
                    "backdrop_iconset": "custom-icon",
                    "navigate_type": "dashboard",
                    "navigate_dashboard": "Ogrevanje",
                    "font_size": "25",
                    "type": "button"
                },
                {
                    "name": "Muzika",
                    "sizeX": 4,
                    "sizeY": 3,
                    "customwidget": "MusicControl",
                    "row": 1,
                    "col": 3,
                    "config": {
                        "station_name": "RadioStation",
                        "action_item": "CC_ControlOnkyo",
                        "status_item": "IdlingAudio",
                        "volume": "CC_VolumeOnkyo",
                        "next_item": "NextRadioStation",
                        "prev_item": "PrevRadioStation",
                        "my_name": "",
                        "step": 1
                    },
                    "type": "template"
                },
                {
                    "name": "Občutena temperatura",
                    "sizeX": 3,
                    "sizeY": 2,
                    "item": "gOutFeelTemp",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "temperature",
                    "backdrop_center": true,
                    "row": 1,
                    "col": 0,
                    "usedescription": true,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 12,
                    "sizeY": 1,
                    "item": "Message",
                    "row": 0,
                    "col": 0,
                    "font_size": "25",
                    "backdrop_iconset": "freepik-gadgets",
                    "backdrop_icon": "protest-speaker",
                    "backdrop_center": true,
                    "type": "dummy"
                },
                {
                    "name": "tmp",
                    "sizeX": 5,
                    "sizeY": 1,
                    "item": "SwitchTempCumnataMessage",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": true,
                    "row": 1,
                    "col": 7,
                    "type": "button"
                },
                {
                    "name": "Občutena temperatura zunaj",
                    "sizeX": 2,
                    "sizeY": 2,
                    "customwidget": "Button - Display",
                    "row": 2,
                    "col": 7,
                    "dontwrap": false,
                    "nobackground": false,
                    "config": {
                        "value": "gOutFeelTemp",
                        "dashboard": "Zunaj",
                        "unit": "°C",
                        "font_size": 30,
                        "backdrop_icon_iconset": "eclipse-smarthome-classic",
                        "backdrop_icon": "temperature",
                        "foreground": "#33CCFF"
                    },
                    "type": "template"
                }
            ],
            "$$hashKey": "object:18"
        },
        {
            "id": "Baterije",
            "name": "Baterije",
            "row": 3,
            "col": 2,
            "widgets": [
                {
                    "name": "Aljaž",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryAljaz",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 1,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Julija",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryJulija",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 1,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Spalnica",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batterySpalnica",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 1,
                    "col": 2,
                    "type": "dummy"
                },
                {
                    "name": "Hodnik",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryHodnikZ",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 1,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "Zgoraj",
                    "sizeX": 12,
                    "sizeY": 1,
                    "row": 0,
                    "col": 0,
                    "type": "label"
                },
                {
                    "name": "Kopalnica",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryKopalnicaZ",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 1,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Pritličje",
                    "sizeX": 12,
                    "sizeY": 1,
                    "row": 2,
                    "col": 0,
                    "type": "label"
                },
                {
                    "name": "Kuhinja",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryKuhinja",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Hodnik",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryHodnikS",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Kopalnica",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryKopalnicaS",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 2,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryDnevna",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Dvižno drsno okno",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gRaiseWindowBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Nagibno drsno okno",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gTiltWindowBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Kabinet",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryKabinet",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "Vhodna vrata",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gFrontDoorBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Energetski prostor",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryEnergetski",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 3,
                    "col": 10,
                    "type": "dummy"
                },
                {
                    "name": "Čumnata",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryCumnata",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Senzor dima",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "dimCumnataBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Rekuperacija",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryRekuperacija",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 4,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "Lopa",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "batteryLopa",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 5,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "Gibanje dnevna",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeDnevnaBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 6,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Gibanje nad stopnicami",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeHodnikZBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 1,
                    "col": 10,
                    "type": "dummy"
                },
                {
                    "name": "Gibanje kuhinja",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeKuhinjaBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 6,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "Gibanje pod stopnicami",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "gibanjeHodnikSBattery",
                    "font_size": "30",
                    "useserverformat": true,
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "battery",
                    "backdrop_center": true,
                    "row": 6,
                    "col": 0,
                    "type": "dummy"
                }
            ],
            "$$hashKey": "object:35"
        },
        {
            "id": "Žaluzije",
            "name": "Žaluzije",
            "row": 4,
            "col": 0,
            "widgets": [
                {
                    "name": "Aljaž GOR",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "ActAljazUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 3,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Aljaž DOL",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "ActAljazDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 4,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Vse GOR",
                    "sizeX": 6,
                    "sizeY": 1,
                    "item": "AllCompleteUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 0,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Zgoraj",
                    "sizeX": 9,
                    "sizeY": 1,
                    "font_size": "40",
                    "row": 1,
                    "col": 0,
                    "type": "label"
                },
                {
                    "name": "Julija GOR",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "ActJulijaUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 3,
                    "col": 3,
                    "type": "button"
                },
                {
                    "name": "Julija DOL",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "ActJulijaDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 4,
                    "col": 3,
                    "type": "button"
                },
                {
                    "name": "Spalnica GOR",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "ActSpalnicaUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 3,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Spalnica DOL",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "ActSpalnicaDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 4,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Spodaj",
                    "sizeX": 12,
                    "sizeY": 1,
                    "font_size": "40",
                    "row": 6,
                    "col": 0,
                    "type": "label"
                },
                {
                    "name": "Kuhinja levo GOR",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActKuhinjaLevUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 8,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Kuhinja levo DOL",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActKuhinjaLevDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 9,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Kuhinja desno GOR",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActKuhinjaDesUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 8,
                    "col": 2,
                    "type": "button"
                },
                {
                    "name": "Kuhinja desno DOL",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActKuhinjaDesDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 9,
                    "col": 2,
                    "type": "button"
                },
                {
                    "name": "Jedilnica GOR",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActJedilnicaUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 8,
                    "col": 4,
                    "type": "button"
                },
                {
                    "name": "Jedilnica DOL",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActJedilnicaDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 9,
                    "col": 4,
                    "type": "button"
                },
                {
                    "name": "Dnevna desno GOR",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActDnevnaDesUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 8,
                    "col": 8,
                    "type": "button"
                },
                {
                    "name": "Dnevna desno DOL",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActDnevnaDesDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 9,
                    "col": 8,
                    "type": "button"
                },
                {
                    "name": "Dnevna levo GOR",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActDnevnaLevUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 8,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Dnevna levo DOL",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActDnevnaLevDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 9,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Kabinet GOR",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalKabinetUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 10,
                    "type": "button"
                },
                {
                    "name": "Kabinet DOL",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalKabinetDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 11,
                    "type": "button"
                },
                {
                    "name": "Vse DOL",
                    "sizeX": 6,
                    "sizeY": 1,
                    "item": "AllCompleteDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 0,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "StateSpalnica",
                    "row": 2,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "StateKabinet",
                    "row": 7,
                    "col": 10,
                    "type": "dummy"
                },
                {
                    "name": "Dnevna desno GOR",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalDnevnaDesUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 8,
                    "type": "button"
                },
                {
                    "name": "Dnevna desno DOL",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalDnevnaDesDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 9,
                    "type": "button"
                },
                {
                    "name": "Kabinet GOR",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActKabinetUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 8,
                    "col": 10,
                    "type": "button"
                },
                {
                    "name": "Kabinet DOL",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "ActKabinetDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 9,
                    "col": 10,
                    "type": "button"
                },
                {
                    "name": "",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "StateJulija",
                    "row": 2,
                    "col": 3,
                    "type": "dummy"
                },
                {
                    "name": "Julija Gor",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalJulijaUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 5,
                    "col": 3,
                    "type": "button"
                },
                {
                    "name": "Julija Dol",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalJulijaDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 5,
                    "col": 5,
                    "type": "button"
                },
                {
                    "name": "",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "StateAljaz",
                    "row": 2,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "Aljaž Gor",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalAljazUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 5,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Aljaž Dol",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalAljazDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 5,
                    "col": 8,
                    "type": "button"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "StateDnevnaDes",
                    "row": 7,
                    "col": 8,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "StateDnevnaLev",
                    "row": 7,
                    "col": 6,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "StateKuhinjaLev",
                    "row": 7,
                    "col": 0,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "StateJedilnica",
                    "row": 7,
                    "col": 4,
                    "type": "dummy"
                },
                {
                    "name": "",
                    "sizeX": 2,
                    "sizeY": 1,
                    "item": "StateKuhinjaDes",
                    "row": 7,
                    "col": 2,
                    "type": "dummy"
                },
                {
                    "name": "Pritličje privzdigni",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "GroundFlorPeek",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 1,
                    "col": 9,
                    "type": "button"
                },
                {
                    "name": "Pritličje vzdgni",
                    "sizeX": 3,
                    "sizeY": 1,
                    "item": "BlindsGroundFlorUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 2,
                    "col": 9,
                    "type": "button"
                },
                {
                    "name": "Kuhinja desno Gor",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalKuhinjaDesUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 2,
                    "type": "button"
                },
                {
                    "name": "Kuhinja desno Dol",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalKuhinjaDesDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 3,
                    "type": "button"
                },
                {
                    "name": "Spalnica Gor",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalSpalnicaUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 5,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Spalnica Dol",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalSpalnicaDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 5,
                    "col": 2,
                    "type": "button"
                },
                {
                    "name": "Kuhinja levo Gor",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalKuhinjaLevUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 0,
                    "type": "button"
                },
                {
                    "name": "Kuhinja levo Dol",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalKuhinjaLevDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 1,
                    "type": "button"
                },
                {
                    "name": "Jedilnica Gor",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalJedilnicaUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 4,
                    "type": "button"
                },
                {
                    "name": "Jedilnica Dol",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalJedilnicaDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 5,
                    "type": "button"
                },
                {
                    "name": "Dnevna levo Gor",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalDnevnaLevUp",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 6,
                    "type": "button"
                },
                {
                    "name": "Dnevna levo Dol",
                    "sizeX": 1,
                    "sizeY": 1,
                    "item": "ZalDnevnaLevDo",
                    "action_type": "toggle",
                    "command": "ON",
                    "command_alt": "OFF",
                    "background": "#FF3300",
                    "foreground": "#000000",
                    "background_active": "#009900",
                    "show_item_value": true,
                    "font_size": "15",
                    "backdrop_iconset": "eclipse-smarthome-classic",
                    "backdrop_icon": "bath",
                    "backdrop_center": true,
                    "value_font_size": "15",
                    "value_useserverformat": false,
                    "row": 10,
                    "col": 7,
                    "type": "button"
                }
            ],
            "$$hashKey": "object:38"
        },
        {
            "id": "Logs",
            "name": "Logs",
            "row": 4,
            "col": 1,
            "widgets": [
                {
                    "name": "New Widget",
                    "sizeX": 12,
                    "sizeY": 6,
                    "row": 0,
                    "col": 0,
                    "url_source": "static",
                    "frameUrl": "http://192.168.1.202:8080/static/logs.html",
                    "type": "frame"
                }
            ],
            "$$hashKey": "object:39"
        }
    ],
    "menucolumns": 5,
    "default": false,
    "settings": {
        "theme": "material-dark",
        "panel_name": "Rezidenca Gantar",
        "hide_speak_button": true
    },
    "customwidgets": {
        "MusicControl": {
            "template": "<style>\n.btn-pad{\n  padding:20px 32px;\n  }\n  .btn-radius{\n  padding:40px 40px;\n  border-radius: 50%;!important\n  background-color: #d23f31;\n  height: 56px;\n  width: 56px;\n  box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);\n  box-sizing: content-box;\n  margin-left:-13px;\n  position: relative;\n  z-index:1000;\n  cursor:pointer;\n  }\n  .btn-red{\n  background-color:red;\n  }\n  .glyphicon-text{\n  \tfont-size:xx-large;\n  \tpadding: 10px 0 0 5px;\n  }\n  .btn-lf{\n  position: relative;\n  top: -6px;\n  background-color:#fff;\n  box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);\n  color:#000;\n  border-top-left-radius:50%;\n  border-bottom-left-radius:50%;\n  cursor:pointer;\n  }\n  .btn-lf:hover{\n  background-color:#eaeaea;\n  color:#fff;\n  }\n  .btn-rt{\n  position: relative;\n  top: -6px;\n  margin-left:-13px;\n  background-color:#fff;\n  box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);\n  color:#000;\n  border-top-right-radius:50%;\n  border-bottom-right-radius:50%;\n  cursor:pointer;\n  }\n  .btn-rt:hover{\n  background-color:#eaeaea;\n  color:#fff;\n  }\n  .title-text{\n  text-align: center;\n  display:block;\n  }\n  \n  .div-slider{\n  width:280px;\n  margin:0 auto;\n  }\n</style>\n\n<div>\n  <label class=\"title-text\">{{itemValue(config.station_name)}}</label>\n  <div class=\"btn-group\">\n    <label class=\"btn-pad btn-lf\"\n           ng-click=\"sendCmd(config.prev_item, itemValue(config.prev_item) == 'ON' ? 'OFF' : 'ON')\"><i class=\"glyphicon glyphicon-step-backward\"></i></label>\n  \t<label class=\"btn-radius btn-danger\" ng-if=\"itemValue(config.action_item) !='PLAY'\"\n           ng-click=\"sendCmd(config.action_item,'PLAY')\"><i class=\"glyphicon glyphicon-play glyphicon-text\"></i></label>\n    <label class=\"btn-radius btn-warning\" ng-if=\"itemValue(config.action_item) =='PLAY'\"\n           ng-click=\"sendCmd(config.action_item,'PAUSE')\"><i class=\"glyphicon glyphicon-pause glyphicon-text\"></i></label>\n    <label class=\"btn-pad btn-rt\"\n           ng-click=\"sendCmd(config.next_item, itemValue(config.next_item) == 'ON' ? 'OFF' : 'ON')\"><i class=\"glyphicon glyphicon-step-forward\"></i></label>\n  </div>\n  <div class=\"div-slider\">\n<div ng-init='model={\"item\": (config.volume), \"floor\": 0, \"ceil\": 100, \"step\":(config.step)}'>\n  <widget-slider ng-model=\"model\" />\n \n</div>\n  </div>\n</div>",
            "name": "Music Control Chromecast",
            "author": "Žiga on Mike Murphy's shoulders",
            "description": "Music Control Player",
            "id": "MusicControl",
            "settings": [
                {
                    "id": "action_item",
                    "label": "Send action to item",
                    "type": "item"
                },
                {
                    "id": "volume",
                    "label": "Volume Item",
                    "type": "item"
                },
                {
                    "id": "step",
                    "label": "Volume Increment",
                    "type": "number"
                },
                {
                    "id": "next_item",
                    "label": "Next Command Text",
                    "type": "item"
                },
                {
                    "id": "prev_item",
                    "label": "Previous Command Text",
                    "type": "item"
                },
                {
                    "id": "station_name",
                    "label": "Radijska postaja",
                    "default": "Postaja",
                    "type": "item"
                }
            ]
        },
        "Button - Display": {
            "template": "<div ng-style=\"{ 'background-color': (config.background)}\" style=\"top:0;bottom:0;left:0;right:0;position:absolute\" ng-init=\"model={ action_type: 'navigate', navigate_dashboard: (config.dashboard), name: itemValue(config.value) + (config.unit), foreground: (config.foreground),  font_size: (config.font_size) , backdrop_iconset: (config.backdrop_icon_iconset), backdrop_icon: (config.backdrop_icon), backdrop_center: 'true' }\">\n\t\t<widget-button ng-model=\"model\"></widget-button>\n</div>\t\n",
            "readme_url": "https://community.openhab.org/t/46045",
            "id": "Button - Display",
            "settings": [
                {
                    "id": "dashboard",
                    "label": "Dashboard Name",
                    "description": "Dashboard to go when clicking on the button",
                    "type": "string"
                },
                {
                    "id": "value",
                    "label": "Displayed Item",
                    "type": "item"
                },
                {
                    "id": "unit",
                    "label": "Unit",
                    "type": "string"
                },
                {
                    "id": "background",
                    "label": "Background Color",
                    "type": "color"
                },
                {
                    "id": "foreground",
                    "label": "Font Color",
                    "type": "color"
                },
                {
                    "id": "font_size",
                    "label": "Font Size",
                    "type": "number"
                },
                {
                    "id": "backdrop_icon",
                    "label": "Select Icon",
                    "type": "icon"
                }
            ]
        },
        "SonosAlbumSelect": {
            "name": "Sonos Album Select",
            "author": "Scootaash",
            "template": "<style>\nstr1 = \"Hello \";\nvar str2 = \"world!\";\nvar res = str1.concat(str2);\n</style>\n  \n<style>\n   .sonoscover {width: 90%; height: 14em; border: 0; color: white; background-color: transparent;}\n   .sonosbutton {width: 90%; height: 4em; border: 0; color: white; background-color: transparent;}\n   .sonosctrl {width: 90%; height: 3em; border: 2; color: white; background-color: #2B2B49; opacity: 0.5;}\n   .sonosbuttontxt_white {width: 100%;height: 4em; border: 0; color: white;font-size: 10pt; background-color: transparent;}\n   .sonosbuttontxt_red {width: 100%;height: 4em; border: 0; color: red;font-size: 10pt; background-color: transparent;}\n   .modgrid {padding-left: 2px; padding-right: 2px; padding-top: 2px; padding-bottom: 2px;}\n   .modgrid2 {height: 6em; padding-left: 2px; padding-right: 2px; padding-top: 2px; padding-bottom: 2px;}\n   .butticon {font-size:1em;}\n</style>\n\n\n\n<div class=\"row\" style=\"border-top: 0px solid white; padding-top: 40px; background-color: transparent;\">\n    \n    <div class=\"col-sm-3 modgrid\">{{config.Album1}}\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/{{config.Icon1}}.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd('SN_DiningRoom_Faves',config.Album1)\">\n         </button>\n    </div>\t\n \n    <div class=\"col-sm-3 modgrid\">{{config.Album2}}\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/{{config.Icon2}}.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd('SN_DiningRoom_Faves',config.Album2)\">\n         </button>\n    </div>\t\n  \n    <div class=\"col-sm-3 modgrid\">{{config.Album3}}\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/{{config.Icon3}}.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd('SN_DiningRoom_Faves',config.Album3)\">\n         </button>\n    </div>\t\t\n \n    <div class=\"col-sm-3 modgrid\">{{config.Album4}}\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/{{config.Icon4}}.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd('SN_DiningRoom_Faves',config.Album4)\">\n         </button>\n    </div>\t\n</div> \n<!End of Row>\n\n\n<div class=\"row\" style=\"border-bottom: 0px solid white; padding-bottom: 10px; padding-top: 00px; background-color: transparent;;\">\n    \n    <div class=\"col-sm-3 modgrid\">{{config.Album5}}\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/{{config.Icon5}}.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd('SN_DiningRoom_Faves',config.Album5)\">\n         </button>\n    </div>\t\n \n    <div class=\"col-sm-3 modgrid\">{{config.Album6}}\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/{{config.Icon6}}.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd('SN_DiningRoom_Faves',config.Album6)\">\n         </button>\n    </div>\t\n  \n    <div class=\"col-sm-3 modgrid\">{{config.Album7}}\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/{{config.Icon7}}.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd('SN_DiningRoom_Faves',config.Album7)\">\n         </button>\n    </div>\t\t\n \n    <div class=\"col-sm-3 modgrid\">{{config.Album8}}\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/{{config.Icon8}}.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd('SN_DiningRoom_Faves',config.Album8)\">\n         </button>\n    </div>\t\n</div> \n<!End of Row>",
            "id": "SonosAlbumSelect",
            "settings": [
                {
                    "id": "Album1",
                    "description": "Must be name of Sonos Playlist, png icon in /html/Sonos and will be used as Header name",
                    "label": "Album1",
                    "default": "Latin",
                    "type": "string"
                },
                {
                    "description": "Must be name of Sonos Playlist, png icon in /html/Sonos and will be used as Header name",
                    "id": "Album2",
                    "default": "Zack",
                    "type": "string"
                },
                {
                    "description": "Must be name of Sonos Playlist, png icon in /html/Sonos and will be used as Header name",
                    "id": "Album3",
                    "default": "Jo Busy",
                    "type": "string"
                },
                {
                    "description": "Must be name of Sonos Playlist, png icon in /html/Sonos and will be used as Header name",
                    "id": "Album4",
                    "default": "Baseballs",
                    "type": "string"
                },
                {
                    "description": "Must be name of Sonos Playlist, png icon in /html/Sonos and will be used as Header name",
                    "id": "Album5",
                    "type": "string"
                },
                {
                    "description": "Must be name of Sonos Playlist, png icon in /html/Sonos and will be used as Header name",
                    "id": "Album6",
                    "type": "string"
                },
                {
                    "description": "Must be name of Sonos Playlist, png icon in /html/Sonos and will be used as Header name",
                    "id": "Album7",
                    "type": "string"
                },
                {
                    "description": "Must be name of Sonos Playlist and will be used as Header name",
                    "id": "Album8",
                    "type": "string"
                },
                {
                    "description": "Must be name of png icon in /html/Sonos with no spaces",
                    "id": "Icon1",
                    "default": "Latin",
                    "type": "string"
                },
                {
                    "description": "Must be name of png icon in /html/Sonos with no spaces",
                    "id": "Icon2",
                    "default": "Zack",
                    "type": "string"
                },
                {
                    "description": "Must be name of png icon in /html/Sonos with no spaces",
                    "id": "Icon3",
                    "default": "JoBusy",
                    "type": "string"
                },
                {
                    "id": "Icon4",
                    "default": "Baseballs",
                    "type": "string"
                },
                {
                    "description": "Must be name of png icon in /html/Sonos with no spaces",
                    "id": "Icon5",
                    "type": "string"
                },
                {
                    "id": "Icon6",
                    "type": "string"
                },
                {
                    "description": "Must be name of png icon in /html/Sonos with no spaces",
                    "id": "Icon7",
                    "type": "string"
                },
                {
                    "description": "Must be name of png icon in /html/Sonos with no spaces",
                    "id": "Icon8",
                    "type": "string"
                }
            ]
        },
        "SonosControlWithArt": {
            "template": "<style media=\"screen\" type=\"text/css\">\n  .sonosbutton {width: 90%; height: 4em; border: 0; color: white; background-color: transparent;}  \n  \n  .media_fanart{\n        position:relative;\n        top:90;left:0;\n  \t\t\topacity: 1;\n        filter:grayscale(20%) brightness(70%);\n        z-index:1;\n        outline:#fff solid 0px;\n        transition-duration:3s;\n        box-shadow:10 0 1px #ffffffbb,0 0 2px #ffffffbb,0 0 5px #ffffffbb,0 0 10px #ccccccbb,0 0 20px #ccccccbb,0 0 22px #ccccccbb,0 0 25px #ccccccbb,0 0 33px #ccccccbb}\n    \n   \n    .media_title{\n        font-size:20px;\n        position:relative;\n\t\t\t\topacity: 1;\n        top:0px;\n        text-align:left;\n        text-transform:uppercase;\n        font-weight:normal;\n        z-index:3;\n        background-color: transparent;\n        color:white;\n        letter-spacing:2px;\n        white-space:nowrap;\n        overflow:hidden;\n        text-overflow:ellipsis;padding-top:0px;\n        padding-bottom:0px}\n        \n      .media_artist{\n  \t\t\ttop:100;left:0;\n        font-size:12px;\n        position:relative;\n\t\t\t\topacity: 1;\n        top:0px;\n        text-align:left;\n        text-transform:uppercase;\n        font-weight:normal;\n        z-index:3;\n        background-color: transparent;\n        color:white;\n        letter-spacing:2px;\n        white-space:nowrap;\n        overflow:hidden;\n        text-overflow:ellipsis;padding-top:0px;\n        padding-bottom:0px}\n        \n  \n    </style>\n    \n    <div class=\"media_title\" \n        ng-if=\"itemValue(config.media_title)!='UNDEF'\">\n        {{itemValue(config.media_title)}}&nbsp;&nbsp;\n    </div>\n\n    <div class=\"media_artist\" \n        ng-if=\"itemValue(config.media_artist)!='UNDEF'\">\n        {{itemValue(config.media_artist) + \" \"}}&nbsp;&nbsp;\n    </div>\n    \n    <img src=\"data:image/gif;base64,R0lGODlhAAXQAoAAAAAAAP///ywAAAAAAAXQAgAC/4SPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2Oz+v3/L7/DxgoOEhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+wscLDxMXGx8jJysvMzc7PwMHS09TV1tfY2drb3N3e39DR4uPk5ebn6Onq6+zt7u/g4fLz9PX29/j5+vv8/f7/8PMKDAgQQLGjyIMKHChQwbOnwIMaLEiRQrWryIMaPGjf8cO3r8CDKkyJEkS5o8iTKlypUsW7p8CTOmzJk0a9q8iTOnzp08e/r8CTSo0KFEixo9ijSp0qVMmzp9CjWq1KlUq1q9ijWr1q1cu3r9Cjas2LFky5o9izat2rVs27p9Czeu3Ll069q9izev3r18+/r9Cziw4MGECxs+jDix4sWMGzt+DDmy5MmUK1u+jDmz5s2cO3v+DDq06NGkS5s+jTq16tWsW7t+DTu27Nm0a9u+jTu37t28e/v+DTy48OHEixs/jjy58uXMmzt/Dj269OnUq1u/jj279u3cu3v/Dj68+PHky5s/jz69+vXs27t/Dz++/Pn069u/jz+//v38+/v//w9ggAIOSGCBBh6IYIIKLshggw4+CGGEEk5IYYUWXohhhhpuyGGHHn4IYogijkhiiSaeiGKKKq7IYosuvghjjDLOSGONNt6IY4467shjjz7+CGSQQg5JZJFGHolkkkouyWSTTj4JZZRSTklllVZeiWWWWm7JZZdefglmmGKOSWaZZp6JZppqrslmm26+CWeccs5JZ5123olnnnruyWeffv4JaKCCDkpooYYeimiiii7KaKOOPgpppJJOSmmlll6Kaaaabsppp55+Cmqooo5Kaqmmnopqqqquymqrrr4Ka6yyzkprrbbeimuuuu7Ka6++/gpssMIOS2yxxh6LbLLK/y7LbLPOPgtttNJOS2211l6Lbbbabsttt95+C2644o5Lbrnmnotuuuquy2677r4Lb7zyzktvvfbei2+++u7Lb7/+/gtwwAIPTHDBBh+McMIKL8xwww4/DHHEEk9MccUWX4xxxhpvzHHHHn8Mcsgij0xyySafjHLKKq/McssuvwxzzDLPTHPNNt+Mc84678xzzz7/DHTQQg9NdNFGH4100kovzXTTTj8NddRST0111VZfjXXWWm/Ndddefw122GKPTXbZZp+Ndtpqr812226/DXfccs9Nd91234133nrvzXfffv8NeOCCD0544YYfjnjiii/OeOOOPw555JJPTnnllv9fjnnmmm/Oeeeefw566KKPTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rrvznvvvv8OfPDCD0988cYfj3zyyi/PfPPOPw999NJPT3311l+Pffbab899995/D3744o9Pfvnmn49++uqvz3777r8Pf/zyz09//fbfj3/++u/Pf//+/w/AAApwgAQsoAEPiMAEKnCBDGygAx8IwQhKcIIUrKAFL4jBDGpwgxzsoAc/CMIQinCEJCyhCU+IwhSqcIUsbKELXwjDGMpwhjSsoQ1viMMc6nCHPOyhD38IxCAKcYhELKIRj4jEJCpxiUxsohOfCMUoSnGKVKyiFa+IxSz/anGLXOyiF78IxjCKcYxkLKMZz4jGNKpxjWxsoxvfCMc4ynGOdKyjHe+IxzzqcY987KMf/wjIQApykIQspCEPichEKnKRjGykIx8JyUhKcpKUrKQlL4nJTGpyk5zspCc/CcpQinKUpCylKU+JylSqcpWsbKUrXwnLWMpylrSspS1victc6nKXvOylL38JzGAKc5jELKYxj4nMZCpzmcxspjOfCc1oSnOa1KymNa+JzWxqc5vc7KY3vwnOcIpznOQspznPic50qnOd7GynO98Jz3jKc570rKc974nPfOpzn/zspz//CdCACnSgBC2oQQ+K0IQqdKEMbahDHwrRiEp0WaIUrahFL4rRjGp0oxztqEc/CtKQinSkJC2pSU+K0pSqdKUsbalLXwrTmMp0pjStqU1vitOc6nSnPO2pT38K1KAKdahELapRj4rUpCp1qUxtqlOfCtWoJqM\n    AADs=\" class=\"media_fanart\" width=\"100%\" height=\"100%\" ng-if=\"itemValue(config.media_title)=='N/A'\">\n    </img>\n    \n    <img src=\"data:image/gif;base64,R0lGODlhAAXQAoAAAAAAAP///ywAAAAAAAXQAgAC/4SPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2Oz+v3/L7/DxgoOEhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+wscLDxMXGx8jJysvMzc7PwMHS09TV1tfY2drb3N3e39DR4uPk5ebn6Onq6+zt7u/g4fLz9PX29/j5+vv8/f7/8PMKDAgQQLGjyIMKHChQwbOnwIMaLEiRQrWryIMaPGjf8cO3r8CDKkyJEkS5o8iTKlypUsW7p8CTOmzJk0a9q8iTOnzp08e/r8CTSo0KFEixo9ijSp0qVMmzp9CjWq1KlUq1q9ijWr1q1cu3r9Cjas2LFky5o9izat2rVs27p9Czeu3Ll069q9izev3r18+/r9Cziw4MGECxs+jDix4sWMGzt+DDmy5MmUK1u+jDmz5s2cO3v+DDq06NGkS5s+jTq16tWsW7t+DTu27Nm0a9u+jTu37t28e/v+DTy48OHEixs/jjy58uXMmzt/Dj269OnUq1u/jj279u3cu3v/Dj68+PHky5s/jz69+vXs27t/Dz++/Pn069u/jz+//v38+/v//w9ggAIOSGCBBh6IYIIKLshggw4+CGGEEk5IYYUWXohhhhpuyGGHHn4IYogijkhiiSaeiGKKKq7IYosuvghjjDLOSGONNt6IY4467shjjz7+CGSQQg5JZJFGHolkkkouyWSTTj4JZZRSTklllVZeiWWWWm7JZZdefglmmGKOSWaZZp6JZppqrslmm26+CWeccs5JZ5123olnnnruyWeffv4JaKCCDkpooYYeimiiii7KaKOOPgpppJJOSmmlll6Kaaaabsppp55+Cmqooo5Kaqmmnopqqqquymqrrr4Ka6yyzkprrbbeimuuuu7Ka6++/gpssMIOS2yxxh6LbLLK/y7LbLPOPgtttNJOS2211l6Lbbbabsttt95+C2644o5Lbrnmnotuuuquy2677r4Lb7zyzktvvfbei2+++u7Lb7/+/gtwwAIPTHDBBh+McMIKL8xwww4/DHHEEk9MccUWX4xxxhpvzHHHHn8Mcsgij0xyySafjHLKKq/McssuvwxzzDLPTHPNNt+Mc84678xzzz7/DHTQQg9NdNFGH4100kovzXTTTj8NddRST0111VZfjXXWWm/Ndddefw122GKPTXbZZp+Ndtpqr812226/DXfccs9Nd91234133nrvzXfffv8NeOCCD0544YYfjnjiii/OeOOOPw555JJPTnnllv9fjnnmmm/Oeeeefw566KKPTnrppp+Oeuqqr856666/Dnvsss9Oe+2234577rrvznvvvv8OfPDCD0988cYfj3zyyi/PfPPOPw999NJPT3311l+Pffbab899995/D3744o9Pfvnmn49++uqvz3777r8Pf/zyz09//fbfj3/++u/Pf//+/w/AAApwgAQsoAEPiMAEKnCBDGygAx8IwQhKcIIUrKAFL4jBDGpwgxzsoAc/CMIQinCEJCyhCU+IwhSqcIUsbKELXwjDGMpwhjSsoQ1viMMc6nCHPOyhD38IxCAKcYhELKIRj4jEJCpxiUxsohOfCMUoSnGKVKyiFa+IxSz/anGLXOyiF78IxjCKcYxkLKMZz4jGNKpxjWxsoxvfCMc4ynGOdKyjHe+IxzzqcY987KMf/wjIQApykIQspCEPichEKnKRjGykIx8JyUhKcpKUrKQlL4nJTGpyk5zspCc/CcpQinKUpCylKU+JylSqcpWsbKUrXwnLWMpylrSspS1victc6nKXvOylL38JzGAKc5jELKYxj4nMZCpzmcxspjOfCc1oSnOa1KymNa+JzWxqc5vc7KY3vwnOcIpznOQspznPic50qnOd7GynO98Jz3jKc570rKc974nPfOpzn/zspz//CdCACnSgBC2oQQ+K0IQqdKEMbahDHwrRiEp0WaIUrahFL4rRjGp0oxztqEc/CtKQinSkJC2pSU+K0pSqdKUsbalLXwrTmMp0pjStqU1vitOc6nSnPO2pT38K1KAKdahELapRj4rUpCp1qUxtqlOfCtWoJqMAADs=\" \n         class=\"media_fanart\" width=\"100%\" height=\"100%\" ng-if=\"itemValue(config.media_title)=='UNDEF'\">\n    </img>\n    \n\t\t<img src=\"{{itemValue(config.media_art)}}\" class=\"media_fanart\" width=\"100%\" height=\"100%\" ng-if=\"itemValue(config.media_title)!='UNDEF'\">\n    </img>\n    \n\n\n\n\t\t<div class=\"row\" style=\"border-top: 0px solid white; padding-top: 0px; background-color: transparent;\">\n    \n      <div class=\"col-sm-2 modgrid\">\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/VolDown.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd(config.media_player, 'NEXT')\"\n            ng-dblclick=\"sendCmd(config.media_player, 'PAUSE')\">\n         </button>\n    \t</div>\t\n  \n    \t<div class=\"col-sm-2 modgrid\">\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/Back.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd(config.media_player, 'PREVIOUS')\">\n         </button>\n   \t\t </div>\t\n \n  \n  \n  \t\t<div class=\"col-sm-3 modgrid\" ng-if=\"itemValue(config.media_player) !='PLAY'\">\n       \t\t<button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/Play.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n           \tng-click=\"sendCmd(config.media_player,'PLAY')\">\n           </button>     \n\t\t\t</div>\n\n  \t\t<div class=\"col-sm-3 modgrid\" ng-if=\"itemValue(config.media_player) =='PLAY'\">\n       \t\t<button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/Pause.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n           \tng-click=\"sendCmd(config.media_player,'PAUSE')\">\n           </button>     \n\t\t\t</div>\n  \n  \n  \n  \n    \t<div class=\"col-sm-2 modgrid\">\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/Fwd.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd(config.media_player, 'NEXT')\">\n         </button>\n    \t</div>\t\t\n\n       <div class=\"col-sm-2 modgrid\">\n         <button class=\"sonosbutton\" style=\"background-image: url(/static/sonos/VolUp.png); background-size: contain; background-repeat: no-repeat;background-position: center center\" \n            ng-click=\"sendCmd(config.media_player, 'NEXT')\">\n         </button>\n    \t\t</div>\t\n  \n  </div>",
            "name": "Sonos Media Widget",
            "author": "Scootaash",
            "description": "A media controller with image art and playback buttons suitable for music using Sonos",
            "id": "SonosControlWithArt",
            "settings": [
                {
                    "id": "media_art",
                    "label": "Image Art",
                    "description": "Artwork for video or album covers for music can be shown here and will make up the background image of the widget.",
                    "default": "SN_DiningRoom_currentalbumart",
                    "type": "item"
                },
                {
                    "id": "media_player",
                    "label": "Player Control",
                    "description": "The media player we will send our strings to to control playback.",
                    "default": "SN_DiningRoom_Controller",
                    "type": "item"
                },
                {
                    "id": "media_title",
                    "label": "Title",
                    "description": "Movie title or song track or artist can be used here.",
                    "default": "SN_DiningRoom_currenttitle",
                    "type": "item"
                },
                {
                    "id": "media_artist",
                    "label": "Artist",
                    "default": "SN_DiningRoom_currentartist",
                    "type": "item"
                }
            ]
        },
        "Selection": {
            "template": "<div style=\"margin:auto;padding:0px 0px 10px;\">{{config.title}}</div>\n<div class=\"btn-group\" btn-checkbox-true \n     ng-init=\"values = config.values.split(',');labels = config.labels.split(',')\">\n\n  <button type=\"button\" class=\"btn btn-primary\" ng-model=\"itemValue(config.item, true)\" uib-btn-radio=\"x\"\nng-click=\"sendCmd(config.item, x)\" ng-repeat=\"x in values track by $index\">{{labels[$index]}}</button>\n</div>",
            "author": "Marcel Verpaalen",
            "name": "Selection",
            "description": "Switch between multiple configured options",
            "id": "Selection",
            "settings": [
                {
                    "id": "title",
                    "label": "Title",
                    "default": "Title",
                    "description": "The title displayed above the buttons",
                    "type": "string"
                },
                {
                    "id": "item",
                    "label": "OpenHAB item",
                    "description": "Item that command gets sent to",
                    "type": "item"
                },
                {
                    "id": "labels",
                    "label": "Labels",
                    "default": "Zero,One",
                    "description": "A comma-separated array of labels for the buttons",
                    "type": "string"
                },
                {
                    "id": "values",
                    "label": "Values",
                    "description": "A comma-separated array of values corresponding to the labels, that gets sent as commands to the item",
                    "default": "0,1",
                    "type": "string"
                }
            ]
        },
        "thermo-knob": {
            "template": "<div oc-lazy-load=\"['/static/thermoKnob/ng-knob-thermo.js','/static/thermoKnob/control-oh.js']\"  style=\"position: absolute; top: 10px; left: 10px; width: calc(100% - 20px); height: calc(100% - 20px);\">\n  <div ng-controller=\"knobCtrlOH\">\n    <ui-knob-thermo value=\"value\" current=\"current\" heating=\"heating\" options=\"options\" config=\"config\"></ui-knob-thermo>\n  </div>\n</div>\n",
            "name": "Thermostat Knob",
            "author": "Sébastien Roy",
            "description": "Thermostat Knob, showing current temperature, set point and heating state, with optional label",
            "id": "thermo-knob",
            "source_url": "https://raw.githubusercontent.com/blobule/habpanel-thermoknob-widget/master/thermo-knob.widget.json",
            "readme_url": "https://github.com/blobule/habpanel-thermoknob-widget",
            "settings": [
                {
                    "id": "label",
                    "label": "Label",
                    "description": "Label for the widget, if desired",
                    "type": "string"
                },
                {
                    "id": "current",
                    "label": "Current temperature",
                    "description": "Current temperature item",
                    "type": "item"
                },
                {
                    "id": "setpoint",
                    "label": "Thermostat set point",
                    "description": "Thermostat set point, the value that can be adjusted",
                    "type": "item"
                },
                {
                    "id": "heating",
                    "label": "Thermostat heating state",
                    "description": "Thermostat heating state, expecting 0/1 values",
                    "type": "item"
                },
                {
                    "id": "barcolor",
                    "label": "Set Point Color",
                    "default": "#FFAE1A",
                    "description": "Color of the set point bar and set point text. (Use #0DB9F0 for standard habpanel blue)",
                    "type": "string"
                },
                {
                    "id": "min",
                    "label": "Minimum value",
                    "description": "Minimum temperature value",
                    "default": "5",
                    "type": "string"
                },
                {
                    "id": "max",
                    "label": "Maximum value",
                    "default": "35",
                    "description": "Maximum temperature value",
                    "type": "string"
                },
                {
                    "id": "step",
                    "label": "Step value",
                    "default": "1",
                    "description": "Temperature scale steps. One tick will be drawn at each step, from min to max temperature. Suggested values : 1 or 0.5.",
                    "type": "string"
                },
                {
                    "id": "readonly",
                    "label": "Read Only",
                    "description": "Is this widget read only?",
                    "type": "checkbox"
                }
            ]
        }
    }
}