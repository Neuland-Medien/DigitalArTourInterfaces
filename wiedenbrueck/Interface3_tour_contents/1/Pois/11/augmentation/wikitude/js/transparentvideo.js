var World = {

	init : function initFn() {
		this.createOverlays();
	},

	createOverlays : function createOverlaysFn() {
		this.tracker = new AR.ClientTracker("../../../../baseAugmentation/wikitude/assets/tracker.wtc");

		var trackableBasis = new AR.Trackable2DObject(this.tracker, "*", {
				onEnterFieldOfVision : function (name) {
					//document.location = "architectsdk://modelontarget_"+name;
					document.location = "architectsdk://" + name;
				},
				onExitFieldOfVision : function () {
					document.location = "architectsdk://exit";
					//document.location = "architectsdk://modelexittarget_"+name;
				}
			});

		var videoAnker = new AR.VideoDrawable("assets/ankervilla.mp4", 0.9, {
				offsetX : -0.3,
				offsetY : -0.9,
				isTransparent : true,
				onPlaybackStarted : function () {
					document.location = "architectsdk://contentStarted_video";
				},
				onFinishedPlaying : function () {
					document.location = "architectsdk://contentStopped_video";
				}
			});

		videoAnker.play(1);
		videoAnker.pause();
		document.location = "architectsdk://contentStopped_video";

		this.trackableAnker = new AR.Trackable2DObject(this.tracker, "marker11", {
				drawables : {
					cam : [videoAnker]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableAnker.enabled) {
					videoAnker.resume();
					document.location = "architectsdk://contentStarted_video";
                        
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoAnker.pause();
					document.location = "architectsdk://contentStopped_video";
				}
			});

		this.trackableAnker_1 = new AR.Trackable2DObject(this.tracker, "marker11_1", {
				drawables : {
					cam : [videoAnker]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableAnker_1.enabled) {
					   videoAnker.resume();
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoAnker.pause();
				}
			});
	},
    
    switchContentToInfo: function switchContentToInfoFn(){
			for(i=0; i<World.trackableAnker_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableAnker_1.drawables.cam[i])){
					World.trackableAnker_1.drawables.cam[i].pause();
				}
			}
			World.trackableAnker_1.enabled = false;
			for(i=0; i<World.trackableAnker.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableAnker.drawables.cam[i])){
					World.trackableAnker.drawables.cam[i].pause();
				}
			}
			World.trackableAnker.enabled = false;
	},

	switchContentToAR: function switchContentToARFn(){
			for(i=0; i<World.trackableAnker_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableAnker_1.drawables.cam[i])){
					World.trackableAnker_1.drawables.cam[i].resume();
				}
			}
			World.trackableAnker_1.enabled = true;
			for(i=0; i<World.trackableAnker.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableAnker.drawables.cam[i])){
					World.trackableAnker.drawables.cam[i].resume();
				}
			}
			World.trackableAnker.enabled = true;
	},
    
	turnEverythingOff: function turnEverythingOffFn(){
			for(i=0; i<World.trackableAnker_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableAnker_1.drawables.cam[i])){
					World.trackableAnker_1.drawables.cam[i].pause();
				}
			}
			World.trackableAnker_1.enabled = false;
			for(i=0; i<World.trackableAnker.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableAnker.drawables.cam[i])){
					World.trackableAnker.drawables.cam[i].pause();
				}
			}
			World.trackableAnker.enabled = false;
    }
};

World.init();
