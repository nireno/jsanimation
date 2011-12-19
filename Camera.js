function Camera(location, width, height, actors)
{
	Actor.call(this, new Image(), location);
	this.height = this.image.height = height;
	this.width = this.image.width = width;
	this.actors = actors;
	/*
	 * There was an update function here. Problem is if I subclassed Camera like so:
	 * child.prototype = new Camera(...)
	 * then the update function would create an unused visibleActors Array.
	 */
}

Camera.prototype = new Actor();
Camera.prototype.constructor = Camera;
Camera.prototype.update = function() {
	if(!(this.actors instanceof Array)) throw new TypeError('Instance of Array was expected.');
	this.visibleActors = new Array();
	for(var i = 0; i < this.actors.length; i++) {
		if(!(this.actors[i] instanceof Actor)) throw new TypeError('Instance of Actor was expected.');
		if(this.collidedWith(this.actors[i])) {
			this.visibleActors.push(this.actors[i]);
		}
	}
};
Camera.prototype.draw = function(context) {
	for(var i = 0; i < this.visibleActors.length; i++) {
		if(this.visibleActors[i].draw) {
			this.visibleActors[i].draw(context, 0, 0);
		}
	}
};