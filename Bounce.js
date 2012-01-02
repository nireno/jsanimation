function Bounce(image)
{
	Sprite.call(this, new Box(0, 0, 1, image.width, image.height), image);
	this.dynamics = new Dynamics(0.3);
	if(this.dynamics.hasOwnProperty('speedX')) console.log('Bounce.dynamics hasownproperty "speedX"');
	this.dynamics.speedX = this.dynamics.MAX_SPEED_X;
	this.dynamics.speedY = this.dynamics.MAX_SPEED_Y;
}

Bounce.prototype = new Sprite();
Bounce.prototype.constructor = Bounce;

Bounce.prototype.update = function (dt)
{
	this.dynamics.updateBox(this.box, dt);
	if (this.box.x >= 450)
	{
		this.box.x = 450;
		this.dynamics.speedX *= -1;
	}
	else if (this.box.x <= 0)
	{
		this.box.x = 0;
		this.dynamics.speedX *= -1;
	}

	if (this.box.y >= 250)
	{
		this.box.y = 250;
		this.dynamics.speedY *= -1;
	}
	else if (this.box.y <= 0)
	{
		this.box.y = 0;
		this.dynamics.speedY *= -1;
	}
};
