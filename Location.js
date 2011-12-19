function Location(numX, numY, numZ)
{
    /** Display depth order. A smaller zOrder means the element is rendered first, and therefore
        in the background.
        @type Number
    */
    this.z = numZ;
    /**
        The position on the X axis
        @type Number
    */
    this.x = numX;
    /**
        The position on the Y axis
        @type Number
    */
    this.y = numY;
}