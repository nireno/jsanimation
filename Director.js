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
    this.boxes = new Array();
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
    this.camera = new Camera(this.boxes, 0, 0, 0, this.canvas.width, this.canvas.height, 10, 0);
    this.addBox(this.camera);
    
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
        // first update all the game boxes
        for (x in that.boxes)
        {
            if (that.boxes[x].update)
            {
                that.boxes[x].update(dt);
            }
        }
        that.lastUpdateTime = new Date().getTime();

        // clear the drawing contexts
        that.backBufferContext2D.clearRect(0, 0, that.backBuffer.width, that.backBuffer.height);
        that.context2D.clearRect(0, 0, that.canvas.width, that.canvas.height);
        
        // then draw the game objects
        that.camera.draw(that.backBufferContext2D);

        // copy the back buffer to the displayed canvas
        that.context2D.drawImage(that.backBuffer, 0, 0);
    };

    /**
        Adds a new box to the boxes collection
        @param box The object to add
    */
    this.addBox = function(box)
    {
    	if(box instanceof Box)
		{
	        that.boxes.push(box);
	        that.boxes.sort(function(a,b){return a.box.z - b.box.z;});
		}
    	else throw new TypeError('Instance of Box was expected');
    };

    /**
        Removes an box from the boxes collection
        @param box The object to remove
    */
    this.removeBox = function(box)
    {
    	if(box instanceof Box)
	        that.boxes.removeObject(box);
    	else throw new TypeError('Instance of Box was expected');
    };
}
