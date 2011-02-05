$().ready(function() {

	// Populate the level selection drop down.
	var levelCount = 1;
	for(var level in GIDGET.levels) {
		
		if(GIDGET.levels.hasOwnProperty(level)) {
			$('#levels').
				append("<option>" + levelCount + ". " + level + "</option>").click(function() {
				
					var world = ($(this).val()).replace(/[0-9]+.\s/g,'');
					if(GIDGET.levels.hasOwnProperty(world))
						GIDGET.ui.setLevel(world);

				});
			
		}
		
		levelCount++;
	}
	
	$('#code').focusout(function() {
	
		// Format the formatting each time to update the line and token numbers.
		$(this).html(GIDGET.ui.gidgetCodeToHTML(GIDGET.ui.htmlToGidgetCode($(this).html())));
	
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
	
		localStorage.removeItem('currentLevel');
		
		alert("Cleared local storage.");
	
	});

	var test = localStorage;

	if(localStorage.getItem('currentLevel') === null) {
	
		localStorage.setItem('currentLevel', 'getRedRock');
		
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