var trackable_rhedaMarker06 = new RTTrackable("marker6");

//drawables erstellen
var drawable1 = new RTModel("assets/memory1.wt3", options_karte1,trackable_rhedaMarker06);
var drawable2 = new RTModel("assets/memory1.wt3", options_karte2,trackable_rhedaMarker06);
var drawable3 = new RTModel("assets/memory1.wt3", options_karte3,trackable_rhedaMarker06);
var drawable4 = new RTModel("assets/memory1.wt3", options_karte4,trackable_rhedaMarker06);
drawable1.addToCam();
drawable2.addToCam();
drawable3.addToCam();
drawable4.addToCam();


//pairs mit den drawables erstellen
var pair1 = new RTMemoryPair(drawable1, drawable2);
var pair2 = new RTMemoryPair(drawable3, drawable4);
var pairs = [pair1, pair2];
//memory aus den pairs erstellen
var memory = new RTMemory(pairs, 0, 0);
alert("shuffelt jetzt:");
memory.shuffleCards();
alert("geshuffelt");

/**
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
      audioARon.removeFromCam();
      audioaroff.removeFromCam();
    },
    switchContentToAR: function() {
      audioaroff.addToCam();
    },
    turnEverythingOff: function() {
      sound.pause();
      audioARon.removeFromCam();
      audioaroff.removeFromCam();
    }
    
};
alert("Ende");
*/
