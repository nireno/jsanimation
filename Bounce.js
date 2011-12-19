/**
    A test class to demonstrate the use of the VisualGameObject class
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Bounce(/**Image or String*/ image)
{
	//INHERIT PROPERTIES OF VISUALACTOR
	Actor.call(this, image, new Box(0, 0, 0));
	/** The movement direction  in the x axis
        @type Number
	 */
	
	this.xDirection = 1;
	/** The movement direction  in the x axis
        @type Number
	 */
	this.yDirection = 1;
	/** The movement speed
        @type Number
	 */
	this.speed = 50;


	/**
        Updates the object
        @param dt The time since the last frame in seconds
        @param context The drawing context 
        @param xScroll The global scrolling value of the x axis  
        @param yScroll The global scrolling value of the y axis 
	 */
}

// EXTEND FROM VISUALACTOR
Bounce.prototype = new Actor();
Bounce.prototype.constructor = Bounce;

Bounce.prototype.update = function (/**Number*/ dt, /**CanvasRenderingContext2D*/context, /**Number*/ xScroll, /**Number*/ yScroll)
{
	this.box.x += dt * this.speed * this.xDirection;
	this.box.y += dt * this.speed * this.yDirection;

	if (this.box.x >= 450)
	{
		this.box.x = 450;
		this.xDirection = -1;
	}
	else if (this.box.x <= 0)
	{
		this.box.x = 0;
		this.xDirection = 1;
	}

	if (this.box.y >= 250)
	{
		this.box.y = 250;
		this.yDirection = -1;
	}
	else if (this.box.y <= 0)
	{
		this.box.y = 0;
		this.yDirection = 1;
	}
};