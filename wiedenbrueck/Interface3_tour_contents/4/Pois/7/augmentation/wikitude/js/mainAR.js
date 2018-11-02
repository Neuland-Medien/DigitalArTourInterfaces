var trackable_rhedaMarker07 = new RTTrackable("marker7");
var Schnittkerhaus = new RTVideo("assets/Schnittkerhaus.mp4",1,options_Schnittkerhaus,null,false,trackable_rhedaMarker07); 
Schnittkerhaus.addToCam();

var World = {
    switchContentToInfo: function() {

    Schnittkerhaus.removeFromCam();
        Schnittkerhaus.pause();
        
      document.getElementById("clara").style.visibility = "visible";
      document.getElementById("louis").style.visibility = "visible";
    },
    switchContentToAR: function() {
        
    Schnittkerhaus.addToCam();
        Schnittkerhaus.resume();
        
      document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
    },
    turnEverythingOff: function() {
        
    Schnittkerhaus.removeFromCam();
        Schnittkerhaus.pause();
        
      document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
        
    }
};