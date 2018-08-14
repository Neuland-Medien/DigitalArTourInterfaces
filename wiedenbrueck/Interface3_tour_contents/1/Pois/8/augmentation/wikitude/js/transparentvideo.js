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

		var videoStreit = new AR.VideoDrawable("assets/streit.mp4", 0.95, {
				offsetX : 0.65,
				offsetY : -0.84,
				isTransparent : true,
				onPlaybackStarted : function () {
					document.location = "architectsdk://contentStarted_video";
				},
				onFinishedPlaying : function () {
					document.location = "architectsdk://contentStopped_video";
				}
			});

		videoStreit.play(1);
		videoStreit.pause();
		document.location = "architectsdk://contentStopped_video";

		this.trackableStreit = new AR.Trackable2DObject(this.tracker, "marker8", {
				drawables : {
					cam : [videoStreit]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableStreit.enabled) {
                        
					videoStreit.resume();
					document.location = "architectsdk://contentStarted_video";
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
                        
					videoStreit.pause();
					document.location = "architectsdk://contentStopped_video";
                    
				}
			});

		this.trackableStreit_1 = new AR.Trackable2DObject(this.tracker, "marker8_1", {
				drawables : {
					cam : [videoStreit]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableStreit_1.enabled) {
					videoStreit.resume();
					document.location = "architectsdk://contentStarted_video";
                        
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoStreit.pause();
					document.location = "architectsdk://contentStopped_video";
				}
			});
	},
    
    switchContentToInfo: function switchContentToInfoFn(){
			for(i=0; i<World.trackableStreit_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableStreit_1.drawables.cam[i])){
					World.trackableStreit_1.drawables.cam[i].pause();
				}
			}
			World.trackableStreit_1.enabled = false;
        
			for(i=0; i<World.trackableStreit.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableStreit.drawables.cam[i])){
					World.trackableStreit.drawables.cam[i].pause();
				}
			}
			World.trackableStreit.enabled = false;
	},

	switchContentToAR: function switchContentToARFn(){
			for(i=0; i<World.trackableStreit_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableStreit_1.drawables.cam[i])){
					World.trackableStreit_1.drawables.cam[i].resume();
				}
			}
			World.trackableStreit_1.enabled = true;
			for(i=0; i<World.trackableStreit.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableStreit.drawables.cam[i])){
					World.trackableStreit.drawables.cam[i].resume();
				}
			}
			World.trackableStreit.enabled = true;
	},
    
	turnEverythingOff: function turnEverythingOffFn(){
			for(i=0; i<World.trackableStreit_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableStreit_1.drawables.cam[i])){
					World.trackableStreit_1.drawables.cam[i].pause();
				}
			}
			World.trackableStreit_1.enabled = false;
			for(i=0; i<World.trackableStreit.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableStreit.drawables.cam[i])){
					World.trackableStreit.drawables.cam[i].pause();
				}
			}
			World.trackableStreit.enabled = false;
    }
};

World.init();
