/**
    The base class for all elements that appear in the game.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Actor(/**Image || String*/ img, box)
{
    /**
        The image that will be displayed by this object
        @type Image
    */
	that = this;
	this.image = img;
	if(typeof(img) == "string") {
		this.image = new Image();
		this.image.src = img;
	}
	
	this.box = box;
	if(this.image instanceof Image) {
		this.box.width = this.image.width;
		this.box.height = this.image.height;
	}
//	if(this.image instanceof Image) {
//		this.height = function(){return that.image.height;}();
//		this.width = function(){return that.image.width;}();
//	}
}

/**
    Draws this element to the back buffer
    @param dt Time in seconds since the last frame
    @param {CanvasRenderingContext2D} context The drawing context
    @param {Number} xScroll
    @param {Number} yScroll
*/
Actor.prototype.draw = function(context, xScroll, yScroll)
{
	try{
        context.drawImage(this.image, this.box.x - xScroll, this.box.y - yScroll);
	}
	catch(err) { throw err;}
};

