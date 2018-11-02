var trackable_rhedaMarker01 = new RTTrackable("marker18");
var trackable_rhedaMarker02 = new RTTrackable("marker18_2");
var audioaroff = new RTImage("assets/audioaroff.png",1,options_audioaroff,trackable_rhedaMarker01);
var audioARon = new RTImage("assets/audioARon.png",1,options_audioARon,trackable_rhedaMarker01);
var audioaroff2 = new RTImage("assets/audioaroff.png",1,options_audioaroff,trackable_rhedaMarker02);
var audioARon2 = new RTImage("assets/audioARon.png",1,options_audioARon,trackable_rhedaMarker02);
var sound = new AR.Sound("assets/audio.mp3");
sound.load();
audioaroff.onClickAdditions=function(){
  sound.play();
  audioARon.addToCam();
  audioaroff.removeFromCam();
  audioARon2.addToCam();
  audioaroff2.removeFromCam();
};

audioARon.onClickAdditions=function(){
  sound.pause();
  audioaroff.addToCam();
  audioARon.removeFromCam();
  audioaroff2.addToCam();
  audioARon2.removeFromCam();
};

sound.onFinishedPlaying=function(){
  audioaroff.addToCam();
  audioARon.removeFromCam();
  audioaroff2.addToCam();
  audioARon2.removeFromCam();
}
audioaroff.addToCam();

var World = {
    switchContentToInfo: function() {
      sound.pause();
      allDrawables.forEach(function(element)
        {
            element.removeFromCam();
        })

    },
    switchContentToAR: function() {
      allDrawables.forEach(function(element)
        audioaroff.addToCam();
        audioaroff2.addToCam();
    },
    turnEverythingOff: function() {
      sound.pause();
      allDrawables.forEach(function(element)
        {
            element.removeFromCam();
        })
        
    }
};