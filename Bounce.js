/**
    A test class to demonstrate the use of the VisualGameObject class
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Bounce(/**Image*/ image)
{
	var that = this;
	//INHERIT FROM VISUALACTOR
	VisualActor.call(this, image, 0, 0, 0);
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
   this.update = function (/**Number*/ dt, /**CanvasRenderingContext2D*/context, /**Number*/ xScroll, /**Number*/ yScroll)
   {
      that.x += dt * that.speed * that.xDirection;
      that.y += dt * that.speed * that.yDirection;

      if (that.x >= 450)
      {
         that.x = 450;
         that.xDirection = -1;
      }
      else if (that.x <= 0)
      {
         that.x = 0;
         that.xDirection = 1;
      }

      if (that.y >= 250)
      {
         that.y = 250;
         that.yDirection = -1;
      }
      else if (that.y <= 0)
      {
         that.y = 0;
         that.yDirection = 1;
      }
   };
}
Bounce.prototype = new VisualActor(new Image());
Bounce.prototype.constructor = Bounce;

