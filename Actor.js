/**
    The base class for all elements that appear in the game.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Actor(box, img)
{
	that = this;
	if(box !== undefined) {
		this.box = box;
	}
	if(img !== undefined) {
		this.image = img;
		if(typeof(img) == "string") {
			this.image = new Image();
			this.image.src = img;
		}
		
		//Update the width and height of the actor if it was not user defined.
		this.box.width = this.box.width || this.image.width;
		this.box.height = this.box.height || this.image.height;
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
Actor.prototype.draw = function(context, camera, xScroll, yScroll)
{
	if(this.hasOwnProperty('image')) {
		try {
	        context.drawImage(this.image, this.box.x - camera.box.x - xScroll, this.box.y - camera.box.y - yScroll);
		}
		catch(err) { throw err;}
	}
};

