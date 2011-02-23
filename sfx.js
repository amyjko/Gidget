GIDGET.sound = function(fileName) {

	this.fileName = fileName;
	
	var sound = document.createElement('audio');
	sound.setAttribute('src', 'media/sfx/' + fileName + '.wav');
	sound.load();
	
	this.play = function() {
		sound.play();
	}

};

var analyze = new GIDGET.sound("analyze");
var drop = new GIDGET.sound("drop");
var goto = new GIDGET.sound("goto");
var scan = new GIDGET.sound("scan");
var grab = new GIDGET.sound("grab");
	