GIDGET.sound = function(fileName) {

	var sound = document.createElement('audio');
	sound.setAttribute('src', 'media/sfx/' + fileName + '.wav');
	sound.load();
	
	this.play = function() {
		sound.play();
	}

};

GIDGET.sfx = {

	// Preload all the sounds before using the play() function.
	load: function() {
		this.analyze 	= new GIDGET.sound("analyze");
		this.drop 		= new GIDGET.sound("drop");
		this.grab 		= new GIDGET.sound("grab");
		this.goto 		= new GIDGET.sound("goto");
		this.scan 		= new GIDGET.sound("scan");
		this.focusIn 	= new GIDGET.sound("focusIn");
		
		this.error 			= new GIDGET.sound("error2");
		this.errorCritical 	= new GIDGET.sound("error3");
		this.success 		= new GIDGET.sound("success1");
		this.successHigh 	= new GIDGET.sound("success2");
		
		this.energyLow		= new GIDGET.sound("lowEnergy");
		this.parserError	= new GIDGET.sound("sad1");
		
	},

	play: function(command) {
		// Play sounds as long as the learner didn't press the (runTo)"End" button.
		if (GIDGET.ui.stepState !== "end"){
			switch(command) {
				case "analyze":	this.analyze.play();
								break;
				case "drop":	this.drop.play();
								break;
				case "grab":	this.grab.play();
								break;
				case "goto":	this.goto.play();
								break;
				case "scan":	this.scan.play();
								break;
				case "focusIn":	this.focusIn.play();
								break;
				case "error":	this.error.play();
								break;
				case "errorCritical":	this.errorCritical.play();
								break;
				case "success":	this.success.play();
								break;
				case "successHigh":	this.successHigh.play();
								break;		
				case "energyLow":	this.energyLow.play();
								break;
				case "parserError":	this.parserError.play();
								break;
				default:		console.error("An invalid sound, "+ command +", was specified to play.");
								break;
			}
		}
	},
	
};
