GIDGET.ui = {

	// The level to initialize on each run.
	level: undefined,

	// Contains all the data for the world being run
	world: undefined,

	messages: "",

	stepSpeedInMilliseconds: 100,

	images: {},
	
	hasImage: function(name, state) {
	
		return this.images.hasOwnProperty(name + "." + state) && this.images[name + "." + state] !== false;
	
	},
	
	getImage: function(name, state) {
	
		var label = name + "." + state;
	
		// If this has already been checked, return what's there.
		if(this.images.hasOwnProperty(label))
			return this.images[label];
		
		// For now, mark it as false.
		this.images[label] = false;
	
		$.ajax({ url: "media/" + label + ".png", context: this, 
			success: function(){

	        	// An image has loaded! Create the image, cache it, and update the UI.
				var image = new Image();
				// Only once the image has loaded to we store it and update the image in the database; this is because sometimes local AJAX requests lie.
				// Moreover, we set the callback first, then the source, because sometimes the callback gets called asynchronously before the callback is set
				// when we define the source first.
				image.onload = function () {
		        	GIDGET.ui.images[label] = image;
		        	GIDGET.ui.updateRuntimeUserInterface();
				};
				image.src = "media/" + label + ".png";
	        	
	      	},
	      	error: function(XMLHttpRequest, textStatus, errorThrown) {
	      	
	      		// Mark this name as not existing
	      		this.images[label] = false;
	      		
	      	}
      	});
	
		return false;	
	
	},

	log: function(message) {

		this.messages = this.messages + "<br>" + message;
		console.log("[gidget] " + message);
	
	},

	startOver: function() {
	
		this.setLevel(this.level);
	
	},

	gidgetCodeToHTML: function(code) {
	
		var count = 0;
		var first = false;
	
		function tokenToHTML(string) {
		
			var classes = 'sourceToken';
			
			if(string.match(/scan|analyze|goto|ask|to|grab|drop|it|if|is|on/))
				classes = classes + ' keyword';		
				
			if(first) {
				classes = classes + ' first';
				first = false;	
			}

			var html = "<span class='" + classes + "' id='sourceToken" + count + "'>" + string + "</span>";
			count++;
			return html;					
		
		}
	
		// Convert the given gidget code into marked up HTML amenable for highlighting.
		var lines = code.split(/\r\n|\r|\n/);
		var lineNumber;
		var html = "";
		for(lineNumber = 0; lineNumber < lines.length; lineNumber++) {

			first = true;
			var line = lines[lineNumber];

			var lineText = "<div class='sourceLine' + id='sourceLine" + lineNumber + "'>";

			var charIndex, char;
			var id = "";
			for(charIndex = 0; charIndex < line.length; charIndex++) {
				
				char = line.charAt(charIndex);

				// If it's a space, add a space.
				if(char.match(/\s/)) {
					if(id.length > 0)
						lineText = lineText + tokenToHTML(id);
					lineText = lineText + "&nbsp;";
					id = "";
				}
				// If it's a comma, add the accumulated id if necessary and then add a comma,
				// resetting the accumulated id.
				else if(char === ',') {
				
					if(id.length > 0)
						lineText = lineText + tokenToHTML(id);
					lineText = lineText + tokenToHTML(",");
					id = "";

				}
				// Otherwise, just accumulate characters for the id.
				else
					id = id + char;
			
			}

			// If there's text accumulated for the id, generate a token for it.			
			if(id.length > 0)
				lineText = lineText + tokenToHTML(id);
			
			// End the line.
			lineText = lineText + tokenToHTML("\n") + "</div>";
			
			// Add the line to the html.
			html = html + lineText;
			
		}
	
		return html;
	
	},
	
	htmlToGidgetCode: function(html) {

		// Convert the given HTML to Gidget source code amenable for execution.
		// <div>s are treated as new lines.	
		var code = "";
		var lines = $('#code').children();
		var lineNumber;
		for(lineNumber = 0; lineNumber < lines.length; lineNumber++) {
		
			var line = $(lines[lineNumber]).text().trim();
			code = code + line + "\n";
		
		}
	
		return code;
	
	},	

	// Should only be called once upon starting the level or when the user requests to start over.
	setLevel: function(level) {

		this.level = level;

		this.reset();

		// Initialize the Gidget code with the code provided in the level specification.
		$('#code').html(this.gidgetCodeToHTML(this.world.code));

		this.world.gidget.runtime.state = 'sad';
		this.setThought(this.world.mission, 0);
		
/*
		$('#missionText').html(this.world.mission);
		$('#mission').show();
*/
		
		this.reset();
	
	},

	reset: function() {

		this.messages = "";

		// Restore the world to its defaults.
		this.world = this.level.call();

		$('#goals').empty();

		// Add the goals text.
		var i;
		for(i = 0; i < this.world.goals.length; i++)
			$('#goals').append("<div class='goal'>" + this.gidgetCodeToHTML(this.world.goals[i]) + "<span class='success'>success</span><span class='failure'>failure</span></div>");

		$('.success').hide();
		$('.failure').hide();

		$('#goals').removeClass('runtimeReference');

		this.done();
		
		this.drawGrid();

	},
	
	done: function() {
		
		$('#code').attr('contentEditable', 'true');
		this.highlightToken(undefined);

	},

	start: function() {
	
		// This creates a new world, reset to its defaults.
		this.reset();

		$('#goal').css('backgroundColor', 'rgb(42,33,28)');
	
		$('#code').attr('contentEditable', 'false');

		// Start the world, but give Gidget the users code.
		this.world.start(this.htmlToGidgetCode($('#code').html()));

		this.updateRuntimeUserInterface();
	
		// It may be the case that there is no code.	
		if(this.world.gidget.runtime.isExecuting())
			this.step(false, true);

	},

	createThoughtHTML: function(message) { 
	
		return "<table class='thoughtTable'><tr><td><img src='media/gidget." + this.world.gidget.runtime.state + ".png' class='thing' /></td><td>" + message + "</td></tr></table>";

	},

	setThought: function(message, delay) {
	
		var html = this.createThoughtHTML(message);
	
		if(!isDef(delay) || delay === 0) {
			$('#thought').html(html);
		}
		else {
	
			$('#thought').animate({
				opacity: 0.0
			}, delay, 
				function() {
					$('#thought').html(html);
					$('#thought').animate({ opacity: 1.0 }, delay);
				}
			);
			
		}
	
	},

	stepContinue: function() { 
	
		GIDGET.ui.step(true, false);
		
	},

	runToEnd: function() {

		// Start the world.
		if(!this.world.isExecuting())
			this.start();
		
		while(this.world.isExecuting())
			GIDGET.ui.step(false, false);

		this.executeGoals();
		this.updateRuntimeUserInterface();	

	},

	playToEnd: function() {

		// Start the world.
		if(!this.world.isExecuting())
			this.start();

		// Call step repeatedly until done.
		setTimeout(GIDGET.ui.stepContinue, this.stepSpeedInMilliseconds);
	
	},
	
	runToNextLine: function() {
	
		// Start the world.
		if(!this.world.isExecuting())
			this.start();

		var currentLine = this.world.gidget.runtime.getCurrentLine();
		console.log("Line is " + currentLine);
		while(this.world.isExecuting() && this.world.gidget.runtime.getCurrentLine() === currentLine)
			GIDGET.ui.step(false, false);
			
		if(this.world.isExecuting())
			GIDGET.ui.step(false, false);

	},
	
	percentRemaining: 100,

	// A hash table of lists of decisions, indexed by thing. These are the decisions
	// remaining to be executed before moving on to the next step.
	decisionsRemaining: [],
	
	// This steps the world one step or executes the goal if the world is done executing.
	step: function(play, animate) {

		// Start the world.
		if(!this.world.isExecuting())
			this.start();

		var index;
				
		// If the world is still executing, execute each thing's next decision.
		if(this.world.isExecuting()) {

			// How many decisions are left to execute across all things in the world?
			var decisionCount = 0;
			for(index = 0; index < this.decisionsRemaining.length; index++)
				decisionCount += this.decisionsRemaining[index].length;

			// If ther eare none left, get some more by stepping the world once.
			if(decisionCount === 0)
				this.decisionsRemaining = this.world.step();

			// Reset the animation loop.
			GIDGET.ui.world.resetThingDeltas();		
			this.percentRemaining = 100;

			// Explain each active thing's next decision before executing it.
			for(index = 0; index < this.decisionsRemaining.length; index++) {

				// Is there at least one decision? Get the next one and execute it.
				if(this.decisionsRemaining[index].length > 0) {

					var decision = this.decisionsRemaining[index].shift();
					var runtime = decision.runtime;
					
					// Execute the decision's action, if there is one.
					decision.execute();

					// Update the UI so the decision can be visualized.
					this.updateRuntimeUserInterface(decision.action);

					// If this is Gidget, visualize the decision
					if(runtime.thing.name === 'gidget')
						this.visualizeDecision(decision, animate);
					
				}
			
			}
			
			// If we're playing, invoke another step.
			if(play === true && this.world.isExecuting())
				setTimeout(GIDGET.ui.stepContinue, GIDGET.ui.stepSpeedInMilliseconds);

		}
		
		// If the main script is no longer executing, test the goal.
		if(!this.world.isExecuting()) {

			this.executeGoals();
			this.updateRuntimeUserInterface();	
			
		}
	
	},

	// This takes a Thing's decision and converts the spans of text and references
	// into text and user interface highlights. Currently, this is only written for Gidget.
	visualizeDecision: function(decision, animate) {
	
		var runtime = decision.runtime;
	
		// Go through the decisions references and highlight the desired references, 
		// constructing the html to display in the thought bubble.
		var span, text, reference, index;
		var thought = "";
		for(span = 0; span < decision.spans.length; span++) {

			text = decision.spans[span].text;
			reference = decision.spans[span].reference;
			index = parseInt(decision.spans[span].index);
			index = isNaN(index) ? undefined : index;

			// If there's a reference, make a span to represent it.					
			if(isDef(reference)) {
			
				thought = thought + "<span class='runtimeReference'>" + text + "</span>";

			}
			// Otherwise, just concatenate the text.
			else {
			
				thought = thought + text;
			
			}

		}

		this.setThought(thought, animate === true ? 50 : 0);

		this.log(thought);
			
	},

	executeGoals: function() {
	
		var runtime = this.world.gidget.runtime;
		var i, j, goalIndex;
		var allGoalsAchieved;

		// Gidget didn't make it to the end of his program with any energy left.
		if(this.world.gidget.energy <= 0) {
		
			this.setThought("I ... can't... go ... any ... further...", 1000);
		
		}
		// Execute each goal.
		else {
		
			allGoalsAchieved = true;
		
			var goalIndex;
			for(goalIndex = 0; goalIndex < this.world.goals.length; goalIndex++) {
	
				// Initialize gidget with the goal code.
				this.world.gidget.runtime.start(this.world.goals[goalIndex], true, {});
		
				// Execute until it's done.
				while(runtime.isExecuting()) {
					var decisions = runtime.step();
					for(var i = 0; i < decisions.length; i++)
						decisions[i].execute();
				}

				// Print out the decisions, just for debugging purposes.		
				var i, j;
				for(i = 0; i < runtime.decisions.length; i++)
					for(j = 0; j < runtime.decisions[i].spans.length; j++)
						console.log(runtime.decisions[i].spans[j].text);

				// Are there results? If so, the goal was achieved.
				// Put a check mark.
				if(runtime.hasRecentResults()) {
				
					$('#goals .success:eq(' + goalIndex + ')').show();
				
				}
				// If there aren't results, the goal wasn't achieved.
				// Put an x mark.
				else {
	
					$('#goals .failure:eq(' + goalIndex + ')').show();
				
					// Remember that one wasn't achieved.
					allGoalsAchieved = false;
				}
				
				this.done();
				
			}
			
			$('#goals').addClass('runtimeReference');
			
			if(allGoalsAchieved === true) {
				this.world.gidget.runtime.state = "default";
				this.setThought("I accomplished <span class='runtimeReference'>all of my goals</span>! I never could have done it without you!", 5);
			}
			else {
				this.world.gidget.runtime.state = "sad";
				this.setThought("I failed <span class='runtimeReference'>some of my goals</span>. I feel like I'm never going to figure this out :(", 5);
			}
			
			this.highlightToken(undefined);
			
		}
	
	},

	updateRuntimeUserInterface: function(action) {

		function thingToHTML(thing) {
		
			var name = thing.name;
				
			var thingBox = $('<div class="thingBox"></div>');
			var thingImage = $("<img src='media/" + (GIDGET.ui.hasImage(name, thing.runtime.state) ? name : "unknown") + "." + thing.runtime.state + ".png' class='thing' />");
			var thingLabel = $("<div class='thingLabel'>" + name + "</div>");
			thingBox.data('thing', thing);
			thingBox.append(thingLabel);
			thingBox.append(thingImage);

			return thingBox;
		
		}

		function thingListToHTML(array) {

			var thingList = $("<div class='thingList'></div>");
			thingList.append($("<span class='bracket'>[</span>"));
		
			for(var i = 0; i < array.length; i++)			
				thingList.append(thingToHTML(array[i]));

			thingList.append($("<span class='bracket'>]</span>"));
			thingList.append($("<br style='height:0em;clear:both'>"));

			return thingList;
		
		}
		
		function listOfThingListsToHTML(listOfLists) {
		
			if(listOfLists.length === 0) return $("empty");
		
			var list = $("<div></div>");
			for(var i = 0; i < listOfLists.length; i++) {
				list.append(thingListToHTML(listOfLists[i]));
			}
			
			return list;
		
		}
		
		// If there's an action specified, only update the particular part of the UI.
		if(isDef(action)) {
		
			var duration = 500;
		
			// Animate draw grid on the given thing
			// If the action is pop results, animate the first thing list results away
			if(action.kind === 'PopResults') {
				$('#results .thingList:first .thingBox').
					addClass('runtimeReference').
					hide(duration, function() { GIDGET.ui.updateRuntimeUserInterface(); });
			}
			// Hide just one result
			else if(action.kind === 'PopResult') {
				$('#results .thingList:eq(0) .thingBox:eq(0)').
					addClass('runtimeReference').
					hide(duration, function() { GIDGET.ui.updateRuntimeUserInterface(); });
			}
			else if(action.kind === 'PushResults') {
				GIDGET.ui.updateRuntimeUserInterface();
				$('#results .thingList:eq(0) .thingBox').
					addClass('runtimeReference').
					hide().show(duration);
			}
			// If its scanned, update the UI to include the new element, immediately hide it, and then animate it in.
			else if(action.kind === 'PushScanned') {
				GIDGET.ui.updateRuntimeUserInterface();
				$('#scanned .thingBox:eq(0)').
					addClass('runtimeReference').
					hide().show(duration);
			}
			// If its scanned, update the UI to include the new element, immediately hide it, and then animate it in.
			else if(action.kind === 'PushAnalyzed') {
				GIDGET.ui.updateRuntimeUserInterface();
				$('#analyzed .thingBox:first').
					addClass('runtimeReference').
					hide().show(duration);
			}
			// If its scanned, update the UI to include the new element, immediately hide it, and then animate it in.
			else if(action.kind === 'PushGrabbed') {
				GIDGET.ui.updateRuntimeUserInterface();
				$('#grabbed .thingBox:first').
					addClass('runtimeReference').
					hide().show(duration);
			}
			// If its scanned, update the UI to include the new element, immediately hide it, and then animate it in.
			else if(action.kind === 'PopGrabbed') {
				$('#grabbed .thingBox:eq(' + action.index + ')').
					addClass('runtimeReference').
					hide(duration, function() { GIDGET.ui.updateRuntimeUserInterface(); });
			}
			// If its scanned, update the UI to include the new element, immediately hide it, and then animate it in.
			else if(action.kind === 'PushFocus') {
				GIDGET.ui.updateRuntimeUserInterface();
				$('#focused .thingBox:first').
					addClass('runtimeReference').hide().show(duration);
			}
			// If its scanned, update the UI to include the new element, immediately hide it, and then animate it in.
			else if(action.kind === 'PopFocus') {
				$('#focused .thingBox:eq(0)').
					addClass('runtimeReference').
					hide(duration, function() { GIDGET.ui.updateRuntimeUserInterface(); });
			}
			else
				this.updateRuntimeUserInterface();
		
		}
		else {
		
			var runtime = this.world.gidget.runtime;

			$('#results').empty();
			$('#focused').empty();
			$('#scanned').empty();
			$('#analyzed').empty();
			$('#grabbed').empty();
	
			$('#results').append(listOfThingListsToHTML(runtime.resultsStack));
			$('#focused').append(thingListToHTML(runtime.focused));
			$('#scanned').append(thingListToHTML(runtime.scanned));
			$('#analyzed').append(thingListToHTML(runtime.analyzed));
			$('#grabbed').append(thingListToHTML(runtime.grabbed));

			GIDGET.ui.drawGrid();
		
			if(isDef(runtime.lastPC)) {
				var token = runtime.steps[runtime.lastPC].representativeToken;
				if(isDef(token) && !runtime.isGoal)
					this.highlightToken(token);
			}
	
			$('#energy').html(runtime.thing.energy + " units");
			
			if(runtime.thing.energy > 0)
				$('#energy').css('color', 'white');
			else
				$('#energy').css('color', 'red');
			
			// Add mouse over events for things
			$('.thingBox').mouseenter(function() {
				$(this).addClass('selection');
				GIDGET.ui.highlightThing($(this).data('thing'));
			});
			$('.thingBox').mouseleave(function() {
				$(this).removeClass('selection');
				GIDGET.ui.unhighlightThing();
			});
				
		}		

	},

	higlightedThing: undefined,

	highlightThing: function(thing) {
	
		this.highlightedThing = thing;
		this.drawGrid();
		
		var index;
		var analyzed = false;
		for(index = 0; index < this.world.gidget.runtime.analyzed.length; index++)
			if(this.world.gidget.runtime.analyzed[index] === thing)
				analyzed = true;
		
		if(analyzed) {
		
			var tags = "It has no special characteristics";
			var tagCount = 0;
			for(var tag in thing.tags) {
				if(thing.tags.hasOwnProperty(tag)) {
					tagCount++;
				}
			}

			if(tagCount > 0) {
				tags = "It is ";
				var index = tagCount;
				for(var tag in thing.tags) {
					if(thing.tags.hasOwnProperty(tag)) {
						// If this is the last one and there was one, just include the name.
						if(tagCount > 2 && index !== tagCount) tags = tags + ", ";
						// If there was more than one and this is the last one, prefix an 'and'
						if(tagCount >= 2 && index === 1) tags = tags + " and ";
						// Add the tag name.
						tags = tags + "<b>" + tag + "</b>";
						index--;	
					}
				}
			}

			var actions = "";
			var actionCount = 0;
			for(var action in thing.actions)
				if(thing.actions.hasOwnProperty(action))
					actionCount++;
					
			if(actionCount > 0) {
				for(var action in thing.actions) {
					if(thing.actions.hasOwnProperty(action)) {
					
						var arguments = thing.actions[action].arguments;
						var argString = "";
						if(arguments.length === 0) argString = ". I don't have to give it anything.";
						else {
							argString = " if I give it ";
							for(var index = 0; index < arguments.length; index++) {
								if(arguments.length > 2 && index != 0) argString = argString + ", ";
								if(arguments.length >= 2 && index === arguments.length - 1) argString = argString + " and ";
								argString = argString + "<b>" + arguments[index] + "</b>";
							}
							argString = argString + ".";
						
						}
						actions = actions + "<p>I can <b>ask</b> it to <b>" + action + "</b>" + argString;
					}
				}
			}
			else {
				actions = "<p>There's nothing I can ask it to do.";
			}

		
			this.setThought("I know all about <b>" + thing.name + "</b> because I <b>analyzed</b> it! " + tags + ". " + actions, 50);
			
		}
		else {
			this.setThought("I don't know anything about <b>" + thing.name + "</b> because I haven't <b>analyzed</b> it yet.", 50);
		}
		
	
	},
	
	unhighlightThing: function() {
	
		this.highlightedThing = undefined;
		this.drawGrid();
		
		this.setThought("Now where was I?", 50);		
	
	},

	highlightToken: function(token) {
	
		$('.sourceLine').removeClass('runtimeReference');
		$('.sourceToken').removeClass('runtimeReference');

		if(isDef(token)) {

			$('#sourceToken' + token.index).addClass('runtimeReference');
			$('#sourceLine' + token.line).addClass('runtimeReference');
			
		}
	
	},

	drawGrid: function() {
	
		var grid = this.world.grid;
	
		var canvas = document.getElementById('grid');
		var ctx = canvas.getContext('2d');
		var row, col;
		
		ctx.fillStyle = 'rgb(124,57,10)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.lineWidth = 1;
		
		var cellSize = canvas.width / grid[0].length;
		var things, thing;
		var i, x, y;

		function drawLevel(level) {
		
			var count = 0;
			for(row = 0; row < grid.length; row++) {
				for(col = 0; col < grid[row].length; col++) {
				
					things = grid[row][col];
					
					// Go through all of the things at this level and draw them.
					for(i = 0; i < things.length; i++) {
		
						thing = things[i];

						if(thing.level === level) {

							count++;
							thing.draw(ctx, cellSize);
									
						}
	
					}
	
				}
				
			}
			
			return count;
		
		}
		
		var currentLevel = 0;
		while(drawLevel(currentLevel) > 0)
			currentLevel++;
	
		// Now draw the text
		for(row = 0; row < grid.length; row++) {
			for(col = 0; col < grid[row].length; col++) {
		
				things = grid[row][col];

				// Start at 4 pixels above the cell
				var textYOffset = 4;
			
				// Go through all of the things at this level and draw them.
				for(i = 0; i < things.length; i++) {

					var thing = things[i];

					// Only draw labels for the things labeled.
					if(thing.labeled === true) {
		
						ctx.font = "10pt Arial";

						var animateRowOffset = 0, animateColumnOffset = 0;
						if(GIDGET.ui.percentRemaining > 0) {
						
							if(thing.rowDelta !== 0) animateRowOffset = -(GIDGET.ui.percentRemaining / 100.0) * cellSize * thing.rowDelta;
							if(thing.columnDelta !== 0) animateColumnOffset = -(GIDGET.ui.percentRemaining / 100.0) * cellSize * thing.columnDelta;
						
						}
						
						var textWidth = ctx.measureText(thing.name).width;
						var textXOffset =  -(textWidth - cellSize) / 2;
	
						ctx.fillStyle = "black";
						ctx.fillText(thing.name, thing.column * cellSize - 1 + textXOffset + animateColumnOffset, thing.row * cellSize - textYOffset - 1 + animateRowOffset);
						ctx.fillStyle = "white";
						ctx.fillText(thing.name, thing.column * cellSize + textXOffset + animateColumnOffset, thing.row * cellSize - textYOffset + animateRowOffset);
						
						textYOffset += 12;
						
					}

				}
				
			}
			
		}

		// Draw a highlight around the highlighted thing, if there is one.		
		if(isDef(this.highlightedThing)) {
		
			ctx.strokeStyle = "rgb(0,255,0)";
			ctx.lineWidth = "4";
			ctx.strokeRect(this.highlightedThing.column * cellSize, this.highlightedThing.row * cellSize, cellSize, cellSize);		
		
		}
	
	},
	
};