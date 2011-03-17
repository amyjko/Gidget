GIDGET.createIntroduction = function() {

	var intro = new SCENES.Movie();

	var bgMain			 	= new SCENES.Sprite("media/scene/bg01.png", 480, 480);
	var bgMain2			 	= new SCENES.Sprite("media/scene/bg02.png", 480, 480);
	var bgMain3			 	= new SCENES.Sprite("media/scene/bg03.png", 480, 480);
	var bgSky			 	= new SCENES.Sprite("media/scene/sky.png", 480, 480);
	var ground			 	= new SCENES.Sprite("media/scene/ground.png", 480, 480);
	
	var boom			 	= new SCENES.Sprite("media/scene/boom.png", 455, 366);
	
	var gidgetSad	 		= new SCENES.Sprite("media/scene/gidget.sad.png",  25, 25);
	var gidgetConfidentSmall= new SCENES.Sprite("media/scene/gidget.confident.png",  25, 25);
	var gidgetControl		= new SCENES.Sprite("media/scene/gidget.control.png",  150, 150);
	var gidgetControlSmall  = new SCENES.Sprite("media/scene/gidget.control.png",  25, 25);
	var gidgetConfident		= new SCENES.Sprite("media/scene/gidget.confident.png",  150, 150);
	var gidgetSurprised		= new SCENES.Sprite("media/scene/gidget.surprised.png",  150, 150);
	var gidgetSurprisedSmall= new SCENES.Sprite("media/scene/gidget.surprised.png",  25, 25);
	var gidgetSmashExp		= new SCENES.Sprite("media/scene/gidget.smashExp.png",  255, 150);
	var rock				= new SCENES.Sprite("media/scene/rock.png",  255, 150);
	var heliEastbound	 	= new SCENES.Sprite("media/scene/heli-eastbound.png",  93, 36);
	var heliWestbound	 	= new SCENES.Sprite("media/scene/heli-westbound.png",  139, 55);
	var heliWestboundE	 	= new SCENES.Sprite("media/scene/heli-westboundExp.png",  139, 55);
	var heliWestboundC	 	= new SCENES.Sprite("media/scene/heli-westboundControl.png",  139, 55);


	var goop	= new SCENES.Sprite("media/scene/goop.default.png",  25, 25);
	var cat		= new SCENES.Sprite("media/scene/cat.default.png",  25, 25);
	var kitten	= new SCENES.Sprite("media/scene/kitten.default.png",  25, 25);
	var dog		= new SCENES.Sprite("media/scene/dog.default.png",  25, 25);
	var puppy	= new SCENES.Sprite("media/scene/puppy.default.png",  25, 25);
	var bird	= new SCENES.Sprite("media/scene/bird.default.png",  25, 25);
	var piglet	= new SCENES.Sprite("media/scene/piglet.default.png",  25, 25);
	
	

	var scene1 = new SCENES.Scene(100000);
	
	scene1.addSprite(bgMain, [0,7000], [0, 0]);
	scene1.addSprite(boom, [6000,8000], [10, 0]);
	scene1.addSprite(bgMain2, [7000,11500], [0, 0]);
	scene1.addSprite(bgMain3, [11500,16000], [0, 0]);
	scene1.addSprite(heliWestboundE, [9000, 10000],  [400, 300]);
	scene1.addSprite(heliWestboundE, [10000, 11000], [300, 300]);
	scene1.addSprite(heliWestboundE, [11000, 12000], [200, 300]);
	scene1.addSprite(heliWestboundE, [12000, 13000], [100, 300]);
	scene1.addSprite(heliWestbound, [13000, 15000], [100, 300]);
	scene1.addSprite(heliWestbound, [15000, 16000], [0, 300]);
	scene1.addSprite(gidgetConfidentSmall, [13000, 13500], [155, 330]);
	scene1.addSprite(gidgetConfidentSmall, [13500, 14000], [157, 340]);
	scene1.addSprite(gidgetSurprisedSmall, [14000, 14500], [160, 350]);
	scene1.addSprite(gidgetSurprisedSmall, [14500, 15000], [160, 360]);
	scene1.addSprite(gidgetSurprisedSmall, [15000, 15500], [160, 365]);
	scene1.addSprite(gidgetSurprisedSmall, [15500, 16000], [160, 365]);
	
	scene1.addSprite(bgSky, [16000,21000], [0, 0]);
	scene1.addSprite(gidgetSurprised, [16000, 16500], [150, 0]);
	scene1.addSprite(gidgetSurprised, [16500, 17000], [150, 75]);
	scene1.addSprite(gidgetSurprised, [17000, 17500], [150, 150]);
	scene1.addSprite(gidgetSurprised, [17500, 18000], [150, 225]);
	scene1.addSprite(gidgetSurprised, [18000, 18500], [150, 300]);
	scene1.addSprite(gidgetSurprised, [18500, 19000], [150, 375]);
	scene1.addSprite(gidgetSurprised, [19000, 19500], [150, 450]);

	scene1.addSprite(ground, [19500, 30000], [0, 0]);
	scene1.addSprite(rock, [19500, 30000], [65, 300]);
	scene1.addSprite(gidgetSurprised, [19500, 20000], [150, 0]);
	scene1.addSprite(gidgetSurprised, [20000, 20500], [150, 75]);
	scene1.addSprite(gidgetSurprised, [20500, 21000], [150, 150]);
	scene1.addSprite(gidgetSurprised, [21000, 21500], [150, 225]);
	scene1.addSprite(gidgetSurprised, [21500, 22000], [150, 300]);
	scene1.addSound("energyDown", 22000);
	scene1.addSprite(gidgetSmashExp, [22000, 30000], [65, 300]);
	intro.addScene(scene1);

	return intro;

};


	/*
	
	var bg = new SCENES.Sprite("media/scene/bg.png", 20, 20, 640, 480);
	var gidget = new SCENES.Sprite("media/gidget.sad.png", 20, 20, 200, 200);
	var gidget2 = new SCENES.Sprite("media/gidget.default.png", 320, 250, 100, 100);

	var scene1 = new SCENES.Scene(3000);

	scene1.addSprite(bg, 0,3000);
	scene1.addSprite(gidget, 500, 1500);
	scene1.addSprite(gidget2, 2000, 2500);
	

	intro.addScene(scene1);
	
	var frame01 = new SCENES.Sprite("media/scene/frame01.png", 0, 0, 640, 480);
	var frame02 = new SCENES.Sprite("media/scene/frame02.png", 0, 0, 640, 480);
	
	scene1.addSprite(frame01, 0,1000);
	scene1.addSprite(frame02, 1000, 2000);

	scene1.addSprite(frame08, 7000, 8000);
	scene1.addSprite(frame09, 8000, 9000);
	scene1.addSprite(frame10, 9000, 10000);
	
	scene1.addSprite(frame11, 10000, 11000);
	scene1.addSound("error", 10000);
	scene1.addSprite(frame12, 11000, 12000);
	scene1.addSprite(frame13, 12000, 13000);

	scene1.addSprite(frame36, 35000, 36000);
	*/