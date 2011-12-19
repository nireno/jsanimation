/**
    The base class for all elements that appear in the game.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Actor(numX, numY, numZ)
{
    /** Display depth order. A smaller zOrder means the element is rendered first, and therefore
        in the background.
        @type Number
    */
    var zOrder = numZ;
    /**
        The position on the X axis
        @type Number
    */
    var x = numX;
    /**
        The position on the Y axis
        @type Number
    */
    var y = numY;
}

Actor.prototype.getLocation = function ()
{
	return [this.x, this.y, this.zOrder];
};