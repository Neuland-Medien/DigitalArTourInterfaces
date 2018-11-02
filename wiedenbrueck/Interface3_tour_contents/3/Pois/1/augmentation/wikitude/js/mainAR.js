var trackable_rhedaMarker02 = new RTTrackable("marker1");
var trackable_rhedaMarker022 = new RTTrackable("marker1_2");
var audioaroff = new RTImage("assets/audioaroff.png",1,options_audioaroff,trackable_rhedaMarker02);
var audioARon = new RTImage("assets/audioARon.png",1,options_audioARon,trackable_rhedaMarker02);
var audioaroff2 = new RTImage("assets/audioaroff.png",1,options_audioaroff,trackable_rhedaMarker022);
var audioARon2 = new RTImage("assets/audioARon.png",1,options_audioARon,trackable_rhedaMarker022);
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
audioaroff2.addToCam();

var World = {
    switchContentToInfo: function() {
      sound.pause();
      allDrawables.forEach(function(element)
        {
            element.removeFromCam();
        })
    },
    switchContentToAR: function() {
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