function Camera(box, actors)
{
	this.box = box;
	this.actors = actors;
	/*
	 * There was an update function here. Problem is if I subclassed Camera like so:
	 * child.prototype = new Camera(...)
	 * then the update function would create an unused visibleActors Array.
	 */
}
Camera.prototype = new Box();
Camera.prototype.constructor = Camera;

Camera.prototype.update = function(dt) {
	if(!(this.actors instanceof Array)) throw new TypeError('Instance of Array was expected.');
	this.visibleActors = new Array();
	for(var i = 0; i < this.actors.length; i++) {
		var actor = this.actors[i];
		if(!(actor instanceof Actor)) throw new TypeError('Instance of Actor was expected.');
		if(this.box.collidedWith(actor.box) || (actor instanceof Ribbon)) {
			this.visibleActors.push(this.actors[i]);
		}
	}
	this.box.x -= 10*dt;
};
Camera.prototype.draw = function(context) {
	for(var i = 0; i < this.visibleActors.length; i++) {
		var actor = this.visibleActors[i];
		if(actor.draw) {
			actor.draw(context, this, 0, 0);
//			var image = this.visibleActors[i].image;
//			var box = this.visibleActors[i].box;
//			context.drawImage(image, box.x - this.box.x, box.y - this.box.y);
//			this.visibleActors[i].draw(context, 0, 0);
		}
	}
};