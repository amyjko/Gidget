window.onBespinLoad = function() {

    var edit = document.getElementById("code");
    var env = edit.bespin;
    var editor = env.editor;
	GIDGET.ui.editor = editor;

	GIDGET.ui.setLevel(GIDGET.levels.getRedRock);

	env.settings.set("fontsize", 11);

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


};