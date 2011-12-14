/**
    The base class for all elements that appear in the game.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function Actor(/**Number*/ x, /**Number*/ y, /**Number*/ z)
{
    /** Display depth order. A smaller zOrder means the element is rendered first, and therefore
        in the background.
        @type Number
    */
    this.zOrder = z;
    /**
        The position on the X axis
        @type Number
    */
    this.x = x;
    /**
        The position on the Y axis
        @type Number
    */
    this.y = y;
}
