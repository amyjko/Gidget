// Contains all of the functions that generate the text for the user interface.
// The rationales for having a seperate file are many: this facilitates localization
// as well as making it easier to find and change text and modify text for the purposes
// of experimentation.

GIDGET.text = {

// *******************************************************
// *** R U N T I M E - M E S S A G E S *******************
// *******************************************************

	if_true: function() {

		if (GIDGET.experiment.isControl())
			return "$results(The recent results) are not empty. Going to next step.";
			
		return "I'm looking at $results(the recent results) and they weren't empty, so I'll go to the next step.";
	
	},
	
	if_false: function() {
		if (GIDGET.experiment.isControl())
			return "$results(The recent results) are empty, so jumping to next part.";
			
		return "I'm looking at the $results(recent results) and they were empty, so I'm going to skip the next part.";
	
	},
	
	if_popResults: function() {
		if (GIDGET.experiment.isControl())
			return "Removing $results(the recent results) before continuing.";
			
		return "Before I move on, I'm going to get rid of $results(the recent results), now that I'm done with them.";
	
	},
		
	is_positive: function(name, index, keyword, tag) {
		
		return "The $results@" + index + "(" + name + ") " + keyword + " " + tag + ".";
	
	},

	is_negative: function(name, index, keyword, tag) {
			
		return "The $results@" + index + "(" + name + ") " + keyword + " not " + tag + ".";
	
	},
	
	is_popResults: function() {
		if (GIDGET.experiment.isControl())
			return "Finished with $results(these results). Removing from list.";
			
		return "I'll remove $results(these results) since I'm done with it!";
	
	},
	
	is_newResults: function() {
		if (GIDGET.experiment.isControl())
			return "Adding $results(the new results) to list.";
			
		return "Now I'll add $results(the new results) to my list.";
	
	},
		
	unknown_clearFocus: function() {
		if (GIDGET.experiment.isControl())
			return "Cleared focus.";
			
		return "I guess I'm going to stop focusing on everything.";
	
	},

	unknown_clearResults: function() {
		if (GIDGET.experiment.isControl())
			return "Cleared results.";
			
		return "I'm going to forget all of my results too.";
	
	},	
	
	unknown_nextStep: function() {
		if (GIDGET.experiment.isControl())
			return "Executing next step.";
			
		return "I'm going to just go to the next step";
	
	},

	scan_success: function(name) {
		scan.play();
		
		if (GIDGET.experiment.isControl())
			return "$scanned@0(" + name.charAt(0).toUpperCase() + name.slice(1) + ") " + " added to the scan list.";
			
		return "I <b>scanned</b> " + (name === 'gidget' ? "" : "a ") + "$scanned@0(" + name + ")" + ". I'll add it to my scanned list!";
	
	},

	name_success: function(name) {
		if (GIDGET.experiment.isControl())
			return "Renaming $results@0(" + name + ")" + ".";
			
		return "I renamed $results@0(" + name + ")" + ".";
	
	},

	go_step: function(name) {
		goto.play();
	
		if (GIDGET.experiment.isControl())
			return "Incremented to destination, $results@0(" + name + ").";
		
		return "I'm going one step closer to the $results@0(" + name + ")!";
	
	},

	go_arrive: function(name) {
		if (GIDGET.experiment.isControl())
			return "Arrived at destination, $results@0(" + name + ").";
		
		return "I made it to $results@0(the " + name + ")!";
	
	},

	go_noPath: function(name) {
		if (GIDGET.experiment.isControl())
			return "No valid path. Aborting goto.";
			
		return "There's no way to get to $results@0(" + name + "). I guess I'm going to skip the rest of this goto.";
	
	},

	go_finished: function() {
		if (GIDGET.experiment.isControl())
			return "Finished goto.";
			
		return "There's $results(nothing left to go to), so I'm going to skip the rest of this goto.";
	
	},

	analyze_success: function(name) {
		analyze.play();
		
		if (GIDGET.experiment.isControl())
			return "$analyzed@0(" + name.charAt(0).toUpperCase() + name.slice(1) + ") analyzed.";
		
		return "I <b>analyzed</b> the $analyzed@0(" + name + "). I'll add it to my analyzed list where you can see more information about it!";
	
	},

	grab_success: function(name) {
		grab.play();
		
		if (GIDGET.experiment.isControl())
			return "$grabbed@0(" + name.charAt(0).toUpperCase() + name.slice(1) + ") grabbed. Added to list.";
		
		return "Grabbed $grabbed@0(" + name + "). I'll add it to my list!";
		
	},

	drop_success: function(name) {
		drop.play();
	
		if (GIDGET.experiment.isControl())
			return "Dropped $results@0(" + name + "). Removing from list.";
			
		return "Dropped $results@0(" + name + "). Let me remove it from my list.";
	
	},

	focus_success: function(name) {
		if (GIDGET.experiment.isControl())
			return "Focusing on $results@0(next result), " + name;
			
		return "Okay, I'm going to concentrate on this $results@0(individual " + name + ") and add it to my focus list.";
	
	},

	focus_failure: function() {
		if (GIDGET.experiment.isControl())
			return "Nothing more to focus on.";
			
		return "I'm supposed to focus on the next result, but $results(there isn't one) :(";
	
	},

	unfocus_success: function() {
		if (GIDGET.experiment.isControl())
			return "Finished focusing.";
			
		return "Alright, $focused(I stopped focusing).";
	
	},

	ask_waiting: function(name, action) {
		if (GIDGET.experiment.isControl())
			return "Waiting for " + name + "to finish execution.";
			
		return "Wee! I'm waiting for $thing(" + name + ") to finish " + action + "ing.";
	
	},

	ask_finished: function(name) {
		if (GIDGET.experiment.isControl())
			return name.charAt(0).toUpperCase() + name.slice(1) + "execution completed.";
			
		return "$thing(" + name.charAt(0).toUpperCase() + name.slice(1) + ") is done. I'm going to continue now.";
	
	},

	ask_noObject: function() {
		if (GIDGET.experiment.isControl())
			return "Invalid ask syntax.";
			
		return "I couldn't find anything to ask by that name to ask.";
	
	},

	ask_missingArguments: function(name, action, numberExpected, numberGiven) {
		if (GIDGET.experiment.isControl())
			return "Invalid <b>ask</b> syntax";
			
		return "Oh no... <b>" + name + "</b> knows how to <b>" + action + "</b>, but it wanted me to give it <b>" + numberExpected + "</b> names. I gave it <b>" + numberGiven + "</b> names. I don't know what to do! I guess I'll just skip this step.";
	
	},
		
	ask_begin: function(name, action) {
		if (GIDGET.experiment.isControl())
			return action.charAt(0).toUpperCase() + name.slice(1) + " executing.";
			
		return "Yay! " + name + " knows how to " + action + ". I'm going to tell it to do it.";
	
	},
	
	ask_unknownAction: function(name, action) {
		if (GIDGET.experiment.isControl())
			return "Invalid ask command.";
			
		return "I told " + name + " to " + action + " but it didn't know how! I don't know what to do!";
	
	},
	
	query: function(ast, name, scope) {
	
		var result, purposeText = "";
		switch(ast.type) {
			case "name": purposeText = "to <b>name</b>"; break;
			case "scan": purposeText = "to <b>scan</b>"; break;
			case "goto": purposeText = "to <b>go to</b>"; break;
			case "analyze": purposeText = "to <b>analyze</b>"; break;
			case "ask": purposeText = "to <b>ask</b>"; break;
			case "grab": purposeText = "to <b>grab</b>"; break;
			case "drop": purposeText = "to <b>drop</b>"; break;
			case "modify": purposeText = "to <b>modify</b>"; break;
			case "remove": purposeText = "to <b>remove</b>"; break;
			case "query": purposeText = "that were at the <b>same place</b>"; break;
			default: purposeText = "";
		}
		
		// "is" is the only ast.type that is checked separately from the switch statement above
		if (ast.type == "is") {
		
			if (isDef(ast) && isDef(ast.keyword))
				purposeText = "that <b>" + ast.keyword.text + " " + ast.tag.text + "</b>";
			else {
				if (GIDGET.experiment.isControl())
					purposeText = "that were at Gidget's <b>location</b>";
				else
					purposeText = "that were at <b>my location</b>";
			}
		}
		
		
		if (GIDGET.experiment.isControl())
			result = name === 'it' ? "<b>Focusing</b> on" : ast.type === "is" ? "Looked for any <b>" + name + "s</b> " + purposeText : "Looked for <b>" + name + "</b> " + purposeText;
		else
			result = name === 'it' ? "I'm currently <b>focused</b> on" : ast.type === "is" ? "I looked for any <b>" + name + "s</b> " + purposeText : "I looked for <b>" + name + "</b> " + purposeText;
		
		var i;
		if(scope.length > 0) {
			result += name === 'it' ? " " : " and detected ";
			result += ((name === 'gidget') ? "" : (scope.length === 1 && name !== 'it') ? "a " : (name === 'it') ? " the " : scope.length + " ");
			result += " $results@(" + name + (scope.length > 1 && name.charAt(name.length - 1) !== 's' ? "s" : "") + ")";
			
			/*
			for(i = 0; i < scope.length; i++)
				result = result + " $results@" + i + "(" + scope[i].name + ")" + (scope.length === 1 ? "" : i === scope.length - 1 ? "" : i === scope.length - 2 ? " and " : ",");
			*/
				
			if (GIDGET.experiment.isControl())
				return result + ". Added " + (scope.length === 1 ? "it" : "them") + " to the results list.";
			else
				return result + ". I'm going to add " + (scope.length === 1 ? "it" : "them") + " to my results list!";
		}
		else {
			return result + ", but didn't find anything.";
		}

	},



// *******************************************************
// *** U S E R - I N T E R F A C E  - G E N E R A L ******
// *******************************************************
	
	editingDisabled: function() {
	
		if (GIDGET.experiment.isControl())
			return "ERROR: Cannot modify code during program execution.";
	
		return "If you change my commands while I'm doing them, I'm going to get really confused! You can make me stop by pressing <b>" + this.finishExecutingButtonLabel() + "</b> button.";
	
	},
	
	finishExecutingButtonLabel: function() {
	
		return "the end";
	
	},

	noEnergy: function(){
		
		if (GIDGET.experiment.isControl())
			return "ERROR: Energy depleted.";
			
		return "I ... can't... go ... any ... further...";
		
	},
	
	aboutToStartGoals: function() {

		if (GIDGET.experiment.isControl())
			return "Execution complete. Begin executing goals.";

  		return "I finished executing my commands! Let's see if I accomplished all of my goals.";
	},

// *******************************************************
// *** U S E R - I N T E R F A C E  - M E M - L I S T ****
// *******************************************************


	memory_analyzed: function(iName, iActions, iTags) {
	
		var tags = "<p>It has no special characteristics.</p>";
		var tagCount = 0;
		for(var tag in iTags) {
			if(iTags.hasOwnProperty(tag)) {
				tagCount++;
			}
		}

		if(tagCount > 0) {
			tags = "<p>It is ";
			var index = tagCount;
			for(var tag in iTags) {
				if(iTags.hasOwnProperty(tag)) {
					// If this is the last one and there was one, just include the name.
					if(tagCount > 2 && index !== tagCount) tags = tags + ", ";
					// If there was more than one and this is the last one, prefix an 'and'
					if(tagCount >= 2 && index === 1) tags = tags + " and ";
					// Add the tag name.
					tags = tags + "<b>" + tag + "</b>";
					index--;	
				}
			}
			tags += ".</p>";
		}

		var actions;
		if (GIDGET.experiment.isControl())
			actions = "<p>It has no special functions.</p>";	
		else
			actions = "<p>There is nothing I can <b>ask</b> it to do.</p>";
		
		var actionCount = 0;
		for(var action in iActions)
			if(iActions.hasOwnProperty(action))
				actionCount++;
				
		if(actionCount > 0) {
			actions = "";
			for(var action in iActions) {
				if(iActions.hasOwnProperty(action)) {
				
					var arguments = iActions[action].arguments;
					var argString = "";
					if(arguments.length === 0) {
						if (GIDGET.experiment.isControl())
							argString = ". It does not need any additional arguments.";
						else
							argString = ". I don't have to give it anything.";
					}
					else {
						if (GIDGET.experiment.isControl())
							argString = "it takes ";
						else
							argString = "if I give it ";
						
						for(var index = 0; index < arguments.length; index++) {
							if(arguments.length > 2 && index != 0) argString = argString + ", ";
							if(arguments.length >= 2 && index === arguments.length - 1) argString = argString + " and ";
							argString = argString + "<b>" + arguments[index] + "</b>";
						}
						//argString = argString + ".";
					
					}
					if (GIDGET.experiment.isControl())
						actions = "It can be <b>asked</b> to " + action + "</b>" + argString;	
					else
						actions = "I can <b>ask</b> it to <b>" + action + "</b>" + argString;
					
				}
			}
		}
	
		if (GIDGET.experiment.isControl())
			return "Attributes of <b>" + iName + "</b> are now known. " + tags + actions;
			
		return "I know all about <b>" + iName + "</b> because I <b>analyzed</b> it! " + tags + actions;
	
	},
		
	memory_unanalyzed: function(name) {
		if (GIDGET.experiment.isControl())
			return "ERROR: '" + name + "' has not been analyzed. Attributes unknown.";
			
		return "I don't know anything about <b>" + name + "</b> because I haven't <b>analyzed</b> it yet.";
	
	},
	
	memory_unfocus: function() {
		if (GIDGET.experiment.isControl())
			return "Now returning back to program execution.";
		
		return "Now where was I?";
	},


// *******************************************************
// *** U S E R - I N T E R F A C E  - G O A L S **********
// *******************************************************


	goal_checkSuccess: function() {
		
		if (GIDGET.experiment.isControl())
			return "$results(Results) detected, goal satisfied.";	
		
		return "There were $results(results) for this goal, so I succeeded!"

	},
	
	goal_checkFailure: function(){
		
		if (GIDGET.experiment.isControl())
			return "ERROR: <span class='runtimeReference'>some of your goals</span> failed.";
			
		return "There were $results(no results) for this goal, so I didn't accomplish this goal!";
		
	},
	
	goal_finalSuccess: function() {
		
		if (GIDGET.experiment.isControl())
			return "<span class='runtimeReference'>All goals</span> satisfied. <div style='text-align: right'><button onclick='GIDGET.ui.nextLevel()'>next level</button>";	
		
		return "I accomplished <span class='runtimeReference'>all of my goals</span>! I never could have done it without you!<div style='text-align: right'><button onclick='GIDGET.ui.nextLevel()'>next level!</button></div>";

	},
	
	goal_finalFailure: function(){
		
		if (GIDGET.experiment.isControl())
			return "ERROR: <span class='runtimeReference'>Some goals</span> failed.";
			
		return "I failed <span class='runtimeReference'>some of my goals</span>. I feel like I'm never going to figure this out :(";
		
	},


// *******************************************************
// *** P A R S E R - E R R O R - M E S S A G E S *********
// *******************************************************

		
	parser_unrecognizedCommand: function(token) {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: \'" + token + "\' is an unrecognized command.";
	
		return "" + token + " isn't one of the commands I know.";
	
	},

	parser_noCommandAfterComma: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing command after comma.";
		
		return "I saw a comma, but I thought there would be a command after it, but there wasn't.";
	
	},
		
	parser_missingThingToName: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNATX ERROR: Missing thing to name. State thing to name.";
		
		return "I know I'm supposed to name something, but I don't know what to name. Can you tell me to name?";
	
	},
		
	parser_missingName: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing new name. State new name.";
		
		return "I know I'm supposed to name something, and I know what to name, but I don't know what to name it. Can you tell me what to name it?";
	
	},
		
	parser_missingThingToScan: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to scan. State thing to scan.";
		
		return "I know I'm supposed to scan something, but I don't know what. Can you tell me?";
	
	},
		
	parser_missingThingToGoto: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to goto. State thing to goto.";
		
		return "I know I'm supposed to goto something, but I don't know what. Can you tell me?";
	
	},
		
	parser_missingThingToAvoid: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to avoid. State thing to avoid.";
		
		return "I know I'm supposed to goto something and avoid something, but I don't know what I'm supposed to avoid. Can you tell me?";
	
	},
		
	parser_missingThingToAnalyze: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to analyze. State thing to analyze.";
		
		return "I know I'm supposed to analyze something, but I don't know what. Can you tell me?";
	
	},

	parser_missingThingToAsk: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to ask. State thing to ask.";
		
		return "I know I'm supposed to ask something to do something, but I don't know what to ask. Can you tell me?";
	
	},

	parser_missingTo: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing 'to' statement. State 'to' between ask command and thing.";
		
		return "When I ask something to do something, I have to tell it 'to', but I didn't find that here.";
	
	},

	parser_missingAction: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing action. State action for thing to do.";
		
		return "I know I'm supposed to ask something to do something, but I don't know what I'm asking it to do. Can you tell me?";
	
	},

	parser_missingThingToGrab: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to grab. State thing to grab.";
		
		return "I know I'm supposed to grab something, but I don't know what. Can you tell me?";
	
	},

	parser_missingThingToDrop: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to drop. State thing to drop.";
		
		return "I know I'm supposed to drop something, but I don't know what to drop. Can you tell me?";
	
	},
		
	parser_missingPredicate: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: ";
		
		return "I know I'm supposed to check something, but I don't know to check. Can you tell me?";
	
	},
		
	parser_missingConditionalComma: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: ";
		
		return "I only know what to do when there's a comma after the test of an if.";
	
	},
		
	parser_missingThingToModify: function(keyword) {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: ";
		
		return "I know I'm suppose to " + keyword + " something, but I don't know what. Can you tell me?";
	
	},
		
	parser_missingThingToAdd: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to add from map. State thing to add.";
		
		return "I know I'm suppose to add something, but I don't know what. Can you tell me?";
	
	},
				
	parser_missingThingToRemove: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to remove from map. State thing to remove.";
		
		return "I know I'm supposed to remove something, but I don't know what to remove. Can you tell me?";
	
	},
		
	parser_missingAndPredicate: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to check. State thing to check.";
		
		return "I know I'm supposed to check something, but I don't know to check. Can you tell me?";
	
	},
	
	parser_missingTag: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing tag of thing to check. State the tag to check.";
		
		return "I know I'm suppose to see if this has some tag, but I don't know which tag. Can you tell me?";
	
	},
	
	parser_missingQueryName: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to find. State the thing to check.";
		
		return "I know I'm suppose to see find something with a certain name, but I don't know the name of things to find., but I don't know which tag. Can you tell me?";
	
	},
	
	parser_missingOn: function() {
	
		if (GIDGET.experiment.isControl())
			return "SYNTAX ERROR: Missing name of thing to check on other thing. State the thing to check.";
		
		return "I know I'm suppose to find something on something else, but I don't know what something else. Can you tell me?";
	
	},
	

// *******************************************************
// *******************************************************
// *******************************************************


	placeholder: function() {}

};