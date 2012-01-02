function Dynamics(MAX_SPEED_X, MAX_SPEED_Y, MAX_ACCEL_X, MAX_ACCEL_Y) {
	if(arguments.length <= 2) {
		this.MAX_SPEED_X = this.MAX_SPEED_Y = arguments[0] || 0;
		this.MAX_ACCEL_X = this.MAX_ACCEL_Y = arguments[1] || 0;
	}
	else {
		this.MAX_ACCEL_X = MAX_ACCEL_X || 0;
		this.MAX_ACCEL_Y = MAX_ACCEL_Y || 0;
		this.MAX_SPEED_X = MAX_SPEED_X || 0;
		this.MAX_SPEED_Y = MAX_SPEED_Y || 0;
	}
	this.accelX = 0;
	this.accelY = 0;
	this.speedX = 0;
	this.speedY = 0;
}

Dynamics.prototype.update = function(dt) {
	this.speedX += this.accelX * dt;
	if(this.speedX < -this.MAX_SPEED_X) this.speedX = -this.MAX_SPEED_X;
	if(this.speedX > this.MAX_SPEED_X) this.speedX = this.MAX_SPEED_X;
	
	this.speedY += this.accelY * dt;
	if(this.speedY < -this.MAX_SPEED_Y) this.speedY = -this.MAX_SPEED_Y;
	if(this.speedY > this.MAX_SPEED_Y) this.speedY = this.MAX_SPEED_Y;
};

Dynamics.prototype.updateBox = function(box, dt) {
	//Calculate speed
	this.update(dt);
	box.x += this.speedX;
	box.y += this.speedY;
};
