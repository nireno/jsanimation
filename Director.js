/**
    A manager for all the objects in the game
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Director(inputManager)
{
    var FPS = 30;
    var SECONDS_BETWEEN_FRAMES = 1 / FPS;
	var that = this;
	this.inputManager = inputManager;
    /** An array of game objects 
        @type Array
    */
    this.sprites = new Array();
    /** The time that the last frame was rendered  
        @type Date
    */
    this.lastUpdateTime = new Date().getTime();
    
    /** A reference to the ApplicationManager instance  
        @type ApplicationManager
    */
    this.canvas = document.getElementById('canvas');
    /** A reference to the 2D context of the canvas element
        @type CanvasRenderingContext2D
    */
    this.context2D = this.canvas.getContext('2d');
    /** A reference to the in-memory canvas used as a back buffer 
        @type HTMLCanvasElement
    */
    this.camera = new Camera(this.sprites, new Box(0, 0, 0, this.canvas.width, this.canvas.height, 10, 0));
    // Create the backBuffer
    this.backBuffer = document.createElement('canvas');
    this.backBuffer.width = this.canvas.width;
    this.backBuffer.height = this.canvas.height;
    this.backBufferContext2D = this.backBuffer.getContext('2d');

    this.startRendering = function() {
	    // use setInterval to call the draw function 
	    that.gameLoopInterval = setInterval(this.draw, SECONDS_BETWEEN_FRAMES);
    };
    
    this.stopRendering = function() {
    	if (that.hasOwnProperty('gameLoopInterval')) {
	    	clearInterval(that.gameLoopInterval);
	    	delete that.gameLoopInterval;
    	}
    };
    /**
        THE RENDER LOOP
    */
    this.draw = function ()
    {
        // calculate the time since the last frame
        var dt = (new Date().getTime() - that.lastUpdateTime)/1000;
        // first update all the game sprites
        for (x in that.sprites)
        {
            if (that.sprites[x].update)
            {
                that.sprites[x].update(dt);
            }
        }
        that.camera.update(dt);
        that.lastUpdateTime = new Date().getTime();

        // clear the drawing contexts
        that.backBufferContext2D.clearRect(0, 0, that.backBuffer.width, that.backBuffer.height);
        that.context2D.clearRect(0, 0, that.canvas.width, that.canvas.height);
        
        // then draw the game objects
        that.camera.draw(that.backBufferContext2D);

        // copy the back buffer to the displayed canvas
        that.context2D.drawImage(that.backBuffer, 0, 0);
    };

}

Director.prototype.addSprite = function(sprite)
    {
    	if(sprite instanceof Sprite)
		{
	        this.sprites.push(sprite);
	        this.sprites.sort(function(a,b){return a.box.z - b.box.z;});
		}
    	else throw new TypeError('Instance of Sprite was expected');
};

/**
    Removes an sprite from the sprites collection
    @param sprite The object to remove
*/
Director.prototype.removeSprite = function(sprite)
{
	var index = this.sprites.indexOf(sprite);
	if(index != -1) this.sprites.splice(index, 1);
};

