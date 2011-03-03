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
			return "The $results(recent results) list is not empty, so continuing evaluation of list items.";
			
		return "There are $results(recent results) in my memory, so I'll continue with these things.";
	
	},
	
	if_false: function() {
		if (GIDGET.experiment.isControl())
			return "The $results(recent results) list is empty, so ending this set of evaluations and moving on to next instructions.";
			
		return "There aren't any $results(recent results) in my memory, so I'll end this set of evaluations and move on to the next part.";
	
	},
	
	if_popResults: function() {
		if (GIDGET.experiment.isControl())
			return "Evaluation of the $results(recent results) complete. Removing from list before continuing.";
			
		return "Before moving on, I'm going to empty the $results(recent results) from my memory since I'm done with them.";
	
	},
		
	is_positive: function(name, index, keyword, tag) {
		
		return "The $results@" + index + "(" + name + ") " + keyword + " " + tag + ".";
	
	},

	is_negative: function(name, index, keyword, tag) {
			
		return "The $results@" + index + "(" + name + ") " + keyword + " not " + tag + ".";
	
	},
	
	is_popResults: function() {
		if (GIDGET.experiment.isControl())
			return "Finished with $results(this result). Removing from list.";
			
		return "I'll remove $results(this result) from my memory since I'm done with it!";
	
	},
	
	is_newResults: function() {
		if (GIDGET.experiment.isControl())
			return "Adding the $results(new results) to list.";
			
		return "Now I'll add the $results(new results) to my memory.";
	
	},
		
	unknown_clearFocus: function() {
		if (GIDGET.experiment.isControl())
			return "Clearing focus.";
			
		return "Now I'll stop focusing on everything.";
	
	},

	unknown_clearResults: function() {
		if (GIDGET.experiment.isControl())
			return "Clearing results.";
			
		return "I'm clear the $results(recent results) from my memory.";
	
	},	
	
	unknown_nextStep: function() {
		if (GIDGET.experiment.isControl())
			return "Unknown command, so skipping to next step.";
			
		return "I don't know what this is, so I'll just go on the next step";
	
	},

	scan_success: function(name) {
		GIDGET.sfx.play("scan");
		
		if (GIDGET.experiment.isControl())
			return "$scanned@0(" + name.charAt(0).toUpperCase() + name.slice(1) + ") " + " added to the scan list.";
			
		return "I <b>scanned</b> " + (name === 'gidget' ? "" : "a ") + "$scanned@0(" + name + ")" + ". I'll add it to my scanned memory!";
	
	},

	name_success: function(name) {
		if (GIDGET.experiment.isControl())
			return "Renaming $results@0(" + name + ")" + ".";
			
		return "I renamed $results@0(" + name + ")" + ".";
	
	},

	go_dangerousStep: function(name, avoid) {

		GIDGET.sfx.play("goto");
	
		if (GIDGET.experiment.isControl())
			return "Moving one space closer to destination, $results@0(" + name + "), but may intersect with " + avoid + ".";
		
		return "I'm going one step closer to the $results@0(" + name + "), even though I might touch a " + avoid + "!";
	
	},

	go_step: function(name) {
		GIDGET.sfx.play("goto");
	
		if (GIDGET.experiment.isControl())
			return "Moving one space towards destination, $results@0(" + name + ").";
		
		return "I'm going one step closer to the $results@0(" + name + ")!";
	
	},

	go_arrive: function(name) {
		if (GIDGET.experiment.isControl())
			return "Arrived at destination, $results@0(" + name + ").";
		
		return "I made it to the $results@0(" + name + ")!";
	
	},

	go_noPath: function(name) {
		if (GIDGET.experiment.isControl())
			return "No valid path to $results@0(" + name + "). Aborting 'goto'.";
			
		return "There's no way to get to the $results@0(" + name + "). So I guess I'm just going to skip the rest of this 'goto'.";
	
	},

	go_finished: function() {
		if (GIDGET.experiment.isControl())
			return "Completed 'goto'.";
			
		return "Phew! There's $results(nothing left to go to)!";
	
	},

	go_alreadyAt: function(name) {
		if (GIDGET.experiment.isControl())
			return "Already at $results@0(" + name + ").";
			
		return "I'm already at $results@0(" + name + ").";
	
	},

	analyze_success: function(name) {
		GIDGET.sfx.play("analyze");
		
		if (GIDGET.experiment.isControl())
			return "$analyzed@0(" + name.charAt(0).toUpperCase() + name.slice(1) + ") analyzed.";
		
		return "I <b>analyzed</b> the $analyzed@0(" + name + "). I'll add it to my analyzed list where you can see more information about it!";
	
	},

	grab_success: function(name) {
		GIDGET.sfx.play("grab");
		
		if (GIDGET.experiment.isControl())
			return "$grabbed@0(" + name.charAt(0).toUpperCase() + name.slice(1) + ") grabbed. Added to list.";
		
		return "I grabbed the $grabbed@0(" + name + "). I'll add it to my memory!";
		
	},

	drop_success: function(name) {
		GIDGET.sfx.play("drop");
	
		if (GIDGET.experiment.isControl())
			return "Dropped $results@0(" + name + "). Removing from list.";
			
		return "I dropped the $results@0(" + name + "). I'll remove it from my memory.";
	
	},

	focus_success: function(name) {
		GIDGET.sfx.play("focusIn");
		if (GIDGET.experiment.isControl())
			return "Focusing on $results@0(next result), " + name;
			
		return "Okay, I'm going to concentrate on this $results@0(individual " + name + ") and add it to my focus memory.";
	
	},

	focus_failure: function() {
		if (GIDGET.experiment.isControl())
			return "Failed to focus on next result.";
			
		return "I'm supposed to focus on the next result, but $results(there isn't one)!";
	
	},

	unfocus_success: function() {
		if (GIDGET.experiment.isControl())
			return "Focusing terminated.";
			
		return "Alright, $focused(I stopped focusing).";
	
	},

	ask_waiting: function(name, action) {
		if (GIDGET.experiment.isControl())
			return "Waiting for " + name + " to finish execution.";
			
		return "Wee! I'm waiting for the $thing(" + name + ") to finish " + action + "ing.";
	
	},

	ask_finished: function(name) {
		if (GIDGET.experiment.isControl())
			return name.charAt(0).toUpperCase() + name.slice(1) + " execution completed.";
			
		return "Okay, the $thing(" + name+ ") is finished so I'm going to continue now.";
	
	},

	ask_noObject: function() {
		GIDGET.sfx.play("error");
		
		if (GIDGET.experiment.isControl())
			return "ERROR: Nothing to <b>ask</b> by that name.";
			
		return "I couldn't find anything to 'ask' by that name.";
	
	},

	ask_missingArguments: function(name, action, numberExpected, numberGiven) {
		GIDGET.sfx.play("error");
		
		if (GIDGET.experiment.isControl())
			return "ERROR: Invalid <b>ask</b> syntax. "+name.charAt(0).toUpperCase() + name.slice(1)+" expected  <b>" + numberExpected + "</b>, instead of <b>" + numberGiven + "</b>. Skipping to next instructions.";
			
		return "Oh no... <b>" + name + "</b> knows how to <b>" + action + "</b>, but it wanted me to give it <b>" + numberExpected + "</b> names. I gave it <b>" + numberGiven + "</b> names. I don't know what to do! I guess I'll just skip this step.";
	
	},
		
	ask_begin: function(name, action) {
		if (GIDGET.experiment.isControl())
			return action.charAt(0).toUpperCase() + name.slice(1) + " executing.";
			
		return "Yay! " + name + " knows how to " + action + ". I'm going to tell it to do it.";
	
	},
	
	ask_unknownAction: function(name, action) {
		GIDGET.sfx.play("error");
		
		if (GIDGET.experiment.isControl())
			return "ERROR: Invalid ask command. " +name.charAt(0).toUpperCase() + name.slice(1)+ " does not understand the action, '" + action + "'.";
			
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
		GIDGET.sfx.play("error");
	
		if (GIDGET.experiment.isControl())
			return "ERROR: Cannot modify code during program execution. Click the <b>" + this.finishExecutingButtonLabel() + "</b> button to end execution.";
	
		return "If you change my commands while I'm doing them, I'm going to get really confused! You can make me stop by pressing <b>" + this.finishExecutingButtonLabel() + "</b> button.";
	},
	
	finishExecutingButtonLabel: function() {
		return "the end";
	},

	noEnergy: function(){
		GIDGET.sfx.play("energyLow");
		
		if (GIDGET.experiment.isControl())
			return "CRITICAL ERROR: Energy depleted. Cannot continue program execution.";
		
		return "I ... can't... go ... any ... further...";
		
	},
	
	aboutToStartGoals: function() {

		if (GIDGET.experiment.isControl())
			return "Execution complete. Beginning evaluation of goals.";

  		return "I finished executing my commands! Let's see if I accomplished all of my goals.";
	},

// *******************************************************
// *** U S E R - I N T E R F A C E  - M E M - L I S T ****
// *******************************************************


	memory_analyzed: function(iName, iActions, iTags) {
	
		var tags = "It has no special characteristics. ";
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
						actions = "It can be <b>asked</b> to " + action + "</b> and " + argString + ".";	
					else
						actions = "I can <b>ask</b> it to <b>" + action + "</b> and " + argString + ".";
					
				}
			}
		}
	
		if (GIDGET.experiment.isControl())
			return "Attributes of <b>" + iName + "</b> are now known. " + tags + actions;
			
		return "I know all about <b>" + iName + "</b> because I <b>analyzed</b> it! " + tags + actions;
	
	},
		
	memory_unanalyzed: function(name) {
		//GIDGET.sfx.play("error");
	
		if (GIDGET.experiment.isControl())
			return "'" + name +"' has not been analyzed. Attributes unknown.";
			
		return "I don't know anything about <b>" + name + "</b> because I haven't <b>analyzed</b> it yet.";
	
	},
	
	memory_unfocus: function() {
		if (GIDGET.experiment.isControl())
			return "Returning back to program execution.";
		
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
			return "<span class='runtimeReference'>All goals</span> satisfied.";	
		
		return "I accomplished <span class='runtimeReference'>all of my goals</span>! I never could have done it without you!";

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
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: \'" + token + "\' is an unrecognized command. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "" + token + " isn't one of the commands I know. I'm just going to go on.";
		}
	},

	parser_noCommandAfterComma: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing command after comma. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I saw a comma so I thought there would be a command after it, but there wasn't. I'll just keep going.";
		}
	},
		
	parser_missingThingToName: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNATX ERROR: Missing thing to name. Must identify thing to name. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to name something, but I don't know what to name. I'm going to move on for now, but please tell me what you want to name next time since I'm so forgetful!";
		}
	},
		
	parser_missingName: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing new name. Must state new name. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to name something, and I know what to name, but I don't know what to name it. I'm skipping this step for now since I can't figure it out, but can you tell me what to name it next time?";
		}
	},
		
	parser_missingThingToScan: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to scan. Must identify thing to scan. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to scan something, but I don't know what. I'll move on for now, but can you make sure to tell me what to scan?";
		}
	},
		
	parser_missingThingToGoto: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to goto. Must identify thing to goto. Skipping step";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to goto something, but I don't know what. This is difficult for me so I'll move on, but can you help me by telling me where to go next time?";
		}
	},
		
	parser_missingThingToAvoid: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to avoid. Must identify thing to avoid. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to goto something and avoid something, but I don't know what I'm supposed to avoid. I'm always getting so confused and bumping into things, so can you let me know what I should be avoiding next time?";
		}	
	},
		
	parser_missingThingToAnalyze: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to analyze. Must identify thing to analyze. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to analyze something, but I don't know what. I get confused easily so I'll skip this step for now. Can you let me know what I should be analyzing next time?";
		}
	},

	parser_missingThingToAsk: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to ask. Must identify thing to ask. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to ask something to do something, but I don't know what to ask. I'm going to skip this step for now, but I like talking to things, so can you let me know who or what I should be asking next time?";
		}
	},

	parser_missingTo: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing 'to' statement. State 'to' between 'ask' command and thing. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "When I ask something to do something, I have to tell it 'to', but I didn't find that here so I'll skip it for now.";
		}	
	},

	parser_missingAction: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing action. State action for thing to do. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to ask something to do something, but I don't know what I'm asking it to do. I'll skip it so I don't confuse myself, but can you tell me what I should do?";
		}
	},

	parser_missingThingToGrab: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to grab. Must identify thing to grab. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to grab something, but I don't know what. Can you tell me?";
		}
	},

	parser_missingThingToDrop: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to drop. Must identify thing to drop. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to drop something, but I don't know what to drop. Can you tell me? It's fun holding on to things, so I'll skip this for now.";
		}
	},
		
	parser_missingPredicate: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Must state thing to check. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to check something, but I don't know to check. Can you tell me? I'll skip this for now.";
		}
	},
		
	parser_missingConditionalComma: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: A comma should come before any additional commands after an 'if'. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I only know what to do when there's a comma after the test of an if so I'll skip this for now.";
		}
	},
		
	parser_missingThingToModify: function(keyword) {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Must identify thing to '" + keyword + "'. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm suppose to " + keyword + " something, but I don't know what. Can you tell me? I'll skip this for now.";
		}
	},
		
	parser_missingThingToAdd: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to add from map. Must identify thing to add. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm suppose to add something, but I don't know what. Can you tell me? I'm going to skip this for now.";
		}
	},
				
	parser_missingThingToRemove: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to remove from map. Must identify the thing to remove. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to remove something, but I don't know what to remove. Can you tell me?  I'll skip this for now.";
		}			
	},
		
	parser_missingAndPredicate: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to check. Must identify the thing to check. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm supposed to check something, but I don't know to check. Can you tell me? I'll just skip this step.";
		}
	},
	
	parser_missingTag: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing tag of thing to check. Must state the tag to check. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm suppose to see if this has some tag, but I don't know which tag. Can you tell me? I'll just go on for now.";
		}
	},
	
	parser_missingQueryName: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to find. Must identify the thing to check. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm suppose to see find something with a certain name, but I don't know the name of things to find., but I don't know which tag. Can you tell me? I'll skip this step for now.";
		}
	},
	
	parser_missingOn: function() {
		if (GIDGET.experiment.isControl()) {
			GIDGET.sfx.play("parserErrorCtrl");
			return "SYNTAX ERROR: Missing name of thing to check on other thing. Must identify the thing to check. Skipping step.";
		} else {
			GIDGET.sfx.play("parserErrorExp");
			return "I know I'm suppose to find something on something else, but I don't know what something else. Can you tell me? I'll skip this for now.";
		}
	},
	

// *******************************************************
// *******************************************************
// *******************************************************


	placeholder: function() {}

};