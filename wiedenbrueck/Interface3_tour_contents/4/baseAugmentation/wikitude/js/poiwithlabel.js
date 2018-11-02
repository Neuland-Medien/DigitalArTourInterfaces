var claraMarkers = ["marker2","marker4", "marker4_2", "marker5","marker6", "marker7", "marker8", "marker9", "marker10", "marker12", "marker13", "marker15", "marker17", "marker17_2", "marker19","marker20", "marker20_2"];
var louisMarkers = ["marker1", "marker1_2","marker3","marker4", "marker4_2", "marker7", "marker8", "marker9", "marker10", "marker12", "marker13", "marker14", "marker15", "marker17", "marker17_2", "marker19", "marker20", "marker20_2",];

var aktuellerMarker = "";

var World = {

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {

        this.tracker = new AR.ClientTracker("assets/tracker.wtc");
        var trackableBasis = new AR.Trackable2DObject(this.tracker, "*", {
            onEnterFieldOfVision: function (name) {
                aktuellerMarker = name;
                var s = "{\"markerId\":" + JSON.stringify(name) + "}";
                AR.platform.sendJSONObject(JSON.parse(s));
                document.location = "architectsdk://modelontarget_" + name;
                document.location = "architectsdk://modelOnTarget_" + name;
                //AR.platformsendJsonObject("{markerId: "+name"}");
                //var s=JSON.stringify("{markerId: "+name+"}");
                
            },
            onExitFieldOfVision: function () {
                document.location = "architectsdk://exit";
               document.location = "architectsdk://modelexittarget_" + name;
            }
        });

    },
    
    switchContentToInfo: function() { 
        if(aktuellerMarker !== "")
            {
                if(claraMarkers.includes(aktuellerMarker))
                    {
                        document.getElementById("clara").style.visibility = "visible";
                    }
                if (louisMarkers.includes(aktuellerMarker))
                    {
                       document.getElementById("louis").style.visibility = "visible"; 
                    }
            }
      
    },
    
    switchContentToAR: function() {
       document.getElementById("clara").style.visibility = "hidden";
       document.getElementById("louis").style.visibility = "hidden"; 
       
    },
    
    turnEverythingOff: function() {
        document.getElementById("clara").style.visibility = "hidden";
       document.getElementById("louis").style.visibility = "hidden";         
    }
};



World.init();
