$().ready(function() {

	Storage.prototype.setObject = function(key, value) {
	    this.setItem(key, JSON.stringify(value));
	}
	
	Storage.prototype.getObject = function(key) {
	    return this.getItem(key) && JSON.parse(this.getItem(key));
	}

	// Populate the level selection drop down.
	var levelCount = 1;
	for(var level in GIDGET.levels) {
		
		if(GIDGET.levels.hasOwnProperty(level)) {
			if (localStorage.currentLevel === level) {
				$('#levels').
				append("<option selected=\"selected\">" + levelCount + ". " + level + "</option>").click(function() {
				
					var world = ($(this).val()).replace(/[0-9]+.\s/g,'');
					if(GIDGET.levels.hasOwnProperty(world))
						GIDGET.ui.setLevel(world);

				});
			}
			else {	
			$('#levels').
				append("<option>" + levelCount + ". " + level + "</option>").click(function() {
				
					var world = ($(this).val()).replace(/[0-9]+.\s/g,'');
					if(GIDGET.levels.hasOwnProperty(world))
						GIDGET.ui.setLevel(world);
				});
			}			
		}
		
		levelCount++;
	}
	
	// When mouse leaves editor, format the code.
	$('#code').mouseout(function() {
	
		// Format the formatting each time to update the line and token numbers.
		$(this).html(GIDGET.ui.gidgetCodeToHTML(GIDGET.ui.htmlToGidgetCode($(this).html())));

		GIDGET.ui.saveCurrentLevelCode();
	
	});
	
	function animate() {
		GIDGET.ui.percentRemaining -= 10;
		if(GIDGET.ui.percentRemaining < 0) {
			GIDGET.ui.world.resetThingDeltas();		
			GIDGET.ui.percentRemaining = 0;
			GIDGET.ui.drawGrid();		
		}
		else if(GIDGET.ui.percentRemaining > 0) {
			GIDGET.ui.drawGrid();		
		}
		setTimeout(animate, 25);
	}
	setTimeout(animate);
	
	$('.popup').hide();
	
	$(document).keyup(function(e) {
	
		if(e.keyCode == 27) {
		
			$('#debug').toggle();
		}
		else if(e.keyCode == 112) {
		
			$('#intro').toggle();
			var intro = GIDGET.createIntroduction();
			intro.play($('#introCanvas')[0], function() { $('#intro').toggle(); });
		
		}
	
	});
	
	$('#clearLocalStorage').click(function() {
	
		localStorage.clear();
		
		alert("Cleared local storage.");
	
	});
	

	$('#gotoNextLevel').click(function() {
		
		var found = false;
		var nextLevel = undefined;
		for(var level in GIDGET.levels) {
			if(GIDGET.levels.hasOwnProperty(level)) {
				if(found) {
					nextLevel = level;
					break;
				}
				else if(level === localStorage.currentLevel) {
					found = true;
				}
			}
		}

		if(isDef(nextLevel)) {
		
			GIDGET.ui.setLevel(nextLevel);
		
		}
		else {
		
			alert("There aren't any more levels!");
		
		}
	});

	var test = localStorage;

	// Start afresh and play intro movie is there is no record of play
	if(localStorage.getItem('currentLevel') === null) {

		localStorage.setItem('currentLevel', 'learnScan');
		
		$('#content').fadeTo(0, 0.0);
		
		$('#intro').toggle();
		var intro = GIDGET.createIntroduction();
		intro.play($('#introCanvas')[0], function() { 
		
			$('#intro').fadeTo(1000, 0.0, function() { $('#intro').hide(); });
			$('#content').fadeTo(1000, 1.0);
			
		});
			
	}

	// Set the current level to whatever was found in local storage (or the default).		
	GIDGET.ui.setLevel(localStorage.currentLevel);

	
});