GIDGET.levels = {

	// *******************************************************

	learnScan: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan rrrock";

		var world = new GIDGET.World([3], [1,1,50], ["grass", "olivedrab", 1], code);
			
		// ---- G O A L S --------
		
		world.addGoal("scanned rock");
		
		// ---- T I T L E --------
		
		world.addTitle("Testing Gidget's Scanner");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "SYSTEM DIAGNOSTICS: <span style='color: red; font-weight: bolder;'>failure</span> in problem solving chip.");
			world.addMissionText("sad", "OBJECTIVE: check integrity of scanner. Scanner reports and stores coordinates of objects on the map.");
		}		
		else {
			world.addMissionText("sad", "Ouch! That fall really messed up my systems! I can't seem to think straight!");
			world.addMissionText("default", "I have important work to do, so I should start by checking to make sure my other systems are okay.");
			world.addMissionText("sad", "First, let's use my scanner to check out what I bumped myself on the way down. My scanner gives me the coordinate of things in the world!");
		}		
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "rock", 1, 0, "brown", [], {});
		
		// -----------------------
											
		return world;
	
	},
	
	// *******************************************************
	
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
		/*for (var i = 0; i < ((Math.floor( Math.random()* (7-3) ) ) + 3); i++){
			var shrub = new GIDGET.Thing(world, "shrub", Math.floor(Math.random()*7), Math.floor(Math.random()*7), "green", [], {});
			shrub.labeled = false;
		}*/
		
		new GIDGET.Thing(world, "rock", 1, 0, "brown", [], {});
		new GIDGET.Thing(world, "rock", 4, 1, "brown", [], {});
		new GIDGET.Thing(world, "rock", 0, 4, "brown", [], {});
		new GIDGET.Thing(world, "bucket", 3, 4, "DarkSlateGray", [], {});
		
		// -----------------------

		return world;
	
	},
	
	// *******************************************************
	
	learnGoto: function() {

		// ----- G - C O D E -----

		var code = 
			"scan rrrocks\n" +
			"goto rrrocks";
	
		var world = new GIDGET.World([5], [1,1,45], ["grass", "olivedrab"], code);
		
		// ---- G O A L S --------
					
		world.addGoal("gidget on bucket");

		
		// ---- T I T L E --------
		
		world.addTitle("Testing Gidget's Mobility");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "CONTAINER ITEM DETECTED");
			world.addMissionText("sad", "OBJECTIVE: proceed to the bucket");
		}			
		else {
			world.addMissionText("default", "That bucket over there looks like it could be useful!");
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
		
	learnAnalyzeAndGrab: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan bucket\n" +
			"analyze bucket\n" +
			"grab bucket";
		
		var world = new GIDGET.World([4], [1,1,37], ["grass", "olivedrab"], code);
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


	// *******************************************************
	
	learnDrop: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan kitten\n" +
			"goto kitten\n" +
			"grab kitten\n" +
			"scan crate\n" +
			"goto crate\n" +
			"drop kitten\n" +
			"scan goop\n" +
			"goto goop\n" +
			"grab goop\n" +
			"scan bucket\n" +
			"goto bucket\n" +
			"drop goop";
	
		var world = new GIDGET.World([8], [1,1, 31], ["grass", "olivedrab"], code);
			
		// ---- G O A L S --------
		
		world.addGoal("kitten on crate");
		world.addGoal("goop on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "GOOP & DOMESTIC ANIMAL DETECTED");
			world.addMissionText("sad", "OBJECTIVES: begin cleanup procedures; drop animals into crate and goops into bucket");
		}		
		else {
			world.addMissionText("sad", "Hey look! Goops are starting to drop here! Oh no! There's a kitten that needs our help!");
			world.addMissionText("sad", "Please assist me in putting the kitten in a safe place and cleaning up the goop!");
		}
			
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 2, 5, "green", [], {});
		new GIDGET.Thing(world, "kitten", 5, 3, "orange", [], {});
		new GIDGET.Thing(world, "crate", 7, 7, "Chocolate", [], {});
		new GIDGET.Thing(world, "bucket", 1, 0, "DarkSlateGray", [], {});
		
		// -----------------------	

		return world;
	
	},
	
	// *******************************************************
	
	learnCompounds: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan puppy, goto it, grab it\n" +
			"scan piglet, goto it, grab it\n" +
			"scan crate, goto it\n" +
			"drop piglet, drop puppy\n" +
			"scan goop, goto it, grab it\n" +
			"scan bucket, goto it\n" +
			"drop goop";
		
		var world = new GIDGET.World([10,10], [5,5], [], code);
			
		// ---- G O A L S --------
		
		world.addGoal("piglet on crate");
		world.addGoal("puppy on crate");
		world.addGoal("goop on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "There's more goop and animals here. I should clean up the goop and rescue the animals . I think I remember how to do it with less commands, but can't get it quite right!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 1, 8, "green", [], {});
		new GIDGET.Thing(world, "piglet", 4, 1, "orange", [], {});
		new GIDGET.Thing(world, "puppy", 9, 9, "orange", [], {});
		new GIDGET.Thing(world, "crate", 7, 7, "Chocolate", [], {});
		new GIDGET.Thing(world, "bucket", 9, 6, "DarkSlateGray", [], {});
		
		// -----------------------
						
		return world;
	
	},
		
	// *******************************************************

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
	// *******************************************************
		
	learnConditional: function() {

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
				
	// *******************************************************
		
	learnConditionalCompound: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan birds\n" +
			"goto birds, analyze it, if it is infected, grab it\n" +
			"scan crate, goto it\n" +
			"drop birds";
		
		var world = new GIDGET.World([10,10], [1,1], [], code);
		world.gidget.setEnergy(500);
			
		// ---- G O A L S --------
		
		world.addGoal("three birds on crate are infected");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "Oh no! I'm detecting many of these birds are infected by the goop. I'll have to separate them from the rest!");
		}
				
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bird", 8, 1, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "bird", 1, 4, "orange", [], {});
		new GIDGET.Thing(world, "bird", 9, 9, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "bird", 7, 7, "orange", [], {});
		new GIDGET.Thing(world, "bird", 3, 1, "orange", [], {});
		new GIDGET.Thing(world, "bird", 6, 5, "orange", [ 'infected' ], {});
		new GIDGET.Thing(world, "bird", 8, 7, "orange", [], {});
		new GIDGET.Thing(world, "crate", 6, 9, "Chocolate", [], {});
		
		// -----------------------

		return world;
	
	},	
			
	
	
	// *******************************************************
	useObjectEnergize: function() {

		// ----- G - C O D E -----
	
		var code = 
			"scan goops\n" +
			"scan bucket\n" +
			"scan battery\n" +
			"goto goops, grab it\n" +
			"goto battery, analyze it\n" +
			"ask battery to energize gidget\n" +
			"goto bucket\n" +
			"drop goops";
		
		var world = new GIDGET.World([10,10], [2,8], ["grass", "olivedrab"], code);	
		world.gidget.setEnergy(105);
			
		// ---- G O A L S --------
		
		world.addGoal("two goops on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "It looks like I'm running low on power to complete the task. How can I use the resources to recharge myself?");
		}
		
		
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 9, 8, "rgb(250,0,255)", [], {});
		new GIDGET.Thing(world, "goop", 1, 1, "green", [], {});
		new GIDGET.Thing(world, "goop", 0, 9, "green", [], {});
		new GIDGET.Thing(world, "battery", 2, 9, "yellow", [], 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 100"
				)
			}
		);
		
		// -----------------------

		return world;
		
	},	
	
	// *******************************************************
	
	navigateWalls: function() {

		// ----- G - C O D E -----
			var code = 
			"scan goops\n" +
			"goto goops, analyze it, if it is glowing, grab it\n" +
			"scan bucket, goto it\n" +
			"drop goops";
		
		var world = new GIDGET.World([7,7], [4,4], ["grass", "olivedrab", 1], code);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket is glowing");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "There's something blocking my path to the goop! I need to navigate around it.");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "bucket", 1, 6, "rgb(0,0,0)", [], {});
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
	
		var world = new GIDGET.World([10,10], [5,5], ["brick","burlywood", 1], code);
		world.gidget.setEnergy(120);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket is glowing");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "There's new kind of goops here which are keeping me from getting the goop! I need to navigate around them.");
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
		wall = new GIDGET.Thing(world, "wall", 5, 1, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 2, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 4, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 6, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 8, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 6, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		// -----------------------
		
		return world;
	
	},
	
	// *******************************************************
	
	learnAvoidActive: function() {

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

	// *******************************************************
	
	learnAvoidActive2: function() { 

		// ----- G - C O D E -----
	
		var code = 
			"scan birds\n" +
			"scan rats\n" +
			"goto birds avoid rat, grab it\n" +
			"scan crate, goto it avoid rat\n" +
			"drop birds";

		var world = new GIDGET.World([10,10], [5,4], ["stone","gray"], code);
		world.gidget.setEnergy(160);
			
		// ---- G O A L S --------
		
		world.addGoal("two birds on crate");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("sad", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "crate", 2, 2, "Chocolate", [], {});
		new GIDGET.Thing(world, "bird", 9, 1, "orange", [], {});
		new GIDGET.Thing(world, "bird", 1, 9, "orange", [], {});
		var rat = new GIDGET.Thing(world, "rat", 8, 8, "yellow", [], {});
		
		wall = new GIDGET.Thing(world, "wall", 0, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 1, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 2, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 3, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 4, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 6, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 7, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 8, 7, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		
		wall = new GIDGET.Thing(world, "wall", 1, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 2, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 3, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 4, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 6, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 7, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 8, 3, "black", [], {});
		wall.setLevel(2); wall.labeled = false;

		wall = new GIDGET.Thing(world, "wall", 1, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 2, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 3, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 4, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 5, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 6, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 7, 5, "black", [], {});
		wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall", 8, 5, "black", [], {});
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
	
	learnBlending: function() {

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
	
	learnSequence: function() {

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