function Camera(sprites, box)
{
	this.box = box;
	this.sprites = sprites;
}
Camera.prototype.update = function(dt) {
	this.box.update(dt);
};

Camera.prototype.draw = function(context) {
	if(!(this.sprites instanceof Array)) throw new TypeError('Instance of Array was expected.');
	for(var i = 0; i < this.sprites.length; i++) {
		var sprite = this.sprites[i];
		if(!(sprite instanceof Sprite)) throw new TypeError('Instance of Box was expected.');
		if(this.box.isCollidingWith(sprite)) {
			sprite.draw(context, this);
		}
	}
};