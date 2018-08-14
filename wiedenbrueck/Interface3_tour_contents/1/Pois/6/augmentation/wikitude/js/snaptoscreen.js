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

		var videoChrono = new AR.VideoDrawable("assets/Chronogramm.mp4", 1.01, {
				offsetX: -0.006,
				offsetY: -0.035,
				isTransparent : true,
				onPlaybackStarted : function () {
					document.location = "architectsdk://contentStarted_video";
				},
				onFinishedPlaying : function () {
					document.location = "architectsdk://contentStopped_video";
				}
			});

		videoChrono.play(1);
		videoChrono.pause();
		document.location = "architectsdk://contentStopped_video";

		this.trackableVideo = new AR.Trackable2DObject(this.tracker, "marker6", {
				drawables : {
					cam : [videoChrono]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableVideo.enabled) {
					videoChrono.resume();
					document.location = "architectsdk://contentStarted_video";
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoChrono.pause();
					document.location = "architectsdk://contentStopped_video";

				}
			});

		this.trackableVideo_1 = new AR.Trackable2DObject(this.tracker, "marker6_1", {
				drawables : {
					cam : [videoChrono]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableVideo_1.enabled) {
					videoChrono.resume();
					document.location = "architectsdk://contentStarted_video";
                        
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoChrono.pause();
					document.location = "architectsdk://contentStopped_video";
				}
			});

		this.trackableVideo_2 = new AR.Trackable2DObject(this.tracker, "marker6_2", {
				drawables : {
					cam : [videoChrono]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableVideo_2.enabled) {
                        
					videoChrono.resume();
					document.location = "architectsdk://contentStarted_video";
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoChrono.pause();
					document.location = "architectsdk://contentStopped_video";
				}
			});
	},
    
    switchContentToInfo: function switchContentToInfoFn(){
			for(i=0; i<World.trackableVideo.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo.drawables.cam[i])){
					World.trackableVideo.drawables.cam[i].pause();
				}
			}
			World.trackableVideo.enabled = false;
        
	       for(i=0; i<World.trackableVideo_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo_1.drawables.cam[i])){
					World.trackableVideo_1.drawables.cam[i].pause();
				}
			}
			World.trackableVideo_1.enabled = false;
        
	       for(i=0; i<World.trackableVideo_2.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo_2.drawables.cam[i])){
					World.trackableVideo_2.drawables.cam[i].pause();
				}
			}
			World.trackableVideo_2.enabled = false;
	},

	switchContentToAR: function switchContentToARFn(){
			for(i=0; i<World.trackableVideo.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo.drawables.cam[i])){
					World.trackableVideo.drawables.cam[i].resume();
				}
			}
			World.trackableVideo.enabled = true;
        
            for(i=0; i<World.trackableVideo_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo_1.drawables.cam[i])){
					World.trackableVideo_1.drawables.cam[i].resume();
				}
			}
			World.trackableVideo_1.enabled = true;
        
            for(i=0; i<World.trackableVideo_2.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo_2.drawables.cam[i])){
					World.trackableVideo_2.drawables.cam[i].resume();
				}
			}
			World.trackableVideo_2.enabled = true;
        
	},
    
	turnEverythingOff: function turnEverythingOffFn(){
        
			for(i=0; i<World.trackableVideo.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo.drawables.cam[i])){
					World.trackableVideo.drawables.cam[i].pause();
				}
			}
			World.trackableVideo.enabled = false;
        
	       for(i=0; i<World.trackableVideo_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo_1.drawables.cam[i])){
					World.trackableVideo_1.drawables.cam[i].pause();
				}
			}
			World.trackableVideo_1.enabled = false;
        
	       for(i=0; i<World.trackableVideo_2.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableVideo_2.drawables.cam[i])){
					World.trackableVideo_2.drawables.cam[i].pause();
				}
			}
			World.trackableVideo_2.enabled = false;
    }
};

World.init();
