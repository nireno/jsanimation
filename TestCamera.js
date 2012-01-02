function TestCameraDynamics() {
	Dynamics.call(this, 50, 5);
};
TestCameraDynamics.prototype = new Dynamics();
TestCameraDynamics.prototype.constructor = TestCameraDynamics; 

function TestCamera(sprites, box) {
	var that = this;
	Camera.call(this, sprites, box);
	this.dynamics = new TestCameraDynamics();
	this.keyPressed = function(keycode) {
		switch (keycode) {
		//keycodes: 65:A, 68:D, 83:S, 87:W
		case 65: that.dynamics.accelX = -that.dynamics.MAX_ACCEL_X;break;
		case 68: that.dynamics.accelX = that.dynamics.MAX_ACCEL_X;break;
		case 83: that.dynamics.accelY = that.dynamics.MAX_ACCEL_Y;break;
		case 87: that.dynamics.accelY = -that.dynamics.MAX_ACCEL_Y;break;	
		}
	};
	
	this.keyReleased = function(keycode) {
		switch(keycode) {
		case 65: that.dynamics.accelX = 0;break;
		case 68: that.dynamics.accelX = 0;break;
		case 83: that.dynamics.accelY = 0;break;
		case 87: that.dynamics.accelY = 0;break;
		}
	};
}
TestCamera.prototype = new Camera();
TestCamera.prototype.constructor = TestCamera;

TestCamera.prototype.update = function(dt) {
	this.dynamics.updateBox(this.box, dt);
	if(this.dynamics.accelX === 0){
		this.dynamics.speedX = 0;
	}
	if(this.dynamics.accelY == 0) this.dynamics.speedY =0;
};
/** 
 * An actor is a box with dynamic properties
 */

