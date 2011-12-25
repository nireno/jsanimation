function Bounce(image)
{
	Sprite.call(this, new Box(0, 0, 1, image.width, image.height, 20, 20), image);
}

Bounce.prototype = new Sprite();
Bounce.prototype.constructor = Bounce;

Bounce.prototype.update = function (dt)
{
	this.box.x += dt * this.box.speedX;
	this.box.y += dt * this.box.speedY;

	if (this.box.x >= 450)
	{
		this.box.x = 450;
		this.speedX *= -1;
	}
	else if (this.box.x <= 0)
	{
		this.box.x = 0;
		this.speedX *= 1;
	}

	if (this.box.y >= 250)
	{
		this.box.y = 250;
		this.speedY *= -1;
	}
	else if (this.box.y <= 0)
	{
		this.box.y = 0;
		this.speedY *= -1;
	}
};