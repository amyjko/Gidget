var SCENES = {

	imagesRemaining: 0,

	Sprite: function(url, x, y, width, height) {
	
		this.url = url;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	
		SCENES.imagesRemaining++;
		
		this.image = new Image();
		this.image.onload = function () {
			SCENES.imagesRemaining--;
		};
		this.image.src = url;

	},

	Scene: function(length) {
	
		this.length = length;
		
		this.sprites = [];
		
		this.addSprite = function(sprite, begin, end) {
		
			this.sprites.push({ sprite: sprite, begin: begin, end: end });		
		
		};
		
		this.draw = function(canvas, time) {
		
			var ctx = canvas.getContext('2d');
			var i;
			var sprite, begin, end;
	
			ctx.fillStyle = 'rgb(0,0,0)';
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			
			for(i = 0; i < this.sprites.length; i++) {
			
				sprite = this.sprites[i].sprite;
				begin = this.sprites[i].begin;
				end = this.sprites[i].end;
				
				// If this is visible, draw the sprite.
				if(begin < time && time < end) {
	
					if(sprite.width > 0 && sprite.height > 0)
						ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);	
				
				}
			
			}
		
		};
	
	},

	Movie: function() {
	
		this.scenes = [];
		
		this.sceneStartTime = 0;
		this.sceneTimeElapsed = undefined;
		
		this.intervalID = undefined;
		
		this.currentScene = undefined;
		
		this.addScene = function(scene) {
		
			this.scenes.push(scene);
		
		};
		
		this.previousWaiting = undefined;
		
		this.step = function(canvas, whenProgress, whenLoaded, whenDone) {

			if(SCENES.imagesRemaining > 0) {

				this.previousWaiting = true;
				whenProgress.call();			
				return;
			
			}
			
			if(this.previousWaiting === true) {
			
				this.previousWaiting = false;
				whenLoaded.call();
			
			}

			// What scene are we on?
			var scene = this.scenes[this.currentScene];

			// If this scene is over, move to the next scene
			if(this.currentScene === 0 && this.sceneTimeElapsed === undefined) {
			
				this.sceneStartTime = (new Date()).getTime();
				this.sceneTimeElapsed = 0;
			
			}
			
			if(this.sceneTimeElapsed > scene.length) {
			
				this.sceneStartTime = (new Date()).getTime();
				this.sceneTimeElapsed = 0;
				this.currentScene++;
			
			}			

			// Update times
			this.sceneTimeElapsed = (new Date()).getTime() - this.sceneStartTime;
	
			
			// Draw the current scene.
			scene.draw(canvas, this.sceneTimeElapsed);			
		
			// If this movie is over, end the animation
			if(this.currentScene >= this.scenes.length) {
			
				clearInterval(this.intervalID);
				whenDone.call();
			
			}
		
		};
		
		this.play = function(canvas, whenProgress, whenLoaded, whenDone) {
		
			this.sceneTimeElapsed = undefined;
			this.currentScene = 0;
			var thisMovie = this;
			this.intervalID = setInterval(function() { thisMovie.step(canvas, whenProgress, whenLoaded, whenDone); }, 40);
		
		};
	
	}

}