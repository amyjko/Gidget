GIDGET.createIntroduction = function() {

	var intro = new SCENES.Movie();

	var gidget = new SCENES.Sprite("media/gidget.sad.png", 20, 20, 200, 200);
	var gidget2 = new SCENES.Sprite("media/gidget.default.png", 100, 100, 100, 100);

	var scene1 = new SCENES.Scene(3000);

	scene1.addSprite(gidget, 500, 1500);
	scene1.addSprite(gidget2, 2000, 2500);

	intro.addScene(scene1);

	return intro;

};