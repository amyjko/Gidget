GIDGET.levels = {

	// *******************************************************

	learnScan: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan gidget";

		var world = new GIDGET.World([4], [1,2], ["grass", "olivedrab", 1], code);
			
		// ---- G O A L S --------
		
		world.addGoal("scanned gidget");
		
		// ---- T I T L E --------
		
		world.title = "Scanner testing";
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "Hark!");
			world.addMissionText("control", "This be a test of control gidget!");
		}		
		else {
			world.addMissionText("sad", "Ouch, I think that fall scrambled some of my circuits! Preliminary diagnostics report that my goal generator is intact, but that my algorithm generator (problem solving chip) is damaged!");
			world.addMissionText("default", "I'll do my best with the damaged algorithm generator, but I might need your help to fix mistakes!");
			world.addMissionText("sad", "I should check to see if other systems are damaged! First, My 'scanner' puts the location of objects on the map into my memory banks. I can't seem to make it work correctly.");
		}		
		
		// ----- T H I N G S -----
		
		
		// -----------------------
											
		return world;
	
	},
	
	// *******************************************************
	
	learnScan2: function() {

		// ----- G - C O D E -----

		var code = 
			"scan gidget\n" +
			"scan bucket";
	
		var world = new GIDGET.World([7], [1,1], ["grass", "olivedrab"], code);
		
		// ---- G O A L S --------
					
		world.addGoal("scanned gidget");
		world.addGoal("scanned bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "I have to report on what is in this area too. How did I do it last time? This is so hard for me!");
		}


		// ----- T H I N G S -----
		for (var i = 0; i < ((Math.floor( Math.random()* (7-3) ) ) + 3); i++){
			var shrub = new GIDGET.Thing(world, "shrub", Math.floor(Math.random()*7), Math.floor(Math.random()*7), "green", [], {});
			shrub.labeled = false;
		}

		new GIDGET.Thing(world, "bucket", 6, 6, "DarkSlateGray", [], {});
		
		// -----------------------

		return world;
	
	},
	
	// *******************************************************
	
	learnScan3: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan gidget\n" +
			"scan goops";
		
		var world = new GIDGET.World([8], [1,6], ["stone","gray"], code);
			
		// ---- G O A L S --------
		
		world.addGoal("scanned gidget");
		world.addGoal("scanned three goops");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "I think I am getting better at this! I wonder what is in this area?");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 6, 3, "green", [], {});
		new GIDGET.Thing(world, "goop", 5, 7, "green", [], {});
		new GIDGET.Thing(world, "goop", 1, 1, "green", [], {});
		
		// -----------------------
	
		return world;
	
	},
	
	// *******************************************************
		
	learnAnalyze: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan goop\n" +
			"analyze goop";
		
		var world = new GIDGET.World([4,4], [2,2], [], code);
			
		// ---- G O A L S --------
		
		world.addGoal("analyzed goop");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "Okay! My scanner seems to be working.");
			world.addMissionText("sad","Now it's time to check my 'analyzer' - it allows me to see special attributes and actions of objects which can access through my memory banks."); 
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 2, 2, "green", [ 'glowing' ], {});
		
		// -----------------------
								
		return world;
	
	},		
	// *******************************************************
	
	learnGoto: function() {
	
		// ----- G - C O D E -----
	
		var code = 
			"scan goops\n" +
			"scan bucket\n" +
			"goto bucket";
		
		var world = new GIDGET.World([10,10], [5,5], [], code);
			
		// ---- G O A L S --------
		
		world.addGoal("gidget on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "I have strayed too far from my bucket. I need to get back to it but I don't remember the way!");
		}
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 2, 9, "green", [], {});
		new GIDGET.Thing(world, "goop", 4, 1, "green", [], {});
		new GIDGET.Thing(world, "bucket", 9, 6, "DarkSlateGray", [], {});
				
		// -----------------------
						
		return world;
	
	},		
	
	// *******************************************************
	
	/*
	learnGrab: function() {

		var code = 
			"scan goop\n" +
			"goto goop\n" +
			"grab goop";	
			
		var mission = "I need to start cleaning up all this goop! Ohhh...I think I'm close, but I can't figure out how to do it right...";
					
		var world = new GIDGET.World([10,10], [5,5], [], code);
		world.gidget.setEnergy(500);
		
		new GIDGET.Thing(world, "goop", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "bucket", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("grabbed goop");

		return world;
	
	},		
	*/
		
	// *******************************************************
	
	learnGrab2: function() {

		// ----- G - C O D E -----
		
		var code = 
			"scan goop\n" +
			"goto goop\n" +
			"grab goop\n" +
			"scan bucket\n" +
			"goto bucket";
		
		var world = new GIDGET.World([10,10], [5,5], [], code);
		world.gidget.setEnergy(500);
			
		// ---- G O A L S --------
		
		world.addGoal("gidget on bucket");
		world.addGoal("goop on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "I think I figured out how to collect the goop, but now I need to start moving it to where it need to go! Ohhh...I think I'm close, but I can't figure out how to do it right...");
		}
		
		
		
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 4, 1, "green", [], {});
		new GIDGET.Thing(world, "bucket", 9, 6, "DarkSlateGray", [], {});
		
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
	
		var world = new GIDGET.World([10,10], [5,5], [], code);
		world.gidget.setEnergy(500);
			
		// ---- G O A L S --------
		
		world.addGoal("kitten on crate");
		world.addGoal("goop on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
		}		
		else {
			world.addMissionText("sad", "There's more goop and animals here. I should clean it up so that the crews can work on decontaminating this area, but I keep forgetting how!");
		}
			
		// ----- T H I N G S -----
		
		new GIDGET.Thing(world, "goop", 1, 8, "green", [], {});
		new GIDGET.Thing(world, "kitten", 4, 1, "orange", [], {});
		new GIDGET.Thing(world, "crate", 7, 7, "Chocolate", [], {});
		new GIDGET.Thing(world, "bucket", 9, 6, "DarkSlateGray", [], {});
		
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
		world.gidget.setEnergy(500);
			
		// ---- G O A L S --------
		
		world.addGoal("piglet on crate");
		world.addGoal("puppy on crate");
		world.addGoal("goop on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
		
		var world = new GIDGET.World([10,10], [1,8], ["grass","green", 1], code);
		world.gidget.setEnergy(1000);
			
		// ---- G O A L S --------
		
		world.addGoal("goop on bucket");
		
		// ---- M I S S I O N ----
		
		if (GIDGET.experiment.isControl()) {
			world.addMissionText("control", "PLACEHOLDER:<br />(control mission)");
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
		
		new GIDGET.Thing(world, "goop", 9, 3, "green", [], {});
		new GIDGET.Thing(world, "goop", 7, 7, "green", [], {});

		
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
		wall = new GIDGET.Thing(world, "tree01", 3, 9, "black", [], {}); wall.labeled = false;

		wall = new GIDGET.Thing(world, "tree01", 8, 0, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 1, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 2, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 3, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 4, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "tree02", 8, 5, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 6, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 7, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 8, "black", [], {}); wall.setLevel(2); wall.labeled = false;
		wall = new GIDGET.Thing(world, "wall2", 8, 9, "black", [], {}); wall.setLevel(2); wall.labeled = false;

		// -----------------------	

		return world;
	
	}
	
};