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
	
	this.bounce = new Bounce("jsplatformer3-smiley.jpg"); 
	
	this.playBall = function() {
		that.director.addActor(that.bounce);
		that.director.startRendering();
	};
}
