var trackableRhedaMarker06 = new RTTrackable("marker6");

//creates models and adds them to the cam
var model1 = new RTModel("assets/memory1.wt3", optionsKarte1,trackableRhedaMarker06);
var model2 = new RTModel("assets/memory1.wt3", optionsKarte2,trackableRhedaMarker06);
var model3 = new RTModel("assets/memory2.wt3", optionsKarte3,trackableRhedaMarker06);
var model4 = new RTModel("assets/memory2.wt3", optionsKarte4,trackableRhedaMarker06);
var model5 = new RTModel("assets/memory3.wt3", optionsKarte5,trackableRhedaMarker06);
var model6 = new RTModel("assets/memory3.wt3", optionsKarte6,trackableRhedaMarker06);
var model7 = new RTModel("assets/memory4.wt3", optionsKarte7,trackableRhedaMarker06);
var model8 = new RTModel("assets/memory4.wt3", optionsKarte8,trackableRhedaMarker06);
var model9 = new RTModel("assets/memory5.wt3", optionsKarte9,trackableRhedaMarker06);
var model10 = new RTModel("assets/memory5.wt3", optionsKarte10,trackableRhedaMarker06);
var model11 = new RTModel("assets/memory6.wt3", optionsKarte11,trackableRhedaMarker06);
var model12 = new RTModel("assets/memory6.wt3", optionsKarte12,trackableRhedaMarker06);
var model13 = new RTModel("assets/memory7.wt3", optionsKarte13,trackableRhedaMarker06);
var model14 = new RTModel("assets/memory7.wt3", optionsKarte14,trackableRhedaMarker06);
var model15 = new RTModel("assets/memory8.wt3", optionsKarte15,trackableRhedaMarker06);
var model16 = new RTModel("assets/memory8.wt3", optionsKarte16,trackableRhedaMarker06);
var model17 = new RTModel("assets/memory9.wt3", optionsKarte17,trackableRhedaMarker06);
var model18 = new RTModel("assets/memory9.wt3", optionsKarte18,trackableRhedaMarker06);

model1.addToCam();
model2.addToCam();
model3.addToCam();
model4.addToCam();
model5.addToCam();
model6.addToCam();
model7.addToCam();
model8.addToCam();
model9.addToCam();
model10.addToCam();
model11.addToCam();
model12.addToCam();
model13.addToCam();
model14.addToCam();
model15.addToCam();
model16.addToCam();
model17.addToCam();
model18.addToCam();

//creates pairs with the models
var pair1 = new RTMemoryPair(model1, model2);
var pair2 = new RTMemoryPair(model3, model4);
var pair3 = new RTMemoryPair(model5, model6);
var pair4 = new RTMemoryPair(model7, model8);
var pair5 = new RTMemoryPair(model9, model10);
var pair6 = new RTMemoryPair(model11, model12);
var pair7 = new RTMemoryPair(model13, model14);
var pair8 = new RTMemoryPair(model15, model16);
var pair9 = new RTMemoryPair(model17, model18);
var pairs = [pair1, pair2, pair3, pair4, pair5, pair6, pair7, pair8, pair9];

//creates memory with the pairs on the coordinates 0,0 and shuffles the cards
var memory = new RTMemory(pairs, 0, 0);
memory.shuffleCards();

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
*/
var World = {
    switchContentToInfo: function() {
      model1.removeFromCam();
        model2.removeFromCam();
        model3.removeFromCam();
        model4.removeFromCam();
        model5.removeFromCam();
        model6.removeFromCam();
        model7.removeFromCam();
        model8.removeFromCam();
        model9.removeFromCam();
        model10.removeFromCam();
        model11.removeFromCam();
        model12.removeFromCam();
        model13.removeFromCam();
        model14.removeFromCam();
        model15.removeFromCam();
        model16.removeFromCam();
        model17.removeFromCam();
      model18.removeFromCam();
        
      document.getElementById("clara").style.visibility = "visible";
      document.getElementById("louis").style.visibility = "visible";
    },
    switchContentToAR: function() {
      model1.addToCam();
model2.addToCam();
model3.addToCam();
model4.addToCam();
model5.addToCam();
model6.addToCam();
model7.addToCam();
model8.addToCam();
model9.addToCam();
model10.addToCam();
model11.addToCam();
model12.addToCam();
model13.addToCam();
model14.addToCam();
model15.addToCam();
model16.addToCam();
model17.addToCam();
model18.addToCam();
        
      document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
    },
    turnEverythingOff: function() {
      model1.removeFromCam();
        model2.removeFromCam();
        model3.removeFromCam();
        model4.removeFromCam();
        model5.removeFromCam();
        model6.removeFromCam();
        model7.removeFromCam();
        model8.removeFromCam();
        model9.removeFromCam();
        model10.removeFromCam();
        model11.removeFromCam();
        model12.removeFromCam();
        model13.removeFromCam();
        model14.removeFromCam();
        model15.removeFromCam();
        model16.removeFromCam();
        model17.removeFromCam();
      model18.removeFromCam();
        
      document.getElementById("clara").style.visibility = "hidden";
      document.getElementById("louis").style.visibility = "hidden";
    }
    
};
