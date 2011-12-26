/**
 * Base class for creating box decorators. This should allow complex sprites to
 * be composed of several different images by wrapping sub-sprites within other
 * sprites.
 * 
 * @param box
 * @param image
 * @returns
 */
function Sprite(box, image) {
	this.box = box;
	this.image = image;
}

Sprite.prototype.update = function(dt) {
	
	this.box.update(dt);
};

Sprite.prototype.draw = function(context, camera) {
	this.box.draw(context, camera);
    context.drawImage(this.image, this.box.x - camera.box.x, this.box.y - camera.box.y);
};