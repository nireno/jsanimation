/**
    The base class for all elements that appear in the game.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Actor(/**Image || String*/ img, /**Location*/ loc)
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
	
	this.location = loc;
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
        context.drawImage(this.image, this.location.x - xScroll, this.location.y - yScroll);
	}
	catch(err) { throw err;}
};

/**
 * 
 * @param actor
 * @returns {Boolean}
 */
Actor.prototype.collidedWith = function(actor) {
	var left1 = this.location.x;
	var right1 = left1 + this.image.width;
	var top1 = this.location.y;
	var bottom1 = top1 + this.image.height;
	var left2 = actor.location.x;
	var right2 = left2 + actor.image.width;
	var top2 = actor.location.y;
	var bottom2 = top2 + actor.image.height;
	
	if(bottom1 < top2) return false;
	if(top1 > bottom2) return false;
	if(right1 < left2) return false;
	if(left1 > right2) return false;
	return true;
};