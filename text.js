// Contains all of the functions that generate the text for the user interface.
// The rationales for having a seperate file are many: this facilitates localization
// as well as making it easier to find and change text and modify text for the purposes
// of experimentation.

GIDGET.text = {

	if_true: function() {

		if (GIDGET.experiment.isControl())
			return "$results(the recent results) are not empty. Going to next step.";
			
		return "I'm looking at $results(the recent results) and they weren't empty, so I'll go to the next step.";
	
	},
	
	if_false: function() {
		if (GIDGET.experiment.isControl())
			return "$results(recent results) empty, so skipping to next part.";
			
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
			return "Finished with $results(these results).";
			
		return "I'm done with $results(these results). Toss em out!";
	
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
		if (GIDGET.experiment.isControl())
			return "$scanned@0(" + name + ") " + " and added.";
			
		return "I scanned " + "$scanned@0(" + name + ") " + ". Let me add it to my list!";
	
	},

	name_success: function(name) {
		if (GIDGET.experiment.isControl())
			return "Renaming $results@0(" + name + ")" + ".";
			
		return "I renamed $results@0(" + name + ")" + ".";
	
	},

	go_step: function(name) {
		if (GIDGET.experiment.isControl())
			return "Incremented to destination, $results@0(" + name + ").";
		
		return "I'm going one step closer to $results@0(" + name + ")!";
	
	},

	go_arrive: function(name) {
		if (GIDGET.experiment.isControl())
			return "Arrived at destination, $results@0(" + name + ").";
		
		return "I made it to $results@0(the " + name + ")! On to the next step.";
	
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
		if (GIDGET.experiment.isControl())
			return "$analyzed@0(" + name + ") analyzed.";
		
		return "I analyzed $analyzed@0(" + name + "). Now I can make it do things! Let me add it to my list.";
	
	},

	grab_success: function(name) {
		if (GIDGET.experiment.isControl())
			return "$grabbed@0(" + name + ") grabbed.";
		
		return "Grabbed $grabbed@0(" + name + "). I'll add it to my list!";
		
	},

	drop_success: function(name) {
		if (GIDGET.experiment.isControl())
			return "Dropped $results@0(" + name + ").";
			
		return "Dropped $results@0(" + name + "). Let me remove it from my list.";
	
	},

	focus_success: function(name) {
		if (GIDGET.experiment.isControl())
			return "Focusing on $results@0(next result), " + name;
			
		return "Okay, I'm just going to focus on the $results@0(next result), " + name;
	
	},

	focus_failure: function() {
		if (GIDGET.experiment.isControl())
			return "Failed to focus on $results(there isn't one)";
			
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
			return name+ "execution completed.";
			
		return "$thing(" + name + ") is done. I'm going to continue now.";
	
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
			return action + " executing.";
			
		return "Yay! " + name + " knows how to " + action + ". I'm going to tell it to do it.";
	
	},
	
	ask_unknownAction: function(name, action) {
		if (GIDGET.experiment.isControl())
			return "Invalid ask command.";
			
		return "I told " + name + " to " + action + " but it didn't know how! I don't know what to do!";
	
	},
	
	query: function(ast, name, scope) {
	
		var purposeText = "";
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
			case "is": purposeText = isDef(ast) && isDef(ast.keyword) ? "that <b>" + ast.keyword.text + " " + ast.tag.text + "</b>" : "that were at the <b>same place</b>"; break;
			case "query": purposeText = "that were at the <b>same place</b>"; break;
			default: purposeText = "";
		}
		
		var result = name === 'it' ? "I remembered what I'm <b>focused</b> on" : "I looked for <b>" + name + "</b> " + purposeText;
		var i;
		if(scope.length > 0) {
			
			result = result + " and found ";
			for(i = 0; i < scope.length; i++)
				result = result + " $results@" + i + "(" + scope[i].name + ")" + (scope.length === 1 ? "" : i === scope.length - 1 ? "" : i === scope.length - 2 ? " and " : ",");
			return result + ". I'm going to add " + (scope.length === 1 ? "it" : "them") + " to my results!";

		}
		else {
			
			return result + ", but didn't find anything.";
			
		}
	
	},
		
	parser_unrecognizedCommand: function(token) {
	
		return "" + token + " isn't one of the commands I know.";
	
	},

	parser_noCommandAfterComma: function() {
	
		return "I saw a comma, but I thought there would be a command after it, but there wasn't.";
	
	},
		
	parser_missingThingToName: function() {
	
		return "I know I'm supposed to name something, but I don't know what to name. Can you tell me to name?";
	
	},
		
	parser_missingName: function() {
	
		return "I know I'm supposed to name something, and I know what to name, but I don't know what to name it. Can you tell me what to name it?";
	
	},
		
	parser_missingThingToScan: function() {
	
		return "I know I'm supposed to scan something, but I don't know what. Can you tell me?";
	
	},
		
	parser_missingThingToGoto: function() {
	
		return "I know I'm supposed to goto something, but I don't know what. Can you tell me?";
	
	},
		
	parser_missingThingToAvoid: function() {
	
		return "I know I'm supposed to goto something and avoid something, but I don't know what I'm supposed to avoid. Can you tell me?";
	
	},
		
	parser_missingThingToAnalyze: function() {
	
		return "I know I'm supposed to analyze something, but I don't know what. Can you tell me?";
	
	},

	parser_missingThingToAsk: function() {
	
		return "I know I'm supposed to ask something to do something, but I don't know what to ask. Can you tell me?";
	
	},

	parser_missingTo: function() {
	
		return "When I ask something to do something, I have to tell it 'to', but I didn't find that here.";
	
	},

	parser_missingAction: function() {
	
		return "I know I'm supposed to ask something to do something, but I don't know what I'm asking it to do. Can you tell me?";
	
	},

	parser_missingThingToGrab: function() {
	
		return "I know I'm supposed to grab something, but I don't know what. Can you tell me?";
	
	},

	parser_missingThingToDrop: function() {
	
		return "I know I'm supposed to drop something, but I don't know what to drop. Can you tell me?";
	
	},
		
	parser_missingPredicate: function() {
	
		return "I know I'm supposed to check something, but I don't know to check. Can you tell me?";
	
	},
		
	parser_missingConditionalComma: function() {
	
		return "I only know what to do when there's a comma after the test of an if.";
	
	},
		
	parser_missingThingToModify: function(keyword) {
	
		return "I know I'm suppose to " + keyword + " something, but I don't know what. Can you tell me?";
	
	},
		
	parser_missingThingToAdd: function() {
	
		return "I know I'm suppose to add something, but I don't know what. Can you tell me?";
	
	},
				
	parser_missingThingToRemove: function() {
	
		return "I know I'm supposed to remove something, but I don't know what to remove. Can you tell me?";
	
	},
		
	parser_missingAndPredicate: function() {
	
		return "I know I'm supposed to check something, but I don't know to check. Can you tell me?";
	
	},
	
	parser_missingTag: function() {
	
		return "I know I'm suppose to see if this has some tag, but I don't know which tag. Can you tell me?";
	
	},
	
	parser_missingQueryName: function() {
	
		return "I know I'm suppose to see find something with a certain name, but I don't know the name of things to find., but I don't know which tag. Can you tell me?";
	
	},
	
	parser_missingOn: function() {
	
		return "I know I'm suppose to find something on something else, but I don't know what something else. Can you tell me?";
	
	},
	
	editingDisabled: function() {
	
		return "If you change my commands while I'm doing them, I'm going to get really confused! You can make me stop by pressing <b>" + this.finishExecutingButtonLabel() + "</b> button.";
	
	},
	
	finishExecutingButtonLabel: function() {
	
		return "the end";
	
	},

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
			tags += "</p>";
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
			return "PLACEHOLDER (memory_analyzed): <b>" + iName + "</b> " + tags + actions;
			
		return "I know all about <b>" + iName + "</b> because I <b>analyzed</b> it! " + tags + actions;
	
	},
		
	memory_unanalyzed: function(name) {
		if (GIDGET.experiment.isControl())
			return "PLACEHOLDER (memory_unanalyzed): " + name;
			
		return "I don't know anything about <b>" + name + "</b> because I haven't <b>analyzed</b> it yet.";
	
	},
	
	memory_unfocus: function() {
		if (GIDGET.experiment.isControl())
			return "PLACEHOLDER (memory_unfocus): ";
		
		return "Now where was I?";
	},

	noEnergy: function(){
		
		if (GIDGET.experiment.isControl())
			return "ERROR: No energy.";
			
		return "I ... can't... go ... any ... further...";
		
	},

	goal_checkSuccess: function() {
		
		if (GIDGET.experiment.isControl())
			return "There were $results(results) for this goal, so I succeeded!";	
		
		return "There were $results(results) for this goal, so I succeeded!";

	},
	
	goal_checkFailure: function(){
		
		if (GIDGET.experiment.isControl())
			return "ERROR: <span class='runtimeReference'>some of your goals</span> failed.";
			
		return "There were $results(no results) for this goal, so I didn't accomplish this goal!";
		
	},
	
	goal_finalSuccess: function() {
		
		if (GIDGET.experiment.isControl())
			return "Completed <span class='runtimeReference'>all of your goals</span>.";	
		
		return "I accomplished <span class='runtimeReference'>all of my goals</span>! I never could have done it without you!<div style='text-align: right'><button onclick='GIDGET.ui.nextLevel()'>next level!</button></div>";

	},
	
	goal_finalFailure: function(){
		
		if (GIDGET.experiment.isControl())
			return "ERROR: <span class='runtimeReference'>some of your goals</span> failed.";
			
		return "I failed <span class='runtimeReference'>some of my goals</span>. I feel like I'm never going to figure this out :(";
		
	},

	placeholder: function() {}

};