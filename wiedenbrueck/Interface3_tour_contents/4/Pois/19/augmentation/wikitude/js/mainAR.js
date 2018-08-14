var trackable_rhedaMarker02 = new RTTrackable("marker19");


var video = new RTVideo("assets/Fuerst.mp4",1,options_Fuerst,null,false,trackable_rhedaMarker02);

video.addToCam();

var World = {
    switchContentToInfo: function() {
      video.removeFromCam();

      document.getElementById("clara").style.visibility = "visible";
      document.getElementById("louis").style.visibility = "visible";
    },
    switchContentToAR: function() {
      video.addToCam();
        video.resume();
      document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
    },
    turnEverythingOff: function() { 
      video.removeFromCam();

      document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
        
    }
};