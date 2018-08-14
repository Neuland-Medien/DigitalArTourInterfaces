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

		var videoBrand = new AR.VideoDrawable("assets/brand.mp4", 1.02, {
				offsetX : 0,
				offsetY : -1.02,
				isTransparent : true,
				onPlaybackStarted : function () {
					document.location = "architectsdk://contentStarted_video";
				},
				onFinishedPlaying : function () {
					document.location = "architectsdk://contentStopped_video";
				}
			});

		videoBrand.play(1);
		videoBrand.pause();
		document.location = "architectsdk://contentStopped_video";

		this.trackableBrand = new AR.Trackable2DObject(this.tracker, "marker2", {
				drawables : {
					cam : [videoBrand]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableBrand.enabled) {
                        videoBrand.resume();
					   document.location = "architectsdk://contentStarted_video";
                    }					
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoBrand.pause();
					document.location = "architectsdk://contentStopped_video";
				}
			});
	},
    
    switchContentToInfo: function switchContentToInfoFn(){
			for(i=0; i<World.trackableBrand.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableBrand.drawables.cam[i])){
					World.trackableBrand.drawables.cam[i].pause();
				}
			}
			World.trackableBrand.enabled = false;
	},

	switchContentToAR: function switchContentToARFn(){
			for(i=0; i<World.trackableBrand.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableBrand.drawables.cam[i])){
					World.trackableBrand.drawables.cam[i].resume();
				}
			}
			World.trackableBrand.enabled = true;
	},
    
	turnEverythingOff: function turnEverythingOffFn(){
			for(i=0; i<World.trackableBrand.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableBrand.drawables.cam[i])){
					World.trackableBrand.drawables.cam[i].pause();
				}
			}
			World.trackableBrand.enabled = false;
    }
};

World.init();
