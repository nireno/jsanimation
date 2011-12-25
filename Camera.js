function Camera(sprites, x, y, z, width, height, speedX, speedY)
{
	box.call(this, x, y, z, width, height, speedX, speedY);
	this.sprites = sprites;
}

Camera.prototype = new Box();
Camera.prototype.constructor = Camera;

/**
 * Update the location of the camera and re-calculate which sprites are currently visible.
 */
Camera.prototype.update = function(dt) {
	Box.prototype.update.call(this, dt);
	if(!(this.sprites instanceof Array)) throw new TypeError('Instance of Array was expected.');
	this.visibleSprites = new Array();
	for(var i = 0; i < this.sprites.length; i++) {
		var sprite = this.sprites[i];
		if(!(sprite instanceof Box)) throw new TypeError('Instance of Box was expected.');
		if(this.collidedWith(sprite)) {
			this.visibleSprites.push(this.sprites[i]);
		}
	}
};

Camera.prototype.draw = function(context) {
	for(var i = 0; i < this.visibleSprites.length; i++) {
		this.visibleSprites[i].draw(context, this, 0, 0);
	}
};