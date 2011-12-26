/**
    The ApplicationManager is used to manage the application itself.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function ApplicationManager(director)
{
	var that = this;
	if(director instanceof Director)
		this.director = director;
	else throw new TypeError('Instance of Director was expected');
	
	var image = new Image();
	image.src = "jsplatformer3-smiley.jpg";
	this.bounce = new Bounce(image); 
	image = new Image();
	image.src = "images/grid_ribbon.png";
	this.grid = new Ribbon(new Box(0, 0, 0, image.width, image.height), image);
	
	this.playBall = function() {
		that.director.addSprite(that.bounce);
		that.director.addSprite(that.grid);
		that.director.startRendering();
	};
}
