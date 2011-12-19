/**
    A test class to demonstrate the use of the VisualGameObject class
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Bounce(/**Image or String*/ image)
{
	//INHERIT PROPERTIES OF VISUALACTOR
	Actor.call(this, image, new Location(0, 0, 0));
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
	this.location.x += dt * this.speed * this.xDirection;
	this.location.y += dt * this.speed * this.yDirection;

	if (this.location.x >= 450)
	{
		this.location.x = 450;
		this.xDirection = -1;
	}
	else if (this.location.x <= 0)
	{
		this.location.x = 0;
		this.xDirection = 1;
	}

	if (this.location.y >= 250)
	{
		this.location.y = 250;
		this.yDirection = -1;
	}
	else if (this.location.y <= 0)
	{
		this.location.y = 0;
		this.yDirection = 1;
	}
};