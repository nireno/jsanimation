/**
    The base class for all elements that appear in the game.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function VisualActor(/**Image*/ image, /**Number*/ x, /**Number*/ y, /**Number*/ z)
{
	var that = this;
	Actor.call(this, x, y, z);
    /**
        The image that will be displayed by this object
        @type Image
    */
	mydebug.innerHTML += '<br>typeof(image): ' + typeof(image);
	if(!(image instanceof Image)) throw new IllegalArgumentException('Instance of Image was expected');
    this.image = image;

    /**
        Draws this element to the back buffer
        @param dt Time in seconds since the last frame
    */
    this.draw = function(/**Number*/ dt, /**CanvasRenderingContext2D*/ context, /**Number*/ xScroll, /**Number*/ yScroll)
    {
    	try{
	        context.drawImage(that.image, that.x - xScroll, that.y - yScroll);
    	}
    	catch(err) { throw err;}
    };
}

VisualActor.prototype = new Actor;
VisualActor.prototype.constructor = VisualActor;
