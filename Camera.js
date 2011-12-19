function Camera(location, actors, width, height)
{
	this.location = location;
	this.height = height;
	this.width = width;
	this.actors = actors;
	update();
}
Camera.prototype = new Actor();
Camera.prototype.constructor = Camera;
Camera.prototype.update = function() {
	if(!(this.actors instanceof Array)) throw new TypeError('Instance of Array was expected.');
	this.framedActors = new Array();
	for(actor in this.actors) {
		if(!(actor instanceof Actor)) throw new TypeError('Instance of Actor was expected.');
		if(this.collidedWith(actor)) {
			visibleActors.push(actor);
		}
	}
};
Camera.prototype.draw = function(context) {
	for(actor in this.framedActors) {
		if(actor.draw) {
			actor.draw(context, 0, 0);
		}
	}
};