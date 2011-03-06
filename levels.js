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
			"scan rrrock";

		var world = new GIDGET.World([3], [1,1,50], ["grass", "olivedrab", 1], code);

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
			world.addMissionText("sad", "SYSTEM DIAGNOSTICS: <span style='color: red; font-weight: bolder;'>failure</span> in problem solving chip.");
			world.addMissionText("sad", "Minimal functionality detected in solar panels. Recommended to charge manually.");
			world.addMissionText("sad", "OBJECTIVE: check environment. Scanner reports and stores coordinates of objects on the map.");
		}		
		else {
			world.addMissionText("sad", "Ouch! That fall really messed up my systems! I can't seem to think straight!");
			world.addMissionText("sad", "It looks like my solar panels are cracked too! They're working, but not very well... it looks like I'll have to find my own power soon.");
			world.addMissionText("default", "I have important work to do, so I should start by checking to make sure my other systems are okay.");
			world.addMissionText("sad", "First, let's use my scanner to check out what I bumped myself on the way down. My scanner gives me the coordinate of things in the world!");
		}		
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "rock", 1, 0, "brown", [], {});
		
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
	
	learnGoto: function() {

		// ----- G - C O D E -----

		var code = 
			"scan rocks\n" +
			"goto rocks";
	
		var world = new GIDGET.World([5], [1,1,50], ["grass", "olivedrab"], code);

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
		new GIDGET.Thing(world, "bucket", 3, 4, "DarkSlateGray", [], {});
		
		// -----------------------

		return world;
	
	},	
		

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
		
		kitten.setCode(
			"say Meow, help me Gidget!"
		);
		
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
		
		new GIDGET.Thing(world, "dog", 4, 1, "orange", [], {});
		new GIDGET.Thing(world, "crate", 3, 3, "Chocolate", [], {});
		
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
			"when gidget on crack, grab goops\n"
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
			world.addMissionText("default", "It's so sunny and my batteries are charged");
			world.addMissionText("sad", "That poor bird broke its wing and can't get away from the nasty, infected rat!");
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
	
		var world = new GIDGET.World([10,10], [1,8], ["stone","gray"], code);
		world.gidget.setEnergy(30);
	
		// ---- G O A L S --------
		
		world.addGoal("three goops on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
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
	
	apiBlending: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan rocks\n" +
			"scan blender\n" +
			"goto rock, analyze it, if it is contaminated, grab it\n" +
			"goto blender, analyze it\n" +
			"ask blender to combine first rock second rock\n" +
			"analyze rgoop, grab it\n" +
			"scan bucket, goto it\n" +
			"drop rgoop"; 
	
		var world = new GIDGET.World([10,10], [2,8], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
	
		// ---- G O A L S --------
		
		world.addGoal("rgoop on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 1, "rgb(250,255,255)", [], {});
		new GIDGET.Thing(world, "rock", 2, 2, "rgb(250,255,255)", [ 'contaminated'], {});
		new GIDGET.Thing(world, "rock", 9, 5, "rgb(250,255,255)", [ 'contaminated'], {});
		new GIDGET.Thing(world, "rock", 4, 7, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "blender", 8, 8, "yellow", {}, 
			{ 
			combine : new GIDGET.Action([ "item1" , "item2" ], 
				"if item1 is contaminated and item2 is contaminated, remove item1, remove item2, add rgoop"		
				)
			}
		);
		
		// -----------------------

		return world;
		
	},
	
	// *******************************************************
	
	apiButton: function() {

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
		
		var world = new GIDGET.World([10,10], [2,8], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		
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
		
		new GIDGET.Thing(world, "goop", 9, 0, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 1, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 2, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 3, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 4, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 5, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 6, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 7, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 8, "green", [], {});
		new GIDGET.Thing(world, "goop", 9, 9, "green", [], {});
		
		var wall;
		wall = new GIDGET.Thing(world, "wall1", 3, 0, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 4, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 5, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 6, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 7, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 8, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall1", 3, 9, "black", [], {}); wall.labeled = false;

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

		// -----------------------	

		return world;
	
	},
	
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
			"goto rocks, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +	
			"goto bucket\n" +
			"drop rocks";
		
		var world = new GIDGET.World([10,10], [0,1], ["stone","gray"], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("rock on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "Oh no! It seems like there are phantom gulls that can go through walls to get me! I'm so scared!");
		}
		
		// ----- T H I N G S -----
		
		var rat = new GIDGET.Thing(world, "rat", 0, 9, "yellow", [], {});
		var rat2 = new GIDGET.Thing(world, "rat", 9, 0, "yellow", [], {});
		
		new GIDGET.Thing(world, "bucket", 2, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 9, 1, "brown", [], {});
		new GIDGET.Thing(world, "button", 5, 8, "red", [],
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
		
		rat2.setCode(
			"when gidget on rat, set gidget energy 0\n" +
			"scan gidget\n" +
			"goto gidget\n"
		);
		rat2.setSpeed(5);

		// -----------------------	

		return world;
	
	},

	// *******************************************************
		
	testSpeak: function() { 

		// ----- G - C O D E -----
	
		var code = "scan rat";	
		
		var world = new GIDGET.World([5], [0,1], [], code);
		
		// ---- G O A L S --------
		
		world.addGoal("scanned rat");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "Looks like I have a new friend!");
		}
		

		// ----- T H I N G S -----
		
		var rat = new GIDGET.Thing(world, "rat", 3, 3, "yellow", [], {});
		
		rat.setCode(
			"say I am your friend, gidget! But I still want to eat you."
		);
		
		// -----------------------
		
		return world;
	
	},
	
	// *******************************************************
	
	testHeights: function() {
	
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
		
		var world = new GIDGET.World([10,10], [1,8, 300], ["grass","green", 1], code);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		
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
			raise : new GIDGET.Action([],
				"raise tree01 height\n" +
				"lower tree02 height"
				),
			lower : new GIDGET.Action([],
				"lower tree01 height\n" +
				"raise tree02 height"
				)
			}
		);
		
		new GIDGET.Thing(world, "goop", 9, 3, "green", [], {});
		new GIDGET.Thing(world, "goop", 7, 7, "green", [], {});

		
		var wall;
		wall = new GIDGET.Thing(world, "tree01", 3, 0, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 1, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 2, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 3, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 4, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 5, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 6, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 7, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 8, "black", [], {}); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree01", 3, 9, "black", [], {}); wall.labeled = false;

		wall = new GIDGET.Thing(world, "tree02", 8, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 7, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 8, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 9, "black", [], {}); wall.setLevel(2); wall.labeled = false;

		// -----------------------	

		return world;
	
	},
	
	// *******************************************************
	
	// Unexpected behavior: If gidget is already on the thing you ask him to go to, he gets stuck in an infinite
	//						loop saying that there is "No valid path. Aborting goto."
	
		bug_stuckGoto: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan cat\n" +
			"goto cat";
		
		var world = new GIDGET.World([10,10], [1,8], [], code);
		world.gidget.setEnergy(500);
			
		// ---- G O A L S --------
		
		world.addGoal("analyzed cat");

		// ---- T I T L E --------
		
		world.addTitle("Testing: bug_stuckGoto");		

		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "Parser Debugging");
		}		
		else {
			world.addMissionText("sad", "Whee, Parser Debugging!!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "cat", 1, 8, "orange", [], {});
		new GIDGET.Thing(world, "crate", 9, 6, "Chocolate", [], {});
		
		// -----------------------
								
		return world;
	
	},	

	// *******************************************************
	
	// Unexpected behavior: For some reason, the two cats get "scanned" seperately,
	//    that is, the scan animation happens for one, gidget goto-s it, then
	//	  does another scan animation. Usually, all scan animations are done in series
	//    before gidget goes on to the commands afer the comma.
	
	bug_stuckGoto2: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan cats, goto it";
		
		var world = new GIDGET.World([10,10], [1,6], [], code);
		world.gidget.setEnergy(500);
			
		// ---- G O A L S --------
		
		world.addGoal("analyzed cat");

		// ---- T I T L E --------
		
		world.addTitle("Testing: bug_stuckGoto2");		

		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "Parser Debugging");
		}		
		else {
			world.addMissionText("sad", "Whee, Parser Debugging!!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "cat", 1, 8, "orange", [], {});
		new GIDGET.Thing(world, "cat", 2, 6, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "crate", 9, 6, "Chocolate", [], {});
		
		// -----------------------
								
		return world;
	
	},
	
	// *******************************************************
	
	// Unexpected behavior: if a 'thing' is not specified in the goals before a query, the
	//    program loops infinitely in the goal check state.
	
	bug_stuckGoal: function() {

		// ----- G - C O D E -----
	
		var code = 
			"grab crate";
		
		var world = new GIDGET.World([10,10], [4,7], [], code);
		world.gidget.setEnergy(500);
			
		// ---- G O A L S --------
		
		world.addGoal("on crate");

		// ---- T I T L E --------
		
		world.addTitle("Testing: parser_missingOn");		

		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "Parser Debugging");
		}		
		else {
			world.addMissionText("sad", "Whee, Parser Debugging!!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bird", 4, 7, "orange", [], {});
		new GIDGET.Thing(world, "cat", 4, 7, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "crate", 4, 7, "Chocolate", [], {});
		
		// -----------------------
								
		return world;
	
	},
};