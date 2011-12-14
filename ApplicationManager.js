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
	else throw new IllegalArgumentException('Instance of Director was expected');
	
	var image = new Image();
	image.src = "jsplatformer3-smiley.jpg";
	this.bounce = new Bounce(image); 
	
	this.playBall = function() {
		that.director.addActor(that.bounce);
		that.director.startRendering();
	};
}
