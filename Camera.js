function Camera(box, actors)
{
	this.actors = actors;
	this.box = box;
	/*
	 * There was an update function here. Problem is if I subclassed Camera like so:
	 * child.prototype = new Camera(...)
	 * then the update function would create an unused visibleActors Array.
	 */
}

Camera.prototype.update = function() {
	if(!(this.actors instanceof Array)) throw new TypeError('Instance of Array was expected.');
	this.visibleActors = new Array();
	for(var i = 0; i < this.actors.length; i++) {
		if(!(this.actors[i] instanceof Actor)) throw new TypeError('Instance of Actor was expected.');
		if(this.box.collidedWith(this.actors[i].box)) {
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