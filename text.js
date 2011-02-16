// Contains all of the functions that generate the text for the user interface.
// The rationales for having a seperate file are many: this facilitates localization
// as well as making it easier to find and change text and modify text for the purposes
// of experimentation.

GIDGET.text = {

	if_true: function() {

		return "I'm looking at $results(the recent results) and they weren't empty, so I'll go to the next step.";
	
	},
	
	if_false: function() {
	
		return "I'm looking at the $results(recent results) and they were empty, so I'm going to skip the next part.";
	
	},
	
	if_popResults: function() {

		return "Before I move on, I'm going to get rid of $results(the recent results), now that I'm done with them.";
	
	},
		
	is_positive: function(name, index, keyword, tag) {
	
		return "The $results@" + index + "(" + name + ") " + keyword + " " + tag + ".";
	
	},

	is_negative: function(name, index, keyword, tag) {
	
		return "The $results@" + index + "(" + name + ") " + keyword + " not " + tag + ".";
	
	},
	
	is_popResults: function() {
	
		return "I'm done with $results(these results). Toss em out!";
	
	},
	
	is_newResults: function() {
	
		return "Now I'll add $results(the new results) to my list.";
	
	},
		
	unknown_clearFocus: function() {
	
		return "I guess I'm going to stop focusing on everything.";
	
	},

	unknown_clearResults: function() {
	
		return "I'm going to forget all of my results too.";
	
	},	
	
	unknown_nextStep: function() {
	
		return "I'm going to just go to the next step";
	
	},

	scan_success: function(name) {
	
		return "I scanned " + "$scanned@0(" + name + ") " + ". Let me add it to my list!";
	
	},

	name_success: function(name) {
	
		return "I renamed $results@0(" + name + ")" + ".";
	
	},

	go_step: function(name) {
	
		return "I'm going one step closer to $results@0(" + name + ")!";
	
	},

	go_arrive: function(name) {
	
		return "I made it to $results@0(the " + name + ")! On to the next step.";
	
	},

	go_noPath: function(name) {
	
		return "There's no way to get to $results@0(" + name + "). I guess I'm going to skip the rest of this goto.";
	
	},

	go_finished: function() {
	
		return "There's $results(nothing left to go to), so I'm going to skip the rest of this goto.";
	
	},

	analyze_success: function(name) {
	
		return "I analyzed $analyzed@0(" + name + "). Now I can make it do things! Let me add it to my list.";
	
	},

	grab_success: function(name) {
	
		return "Grabbed $grabbed@0(" + name + "). I'll add it to my list!";
	
	},

	drop_success: function(name) {
	
		return "Dropped $results@0(" + name + "). Let me remove it from my list.";
	
	},

	focus_success: function(name) {
	
		return "Okay, I'm just going to focus on the $results@0(next result), " + name;
	
	},

	focus_failure: function() {
	
		return "I'm suppose to focus on the next result, but $results(there isn't one) :(";
	
	},

	unfocus_success: function() {
	
		return "Alright, $focused(I stopped focusing).";
	
	},

	ask_waiting: function(name, action) {
	
		return "Wee! I'm waiting for $thing(" + name + ") to finish " + action + "ing.";
	
	},

	ask_finished: function(name) {
	
		return "$thing(" + name + ") is done. I'm going to continue now.";
	
	},

	ask_noObject: function() {
	
		return "I couldn't find anything to ask by that name to ask.";
	
	},

	ask_missingArguments: function(name, action, numberExpected, numberGiven) {
	
		return "Oh no... <b>" + name + "</b> knows how to <b>" + action + "</b>, but it wanted me to give it <b>" + numberExpected + "</b> names. I gave it <b>" + numberGiven + "</b> names. I don't know what to do! I guess I'll just skip this step.";
	
	},
		
	ask_begin: function(name, action) {
	
		return "Yay! " + name + " knows how to " + action + ". I'm going to tell it to do it.";
	
	},
	
	ask_unknownAction: function(name, action) {
	
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
		
	placeholder: function() {}

};