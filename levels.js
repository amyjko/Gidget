GIDGET.levels = {

	// *******************************************************

	learnScan: function() {

		var code = 
			"scan gidget";
	
		var mission = "I have to report on what is in this area. I can't seem to figure out how to do that.";
					
		var world = new GIDGET.World(10, 10, 2, 8, code, mission);
		
		world.addGoal("scanned gidget");

		return world;
	
	},
	
	// *******************************************************
	
	learnScan2: function() {

		var code = 
			"scan gidget\n" +
			"scan gidget";
	
		var mission = "I have to report on what is in this area too. How did I do it last time? This is so hard for me!";
					
		var world = new GIDGET.World(10, 10, 1, 1, code, mission);
		
		new GIDGET.Thing(world, "rock", 8, 8, "rgb(0,0,0)", [], {});
		
		world.addGoal("scanned gidget");
		world.addGoal("scanned rock");

		return world;
	
	},
	
	// *******************************************************
	
	learnScan3: function() {

		var code = 
			"scan gidget\n" +
			"scan rocks";
	
		var mission = "I think I am getting better at this! I wonder what is in this area?";
					
		var world = new GIDGET.World(10, 10, 1, 8, code, mission);
		
		new GIDGET.Thing(world, "rock", 8, 3, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 5, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 2, 5, "rgb(0,0,0)", [], {});
		
		world.addGoal("scanned gidget");
		world.addGoal("scanned three rocks");

		return world;
	
	},

	// *******************************************************
	
	learnScan3: function() {

		var code = 
			"scan gidget\n" +
			"scan rocks";
	
		var mission = "I think I am getting better at this! I wonder what is in this area?";
					
		var world = new GIDGET.World(10, 10, 1, 8, code, mission);
		
		new GIDGET.Thing(world, "rock", 8, 3, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 5, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 2, 5, "rgb(0,0,0)", [], {});
		
		world.addGoal("scanned gidget");
		world.addGoal("scanned three rocks");

		return world;
	
	},
	
	// *******************************************************
	
	learnGoto: function() {

		var code = 
			"scan rocks\n" +
			"scan ship\n" +
			"goto ship";
	
		var mission = "I have strayed too far from my ship (transport). I need to get back to it but I don't remember the way!";
					
		var world = new GIDGET.World(10, 10, 5, 5, code, mission);
		
		new GIDGET.Thing(world, "rock", 2, 9, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "ship", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("gidget on ship");

		return world;
	
	},		
	
	// *******************************************************
	
	learnGrab: function() {

		var code = 
			"scan rock\n" +
			"goto rock\n" +
			"grab rock";	
		var mission = "I need to get the dummy to the ship so we can take it to the (mock) hospital! Ohhh...I think I'm close, but I can't figure out how to do it right...";
					
		var world = new GIDGET.World(10, 10, 5, 5, code, mission);
		
		new GIDGET.Thing(world, "rock", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "ship", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("grabbed rock");

		

		return world;
	
	},		

	// *******************************************************
	
	learnGrab: function() {

		var code = 
			"scan rock\n" +
			"goto rock\n" +
			"grab rock";	
		var mission = "Oh! I forgot that I have arms and hands! Hmm...I can't seem to remember how to use them correctly.";
					
		var world = new GIDGET.World(10, 10, 5, 5, code, mission);
		
		new GIDGET.Thing(world, "rock", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "ship", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("grabbed rock");

		

		return world;
	
	},		
		
	// *******************************************************
	
	learnGrab2: function() {

		var code = 
			"scan dummy\n" +
			"goto dummy\n" +
			"grab dummy\n" +
			"scan ship\n" +
			"goto ship";
	
		var mission = "I need to get the dummy to the ship so we can take it to the (mock) hospital! Ohhh...I think I'm close, but I can't figure out how to do it right...";
					
		var world = new GIDGET.World(10, 10, 5, 5, code, mission);
		
		new GIDGET.Thing(world, "dummy", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "ship", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("gidget on ship");
		world.addGoal("dummy on ship");
		

		return world;
	
	},		
	// *******************************************************
	
	learnDrop: function() {

		var code = 
			"scan trash\n" +
			"goto trash\n" +
			"grab trash\n" +
			"scan trashcan\n" +
			"goto trashcan\n" +
			"drop trash\n" +
			"scan dummy\n" +
			"goto dummy\n" +
			"grab dummy\n" +
			"scan ship\n" +
			"goto ship\n" +
			"drop dummy";
	
		var mission = "There's another dummy in need of rescue, but I should also throw away the trash here! I almost got it, but I keep forgetting how!";
					
		var world = new GIDGET.World(10, 10, 5, 5, code, mission);
		world.gidget.setEnergy(150);
		
		new GIDGET.Thing(world, "dummy", 1, 8, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "trash", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "trashcan", 7, 7, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "ship", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("trash on trashcan");
		world.addGoal("dummy on ship");
		

		return world;
	
	},
	
	// *******************************************************
	
	learnCompounds: function() {

		var code = 
			"scan trash, goto it, grab it\n" +
			"scan waste, goto it, grab it\n" +
			"scan trashcan, goto it\n" +
			"drop trash, drop waste\n" +
			"scan dummy, goto it, grab it\n" +
			"scan ship, goto it\n" +
			"drop dummy";
	
		var mission = "There's another dummy in need of rescue, but there's even more trash here I should get rid of first!";
					
		var world = new GIDGET.World(10, 10, 5, 5, code, mission);
		world.gidget.setEnergy(200);
		
		new GIDGET.Thing(world, "dummy", 1, 8, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "trash", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "waste", 9, 9, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "trashcan", 7, 7, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "ship", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("trash on trashcan");
		world.addGoal("waste on trashcan");
		world.addGoal("dummy on ship");
		

		return world;
	
	},
		
	// *******************************************************
		
	learnAnalyze: function() {

		var code = 
			"scan rock\n" +
			"goto rock\n" +
			"analyze rock";
			
		var mission = "There's something interesting about that rock over there...how can I check it?";
					
		var world = new GIDGET.World(10, 10, 1, 1, code, mission);
		
		new GIDGET.Thing(world, "rock", 8, 8, "rgb(0,0,0)", [ 'red' ], {});

		
		world.addGoal("analyzed rock");


		return world;
	
	},			
	// *******************************************************
		
	learnConditional: function() {

		var code = 
			"scan rock\n" +
			"goto rock, analyze it, if it is red, grab it\n";
			
		var mission = "Whoops, I dropped the red rock I picked up in the last round into this pile of other rocks! I can't figure out how to find it amongst all these other rocks!";
					
		var world = new GIDGET.World(10, 10, 1, 1, code, mission);
		world.gidget.setEnergy(500);
		
		new GIDGET.Thing(world, "rock", 1, 8, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 9, 9, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 7, 7, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 1, 3, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 5, 6, "rgb(0,0,0)", [ 'red' ], {});
		new GIDGET.Thing(world, "rock", 7, 8, "rgb(0,0,0)", [] , {});
		new GIDGET.Thing(world, "ship", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("rock on gidget is red");

		return world;
	
	},	
				
	// *******************************************************
		
	learnConditionalCompound: function() {

		var code = 
			"scan dummys\n" +
			"goto dummy, analyze it, if it is hurt, grab it\n" +
			"scan ship, goto it\n" +
			"drop dummys";
			
		var mission = "There's a lot of hurt dummys here! Help me pick them out and take them to the ship so that they can be treated! This is so important, but I can't seem to figure it out.";
					
		var world = new GIDGET.World(10, 10, 1, 1, code, mission);
		world.gidget.setEnergy(500);
		
		new GIDGET.Thing(world, "dummy", 1, 8, "rgb(0,0,0)", [ 'hurt' ], {});
		new GIDGET.Thing(world, "dummy", 4, 1, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "dummy", 9, 9, "rgb(0,0,0)", [ 'hurt' ], {});
		new GIDGET.Thing(world, "dummy", 7, 7, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "dummy", 1, 3, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "dummy", 5, 6, "rgb(0,0,0)", [ 'hurt' ], {});
		new GIDGET.Thing(world, "dummy", 7, 8, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "ship", 9, 6, "rgb(0,0,0)", [], {});
		
		world.addGoal("three dummys on ship are hurt");

		return world;
	
	},	
				
	// *******************************************************

		lowEnergy: function() {


		// STATE CRITICAL ENERGY
		
		var code = 
			"scan rock, goto it, analyze it, if it is red, grab it\n" +
			"scan ship, goto it\n" +
			"drop rock";
			
		var mission = "There's something interesting about that rock over there...lets get the red one back to the ship!";
					
		var world = new GIDGET.World(10, 10, 1, 1, code, mission);
		world.gidget.setEnergy(120);
		
		new GIDGET.Thing(world, "rock", 3, 8, "rgb(0,0,0)", [ 'green' ], {});
		new GIDGET.Thing(world, "rock", 8, 8, "rgb(0,0,0)", [ 'red' ], {});
		new GIDGET.Thing(world, "ship", 1, 3, "rgb(0,0,0)", [], {});
		
		world.addGoal("rock on ship is red");


		return world;
	
	},
	
	
	// *******************************************************
	useObjectEnergize: function() {

		var code = 
			"scan rocks\n" +
			"scan ship\n" +
			"scan battery\n" +
			"goto rocks, grab it\n" +
			"goto battery, analyze it\n" +
			"ask battery to energize gidget\n" +
			"goto ship\n" +
			"drop rocks";
		
		var mission = "It looks like I'm running low on power to complete the task. How can I use the resources to recharge myself?";
		

		var world = new GIDGET.World(10, 10, 2, 8, code, mission);	
		world.gidget.setEnergy(90);

		world.addGoal("two rocks on ship");

		new GIDGET.Thing(world, "ship", 9, 9, "rgb(250,0,255)", {}, {});
		new GIDGET.Thing(world, "rock", 1, 1, "rgb(250,255,255)", { color: 'white'}, {});
		new GIDGET.Thing(world, "rock", 0, 9, "rgb(0,255,0)", { color: 'green'}, {});
		new GIDGET.Thing(world, "battery", 2, 9, "yellow", {}, 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 100"
				)
			}
		);
		
		return world;
		
	},	
	
	// *******************************************************
	
	navigateWalls: function() {

		var code = 
			"scan rocks\n" +
			"goto rocks, analyze it, if it is white, grab it\n" + // avoid spikes is redundant here
			"scan ship, goto it\n" +
			"drop rocks";
	
		var mission = "There's something blocking my path to the red rock! I need to navigate around it.";
	
			
		var world = new GIDGET.World(10, 10, 3, 5, code, mission);

		world.addGoal("rock on ship is red");

		new GIDGET.Thing(world, "ship", 1, 9, "rgb(0,0,0)", [], {});

		var wall;
		wall = new GIDGET.Thing(world, "wall", 3, 1, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 2, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 3, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 4, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 6, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 7, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 8, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 5, "rgb(200,200,200)", [], {});
		wall.setLevel(2);

		new GIDGET.Thing(world, "rock", 4, 4, "rgb(255,255,255)", [ 'red' ], {});
		
		return world;
	
	},
	// *******************************************************
	
	learnAvoidPassive: function() {

		var code = 
			"scan rocks\n" +
			"scan blackholes\n" +
			"goto rocks, analyze it, if it is red, grab it\n" +
			"scan ship, goto it\n" +
			"drop rocks";
	
		var mission = "There's something blocking my path to the red rock! I need to navigate around it.";
	
			
		var world = new GIDGET.World(10, 10, 5, 5, code, mission);

		world.addGoal("rock on ship is red");

		new GIDGET.Thing(world, "ship", 1, 9, "rgb(0,0,0)", [], {});
		var b1 = new GIDGET.Thing(world, "blackhole", 5, 9, "rgb(200,200,200)", [], {});
		/*
		var b2 = new GIDGET.Thing(world, "blackhole", 1, 8, "rgb(200,200,200)", [], {});
		var b3 = new GIDGET.Thing(world, "blackhole", 2, 8, "rgb(200,200,200)", [], {});
		var b4 = new GIDGET.Thing(world, "blackhole", 2, 9, "rgb(200,200,200)", [], {});
		*/

		
		b1.setCode(
			"scan gidget\n" +
			"analyze gidget\n" +
			"grab rock"
		);
		

		var wall;
		wall = new GIDGET.Thing(world, "wall", 5, 1, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 2, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 3, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 4, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 6, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 7, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 8, "rgb(200,200,200)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 5, "rgb(200,200,200)", [], {});
		wall.setLevel(2);

		new GIDGET.Thing(world, "rock", 6, 4, "rgb(255,255,255)", [ 'red' ], {});
		
		return world;
	
	},
		// *******************************************************
	
	// *******************************************************
	
	learnAvoidActive: function() {

		var code = 
			"scan rocks\n" +
			"scan rats\n" +
			"goto rocks avoid rat, grab it\n";
	
		var mission = "There's something after me! I have to collect all the rocks and make sure it doesn't grab me first!";
	
		var world = new GIDGET.World(10, 10, 0, 0, code, mission);
		world.gidget.setEnergy(103);
		
		world.addGoal("grabbed three rocks");
		
		new GIDGET.Thing(world, "rock", 6, 6, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 6, 9, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 1, 9, "rgb(250,0,0)", [], {});
		var rat = new GIDGET.Thing(world, "rat", 8, 8, "#ccc", [], {});
		
		rat.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 0"
		);
		
		rat.setSpeed(3);
		
		return world;
		
	},


	// *******************************************************
	// *********** O L D - L E V E L S ***********************
	// *******************************************************
	
	returnToShip: function() {

		var code = 
			"scan ship\n" +
			"goto ship";
	
		var mission = "I have to figure out how to get back to my ship. Something is wrong and I can't seem to get it right.";
	
		var world = new GIDGET.World(10, 10, 2, 8, code, mission);
		
		world.addGoal("gidget on ship");
		
		new GIDGET.Thing(world, "ship", 8, 8, "brown", [], {});

		return world;
	
	},
	
	// *******************************************************

	analyzeDiamond: function() {

		var code = 
			"scan diamond\n" +
			"goto diamond\n" +
			"analyze diamond\n";
	
	
		var mission = "There have been reports of fake gems in the area. I have to make sure that anything I find is genuine... if only I could remember how to do it!";

		var world = new GIDGET.World(10, 10, 1, 1, code, mission);
		
		world.addGoal("analyzed diamond");

		new GIDGET.Thing(world, "diamond", 2, 2, "rgb(0,0,0)", [], {});
		
		return world;
	
	},
	
	// *******************************************************

	beTired: function() {

		var code = 
			"scan ship\n" +
			"goto ship\n";
	

		var world = new GIDGET.World(10, 10, 1, 1, code);
		world.gidget.setEnergy(30);
		
		world.addGoal("gidget on ship");
		
		new GIDGET.Thing(world, "ship", 8, 8, 1, "rgb(0,0,0)", [], {});
		
		return world;
	
	},
	
	// *******************************************************
	
	getRedRock: function() {

		var code = 
			"scan blackholes\n" +
			"scan rocks\n" +
			"goto rocks, analyze it, if it is red, grab it\n" +
			"goto blackhole\n" +
			"drop rock\n" +
			"scan ship, goto it";
	
		var mission = "One of these rocks is glowing red and could be dangerous! I'm supposed to bring it back to the ship for analysis. I can't seem to figure out how to get it there.";
		
	
		var world = new GIDGET.World(10, 10, 2, 8, code, mission);
		world.gidget.setEnergy(1000);
		
		world.addGoal("rock on blackhole is red");
		world.addGoal("gidget on ship");

		new GIDGET.Thing(world, "ship", 2, 8, 1, "rgb(100,100,100)", [], {});
		new GIDGET.Thing(world, "blackhole", 2, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 5, 7, "rgb(250,0,0)", [ 'red' ], {});
		new GIDGET.Thing(world, "rock", 8, 2, "rgb(200,200,200)", [ 'gray' ], {});
		
		return world;
	
	},
	
	// *******************************************************
		
	getWhiteRock: function() {

		var code = 
			"scan rocks\n" +
			"goto rocks, analyze it, if it is white, grab it\n" +
			"scan ship, goto it\n" +
			"drop rocks";
	
			
		var world = new GIDGET.World(10, 10, 2, 8, code);
		world.gidget.setEnergy(200);
		
		world.addGoal("rocks on ship are white");

		new GIDGET.Thing(world, "ship", 2, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 5, 7, "rgb(250,0,0)", [ 'red' ], {});
		new GIDGET.Thing(world, "rock", 8, 2, "rgb(200,200,200)", [ 'gray' ], {});
		new GIDGET.Thing(world, "rock", 4, 4, "rgb(255,255,255)", [ 'white' ], {});
		
		return world;
	
	},
	
	
	// *******************************************************

	avoidSpikes: function() {

		var code = 
			"scan rocks\n" +
			"scan spikes\n" +
			"goto rocks avoid spikes, analyze it, if it is white, grab it\n" + // avoid spikes is redundant here
			"scan ship, goto it\n" +
			"drop rocks";
	
		
			
		var world = new GIDGET.World(10, 10, 2, 8, code);

		world.addGoal("rock on ship is white");

		new GIDGET.Thing(world, "ship", 2, 2, "rgb(0,0,0)", [], {});

		var spike;
		spike = new GIDGET.Thing(world, "spike", 3, 1, "rgb(200,200,200)", [], {});
		spike.setLevel(2);
		spike = new GIDGET.Thing(world, "spike", 3, 2, "rgb(200,200,200)", [], {});
		spike.setLevel(2);
		spike = new GIDGET.Thing(world, "spike", 3, 3, "rgb(200,200,200)", [], {});
		spike.setLevel(2);
		spike = new GIDGET.Thing(world, "spike", 3, 4, "rgb(200,200,200)", [], {});
		spike.setLevel(2);
		spike = new GIDGET.Thing(world, "spike", 3, 6, "rgb(200,200,200)", [], {});
		spike.setLevel(2);
		spike = new GIDGET.Thing(world, "spike", 3, 7, "rgb(200,200,200)", [], {});
		spike.setLevel(2);
		spike = new GIDGET.Thing(world, "spike", 3, 8, "rgb(200,200,200)", [], {});
		spike.setLevel(2);
		spike = new GIDGET.Thing(world, "spike", 4, 5, "rgb(200,200,200)", [], {});
		spike.setLevel(2);

		new GIDGET.Thing(world, "rock", 4, 4, "rgb(255,255,255)", [ 'white' ], {});
		
		return world;
	
	},

	// *******************************************************

	maze: function() {

		var code = "scan rock\n" +
				   "goto banana, grab rock";
			
			
		var world = new GIDGET.World(10, 10, 0, 0, code);
		world.gidget.setEnergy(1000);
		
		world.addGoal("gidget on rock");


		new GIDGET.Thing(world, "rock", 2, 7, "rgb(251,231,128)", [], {});
/*
		..........
		..xxx.xxx.
		..x...x.x.
		..x.x.x.x.
		..x.x.x.x.
		.xxxx...xx
		.x....xx.
		.........
		.........
		.........
*/
		var wall;

		//wall = new GIDGET.Thing(world, "wall", 0, 9, "rgb(50,50,50)", [], {});
		//wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 1, 2, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 3, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 4, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 6, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 7, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 8, "rgb(50,50,50)", [], {});
		wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 2, 2, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 6, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 8, "rgb(50,50,50)", [], {});
		wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 3, 2, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 4, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 6, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 8, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 4, 2, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 4, "rgb(50,50,50)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 6, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 8, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 5, 1, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 2, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 3, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 4, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 8, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 9, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 6, 1, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 6, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 7, "rgb(50,50,50)", [], {});		
		wall.setLevel(2);

		return world;
	
	},
	
	// *******************************************************
	
	superMaze: function() {

		var code = "scan rock\n" +
				   "goto rock, grab rock";
			

		var world = new GIDGET.World(10, 10, 0, 0, code);
		world.gidget.setEnergy(135);

		world.addGoal("rock on gidget");

		new GIDGET.Thing(world, "rock", 9, 9, "rgb(251,231,128)", [], {});

		var wall;


		wall = new GIDGET.Thing(world, "wall", 0, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 1, "rgb(0,0,0)", [], {});
		wall.setLevel(2);


		wall = new GIDGET.Thing(world, "wall", 1, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 9, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);


		wall = new GIDGET.Thing(world, "wall", 0, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 2, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);

		
		wall = new GIDGET.Thing(world, "wall", 1, 8, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 9, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 8, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 9, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 9, 8, "rgb(0,0,0)", [], {});
		wall.setLevel(2);

		return world;
	
	},
	
	// *******************************************************

	carToShip: function() {

		var code = 
			"scan car\n" +
			"scan ship\n" +
			"goto car, analyze it, if it isn't working, name it broken\n" +
			"goto car\n" +
			"ask car to drive gidget ship"
		;
	

		var world = new GIDGET.World(10, 10, 1, 1, code);
		world.gidget.setEnergy(200);

		world.addGoal("gidget on ship");
		world.addGoal("car on ship");
	
		new GIDGET.Thing(world, "car", 3, 3, "yellow", [ 'working' ], 
			{ 
			drive : new GIDGET.Action([ "passenger", "destination" ],
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

		new GIDGET.Thing(world, "car", 5, 5, "yellow", [], {});

		new GIDGET.Thing(world, "ship", 8, 8, "brown", [], {});
		
		return world;
	
	},
	
	// *******************************************************
	
	sequenceWalls: function() {

		var code = 
			"scan ship\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	
			"scan rocks\n" +
			"goto rocks, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +
			"goto ship\n" +
			"drop rocks";
	

		var world = new GIDGET.World(10, 10, 2, 8, code);
		world.gidget.setEnergy(1000);

		world.addGoal("rock on ship");

		new GIDGET.Thing(world, "ship", 2, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 9, 5, "gray", [], {});
		new GIDGET.Thing(world, "button", 5, 8, "red", [], 			// Buttons should not be GRABable
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
		
		wall = new GIDGET.Thing(world, "wall1", 3, 0, "rgb(255,255,255)", [], {}); 
		wall = new GIDGET.Thing(world, "wall1", 3, 1, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 2, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 3, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 4, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 5, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 6, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 7, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 8, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 9, "rgb(255,255,255)", [], {});

		wall = new GIDGET.Thing(world, "wall2", 8, 0, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 1, "rgb(255,255,255)", [], {}); 
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 2, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 3, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 4, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 5, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 6, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 7, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 8, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 9, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		
		return world;
	
	},
	
	// *******************************************************
	
	avoidGulls: function() {

		var code = 
			"scan rocks\n" +
			"scan gulls\n" +
			"goto rocks avoid gull, grab it\n";
	
		var world = new GIDGET.World(10, 10, 0, 0, code);
		world.gidget.setEnergy(103);
		
		world.addGoal("grabbed three rocks");
		
		new GIDGET.Thing(world, "rock", 6, 6, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 6, 9, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 1, 9, "rgb(250,0,0)", [], {});
		var gull = new GIDGET.Thing(world, "gull", 8, 8, "yellow", [], {});
		
		gull.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 0"
		);
		
		gull.setSpeed(3);
		
		return world;
		
	},

	// *******************************************************

	avoidFastGulls: function() {

		var code = 
			"scan rocks\n" +
			"scan gulls\n" +
			"goto rocks avoid gull, grab it\n";
	
		var world = new GIDGET.World(10, 10, 0, 0, code);

		world.addGoal("grabbed three rocks");

		new GIDGET.Thing(world, "rock", 9, 0, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 9, 9, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 0, 9, "rgb(250,0,0)", [], {});

		var gull = new GIDGET.Thing(world, "gull", 8, 8, "yellow", [], {});
		
		gull.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 0"
		);
		
		gull.setSpeed(1.5);
		
		return world;
		
	},
	
	// *******************************************************
	
	getTwoRocksGulls: function() { 

		var code = 
			"scan rocks\n" +
			"scan gulls\n" +
			"goto rocks avoid gull, grab it\n";
	
		var world = new GIDGET.World(10, 10, 5, 4, code);
		world.gidget.setEnergy(140);

		world.addGoal("grabbed two rocks");

		new GIDGET.Thing(world, "rock", 9, 1, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 1, 9, "rgb(250,0,0)", [], {});
		var gull = new GIDGET.Thing(world, "gull", 8, 8, "yellow", [], {});
		
		wall = new GIDGET.Thing(world, "wall", 0, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 7, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		
		wall = new GIDGET.Thing(world, "wall", 1, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);


		wall = new GIDGET.Thing(world, "wall", 1, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		
		gull.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 0"
		);
		
		gull.setSpeed(3);
		
		return world;
		
	},
	
	// *******************************************************

	getTwoRocksGull_Bug: function() {

		var code = 
			"scan rocks\n" +
			"scan gulls\n" +
			"goto rocks avoid gull, grab it\n";
	
		var world = new GIDGET.World(10, 10, 0, 0, code);

		world.addGoal("grabbed two rocks");

		new GIDGET.Thing(world, "rock", 6, 6, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 1, 9, "rgb(250,0,0)", [], {});
		var gull = new GIDGET.Thing(world, "gull", 8, 8, "yellow", [], {});
		
		
		wall = new GIDGET.Thing(world, "wall", 1, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 9, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);


		wall = new GIDGET.Thing(world, "wall", 0, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		
		gull.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 0"
		);
		
		gull.setSpeed(3);
		
		return world;
		
	},
	
	// *******************************************************

	getTwoRocksGull2_Bug: function() {

		var code = 
			"scan rocks\n" +
			"scan gulls\n" +
			"goto rocks avoid gull, grab it\n";
	
		var world = new GIDGET.World(10, 10, 5, 4, code);

		world.addGoal("grabbed two rocks");

		new GIDGET.Thing(world, "rock", 1, 9, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 6, 6, "rgb(250,0,0)", [], {});
		
		var gull = new GIDGET.Thing(world, "gull", 8, 8, "yellow", [], {});
		
		
		wall = new GIDGET.Thing(world, "wall", 1, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 3, "rgb(0,0,0)", [], {});
		wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 1, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 5, "rgb(0,0,0)", [], {});
		wall.setLevel(2);
		
		gull.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 0"
		);
		
		gull.setSpeed(3);
		
		return world;
		
	},

	// *******************************************************
	
	blender: function() {

		var code = 
			"scan rocks\n" +
			"scan blender\n" +
			"goto rock, analyze it, if it is white, grab it\n" +
			"goto blender, analyze it\n" +
			"ask blender to combine first rock second rock\n" +
			"analyze diamond, grab it\n" +
			"scan ship, goto it"; 
	

		var world = new GIDGET.World(10, 10, 2, 8, code);
		world.gidget.setEnergy(1000);
		
		world.addGoal("grabbed diamond");
		world.addGoal("gidget on ship");
		
		new GIDGET.Thing(world, "ship", 1, 1, "rgb(250,255,255)", [], {});
		new GIDGET.Thing(world, "rock", 2, 2, "rgb(250,255,255)", [ 'white'], {});
		new GIDGET.Thing(world, "rock", 9, 5, "rgb(250,255,255)", [ 'white'], {});
		new GIDGET.Thing(world, "rock", 4, 7, "rgb(250,0,0)", [ 'red'], {});
		new GIDGET.Thing(world, "blender", 8, 8, "yellow", {}, 
			{ 
			combine : new GIDGET.Action([ "item1" , "item2" ], 
				"if item1 is white and item2 is white, remove item1, remove item2, add diamond"		
				)
			}
		);
		
		return world;
		
	},
	
	// *******************************************************
		
	energize: function() {

		var code = 
			"scan rocks\n" +
			"scan ship\n" +
			"scan battery\n" +
			"goto rocks, grab it\n" +
			"goto battery, analyze it\n" +
			"ask battery to energize gidget\n" +
			"goto ship\n" +
			"drop";
	

		var world = new GIDGET.World(10, 10, 2, 8, code);	
		world.gidget.setEnergy(106);

		world.addGoal("two rocks on ship");

		new GIDGET.Thing(world, "ship", 9, 9, "rgb(250,0,255)", {}, {});
		new GIDGET.Thing(world, "rock", 1, 1, "rgb(250,255,255)", { color: 'white'}, {});
		new GIDGET.Thing(world, "rock", 0, 9, "rgb(0,255,0)", { color: 'green'}, {});
		new GIDGET.Thing(world, "battery", 5, 5, "yellow", {}, 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 100"	// recharged to full capacity!
				)
			}
		);
		
		return world;
		
	},	
	
	// *******************************************************
	
	releaseGulls_Bug: function() { 

		var code = 
			"scan ship\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	
			"scan rocks\n" +
			"goto rocks, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +	
			"goto ship\n" +
			"drop rocks";
	
		var mission = "Oh no! It seems like there are phantom gulls that can go through walls to get me! I'm so scared!";
	

		var world = new GIDGET.World(10, 10, 0, 1, code, mission);
		world.gidget.setEnergy(1000);

		world.addGoal("rock on ship");
		
		var gull = new GIDGET.Thing(world, "gull", 0, 9, "yellow", [], {});
		var gull2 = new GIDGET.Thing(world, "gull", 9, 0, "yellow", [], {});
		
		new GIDGET.Thing(world, "ship", 2, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 9, 1, "gray", [], {});
		new GIDGET.Thing(world, "button", 5, 8, "red", [], 			// Buttons should not be GRABable
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
		
		wall = new GIDGET.Thing(world, "wall2", 0, 7, "rgb(255,255,255)", [], {}); 
		wall.setLevel(2);
		/*wall = new GIDGET.Thing(world, "wall2", 1, 7, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 2, 7, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 2, 8, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 2, 9, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		
		wall = new GIDGET.Thing(world, "wall2", 7, 0, "rgb(255,255,255)", [], {}); 
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 7, 1, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 7, 2, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 8, 2, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall2", 9, 2, "rgb(255,255,255)", [], {});
		wall.setLevel(2);
		
		
		wall = new GIDGET.Thing(world, "wall1", 1, 1, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 1, 2, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 1, 3, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 2, 3, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 2, 1, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 1, "rgb(255,255,255)", [], {});
		wall = new GIDGET.Thing(world, "wall1", 3, 2, "rgb(255,255,255)", [], {});
		*/wall = new GIDGET.Thing(world, "wall1", 3, 3, "rgb(255,255,255)", [], {});
		

		
		gull.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 25"
		);
		
		gull.setSpeed(3);
		
		gull2.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 25"
		);
		
		gull2.setSpeed(5);
		
		return world;
	
	},

// *******************************************************
	
	stripe: function() {
	
		var code = 
			"scan ship\n" +
			"scan rocks\n" +
			"goto rocks, grab it\n" +
			"goto ship\n" +
			"drop rocks";
		
		var world = new GIDGET.World(10, 10, 1, 0, code);
		world.gidget.setEnergy(250);
		
		world.addGoal("rock on ship");

		new GIDGET.Thing(world, "ship", 7, 0, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 0, 7, "gray", [], {});
		
		var wall;
		
		wall = new GIDGET.Thing(world, "wall", 0, 0, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 2, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 7, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 4, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 2, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 9, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		
		wall = new GIDGET.Thing(world, "wall", 6, 0, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 2, "rgb(255,255,255)", [], {}); wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 9, 0, "rgb(255,255,255)", [], {}); wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 1, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 7, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 9, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		
		wall = new GIDGET.Thing(world, "wall", 0, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 7, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 0, 9, "rgb(255,255,255)", [], {}); wall.setLevel(2);


		return world;
	
	},


	// *******************************************************
		
	fillHoles: function() {

		var code = 
			"scan rocks\n" +
			"scan ship\n" +
			"scan blackholes\n" +
			"goto rocks, grab it\n" +
			"goto blackholes, drop rock\n" +
			"goto ship";
	
		
		var world = new GIDGET.World(10, 10, 2, 8, code);
		world.gidget.setEnergy(155);

		world.addGoal("rock on blackhole");

		new GIDGET.Thing(world, "blackhole", 0, 0, "rgb(0,0,0)", { }, {});
		new GIDGET.Thing(world, "blackhole", 9, 9, "rgb(0,0,0)", { }, {});
		new GIDGET.Thing(world, "ship", 9, 9, "rgb(250,0,255)", {}, {});
		new GIDGET.Thing(world, "rock", 1, 1, "rgb(250,255,255)", {}, {});
		new GIDGET.Thing(world, "rock", 0, 9, "rgb(0,255,0)", {}, {});



		
		return world;
		
	},	
	
	// *******************************************************
		
	pacMan: function() {

		var code = 
			"scan rocks\n" +
			"scan gulls\n" +
			"scan diamond\n" +
			"goto rocks avoid gull, grab it\n" +
			"goto diamond, grab it\n" +
			"scan ship, goto it";
	
		var world = new GIDGET.World(10, 10, 7, 4, code);
		world.gidget.setEnergy(500);

		world.addGoal("grabbed three rocks");
		world.addGoal("diamond on gidget");
		world.addGoal("gidget on ship");

		var gull = new GIDGET.Thing(world, "gull", 1, 4, "yellow", [], {});

		new GIDGET.Thing(world, "rock", 0, 0, "gray", [], {});
		new GIDGET.Thing(world, "rock", 9, 0, "gray", [], {});
		new GIDGET.Thing(world, "rock", 0, 9, "gray", [], {});
		new GIDGET.Thing(world, "ship", 9, 9, "gray", [], {});
		new GIDGET.Thing(world, "diamond", 5, 5, "rgb(255,0,0)", [], {});

		var wall;

		wall = new GIDGET.Thing(world, "wall", 1, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 1, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);

		wall = new GIDGET.Thing(world, "wall", 4, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		
		wall = new GIDGET.Thing(world, "wall", 6, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		
		wall = new GIDGET.Thing(world, "wall", 8, 3, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 4, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 5, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 6, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		
		wall = new GIDGET.Thing(world, "wall", 1, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 1, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		
		wall = new GIDGET.Thing(world, "wall", 1, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 2, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 3, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 4, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 5, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 6, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 7, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		wall = new GIDGET.Thing(world, "wall", 8, 8, "rgb(255,255,255)", [], {}); wall.setLevel(2);
		
		gull.setCode(
			"scan gidget\n" +
			"goto gidget\n" +
			"set gidget energy 0"
		);
		gull.setSpeed(3);
		
		
		return world;
		
	},	
	
};