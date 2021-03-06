var trackable_rhedaMarker02 = new RTTrackable("marker2");
var audioaroff = new RTImage("assets/audioaroff.png",1,options_audioaroff,trackable_rhedaMarker02);
var audioARon = new RTImage("assets/audioARon.png",1,options_audioARon,trackable_rhedaMarker02);
var sound = new AR.Sound("assets/audio.mp3");
sound.load();
audioaroff.onClickAdditions=function(){
  sound.play();
  audioARon.addToCam();
  audioaroff.removeFromCam();
};

audioARon.onClickAdditions=function(){
  sound.pause();
  audioaroff.addToCam();
  audioARon.removeFromCam();
};

sound.onFinishedPlaying=function(){
  audioaroff.addToCam();
  audioARon.removeFromCam();
}
audioaroff.addToCam();

var World = {
    switchContentToInfo: function() {
      sound.pause();
      allDrawables.forEach(function(element)
        {
            element.removeFromCam();
        })
        
      document.getElementById("clara").style.visibility = "visible";
      //document.getElementById("louis").style.visibility = "visible";
    },
    switchContentToAR: function() {
      audioaroff.addToCam();
        audioaroff2.addToCam();
      document.getElementById("clara").style.visibility = "hidden";
      //document.getElementById("louis").style.visibility = "hidden";
    },
    turnEverythingOff: function() {
      sound.pause();
      allDrawables.forEach(function(element)
        {
            element.removeFromCam();
        })

      document.getElementById("clara").style.visibility = "hidden";
      //document.getElementById("louis").style.visibility = "hidden";
        
    }
};