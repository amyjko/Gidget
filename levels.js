// *******************************************************
// *** L E V E L S ***************************************
// *** Levels 1-9 cover all basic commands
// *** Levels 10+ has Gidget enter the goop factory
// ***            where he has to combine all his
// ***            abilities and 'ask' other things to
// ***            help him shut the factory down!
// *******************************************************

GIDGET.levels = {

	// *******************************************************

	learnScan: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan ruck";

		var world = new GIDGET.World([3], [1,1,20], ["grass", "olivedrab", 1], code);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('goto');
		world.addHiddenCommand('ask');
		world.addHiddenCommand('grab');
		world.addHiddenCommand('drop');
		world.addHiddenCommand('analyze');
		world.addHiddenCommand('if');
			
		// ---- G O A L S --------
		
		world.addGoal("scanned rock");
		
		// ---- T I T L E --------
		
		world.addTitle("Testing Gidget's Scanner");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "SYSTEM DIAGNOSTICS: <span style='color: red; font-weight: bolder;'>failure</span> in instruction generator chip.");
			world.addMissionText("sad", "Minimal functionality detected in solar panels. Recommended to charge manually.");
			world.addMissionText("sad", "OBJECTIVE: check environment. Scanner reports and stores coordinates of objects on the map.");
			
			world.addMissionText("default", "$memory(MEMORY BANKS) FUNCTIONAL - Directive: keep track of interactions with things in the world during instruction execution.");
			world.addMissionText("default", "$goals(MISSION EVALUATOR) FUNCTIONAL - Directive: keep track of goals to complete the current mission.");
			world.addMissionText("default", "$instructions(INSTRUCTION GENERATOR) *WARNING* DAMAGE DETECTED - Directive: sequence execution steps to complete the mission.");
			world.addMissionText("default", "RECOMMENDATION: manually fix problematic instructions and use $controls(these controls) to execute.");
			
		}		
		else {
			world.addMissionText("sad", "Ouch! That fall really messed up my systems! I can't seem to think straight!");
			world.addMissionText("sad", "It looks like my solar panels are cracked too! They're working, but not very well... it looks like I'll have to find more power soon.");      
 			world.addMissionText("default", "$memory(My memory) is still working fine though! This is where I keep track of all of the things I'm thinking about while completing instructions.");
 			world.addMissionText("default", "Let's see if I can scan. I'll set $goals(a goal), which let's me know when my mission has been accomplished.");
			world.addMissionText("default", "Now how do I scan again? Mmm... I put my best guess in $instructions(the instructions box). These are the steps I follow to complete my missions.");
			world.addMissionText("default", "You can ask me to execute my instructions with $controls(these controls). I've tried my best, but if they don't work, can you help me out by fixing my instructions?");
		}		
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "rock", 1, 0, "brown", [], {});
		
		// -----------------------
											
		return world;
	
	},
	
	// *******************************************************
	
	learnGoto: function() {

		// ----- G - C O D E -----

		var code = 
			"scan rocks\n" +
			"goto rocks";
	
		var world = new GIDGET.World([5], [1,1,20], ["grass", "olivedrab"], code);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('ask');
		world.addHiddenCommand('grab');
		world.addHiddenCommand('drop');
		world.addHiddenCommand('analyze');
		world.addHiddenCommand('if');
					
		// ---- G O A L S --------
					
		world.addGoal("gidget on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Testing Gidget's Mobility");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[RECHARGED BATTERIES] using cracked solar panels.");
			world.addMissionText("sad", "[CONTAINER ITEM DETECTED] Check mobility. Proceed to bucket.");
		}			
		else {
			world.addMissionText("default", "Phew, I was able to charge my battery a little using my cracked solar panels.");
			world.addMissionText("default", "Oh! That bucket over there looks like it could be useful!");
			world.addMissionText("sad", "This might be a good time to see if my wheels still work...");
			world.addMissionText("sad", "For some reason, I can't seem to get to the right place! This is so confusing...please help me!");
		}

		new GIDGET.Thing(world, "rock", 1, 0, "brown", [], {});
		new GIDGET.Thing(world, "rock", 4, 1, "brown", [], {});
		new GIDGET.Thing(world, "rock", 0, 4, "brown", [], {});
		new GIDGET.Thing(world, "bucket", 4, 2, "DarkSlateGray", [], {});
		
		// -----------------------

		return world;
	
	},	

	// *******************************************************
	
	learnGrabAndDrop: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan cat\n" +
			"goto cat\n" +
			"grab cat\n" +
			"scan bucket\n" +
			"goto bucket\n" +
			"drop cat\n" +
			"scan crate\n" +
			"goto crate\n" +
			"grab goop\n" +
			"scan bucket\n" +
			"goto cat\n" +
			"drop goop";
	
		var world = new GIDGET.World([8], [1,1, 60], ["grass", "olivedrab"], code);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('ask');
		world.addHiddenCommand('analyze');
		world.addHiddenCommand('if');
								
		// ---- G O A L S --------
		
		world.addGoal("kitten on crate");
		world.addGoal("goop on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Starting the cleanup");

		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[RECHARGED BATTERIES] using cracked solar panels.");
			world.addMissionText("sad", "[GOOP & DOMESTIC ANIMAL DETECTED] Begin cleanup procedures");
			world.addMissionText("sad", "OBJECTIVES: begin cleanup procedures; drop animals into crate and goops into bucket.");
			world.addMissionText("sad", "WARNING: Observe energy levels. Carrying object while moving uses more energy.");
		}		
		else {
			world.addMissionText("default", "It looks like my cracked solar panels are still working. Luckily it's sunny right now!");
			world.addMissionText("sad", "Hey look! Goops are starting to drop here! Oh no! There's a kitten that needs our help!");
			world.addMissionText("sad", "Please assist me in putting the kitten in a safe place and cleaning up the goop!");
			world.addMissionText("sad", "It takes more energy to move when I'm holding something...");
			world.addMissionText("sad", "So hopefully I'll have enough power to complete this task! It looks like my solar panels need some additional help to charge my batteries!");
		}
			
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 2, 5, "green", [], {});
		new GIDGET.Thing(world, "crate", 7, 7, "Chocolate", [], {});
		new GIDGET.Thing(world, "bucket", 1, 0, "DarkSlateGray", [], {});
		var kitten = new GIDGET.Thing(world, "kitten", 5, 3, "orange", [], {});
		
		if (GIDGET.experiment.isControl()) {kitten.setCode("say Meow...");}
		else {kitten.setCode("say Meow, help me Gidget!");}

		
		// -----------------------	

		return world;
	
	},
	
	// *******************************************************
	
	learnCompounds: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scn dog, goto it,\n" +
			"scan, goto crate, drop dog";
		
		var world = new GIDGET.World([5], [0,0, 30], ["grass", "olivedrab"], code);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('ask');
		world.addHiddenCommand('analyze');
		world.addHiddenCommand('if');
								
		// ---- G O A L S --------
		
		world.addGoal("dog on crate");
		
		// ---- T I T L E --------
		
		world.addTitle("More cleanup");

		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[RECHARGED BATTERIES] using cracked solar panels.");
			world.addMissionText("sad", "[DOMESTIC ANIMAL DETECTED] continue procedures; drop animals into crate.");
			world.addMissionText("sad", "RECOMMENDATION: use commas to separate commands.");			
			world.addMissionText("sad", "RECOMMENDATION: find power source soon to supplement solar panels");
		}		
		else {
			world.addMissionText("default", "It's a little overcast, so I couldn't charge myself as much. I should start looking for other sources of power soon!");
			world.addMissionText("sad", "Hey look! There's a dog here that needs to be shipped out to a safe place. Let's get it in the crate!");
			world.addMissionText("sad", "I remembered that using commas between commands makes the code easier to write! I made some mistakes, so can you help me out?");
		}
		
		// ----- T H I N G S -----
		
		var dog = new GIDGET.Thing(world, "dog", 4, 1, "orange", [], {});
		new GIDGET.Thing(world, "crate", 3, 3, "Chocolate", [], {});
		
		if (GIDGET.experiment.isControl()) {dog.setCode("say Woof woof!");}
		else {dog.setCode("say Gidget, I'm lonely! Please help me get home!");}
		
		
		// -----------------------
						
		return world;
	
	},
	
	// *******************************************************
	learnAnalyzeAndAsk: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan goops\n" +
			"scan gidget\n" +
			"scan bucket\n" +
			"scan battery\n" +
			"goto goops, grab it\n" +
			"goto battery, analyze it\n" +
			"ask battery to energize gidget\n" +
			"goto bucket\n" +
			"drop goops";
		
		var world = new GIDGET.World([6], [1,0], ["grass", "olivedrab"], code);	
		world.gidget.setEnergy(105);

		// ----- H I D D E N -----
					
		world.addHiddenCommand('if');
											
		// ---- G O A L S --------
		
		world.addGoal("two goops on bucket");

		// ---- T I T L E --------
		
		world.addTitle("Time to Energize");

		
		// ---- M I S S I O N ----
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[RECHARGED BATTERIES] slightly using cracked solar panels.");
			world.addMissionText("sad", "[GOOPS & ENERGY SOURCE DETECTED] continue procedures; drop animals into crate.");
			world.addMissionText("sad", "RECOMMENDATION: refill energy using power source.");
		}		
		else {
			world.addMissionText("default", "It's overcast now and I don't have enough energy to clean up the goops in this area!");
			world.addMissionText("sad", "Hey look! Luckily, there seems to be an energy source here! I'll have to analyze it before I know what to ask it to do.");		}
				
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 5, 5, "rgb(250,0,255)", [], {});
		new GIDGET.Thing(world, "goop", 3, 3, "green", [], {});
		new GIDGET.Thing(world, "goop", 4, 2, "green", [], {});
		new GIDGET.Thing(world, "battery", 1, 3, "yellow", [], 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 200"
				)
			}
		);
		
		// -----------------------

		return world;
		
	},		
	
	// *******************************************************
	/*
	lowEnergy: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan dog, goto it, analyze it, if it is infected, grab it\n" +
			"scan crate, goto it\n" +
			"drop dog";
		
		var world = new GIDGET.World([10,10], [1,1], [], code);
		world.gidget.setEnergy(115);
			
		// ---- G O A L S --------
		
		world.addGoal("dog on crate is infected");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "There might be something wrong with that dog over there...let's makes sure it's okay!");
		}
		
		
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "dog", 8, 8, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "crate", 1, 3, "Chocolate", [], {});
		
		// -----------------------

		return world;
	
	},	
	*/
	// *******************************************************
	/*	
	learnConditionals: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan cats\n" +
			"goto cats, analyze it, if it is infected, grab it\n" +
			"scan crate, goto it\n" +
			"drop cats";
		
		var world = new GIDGET.World([10,10], [1,1], [], code);
		world.gidget.setEnergy(500);
			
		// ---- G O A L S --------
		
		world.addGoal("cat on crate is infected");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "Oh no! I'm detecting one of these these cats are infected by the goop. I'll have to separate it from the rest!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "cat", 1, 8, "orange", [], {});
		new GIDGET.Thing(world, "cat", 9, 9, "orange", [], {});
		new GIDGET.Thing(world, "cat", 7, 7, "orange", [], {});
		new GIDGET.Thing(world, "cat", 1, 3, "orange", [], {});
		new GIDGET.Thing(world, "cat", 5, 6, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "cat", 7, 8, "green", [] , {});
		new GIDGET.Thing(world, "crate", 9, 6, "Chocolate", [], {});
		
		// -----------------------
								
		return world;
	
	},	
	*/	
	// *******************************************************
		
	learnConditionalCompound: function() {

		// ----- G - C O D E -----
	
		// break this code after issue 109 and 108 are resolved.
		var code = 
			"scan shrubs\n" +
			"goto shrubs, analyze it, if it isn't infected, grab it\n" +
			"scan crate, goto it\n" +
			"drop shrubs";
		
		var world = new GIDGET.World([8,8], [1,1], [], code);
			
		// ---- G O A L S --------
		
		world.addGoal("three shrubs on crate aren't infected");

		// ---- T I T L E --------
		
		world.addTitle("The Plants are Getting Infected");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[RECHARGED BATTERIES] slightly using cracked solar panels.");
			world.addMissionText("sad", "[MASS PLANT DEATH DETECTED] collect the plants that are not infected for analysis.");
		}		
		else {
			world.addMissionText("default", "It's so sunny and my batteries are charged, but oh no! It looks like the plants have died from the goop in this area!");
			world.addMissionText("sad", "I need to collect all the non-infected plants for further analysis.");	
		}
				
				
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "shrub", 7, 1, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "shrub", 0, 2, "orange", [], {});
		new GIDGET.Thing(world, "shrub", 7, 4, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "shrub", 6, 6, "orange", [], {});
		new GIDGET.Thing(world, "shrub", 2, 0, "orange", [], {});
		new GIDGET.Thing(world, "shrub", 5, 4, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "shrub", 7, 4, "orange", [], {});
		new GIDGET.Thing(world, "crate", 5, 7, "Chocolate", [], {});
		
		// -----------------------

		return world;
	
	},	
			
	
	
	// *******************************************************
	
	navigateTrees: function() {

		// ----- G - C O D E -----
			var code = 
			"scan goops\n" +
			"goto goops, analyze it, if it is glowing, grab it\n" +
			"scan bucket, goto it\n" +
			"drop goops";
		
		var world = new GIDGET.World([7,7], [4,4,110], [], code);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket is glowing");
		
		// ---- T I T L E --------
		
		world.addTitle("Around the Trees");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[RECHARGED BATTERIES] using cracked solar panels.");
			world.addMissionText("sad", "[GLOWING GOOPS DETECTED] collect the glowing goops for further analysis.");
		}		
		else {
			world.addMissionText("sad", "It's so sunny so my batteries were charged a lot this time!");
			world.addMissionText("sad", "Wow, all the grass in this area is dead too! But the tall trees seemed to have survived. I also detect some glowing goops here!");
			world.addMissionText("sad", "I need to collect the glowing goops for further analysis!");	
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "goop", 1, 1, "green", [ 'glowing' ], {});
		new GIDGET.Thing(world, "goop", 5, 5, "green", [ 'glowing' ], {});

		var wall;
		wall = new GIDGET.Thing(world, "tree01", 1, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 1, 4, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 0, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 1, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 1, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 2, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 6, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 4, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		new GIDGET.Thing(world, "battery", 5, 3, "yellow", [], 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 60"
				)
		});
		
		
		// -----------------------

		return world;
	
	},
	// *******************************************************
	
	learnAvoidPassive: function() {

		// ----- G - C O D E -----
			var code = 
			"scan goop\n" +
			"scan crack\n" +
			"goto goop, analyze it, if it is glowing, grab it\n" +
			"scan bucket, goto it avoid crack\n" +
			"drop goop";
	
		var world = new GIDGET.World([10], [5,5], ["dirt","burlywood", 0], code);
		world.gidget.setEnergy(120);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket is glowing");
		
		// ---- T I T L E --------
		
		world.addTitle("Avoid the Cracks!");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[RECHARGED BATTERIES] slightly using cracked solar panels.");
			world.addMissionText("sad", "[CRACKS DETECTED] avoid the cracks to get the goop back to the bucket.");
		}		
		else {
			world.addMissionText("default", "It's so sunny and my batteries are charged.");
			world.addMissionText("sad", "Whoops! I dropped my bucket in a dangerous area with holes. Please help me get the goop to the bucket safely!");	
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 9, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "goop", 6, 4, "green", [ 'glowing' ], {});
		var b1 = new GIDGET.Thing(world, "crack", 5, 9, "black", [], {});

		var b2 = new GIDGET.Thing(world, "crack", 1, 8, "blue", [], {});
		var b3 = new GIDGET.Thing(world, "crack", 2, 8, "blue", [], {});
		var b4 = new GIDGET.Thing(world, "crack", 2, 9, "blue", [], {});
		
		
		b1.setCode(
			"when gidget on crack, grab goops\n" // Tsk tsk, Gidget, you shouldn't be on crack.
		);
		b2.setCode(
			"when gidget on bgoop, grab goops\n"
		);
		b3.setCode(
			"when gidget on bgoop, grab goops\n"
		);
		b4.setCode(
			"when gidget on bgoop, grab goops\n"
		);
		

		var wall;
		wall = new GIDGET.Thing(world, "tree01", 5, 1, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 2, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 4, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 6, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 8, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 6, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		// -----------------------
		
		return world;
	
	},

	// *******************************************************
	
	learnAvoidActive: function() { 

		// ----- G - C O D E -----
	
		var code = 
			"scan birds\n" +
			"scan rats\n" +
			"goto birds avoid rat, grab it\n" +
			"scan crate, goto it avoid rat\n" +
			"drop birds";

		var world = new GIDGET.World([10], [5,4], ["dirt","burlywood", 0], code);
		world.gidget.setEnergy(160);
			
		// ---- G O A L S --------
		
		world.addGoal("bird on crate");
		world.addGoal("goop on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Watch our for the Infected Rat!");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[RECHARGED BATTERIES] slightly using cracked solar panels.");
			world.addMissionText("sad", "[INFECTED RAT DETECTED] avoid the rat to get the goop and bird back to the bucket and crate.");
		}		
		else {
			world.addMissionText("default", "It's so sunny and my batteries are charged!");
			world.addMissionText("sad", "It looks like there's an injured bird that needs my help and a strange looking rat!");
			world.addMissionText("sad", "Please help me rescue the bird and clean up the goop!");	
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 2, 1, "gray", [], {});
		new GIDGET.Thing(world, "crate", 2, 2, "Chocolate", [], {});
		new GIDGET.Thing(world, "goop", 9, 1, "orange", [], {});
		new GIDGET.Thing(world, "bird", 1, 9, "orange", [], {});
		var rat = new GIDGET.Thing(world, "rat", 8, 8, "yellow", [], {});
		
		wall = new GIDGET.Thing(world, "tree01", 0, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 1, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 6, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 7, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 8, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		wall = new GIDGET.Thing(world, "tree01", 1, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 6, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 7, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 8, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;

		wall = new GIDGET.Thing(world, "tree01", 1, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 2, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 4, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 5, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 6, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 7, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 8, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;

		rat.setCode(
			"say Yum! I want to munch on your tasty wires!\n" + 
			"when gidget on rat, set gidget energy 0\n" +
			"scan gidget\n" +
			"goto gidget\n"
		);
		
		rat.setSpeed(3);

		// -----------------------
		
		return world;
		
	},

	// *******************************************************
	
	apiCar: function() {

		// ----- G - C O D E -----
	
		var code =
			"scan dog\n" +
			"goto dog\n" +
			"analyze dog\n" +
			"scan battery\n" +
			"ask dog to carry gidget battery\n" +
			"analyze battery\n" +
			"ask battery to energize gidget\n" +
			"scan goops\n" +
			"goto goops, grab it\n" +
			"goto bucket\n" +
			"drop goops";
	
		var world = new GIDGET.World([10,10], [1,8], ["dirt","burlywood", 0], code);
		world.gidget.setEnergy(30);
	
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Help from a friend");
		
		// ---- M I S S I O N ----		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[Energy level low]");
		}		
		else {
			world.addMissionText("sad", "Oh no, I don't have much energy but I've got to collect the goops here!");
			world.addMissionText("sad", "I think I detect a battery nearby, but I can't reach it. What can I do?");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 9, 0, "rgb(250,255,255)", [], {});
		new GIDGET.Thing(world, "goop", 2, 2, "rgb(250,255,255)", [ 'contaminated'], {});
		new GIDGET.Thing(world, "goop", 9, 5, "rgb(250,255,255)", [ 'contaminated'], {});
		new GIDGET.Thing(world, "goop", 4, 7, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "battery", 9, 1, "yellow", [], 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 100"
				)
			}
		);
		var dog = new GIDGET.Thing(world, "dog", 3, 9, "brown", [ 'helpful' ],{
			carry : new GIDGET.Action([ "passenger", "destination" ],
				"scan passenger\n" +
				"goto passenger\n" +
				"analyze passenger\n" +
				"grab passenger\n" +
				"scan destination\n" +
				"goto destination\n" +
				"drop passenger"
				)
			}
		);
		dog.setCode(
			"say I'll help you Gidget!"
		);
		
		// -----------------------

		return world;
		
	},	

	// *******************************************************
	// Use button to lower door/walls to get into the factory!
	// Perhaps change this to look more like the intro, and flip it vertically
	// so that Gidget is going up, into the factory.
	apiButton: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan button, goto it, analyze it\n" +
			"ask button to lower\n" +
			"scan goop, goto goop, grab it\n" +
			"scan bucket, goto it, drop goop";
		
		var world = new GIDGET.World([7], [1,5], ["dirt","burlywood", 0], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Infiltrating the Factory!");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[ARRIVED AT DESTINATION: GOOP FACTORY] Proceed through gates to enter.");
		}		
		else {
			world.addMissionText("sad", "I finally made it to the goop factory but it looks like there's a gate blocking my way!");
			world.addMissionText("sad", "I'm sure there's an obvious way to get in, but I can't seem to figure it out!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 2, 1, "red", [],
			{ 
				lower : new GIDGET.Action([],
				"lower gate02 height"
				)
			}
		);


		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});
		
		var wall;
		wall = new GIDGET.Thing(world, "gate01", 5, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate02", 5, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "gate01", 5, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		// -----------------------	

		return world;
	
	},
	

	// *******************************************************
	// Use a blender to combine plans and parts to make a new battery for Gidget!
	apiBlending: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan blueprint\n" +
			"scan parts\n" +
			"scan blender\n" +
			"goto blueprint, grab it\n" +
			"goto parts, grab it\n" +
			"goto blender, analyze it\n" +
			"ask blender to combine blueprint parts\n" +
			"analyze battery, grab it\n" +
			"scan bucket, goto it";
	
		var world = new GIDGET.World([7], [1,5], ["stone","gray", 1], code);
	
		// ---- G O A L S --------
		
		world.addGoal("battery on gidget");
		world.addGoal("gidget on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("A New Power Source!");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[SUNLIGHT NOT DETECTED - SOLAR PANELS FAILING] Proceed to find another source of power.");
		}		
		else {
			world.addMissionText("sad", "Oh no! There's no sun in here so my solar panels are going to be useless!");
			world.addMissionText("sad", "Maybe I can scrounge up some parts to make myself a battery pack! Yay! Sounds complicated though...");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(250,255,255)", [], {});
		new GIDGET.Thing(world, "blueprint", 3, 3, "rgb(250,255,255)", [ 'blue' ], {});
		new GIDGET.Thing(world, "parts", 5, 6, "rgb(250,255,255)", [ 'tangled'], {});
		new GIDGET.Thing(world, "blender", 6, 1, "gray", {},
			{ 
			combine : new GIDGET.Action([ "item1" , "item2" ], 
				"if item1 is blue and item2 is tangled, remove item1, remove item2, add battery\n" +
				"if item1 is tangled and item2 is blue, remove item1, remove item2, add battery"
				)
			}
		);
		
		// -----------------------

		return world;
		
	},
	
	// *******************************************************
	
	apiButtonSequence: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan bucket\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	
			"scan goops\n" +
			"goto goops, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +
			"goto bucket\n" +
			"drop goops";
		
		var world = new GIDGET.World([7], [1,5], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Order Matters");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 3, 0, "red", [],
			{ 
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				),
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				)
			
			}
		);
		
		new GIDGET.Thing(world, "goop", 6, 4, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 5, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});


		
		var wall;
		wall = new GIDGET.Thing(world, "wall1", 2, 0, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 4, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 5, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 6, "black", [], {}); wall.labeled = false;


		wall = new GIDGET.Thing(world, "wall2", 5, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		// -----------------------	

		return world;
	
	},
	
	
	// *******************************************************
	// Gidget has to grab the bird before the rat does (otherwise it gets "eaten" and removed from the map)
	
	level14: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan rat\n" +
			"scan bird, goto it avoid rat, grab it\n" +
			"scan goops, goto it, analyze it, grab it\n" +
			"scan bucket, goto it avoid rat, drop goops\n" +
			"scan crate, goto it avoid rat, drop bird\n";
		
		var world = new GIDGET.World([7], [1,5], ["stone","gray"], code);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		world.addGoal("bird on crate");
		
		// ---- T I T L E --------
		
		world.addTitle("Level 14");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[BATTERY PACK FUNCTIONAL] Proceed to collect goops and find a way to stop production.");
		}		
		else {
			world.addMissionText("sad", "Yay! My battery pack seems to be working great!");
			world.addMissionText("sad", "So this building is where the goops are coming from!");
			world.addMissionText("sad", "I'll continue to collect goops in my bucket and find a way to stop more goops!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 6, 5, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "crate", 6, 4, "Chocolate", [], {});
		new GIDGET.Thing(world, "goop", 3, 1, "green", [], {});
		var bird = new GIDGET.Thing(world, "bird", 3, 6, "red", [ 'scared' ], {});
		
		var rat = new GIDGET.Thing(world, "rat", 0, 0, "black", [ 'hungry' ], {});
		
		rat.setCode(
			"say That bird looks tasty! I'm going to eat him before you can save him Gidget!\n" +
			"when gidget on rat, set gidget energy 0\n" +
			"scan bird, goto bird\n" +
			"when rat on bird, remove bird\n" +
			"scan gidget, goto gidget\n" +
			"when gidget on rat, set gidget energy 0"
		);
		
		rat.setSpeed(4);
		
		
		// -----------------------	

		return world;
	
	},	
	
	
	
	// *******************************************************
	
	level15: function() {
	// Gidget has to catch the dog that's running away.
	
	
		// ----- G - C O D E -----
	
		var code = 
			"scan dog, goto it, grab it\n";
		
		var world = new GIDGET.World([10], [9,9], ["stone","gray"], code);
			
		// ---- G O A L S --------
		
		world.addGoal("grabbed dog");
		
		// ---- T I T L E --------
		
		world.addTitle("Level 15");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "[BATTERY PACK FUNCTIONAL] Proceed to collect goops and find a way to stop production.");
		}		
		else {
			world.addMissionText("sad", "Yay! My battery pack seems to be working great!");
			world.addMissionText("sad", "So this building is where the goops are coming from!");
			world.addMissionText("sad", "I'll continue to collect goops in my bucket and find a way to stop more goops!");
		}
		
		// ----- T H I N G S -----
		
		var hidden;
		hidden = new GIDGET.Thing(world, "hidden", 9, 0, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 0, 9, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 9, 9, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		
		
		hidden = new GIDGET.Thing(world, "hidden", 1, 0, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 9, 8, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 0, 8, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 9, 1, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 0, 2, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 9, 2, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 1, 2, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 8, 8, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 7, 0, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 2, 8, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		hidden = new GIDGET.Thing(world, "hidden", 0, 0, "rgb(0,0,0)", [], {});  hidden.labeled = false;
		
		new GIDGET.Thing(world, "bucket", 6, 5, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "crate", 6, 4, "Chocolate", [], {});
		new GIDGET.Thing(world, "goop", 3, 1, "green", [], {});
		
		var dog = new GIDGET.Thing(world, "dog", 0, 0, "black", [ 'paranoid' ], {});
		
		dog.setCode(
			//"scan gidget\n"+
			"scan hiddens, goto hiddens avoid gidget"
		);
		
		dog.setSpeed(0);
		
		
		// -----------------------	

		return world;
	
	},	
	
	
	
	// *******************************************************
	
	level16: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan bucket\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	
			"scan goops\n" +
			"goto goops, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +
			"goto bucket\n" +
			"drop goops";
		
		var world = new GIDGET.World([7], [1,5], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Level 16");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 3, 0, "red", [],
			{ 
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				),
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				)
			
			}
		);
		
		new GIDGET.Thing(world, "goop", 6, 4, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 5, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});


		
		var wall;
		wall = new GIDGET.Thing(world, "wall1", 2, 0, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 4, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 5, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 6, "black", [], {}); wall.labeled = false;


		wall = new GIDGET.Thing(world, "wall2", 5, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		// -----------------------	

		return world;
	
	},	
	
	
	// *******************************************************
	
	level17: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan bucket\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	
			"scan goops\n" +
			"goto goops, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +
			"goto bucket\n" +
			"drop goops";
		
		var world = new GIDGET.World([7], [1,5], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Level 17");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 3, 0, "red", [],
			{ 
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				),
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				)
			
			}
		);
		
		new GIDGET.Thing(world, "goop", 6, 4, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 5, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});


		
		var wall;
		wall = new GIDGET.Thing(world, "wall1", 2, 0, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 4, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 5, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 6, "black", [], {}); wall.labeled = false;


		wall = new GIDGET.Thing(world, "wall2", 5, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		// -----------------------	

		return world;
	
	},	
	
	
	// *******************************************************
	
	level18: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan bucket\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	
			"scan goops\n" +
			"goto goops, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +
			"goto bucket\n" +
			"drop goops";
		
		var world = new GIDGET.World([7], [1,5], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Level 18");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 3, 0, "red", [],
			{ 
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				),
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				)
			
			}
		);
		
		new GIDGET.Thing(world, "goop", 6, 4, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 5, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});


		
		var wall;
		wall = new GIDGET.Thing(world, "wall1", 2, 0, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 4, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 5, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 6, "black", [], {}); wall.labeled = false;


		wall = new GIDGET.Thing(world, "wall2", 5, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		// -----------------------	

		return world;
	
	},	
	
	
	// *******************************************************
	
	level19: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan bucket\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	
			"scan goops\n" +
			"goto goops, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +
			"goto bucket\n" +
			"drop goops";
		
		var world = new GIDGET.World([7], [1,5], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Level 19");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 3, 0, "red", [],
			{ 
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				),
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				)
			
			}
		);
		
		new GIDGET.Thing(world, "goop", 6, 4, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 5, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});

		var wall;
		wall = new GIDGET.Thing(world, "wall1", 2, 0, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 4, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 5, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 6, "black", [], {}); wall.labeled = false;


		wall = new GIDGET.Thing(world, "wall2", 5, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 5, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		// -----------------------	

		return world;
	
	},	
	
	// *******************************************************
	
	level20: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan goops\n" +
			"goto goops, analyze it, grab it\n" +
			"scan blender, goto it, analyze it\n" +
			"ask blender to rinse goop\n" +
			"analyze key, grab it\n" +
			"scan blackhole, goto it\n" +
			"scan bird, goto bird, grab it\n" +
			"scan bucket, goto it, drop goop";
		
		var world = new GIDGET.World([10,10], [2,8], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		world.addGoal("grabbed bird");
		
		// ---- T I T L E --------
		
		world.addTitle("The Final Showdown");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		new GIDGET.Thing(world, "goop", 1, 1, "green", [ 'glowing' ], {});
		new GIDGET.Thing(world, "bird", 9, 9, "black", [], {});		
		new GIDGET.Thing(world, "bucket", 2, 2, "rgb(0,0,0)", ["stone","gray"], {});
		
		new GIDGET.Thing(world, "button", 5, 8, "red", [],
			{ 
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				),
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				)
			
			}
		);

		var blackhole = new GIDGET.Thing(world, "blackhole", 4, 0, "black", [], {});
		blackhole.setCode(
			"when key on blackhole, lower wall2 height\n"
		);

		var wall;
		wall = new GIDGET.Thing(world, "wall2", 8, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 7, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 8, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 9, "black", [], {}); wall.setLevel(2); wall.labeled = false;


		new GIDGET.Thing(world, "blender", 6, 1, "gray", {},
			{ 
			rinse : new GIDGET.Action([ "item" ], 
				"if item is glowing, remove item, add key"
				)
			}
		);
		
		// -----------------------	

		return world;
	
	},
	
	
	// *******************************************************
	// *******************************************************
	// *******************************************************
	// *******************************************************
	// *******************************************************
	
	
	learnSequence2: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan bucket\n" +
			"scan rocks\n" +
			"goto rocks, grab it\n" +
			"goto bucket\n" +
			"drop rocks";
		
		var world = new GIDGET.World([10,10], [1,0], ["stone","gray"], code);
		world.gidget.setEnergy(250);
			
		// ---- G O A L S --------
		
		world.addGoal("rock on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Should we even keep this level?");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 7, 0, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 0, 7, "brown", [], {});
		
		var wall;
		wall = new GIDGET.Thing(world, "wall", 0, 0, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 1, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 2, 2, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 3, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 4, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 6, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 7, 7, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 8, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;

		wall = new GIDGET.Thing(world, "wall", 4, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 2, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 6, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 7, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 8, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 9, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		
		wall = new GIDGET.Thing(world, "wall", 6, 0, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 7, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 8, 2, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;

		wall = new GIDGET.Thing(world, "wall", 9, 0, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;

		wall = new GIDGET.Thing(world, "wall", 1, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 2, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 3, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 4, 7, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 6, 9, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		
		wall = new GIDGET.Thing(world, "wall", 0, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 1, 7, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 2, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;

		wall = new GIDGET.Thing(world, "wall", 0, 9, "rgb(255,255,255)", [], {}); wall.setLevel(2); wall.labeled = false;

		// -----------------------		
	
		return world;
	
	},


	// *******************************************************
	
	learnAll: function() { 

		// ----- G - C O D E -----
	
		var code = 
			"scan bucket\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	
			"scan rocks\n" +
			"goto rocks avoid rat, grab it\n" +
			"goto rock avoid rat\n" +
			"goto button avoid rat\n" +
			"ask button to lower\n" +	
			"goto bucket rat\n" +
			"drop rocks";
		
		var world = new GIDGET.World([10,10], [0,1], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("rock on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Let 'em Loose!");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "Oh no! It seems like there are phantom gulls that can go through walls to get me! I'm so scared!");
		}
		
		// ----- T H I N G S -----
		
		var rat = new GIDGET.Thing(world, "rat", 0, 9, "yellow", [], {});
		
		new GIDGET.Thing(world, "bucket", 2, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 0, 1, "brown", [], {});
		new GIDGET.Thing(world, "goop", 9, 1, "green", [], {});
		new GIDGET.Thing(world, "button", 8, 8, "red", [],
			{ 
			raise : new GIDGET.Action([],
				"raise wall1 height\n" +
				"lower wall2 height"
				),
			lower : new GIDGET.Action([],
				"lower wall1 height\n" +
				"raise wall2 height"
				)
			}
		);
		
		var wall;
		wall = new GIDGET.Thing(world, "wall2", 0, 7, "black", [], {}); 
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 1, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 2, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 2, 8, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 2, 9, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		wall = new GIDGET.Thing(world, "wall2", 7, 0, "black", [], {}); 
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 7, 1, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 7, 2, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 2, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 9, 2, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
			
		wall = new GIDGET.Thing(world, "wall1", 1, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 1, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 1, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 2, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 3, "black", [], {}); wall.labeled = false;
		
		rat.setCode(
			"when gidget on rat, set gidget energy 0\n" +
			"scan gidget\n" +
			"goto gidget\n"
		);
		rat.setSpeed(3);


		// -----------------------	

		return world;
	
	},
		
	// *******************************************************
	
	
	// Unexpected behavior: if a 'thing' is unreachable, gidget states that it's impossible to get
	//    to it and that he's going to "skip the rest" of the goto, he hangs there.
	bug_gotoBlocked: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan goops\n" +
			"goto goops";
		
		var world = new GIDGET.World([10,10], [2,8], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		
		// ---- T I T L E --------
		
		world.addTitle("Here be a bug");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 2, 2, "rgb(0,0,0)", ["stone","gray"], {});
		new GIDGET.Thing(world, "button", 5, 8, "red", [],
			{ 
				lower : new GIDGET.Action([],
				"lower wall1 height"
				)
			}
		);
		
		new GIDGET.Thing(world, "goop", 9, 0, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 1, "green", [], {});
		
		var wall;
		wall = new GIDGET.Thing(world, "wall1", 8, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 8, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 8, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 8, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall",  8, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall",  8, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 8, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 8, 7, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 8, 8, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 8, 9, "black", [], {}); wall.setLevel(2); wall.labeled = false;

		// -----------------------	

		return world;
	
	},
	
		// *******************************************************
	/*
	learnScan2: function() {

		// ----- G - C O D E -----

		var code = 
			"scan rocks\n";
	
		var world = new GIDGET.World([5], [1,1,49], ["grass", "olivedrab"], code);
		
		// ---- G O A L S --------
					
		world.addGoal("scanned rocks");
		world.addGoal("scanned bucket");

		
		// ---- T I T L E --------
		
		world.addTitle("Testing Gidget's Scanner Range");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PRELIMINARY DIAGNOSTICS SUCCESSFUL.");
			world.addMissionText("sad", "OBJECTIVE: proceed to check multi-scan capabilities. Scan all items in view.");
		}			
		else {
			world.addMissionText("default", "Okay, it seems like my scanner is working!");
			world.addMissionText("sad", "I think I remember that the scanner could scan multiple things...but I forgot how to do it!");
			world.addMissionText("sad", "I'm not good at these things, can you help me figure it out? I should try to scan for everything in the area!");
		}


		// ----- T H I N G S -----
		
		
		new GIDGET.Thing(world, "rock", 1, 0, "brown", [], {});
		new GIDGET.Thing(world, "rock", 4, 1, "brown", [], {});
		new GIDGET.Thing(world, "rock", 0, 4, "brown", [], {});
		new GIDGET.Thing(world, "bucket", 3, 4, "DarkSlateGray", [], {});
		
		// -----------------------

		return world;
	
	},
	*/
	/*for (var i = 0; i < ((Math.floor( Math.random()* (7-3) ) ) + 3); i++){
			var shrub = new GIDGET.Thing(world, "shrub", Math.floor(Math.random()*7), Math.floor(Math.random()*7), "green", [], {});
			shrub.labeled = false;
		}*/
		
	
	// *******************************************************
	/*
	learnAnalyzeAndGrab: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan bucket\n" +
			"analyze bucket\n" +
			"grab bucket";
		
		var world = new GIDGET.World([5], [1,1,37], ["grass", "olivedrab"], code);
		world.gidget.setEnergy(37);
			
		// ---- G O A L S --------
		
		world.addGoal("analyzed bucket");
		world.addGoal("grabbed bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "CONTAINER ITEM DETECTED");
			world.addMissionText("sad", "OBJECTIVES: analysis and possession of bucket");
		}				
		else {
			world.addMissionText("sad", "Great, I made it to the bucket! Now I need to see its properties.");
			world.addMissionText("sad", "Oh, I know! I could use my 'analyzer' to see if it has any special attributes!");
			world.addMissionText("sad", "It looks kinda heavy, but I should also be able to pick it up... if I can figure out how!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 1, "lead-lined", [], {});
		
		// -----------------------
								
		return world;
	
	},		
	*/
		
	// *******************************************************
	/*
	learnAvoidActiveX: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan goop\n" +
			"scan rats\n" +
			"goto goop avoid rat, grab it\n";

		var world = new GIDGET.World([10,10], [0,0], ["stone","gray"], code);
		world.gidget.setEnergy(110);
			
		// ---- G O A L S --------
		
		world.addGoal("grabbed three goops");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "There's something after me! I have to collect all the rocks and make sure it doesn't grab me first!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 6, 6, "green", [], {});
		new GIDGET.Thing(world, "goop", 6, 9, "green", [], {});
		new GIDGET.Thing(world, "goop", 1, 9, "green", [], {});
		var rat = new GIDGET.Thing(world, "rat", 8, 8, "gray", [], {});
		
		rat.setCode(
			"when gidget on rat, set gidget energy 0\n" +
			"scan gidget\n" +
			"goto gidget\n"
		);
		
		rat.setSpeed(4);
		
		// -----------------------

		return world;
		
	},
*/
};