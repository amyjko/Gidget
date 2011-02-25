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

	function playIntro() {

		$('#loadingIntro').show();
		var intro = GIDGET.createIntroduction();
		var total = SCENES.imagesRemaining;
		intro.play($('#introCanvas')[0], 
			function() {
			
				var percent = (100 - Math.round(SCENES.imagesRemaining * 100 / total));
				$('#loadingIntro .progress').width("" + percent + "%");
			
			},
			function() {
			
				$('#loadingIntro').hide();
				$('#intro').toggle();
			
			},
			function() { 
		
				$('#intro').fadeTo(1000, 0.0, function() { $('#intro').hide(); });
				$('#container').fadeTo(1000, 1.0);
			
			}
		);
	
	}

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
		
	$('.popup').hide();
	$('.introBox').hide();
	
	$(document).keyup(function(e) {
	
		if(e.keyCode == 27) {
		
			$('#debug').toggle();
		}
		else if(e.keyCode == 112) {

			playIntro();		
		
		}
	
	});
	
	$('#clearLocalStorage').click(function() {
	
		localStorage.clear();
		
		alert("Cleared local storage.");
	
	});

	
	$('#playIntro').click(function() {
	
		playIntro();

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
		
		$('#container').fadeTo(0, 0.0);

		playIntro();		
			
	}

	// If we've already stored the experimental condition for this participant,
	// load it.
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
	GIDGET.ui.setThought("<span class='smallfont'>(Ask Gidget to):</span><br />\n" +
		"<button id='step' onclick='GIDGET.ui.stepOnce();' title='Ask Gidget to execute one step of the code.'>step</button>\n" +
		"<button id='line' onclick='GIDGET.ui.runToNextLine();' title='Ask Gidget to execute one whole line of the code.'>line</button>\n"+
		"<button id='play' onclick='GIDGET.ui.playToEnd();' title='Ask Gidget to execute the entire code step-by-step.'>play</button>\n" +
		"<button id='end'  onclick='GIDGET.ui.runToEnd();' title='Ask Gidget to execute the entire code in one step.'>end</button>\n"
		,0, "learner");

	GIDGET.ui.updateBonus();
	
	
	//Targets a tag using jQuery and adding a div to it. It extracts the 'title' tag from the code and uses that as its text.
	function tooltip(target_items, name) {
		$(target_items).each(function(i) {
			$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
			
			var my_tooltip = $("#"+name+i);

			if($(this).attr("title") != "") { // checks if there is a title

				$(this).removeAttr("title").mouseover(function() {
					my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
				}).mousemove(function(kmouse) {
					my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
				}).mouseout(function(){
					my_tooltip.fadeOut(400);
				});

			}
		});
	}

	// State which tags and which style we'd like to apply to.
	$(document).ready(function() {
		 tooltip("h2","tooltip");
		 tooltip("h3","tooltip");
		 //tooltip("button","tooltip");
		 //tooltip("canvas","tooltip");
		 tooltip("span","tooltip");
	});
	
	
	
	// Pre-load sound effects
	GIDGET.sfx.load();

});