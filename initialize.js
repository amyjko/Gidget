function supportsCanvas() {

	return !!document.createElement('canvas').getContext;

}

function supportsLocalStorage() {

	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch(e){
		return false;
	}

}

$().ready(function() {

	// Check for both canvas and local storage support before continuing.
	if(!supportsCanvas() || !supportsLocalStorage())
		window.location.href = "unsupported.html";

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
	
	$('#code').
	focusout(function() {
		// Controls gCode background color on focusOut (should be same as in the CSS file)
		$(this).css('backgroundColor', 'HoneyDew');
		
		// Format the formatting each time to update the line and token numbers.
		$(this).html(GIDGET.ui.gidgetCodeToHTML(GIDGET.ui.htmlToGidgetCode($(this).html())));

		GIDGET.ui.saveCurrentLevelCode();

	}).
	focusin(function() {
		// Controls gCode background color on focusOut
		$(this).css('backgroundColor', 'white'); // was rgb(25,25,25) for dark background
	});	
	
	$('#code').click(function() {
	
		if($('#code').attr('contentEditable') === 'false') {

			$('#code').animate({ opacity: 0.25 }, 200, function() { $('#code').css('opacity', 1.0); });		
			GIDGET.ui.setThought(GIDGET.text.editingDisabled(), 200);
		
		}
	
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
	$('.introBox').hide();
	
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

	
	$('#playIntro').click(function() {
		$('#intro').toggle();
		var intro = GIDGET.createIntroduction();
		intro.play($('#introCanvas')[0], function() { $('#intro').toggle(); });

	});
	
	$('#setCondControl').click(function() {
	
		GIDGET.experiment.condition = "control";
		GIDGET.experiment.saveExpCondition();

	});
	
	$('#setCondMale').click(function() {
	
		GIDGET.experiment.condition = "male";
		GIDGET.experiment.saveExpCondition();

	});
	
	$('#setCondFemale').click(function() {
	
		GIDGET.experiment.condition = "female";
		GIDGET.experiment.saveExpCondition();

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

	if(localStorage.getItem('expCondition') !== null)
		GIDGET.experiment.loadExpCondition();

	
	// Set the current level to whatever was found in local storage (or the default).		
	GIDGET.ui.setLevel(localStorage.currentLevel);

	// Set the code to the most recent stored version of the code, restoring the user's work.
	if(localStorage.getItem('levelMetadata') !== null) {
	
		var levelMetadata = localStorage.getObject('levelMetadata');
		if(levelMetadata.hasOwnProperty(localStorage.currentLevel)) {
		
			var versions = levelMetadata[localStorage.currentLevel].versions;
			if(versions.length > 0) {
			
				var code = versions[versions.length - 1].version;
				$('#code').html(GIDGET.ui.gidgetCodeToHTML(code));
			
			}
		
		}	
	
	}

	// If we've written quit to local storage, the user has already quit, so we disable the UI.
	if(localStorage.getItem('quit') !== null) {
	
		GIDGET.ui.disable("You've already quit, so Gidget is permanently disabled.");
	
	}
	
	// Populate Learner Communication Box
	 // Version 1
	GIDGET.ui.setThought("\n" +
		"<button id='step' class='comm1' onclick='GIDGET.ui.step(false, true);'>step</button>\n" +
		"<button id='line' class='comm2' onclick='GIDGET.ui.runToNextLine();'>line</button>\n"+
		"<button id='play' class='comm3' onclick='GIDGET.ui.playToEnd();'>play</button>\n" +
		"<button id='end'  class='comm4' onclick='GIDGET.ui.runToEnd();'>end</button>\n"
		,0, "learner");
	/*
	// Version 2
	GIDGET.ui.setThought("" +
		"<img src='media/gui-comm-plus.png' height='40' width='40' id='step' onclick='GIDGET.ui.step(false, true);' />\n" +
		"<img src='media/gui-comm-plus-dots.png' height='40' width='40' id='step' onclick='GIDGET.ui.runToNextLine();' />\n" +
		"<img src='media/gui-comm-arrow-single.png' height='40' width='40' id='step' onclick='GIDGET.ui.playToEnd();' />\n" +
		"<img src='media/gui-comm-arrow-wall.png' height='40' width='40' id='step' onclick='GIDGET.ui.runToEnd();' />\n"
		,0, "learner");
	
		GIDGET.ui.setThought("" +
		"<span><a class='rollover' title='step' onclick='GIDGET.ui.step(false, true);' alt='take one step within the code.'></a>\n" +
		"<a class='rollover2' title='lineStep' onclick='GIDGET.ui.runToNextLine();' alt='execute one line within the code.'></a>\n" +
		"<a class='rollover3' title='play' onclick='GIDGET.ui.playToEnd();' alt='execute steps one-by-one until end of code.'></a>\n" +
		"<a class='rollover4' title='playEnd' onclick='GIDGET.ui.runToEnd();' alt='jump to end of code execution.'></a>\n </span>" 
		,0, "learner");
		// style='background: url(\"media/gui/comm-arrow.png\")'
		*/
});