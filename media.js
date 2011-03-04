GIDGET.ui.media = {

	mediaToLoad: 0,
	mediaRemainingToLoad: 0,

	// The hash table of image objects
	images: [],
	sounds: [],

	// Retrieve an image object by url
	getImage: function(url) {
	
		if(this.images.hasOwnProperty(url))
			return this.images[url];
		else
			return undefined;
	
	},
	
	playSound: function(command) {

		// Play sounds as long as the learner didn't press the (runTo)"End" button.
		if (GIDGET.ui.stepState !== "end") {

			var sound = this.sounds[command];
			if(isDef(sound))
				sound.play();
			else
				console.error("There was no sound named " + command);
			
		}
	
	},
	
	loadSound: function(name) {

		// Make a sound	
		var sound = document.createElement('audio');

		// Listen to success and failure		
		sound.onload = function() { 
			GIDGET.ui.media.mediaRemainingToLoad--;
			GIDGET.ui.media.sounds[name] = this;
			GIDGET.ui.media.notifyOfProgress();
		}
		sound.onerror = function() {
			GIDGET.ui.media.mediaRemainingToLoad--;
			GIDGET.ui.media.notifyOfProgress();
		}

		// Indicate which file
		sound.setAttribute('src', 'media/sfx/' + name + '.wav');

		// Add the sound to the body, so that onload events get fired.
		$('body').append(sound);

		// Add it to the total
		this.mediaToLoad++;
		this.mediaRemainingToLoad++;
		
		// Load the sound
		sound.load();	
	
	},

	loadImage: function(url) {
	
		var image = new Image();

		// Increment how many images are remaining to load
		this.mediaToLoad++;
		this.mediaRemainingToLoad++;

		// Decrement on success or failure
		image.onload = function () {
			GIDGET.ui.media.mediaRemainingToLoad--;
			// Store the image in the images table
			GIDGET.ui.media.images[url] = image;
			// Notify callback of progress
			GIDGET.ui.media.notifyOfProgress();
		};
		image.onerror = function () {
			GIDGET.ui.media.mediaRemainingToLoad--;
			// Notify callback of progress
			GIDGET.ui.media.notifyOfProgress();
		};
		
		// Begin loading
		image.src = url;
	
	},
	
	progressCallback: undefined,
	
	notifyOfProgress: function() {
	
		if(isDef(this.progressCallback))
			this.progressCallback.call(this, this.mediaRemainingToLoad, this.mediaToLoad);

	},
	
	loadMedia: function(onProgress) {
	
		this.progressCallback = onProgress;
	
		this.loadImage("media/scene/frame01.png");
		this.loadImage("media/scene/frame02.png");
		this.loadImage("media/scene/frame03.png");
		this.loadImage("media/scene/frame04.png");
		this.loadImage("media/scene/frame05.png");
		this.loadImage("media/scene/frame06.png");
		this.loadImage("media/scene/frame07.png");
		this.loadImage("media/scene/frame08.png");
		this.loadImage("media/scene/frame09.png");
		this.loadImage("media/scene/frame10.png");
		
		this.loadImage("media/scene/frame11.png");
		this.loadImage("media/scene/frame12.png");
		this.loadImage("media/scene/frame13.png");
		this.loadImage("media/scene/frame14.png");
		this.loadImage("media/scene/frame15.png");
		this.loadImage("media/scene/frame16.png");
		this.loadImage("media/scene/frame17.png");
		this.loadImage("media/scene/frame18.png");
		this.loadImage("media/scene/frame19.png");
		this.loadImage("media/scene/frame20.png");
		
		this.loadImage("media/scene/frame20b.png");
		this.loadImage("media/scene/frame20c.png");
		this.loadImage("media/scene/frame20d.png");
		this.loadImage("media/scene/frame21.png");
		this.loadImage("media/scene/frame22.png");
		this.loadImage("media/scene/frame23.png");
		this.loadImage("media/scene/frame24.png");
		this.loadImage("media/scene/frame25.png");
		this.loadImage("media/scene/frame26.png");
		this.loadImage("media/scene/frame27.png");
		
		this.loadImage("media/scene/frame28.png");
		this.loadImage("media/scene/frame29.png");
		this.loadImage("media/scene/frame30.png");
		this.loadImage("media/scene/frame31.png");
		this.loadImage("media/scene/frame32.png");
		this.loadImage("media/scene/frame33.png");
	
		// Action Sounds
		this.loadSound("analyze");
		this.loadSound("drop");
		this.loadSound("grab");
		this.loadSound("goto");
		this.loadSound("scan");
		this.loadSound("focusIn");
		
		// Goal Evaluation Sounds
		this.loadSound("goal_checkFailure");
		this.loadSound("goal_finalSuccess");
		this.loadSound("goal_checkSuccess");
		this.loadSound("goal_finalFailure");
		
		// Event Sounds
		this.loadSound("lowEnergy");
		this.loadSound("error");
		this.loadSound("parserErrorExp");
		this.loadSound("parserErrorCtrl");
	
	}

};