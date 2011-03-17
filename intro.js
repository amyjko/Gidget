GIDGET.createIntroduction = function() {

	var intro = new SCENES.Movie();

	var bgMain			 = new SCENES.Sprite("media/scene/bg01.png", 480, 480);
	var gidgetConfident	 = new SCENES.Sprite("media/scene/gidget-confident.png",  25, 25);
	var heliWestbound	 = new SCENES.Sprite("media/scene/heli-westbound.png",  139, 55);


	var scene1 = new SCENES.Scene(10000);
	
	scene1.addSprite(bgMain, [0,10000], [0, 0]);
	scene1.addSprite(heliWestbound, [1000, 2000], [300, 300]);
	scene1.addSprite(heliWestbound, [4000, 5000], [100, 10]);
	scene1.addSprite(gidgetConfident, [2500, 10000], [200, 200]);


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