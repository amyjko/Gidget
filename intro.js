GIDGET.createIntroduction = function() {

	var intro = new SCENES.Movie();

	/*var bg = new SCENES.Sprite("media/scene/bg.png", 20, 20, 640, 480);
	var gidget = new SCENES.Sprite("media/gidget.sad.png", 20, 20, 200, 200);
	var gidget2 = new SCENES.Sprite("media/gidget.default.png", 320, 250, 100, 100);

	var scene1 = new SCENES.Scene(3000);

	scene1.addSprite(bg, 0,3000);
	scene1.addSprite(gidget, 500, 1500);
	scene1.addSprite(gidget2, 2000, 2500);
	

	intro.addScene(scene1);
	*/

	var frame01 = new SCENES.Sprite("media/scene/frame01.png", 0, 0, 640, 480);
	var frame02 = new SCENES.Sprite("media/scene/frame02.png", 0, 0, 640, 480);
	var frame03 = new SCENES.Sprite("media/scene/frame03.png", 0, 0, 640, 480);
	var frame04 = new SCENES.Sprite("media/scene/frame04.png", 0, 0, 640, 480);
	var frame05 = new SCENES.Sprite("media/scene/frame05.png", 0, 0, 640, 480);
	var frame06 = new SCENES.Sprite("media/scene/frame06.png", 0, 0, 640, 480);
	var frame07 = new SCENES.Sprite("media/scene/frame07.png", 0, 0, 640, 480);
	var frame08 = new SCENES.Sprite("media/scene/frame08.png", 0, 0, 640, 480);
	var frame09 = new SCENES.Sprite("media/scene/frame09.png", 0, 0, 640, 480);
	var frame10 = new SCENES.Sprite("media/scene/frame10.png", 0, 0, 640, 480);
	
	var frame11 = new SCENES.Sprite("media/scene/frame11.png", 0, 0, 640, 480);
	var frame12 = new SCENES.Sprite("media/scene/frame12.png", 0, 0, 640, 480);
	var frame13 = new SCENES.Sprite("media/scene/frame13.png", 0, 0, 640, 480);
	var frame14 = new SCENES.Sprite("media/scene/frame14.png", 0, 0, 640, 480);
	var frame15 = new SCENES.Sprite("media/scene/frame15.png", 0, 0, 640, 480);
	var frame16 = new SCENES.Sprite("media/scene/frame16.png", 0, 0, 640, 480);
	var frame17 = new SCENES.Sprite("media/scene/frame17.png", 0, 0, 640, 480);
	var frame18 = new SCENES.Sprite("media/scene/frame18.png", 0, 0, 640, 480);
	var frame19 = new SCENES.Sprite("media/scene/frame19.png", 0, 0, 640, 480);
	var frame20 = new SCENES.Sprite("media/scene/frame20.png", 0, 0, 640, 480);
	
	var frame21 = new SCENES.Sprite("media/scene/frame20b.png", 0, 0, 640, 480);
	var frame22 = new SCENES.Sprite("media/scene/frame20c.png", 0, 0, 640, 480);
	var frame23 = new SCENES.Sprite("media/scene/frame20d.png", 0, 0, 640, 480);
	var frame24 = new SCENES.Sprite("media/scene/frame21.png", 0, 0, 640, 480);
	var frame25 = new SCENES.Sprite("media/scene/frame22.png", 0, 0, 640, 480);
	var frame26 = new SCENES.Sprite("media/scene/frame23.png", 0, 0, 640, 480);
	var frame27 = new SCENES.Sprite("media/scene/frame24.png", 0, 0, 640, 480);
	var frame28 = new SCENES.Sprite("media/scene/frame25.png", 0, 0, 640, 480);
	var frame29 = new SCENES.Sprite("media/scene/frame26.png", 0, 0, 640, 480);
	var frame30 = new SCENES.Sprite("media/scene/frame27.png", 0, 0, 640, 480);
	
	var frame31 = new SCENES.Sprite("media/scene/frame28.png", 0, 0, 640, 480);
	var frame32 = new SCENES.Sprite("media/scene/frame29.png", 0, 0, 640, 480);
	var frame33 = new SCENES.Sprite("media/scene/frame30.png", 0, 0, 640, 480);
	var frame34 = new SCENES.Sprite("media/scene/frame31.png", 0, 0, 640, 480);
	var frame35 = new SCENES.Sprite("media/scene/frame32.png", 0, 0, 640, 480);
	var frame36 = new SCENES.Sprite("media/scene/frame33.png", 0, 0, 640, 480);

	var scene1 = new SCENES.Scene(36000);

	scene1.addSprite(frame01, 0,1000);
	scene1.addSprite(frame02, 1000, 2000);
	scene1.addSprite(frame03, 2000, 3000);
	scene1.addSprite(frame04, 3000, 4000);
	scene1.addSprite(frame05, 4000, 5000);
	scene1.addSprite(frame06, 5000, 6000);
	scene1.addSprite(frame07, 6000, 7000);
	scene1.addSprite(frame08, 7000, 8000);
	scene1.addSprite(frame09, 8000, 9000);
	scene1.addSprite(frame10, 9000, 10000);
	
	scene1.addSprite(frame11, 10000, 11000);
	scene1.addSound("error", 10000);
	scene1.addSprite(frame12, 11000, 12000);
	scene1.addSprite(frame13, 12000, 13000);
	scene1.addSprite(frame14, 13000, 14000);
	scene1.addSprite(frame15, 14000, 15000);
	scene1.addSprite(frame16, 15000, 16000);
	scene1.addSprite(frame17, 16000, 17000);
	scene1.addSprite(frame18, 17000, 18000);
	scene1.addSprite(frame19, 18000, 19000);
	scene1.addSprite(frame20, 19000, 20000);
	
	scene1.addSprite(frame21, 20000, 21000);
	scene1.addSprite(frame22, 21000, 22000);
	scene1.addSprite(frame23, 22000, 23000);
	scene1.addSprite(frame24, 23000, 24000);
	scene1.addSprite(frame25, 24000, 25000);
	scene1.addSprite(frame26, 25000, 26000);
	scene1.addSprite(frame27, 26000, 27000);
	scene1.addSprite(frame28, 27000, 28000);
	scene1.addSprite(frame29, 28000, 29000);
	scene1.addSprite(frame30, 29000, 30000);
	
	scene1.addSprite(frame31, 30000, 31000);
	scene1.addSprite(frame32, 31000, 32000);
	scene1.addSprite(frame33, 32000, 33000);
	scene1.addSprite(frame34, 33000, 34000);
	scene1.addSprite(frame35, 34000, 35000);
	scene1.addSprite(frame36, 35000, 36000);

	intro.addScene(scene1);

	return intro;

};