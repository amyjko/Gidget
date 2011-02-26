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

function hideToolTip() {
	
	$('div').each(function(index) {
		if($(this).attr("class") == "tooltip") {
			$(this).css({left:"-9999px"});
		}
	});
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
		$(this).css('backgroundColor', '#f0f5f0');
		
		// Format the formatting each time to update the line and token numbers.
		$(this).html(GIDGET.ui.gidgetCodeToHTML(GIDGET.ui.htmlToGidgetCode($(this).html())));

		// Enable reset button
		if (GIDGET.ui.didCodeChange($(this).html()))
			$('#reset').attr('disabled', false);

		GIDGET.ui.saveCurrentLevelCode();

	}).
	focusin(function() {
		// Controls gCode background color on focusIn
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
		GIDGET.ui.nextLevel();
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
	GIDGET.ui.showExecutionControls();

	GIDGET.ui.updateBonus();
	
	//Targets a tag using jQuery and adding a div to it. It extracts the 'title' tag from the code and uses that as its text.
	function tooltip(target_items, name) {
		var index = 0;

		for(k = 0; k < target_items.length; k++) {
			
 			$(target_items[k]).each(function() {
 				//Add a new div to hold the tooltip
				$("body").append("<div class='"+name+"' id='"+name+index+"'><p>"+$(this).attr('title')+"</p></div>");
				var my_tooltip = $("#"+name+index);
				
				//Make sure there's a title attribiute we can extract text from
				if($(this).attr("title") != "" && $(this).attr("title") != "undefined" ) {
					
					//Remove the text from the original attribute & make sure our tooltip fits withn the page
					$(this).removeAttr("title").mouseover(function() {
						my_tooltip.css({opacity:0.9, display:"none"}).delay(800).fadeIn(400);
					}).mousemove(function(kmouse) {
						var border_top = $(window).scrollTop();
						var border_right = $(window).width();
						var left_pos, top_pos, offset = 15;
						
						//Check to make sure X-coordinates fit within browser window & adjust accordingly
						if(border_right <= my_tooltip.width() + kmouse.pageX){
							left_pos = kmouse.pageX-offset-my_tooltip.width()-(offset*2);}
						else if(border_right - (offset * 2) > my_tooltip.width() + kmouse.pageX){
							left_pos = kmouse.pageX+offset;}
						else{
							left_pos = border_right-my_tooltip.width()-offset;}
						//Check to make sure Y-coordinates fit within browser window & adjust accordingly
						if(border_top + (offset *2 )>= kmouse.pageY - my_tooltip.height()){
							top_pos = border_top + offset;}
						else {
							top_pos = kmouse.pageY-my_tooltip.height()-offset;
						}

						my_tooltip.css({left: left_pos, top:top_pos});

					}).mouseout(function() {
						my_tooltip.css({left:"-9999px"});
					});	
				}
				index++;
			});
			
		}
	}

	// State which tags we'd like to have tooltips for.
	 tooltip(["button","h2", "h3"],"tooltip");

	
	// Pre-load sound effects
	GIDGET.sfx.load();

});