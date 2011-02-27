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
		// Action Sounds
		this.analyze 	= new GIDGET.sound("analyze");
		this.drop 		= new GIDGET.sound("drop");
		this.grab 		= new GIDGET.sound("grab");
		this.goto 		= new GIDGET.sound("goto");
		this.scan 		= new GIDGET.sound("scan");
		this.focusIn 	= new GIDGET.sound("focusIn");
		
		// Goal Evaluation Sounds
		this.goal_checkFailure	= new GIDGET.sound("goal_checkFailure");
		this.goal_finalSuccess 	= new GIDGET.sound("goal_finalSuccess");
		this.goal_checkSuccess 	= new GIDGET.sound("goal_checkSuccess");
		this.goal_finalFailure 	= new GIDGET.sound("goal_finalFailure");
		
		// Event Sounds
		this.energyLow		= new GIDGET.sound("lowEnergy");
		this.error			= new GIDGET.sound("error");
		this.parserErrorExp	= new GIDGET.sound("parserErrorExp");
		this.parserErrorCtrl= new GIDGET.sound("parserErrorCtrl");
		
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
				case "goal_checkFailure": this.goal_checkFailure.play();
								break;
				case "goal_finalSuccess": this.goal_finalSuccess.play();
								break;
				case "goal_checkSuccess": this.goal_checkSuccess.goalPlus();
								break;
				case "goal_finalFailure": this.goal_finalFailure.play();
								break;		
				case "energyLow":	this.energyLow.play();
								break;
				case "error":	this.error.play();
								break;
				case "parserErrorExp":	this.parserErrorExp.play();
								break;
				case "parserErrorCtrl":	this.parserErrorCtrl.play();
								break;
				default:		console.error("An invalid sound, "+ command +", was specified to play.");
								break;
			}
		}
	},
	
};
