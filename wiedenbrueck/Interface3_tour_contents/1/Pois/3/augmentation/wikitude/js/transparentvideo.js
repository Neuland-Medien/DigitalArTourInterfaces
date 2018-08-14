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
					//alert(name);
				},
				onExitFieldOfVision : function () {
					document.location = "architectsdk://exit";
					//document.location = "architectsdk://modelexittarget_"+name;
				}
			});
		 

			var videoSoldaten = new AR.VideoDrawable("assets/soldaten.mp4", 1.24, {
				offsetX: 0.79,
				offsetY: -0.15,
				isTransparent : true,
				onPlaybackStarted : function () {
					document.location = "architectsdk://contentStarted_video";
				},
				onFinishedPlaying : function () {
					document.location = "architectsdk://contentStopped_video";
				}
			});

		videoSoldaten.play(1);
		videoSoldaten.pause();
		document.location = "architectsdk://contentStopped_video";

		this.trackableSoldaten = new AR.Trackable2DObject(this.tracker, "marker3", {
				drawables : {
					cam : [videoSoldaten]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableSoldaten.enabled) {
                        videoSoldaten.resume();
                        document.location = "architectsdk://contentStarted_video";
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoSoldaten.pause();
					document.location = "architectsdk://contentStopped_video";
				}
			});
	},
    
    switchContentToInfo: function switchContentToInfoFn(){
			for(i=0; i<World.trackableSoldaten.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableSoldaten.drawables.cam[i])){
					World.trackableSoldaten.drawables.cam[i].pause();
				}
			}
			World.trackableSoldaten.enabled = false;
	},

	switchContentToAR: function switchContentToARFn(){
			for(i=0; i<World.trackableSoldaten.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableSoldaten.drawables.cam[i])){
					World.trackableSoldaten.drawables.cam[i].resume();
				}
			}
			World.trackableSoldaten.enabled = true;
	},
    
	turnEverythingOff: function turnEverythingOffFn(){
			for(i=0; i<World.trackableSoldaten.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableSoldaten.drawables.cam[i])){
					World.trackableSoldaten.drawables.cam[i].pause();
				}
			}
			World.trackableSoldaten.enabled = false;
    }
};

World.init();
