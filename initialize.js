$().ready(function() {

	GIDGET.ui.setLevel(GIDGET.levels.getRedRock);

	// Populate the level selection drop down.
	for(var level in GIDGET.levels) {
		if(GIDGET.levels.hasOwnProperty(level)) {
		
			$('#levels').
				append("<option>" + level + "</option>").click(function() {
				
					var world = $(this).val();
					if(GIDGET.levels.hasOwnProperty(world))
						GIDGET.ui.setLevel(GIDGET.levels[world]);

				});
			
		}
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
		}
		else if(GIDGET.ui.percentRemaining > 0) {
			GIDGET.ui.drawGrid();		
		}
		setTimeout(animate, 25);
	}
	setTimeout(animate);

});