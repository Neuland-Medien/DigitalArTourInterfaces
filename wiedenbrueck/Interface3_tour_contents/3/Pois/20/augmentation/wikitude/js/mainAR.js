var trackable_rhedaMarker20 = new RTTrackable("marker20");
var trackable_rhedaMarker20_2 = new RTTrackable("marker20_2");


var video = new RTVideo("assets/Fuerst.mp4",1,options_Fuerst,null,false,trackable_rhedaMarker20);
var video_2 = new RTVideo("assets/Fuerst.mp4",1,options_Fuerst,null,false,trackable_rhedaMarker20_2);

video.addToCam();
video_2.addToCam();

var World = {
    switchContentToInfo: function() {
      video.removeFromCam();
      video.pause();
        video2.removeFromCam();
      video2.pause();

    },
    switchContentToAR: function() {
      video.addToCam();
      video.resume();
        video2.removeFromCam();
      video2.pause();
    },
    turnEverythingOff: function() { 
      video.removeFromCam();
      video.pause();
        video2.removeFromCam();
      video2.pause();
        
    }
};