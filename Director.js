/**
    A manager for all the objects in the game
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Director()
{
	var that = this;
    /** An array of game objects 
        @type Array
    */
    this.actors = new Array();
    /** The time that the last frame was rendered  
        @type Date
    */
    this.lastUpdateTime = new Date().getTime();
    /** The global scrolling value of the x axis  
        @type Number
    */
    this.xScroll = 0;
    /** The global scrolling value of the y axis  
        @type Number
    */
    this.yScroll = 0;
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
    this.camera = new Camera(new Location(0,0,0), this.canvas.width, this.canvas.height, this.actors);
    this.gameLoopInterval = null;

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
    	if(that.gameLoopInterval !== null){
	    	clearInterval(that.gameLoopInterval);
	    	that.gameLoopInterval = null;
    	}
    };
    /**
        THE RENDER LOOP
    */
    this.draw = function ()
    {
        // calculate the time since the last frame
        var dt = (new Date().getTime() - that.lastUpdateTime)/1000;
        // first update all the game actors
        for (x in that.actors)
        {
            if (that.actors[x].update)
            {
                that.actors[x].update(dt, that.backBufferContext2D, that.xScroll, that.yScroll);
            }
        }
        that.camera.update();
        that.lastUpdateTime = new Date().getTime();

        // clear the drawing contexts
        that.backBufferContext2D.clearRect(0, 0, that.backBuffer.width, that.backBuffer.height);
        that.context2D.clearRect(0, 0, that.canvas.width, that.canvas.height);
        
        // then draw the game objects
        that.camera.draw(that.backBufferContext2D);
//        for (x in that.actors)
//        {
//            if (that.actors[x].draw)
//            {
//                that.actors[x].draw(that.backBufferContext2D, that.xScroll, that.yScroll);
//            }
//        }

        // copy the back buffer to the displayed canvas
        that.context2D.drawImage(that.backBuffer, 0, 0);
    };

    /**
        Adds a new actor to the actors collection
        @param actor The object to add
    */
    this.addActor = function(actor)
    {
    	if(actor instanceof Actor)
		{
	        that.actors.push(actor);
	        that.actors.sort(function(a,b){return a.location.z - b.location.z;});
		}
    	else throw new TypeError('Instance of Actor was expected');
    };

    /**
        Removes an actor from the actors collection
        @param actor The object to remove
    */
    this.removeActor = function(actor)
    {
    	if(actor instanceof Actor)
	        that.actors.removeObject(actor);
    	else throw new TypeError('Instance of Actor was expected');
    };
}
