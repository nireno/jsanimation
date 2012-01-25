// The entry point of the application is set to the init function
window.onload = init;

/**
 * Application entry point
 */
function init() {

	var inputManager = new InputManager();

	window.onkeydown = function(event) {
		inputManager.handleKeyDown(event);
	};
	window.onkeyup = function(event) {
		inputManager.handleKeyUp(event);
	}; 
	
	// Create a global reference to the Director object.
	var appMan = new ApplicationManager(new Director(inputManager));
//	appMan.startGame();
}
