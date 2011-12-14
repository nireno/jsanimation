/** target frames per second  
    @type Number
*/
var FPS = 30;
/** time between frames 
    @type Number
*/
var SECONDS_BETWEEN_FRAMES = 1 / FPS;

/** An image to be used by the application  
    @type Image
*/

// The entry point of the application is set to the init function
window.onload = init;

/**
    Application entry point
*/
function init()
{
	//Create a global reference to the Director object.
    var appMan = new ApplicationManager(new Director());
    appMan.playBall();
}
