function Ribbon(box, image) {
	that = this;
	
	Sprite.call(this, box, image);
	
	
}
Ribbon.prototype = new Sprite();
Ribbon.prototype.constructor = Ribbon;

Ribbon.prototype.draw = function(context, camera) {
	/** x position of the right border of the camera */
	var image = that.image;
	
	var camLeftEdge = Math.floor(camera.box.x % image.width); //Using integers in the calculation prevents graphics tearing problems in firefox when the ribbon is scrolling, hence the use of Math.floor.
	if(camLeftEdge < 0) camLeftEdge += image.width; // Adjust for camera movement from right to left into a negative region
	var camRightEdge = camLeftEdge + camera.box.width;
	
	//Draw left piece
	var sourceX = camLeftEdge;
	var sourceY = 0;
	var sourceWidth = (camRightEdge <= image.width) ? camera.box.width : image.width - camLeftEdge;
	var sourceHeight = image.height;
	var destX = 0;
	var destY = 0;
	context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, sourceWidth, sourceHeight);
	
	if(camRightEdge <= image.width) return; //Left piece already filled camera
	//Draw right piece
	sourceX = 0;
	sourceY = 0;
	destX = sourceWidth; 
	destY = 0;
	sourceWidth = camRightEdge - image.width;
	sourceHeight = image.height;
	context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, sourceWidth, sourceHeight);
};