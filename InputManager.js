function InputManager() {
	that = this;
	this.listeners = [];
	/*
	 * A listener is an object containing the listening object along with an
	 * array of keys that it wishes to listen for.
	 */
	this.keysDown = [];
}

InputManager.prototype.addListener = function(listener) {
	if (listener.keyPressed && listener.keyReleased) {
		this.listeners.push(listener);
	}
	else throw new ReferenceError("Missing 'keyPressed' or 'keyReleased' method.");
};

InputManager.prototype.removeListener = function(listener) {
	var index = this.listeners.indexOf(listener);
	if (index !== -1) this.listeners.splice(index, 1);
};

InputManager.prototype.handleKeyDown = function(event) {
	// Alert all relevant listeners of the keypress only if that key was not already down.
	var keycode = event.keyCode;
	if(!this.keysDown[keycode]) {
		this.keysDown[keycode] = true;
		
		for(var i = 0; i < this.listeners.length; i++) {
			var listener = this.listeners[i];
			listener.keyPressed(keycode);
		}
	}
};

InputManager.prototype.handleKeyUp = function(event) {
	// Alert all relevant listeners of the keypress only if that key was not already down.
	var keycode = event.keyCode;
	this.keysDown[keycode] = false;
	
	for(var i = 0; i < this.listeners.length; i++){
		listener = this.listeners[i];
		listener.keyReleased(keycode);
	}
};
