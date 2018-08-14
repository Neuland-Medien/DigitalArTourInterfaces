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

		this.modelGoldschatz = new AR.Model("assets/goldschatz.wt3", {
				onLoaded : this.worldLoaded,
				scale : {
					x : 0.0017,
					y : 0.0017,
					z : 0.0017
				},
				translate : {
					x : -0.04,
					y : -1.9,
					z : 0.17
				},
				rotate : {
					tilt : -90
				}
			});

		var videoGoldschatz = new AR.VideoDrawable("assets/goldschatz.mp4", 1.29, {
				offsetX : 0,
				offsetY : -1.1,
				isTransparent : true,
				onPlaybackStarted : function () {
					document.location = "architectsdk://contentStarted_video";
				},
				onFinishedPlaying : function () {
					document.location = "architectsdk://contentStopped_video";
				}
			});

		videoGoldschatz.play(1);
		videoGoldschatz.pause();
		document.location = "architectsdk://contentStopped_video";

		this.trackableGoldschatz = new AR.Trackable2DObject(this.tracker, "marker10", {
				drawables : {
					cam : [videoGoldschatz, this.modelGoldschatz]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableGoldschatz.enabled) {
					videoGoldschatz.resume();
					document.location = "architectsdk://contentStarted_video";
                        
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoGoldschatz.pause();
					document.location = "architectsdk://contentStopped_video";
				}
			});

		this.trackableGoldschatz_1 = new AR.Trackable2DObject(this.tracker, "marker10_1", {
				drawables : {
					cam : [videoGoldschatz, this.modelGoldschatz]
				},
				onEnterFieldOfVision : function onEnterFieldOfVisionFn() {
                    if(World.trackableGoldschatz_1.enabled) {
					videoGoldschatz.resume();
					document.location = "architectsdk://contentStarted_video";
                        
                    }
				},
				onExitFieldOfVision : function onExitFieldOfVisionFn() {
					videoGoldschatz.pause();
					document.location = "architectsdk://contentStopped_video";
				}
			});
	},
    
    switchContentToInfo: function switchContentToInfoFn(){
			for(i=0; i<World.trackableGoldschatz_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableGoldschatz_1.drawables.cam[i])){
					World.trackableGoldschatz_1.drawables.cam[i].pause();
				}
			}
			World.trackableGoldschatz_1.enabled = false;
			for(i=0; i<World.trackableGoldschatz.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableGoldschatz.drawables.cam[i])){
					World.trackableGoldschatz.drawables.cam[i].pause();
				}
			}
			World.trackableGoldschatz.enabled = false;
	},

	switchContentToAR: function switchContentToARFn(){
			for(i=0; i<World.trackableGoldschatz_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableGoldschatz_1.drawables.cam[i])){
					World.trackableGoldschatz_1.drawables.cam[i].resume();
				}
			}
			World.trackableGoldschatz_1.enabled = true;
			for(i=0; i<World.trackableGoldschatz.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableGoldschatz.drawables.cam[i])){
					World.trackableGoldschatz.drawables.cam[i].resume();
				}
			}
			World.trackableGoldschatz.enabled = true;
	},
    
	turnEverythingOff: function turnEverythingOffFn(){
			for(i=0; i<World.trackableGoldschatz_1.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableGoldschatz_1.drawables.cam[i])){
					World.trackableGoldschatz_1.drawables.cam[i].pause();
				}
			}
			World.trackableGoldschatz_1.enabled = false;
			for(i=0; i<World.trackableGoldschatz.drawables.cam.length; i++){
				if(AR.VideoDrawable.prototype.isPrototypeOf(World.trackableGoldschatz.drawables.cam[i])){
					World.trackableGoldschatz.drawables.cam[i].pause();
				}
			}
			World.trackableGoldschatz.enabled = false;
    }
};

World.init();
