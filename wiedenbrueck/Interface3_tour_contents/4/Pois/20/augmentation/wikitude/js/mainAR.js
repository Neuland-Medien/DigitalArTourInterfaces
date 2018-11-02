var trackable_rhedaMarker02 = new RTTrackable("marker20");
var trackable_rhedaMarker022 = new RTTrackable("marker20_2");


var video = new RTVideo("assets/Fuerst.mp4",1,options_Fuerst,null,false,trackable_rhedaMarker02);
var video2 = new RTVideo("assets/Fuerst.mp4",1,options_Fuerst,null,false,trackable_rhedaMarker022);

video.addToCam();

var World = {
    switchContentToInfo: function() {
        video.pause();
        video2.pause();

      document.getElementById("clara").style.visibility = "visible";
      document.getElementById("louis").style.visibility = "visible";
    },
    switchContentToAR: function() {
        video.resume();
        video2.pause();
        
      document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
    },
    turnEverythingOff: function() { 
        video.pause();
        video2.pause();

      document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
        
    }
};