GIDGET.levels = {

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
		world.addGoal("rock on blackhole is red");
		world.addGoal("gidget on ship");
		
		world.gidget.setEnergy(1000);

		new GIDGET.Thing(world, "ship", 2, 8, 1, "rgb(100,100,100)", [], {});
		new GIDGET.Thing(world, "blackhole", 2, 2, "rgb(0,0,0)", [ 'big' ], {});
		new GIDGET.Thing(world, "rock", 5, 7, "rgb(250,0,0)", [ 'red', 'boring' ], {});
		new GIDGET.Thing(world, "rock", 8, 2, "rgb(200,200,200)", [ 'gray', 'exiting', 'expensive' ], {});
		
		return world;
	
	},

	maze: function() {

		var code = "scan banana, goto it";
	
		var world = new GIDGET.World(10, 10, 0, 0, code);

		world.addGoal("gidget on banana");

		world.gidget.setEnergy(1000);

		new GIDGET.Thing(world, "banana", 2, 7, "rgb(255,255,0)", [], {});
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

		wall = new GIDGET.Thing(world, "wall", 0, 9, "rgb(50,50,50)", [], {});
		wall.setLevel(2);

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

	analyzeDictionary: function() {

		var code = 
			"scan dictionary\n" +
			"goto dictionary\n" +
			"analyze dictionary\n";
	
		var world = new GIDGET.World(10, 10, 1, 1, code);

		world.addGoal("analyzed dictionary");

		new GIDGET.Thing(world, "dictionary", 2, 2, "rgb(0,0,0)", [], {});
		
		return world;
	
	},

	beTired: function() {

		var code = 
			"scan ship\n" +
			"goto ship\n"
		;
	
		var world = new GIDGET.World(10, 10, 1, 1, code);

		world.addGoal("gidget on ship");

		world.gidget.setEnergy(30);

		new GIDGET.Thing(world, "ship", 8, 8, 1, "rgb(0,0,0)", [], {});
		
		return world;
	
	},
	
	mountain: function() {

		var code = 
			"scan car\n" +
			"scan mountain\n" +
			"goto car, analyze it, if it isn't working, name it broken\n" +
			"goto car\n" +
			"ask car to drive gidget mountain"
		;
	
		var world = new GIDGET.World(10, 10, 1, 1, code);
		
		world.addGoal("gidget on mountain");
		
		world.gidget.setEnergy(200);

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

		new GIDGET.Thing(world, "mountain", 8, 8, "brown", [], {});
		
		return world;
	
	},
	
	whereAreYou: function() {

		var code = 
			"scan gidget";
	
		var world = new GIDGET.World(10, 10, 2, 8, code);
		
		world.addGoal("scanned gidget");

		return world;
	
	},

	returnToShip: function() {

		var code = 
			"scan ship\n" +
			"goto ship";
	
		var world = new GIDGET.World(10, 10, 2, 8, code);

		world.addGoal("gidget on ship");
		
		new GIDGET.Thing(world, "ship", 8, 8, "brown", [], {});

		return world;
	
	},
		
	getWhiteRockOntoShip: function() {

		var code = 
			"scan rocks\n" +
			"goto rocks, analyze it, if it is white, grab it\n" +
			"scan ship, goto it\n" +
			"drop rocks";
	
		var world = new GIDGET.World(10, 10, 2, 8, code);
		
		world.addGoal("rocks on ship are white");
		
		world.gidget.setEnergy(200);

		new GIDGET.Thing(world, "ship", 2, 2, "rgb(0,0,0)", [], {});
		new GIDGET.Thing(world, "rock", 5, 7, "rgb(250,0,0)", [ 'red' ], {});
		new GIDGET.Thing(world, "rock", 8, 2, "rgb(200,200,200)", [ 'gray' ], {});
		new GIDGET.Thing(world, "rock", 4, 4, "rgb(255,255,255)", [ 'white' ], {});
		
		return world;
	
	},

	avoidSpikes: function() {

		var code = 
			"scan rocks\n" +
			"scan spikes\n" +
			"goto rocks avoid spike, analyze it, if it is white, grab it\n" +
			"scan ship, goto it\n" +
			"drop rocks";
			
		var world = new GIDGET.World(10, 10, 9, 9, code);

		world.addGoal("rock on ship is white");

		new GIDGET.Thing(world, "ship", 2, 2, "rgb(0,0,0)", [], {});

		var spike;
		spike = new GIDGET.Thing(world, "spike", 3, 1, "rgb(200,200,200)", [], {}); // One hole/path within the spikes to go through
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

		new GIDGET.Thing(world, "rock", 4, 4, "rgb(255,255,255)", [ 'white' ], {});
		
		return world;
	
	},
	
	sequenceWalls: function() {

		var code = 
			"scan ship\n" +
			"scan button\n" +
			"goto button, analyze it\n" +
			"ask button to raise\n" +	// Flips wall heights 0-->1, 1-->0
			// This lowers the wall to the previously unseen rock, but also raises another wall to block path to ship.
			"scan rocks\n" +
			"goto rocks, grab it\n" +
			"goto button\n" +
			"ask button to lower\n" +	// Flips wall heights 0-->1, 1-->0
			"goto ship\n" +
			"drop rocks";
	
		var world = new GIDGET.World(10, 10, 2, 8, code);
		
		world.addGoal("rock on ship");
		
		world.gidget.setEnergy(1000);

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
		wall = new GIDGET.Thing(world, "wall1", 3, 1, "rgb(255,255,255)", [], {});	// gidget CAN walk past and see past these since they are height 0
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
		wall = new GIDGET.Thing(world, "wall2", 8, 1, "rgb(255,255,255)", [], {}); // gidget CANNOT walk past or see past these since they are height 1
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
	
	avoidGulls: function() {

		var code = 
			"scan rocks\n" +
			"scan gulls\n" +
			"goto rocks avoid gull, grab it\n";
	
		var world = new GIDGET.World(10, 10, 0, 0, code);
		
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

	avoidFastGulls: function() {

		var code = 
			"scan rocks\n" +
			"scan gulls\n" +
			"goto rocks avoid gull, grab it\n";
	
		var goal = "grabbed three rocks";
	
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
	
	blender: function() {

		var code = 
			"scan rocks\n" +
			"scan blender\n" +
			"goto rock, analyze it, if it is white, grab it\n" +
			"goto blender, analyze it\n" +
			"ask blender to fuse first rock second rock\n" +
			"analyze diamond, grab it\n" +
			"scan ship, goto it"; // finds new item: diamond
	
		var world = new GIDGET.World(10, 10, 2, 8, code);
		
		world.addGoal("grabbed diamond");
		world.addGoal("gidget on ship");		
		
		world.gidget.setEnergy(1000);

		new GIDGET.Thing(world, "ship", 0, 0, "black", ["white"], {});

		new GIDGET.Thing(world, "rock", 2, 2, "rgb(250,255,255)", ["white"], {});
		new GIDGET.Thing(world, "rock", 9, 5, "rgb(250,255,255)", ["white"], {});
		new GIDGET.Thing(world, "rock", 4, 7, "rgb(250,0,0)", [], {});
		new GIDGET.Thing(world, "blender", 8, 8, "yellow", [], 
			{ 
			"fuse" : new GIDGET.Action([ "item1" , "item2" ],	// needs edit; can blend two items together.
				// There should be a list somwhere that has valid combinations. If invalid pair, nothing happens. If valid pair, remove pair and replace with new item.	
				"if item1 is white and item2 is white, remove item1, remove item2, add diamond"
				)
			}
		);
		
		return world;
		
	},
		
	energize: function() {

		var code = 
			"scan rocks\n" +
			"scan ship\n" +
			"scan battery\n" +
			"goto rocks, grab it\n" +
			"goto battery, analyze it\n" +
			"ask battery to energize gidget\n" +
			"goto ship\n" +
			"drop rocks";
	
		var world = new GIDGET.World(10, 10, 7, 4, code);	// PERHAPS should have lower START ENERGY for Gidget

		world.addGoal("rock on ship");

		world.gidget.setEnergy(100);

		new GIDGET.Thing(world, "ship", 9, 9, "rgb(250,0,255)", {}, {});
		new GIDGET.Thing(world, "rock", 1, 1, "rgb(250,255,255)", { color: 'white'}, {});
		new GIDGET.Thing(world, "battery", 5, 5, "yellow", {}, 
			{ 
			energize : new GIDGET.Action([ "beneficiary" ],
				"raise beneficiary energy 100"	// recharged to full capacity!
				)
			}
		);
		
		return world;
		
	},	

};