function Box(x, y, z, width, height) {
    /** Display depth order. A smaller zOrder means the element is rendered first, and therefore
        in the background.
        @type Number
    */
    this.z = z;
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
    
    this.height = height;
    this.width = width;
}

Box.prototype.getRightEdge = function() {
	return this.x + this.width;
};
Box.prototype.getBottomEdge = function() {
	return this.y + this.height;
};

/**
 * @deprecated
 * @param box
 * @returns {Boolean}
 */
Box.prototype.collidedWith = function(box) {
	var left1 = this.x;
	var right1 = left1 + this.width;
	var top1 = this.y;
	var bottom1 = top1 + this.height;
	var left2 = box.x;
	var right2 = left2 + box.width;
	var top2 = box.y;
	var bottom2 = top2 + box.height;
	
	if(bottom1 < top2) return false;
	if(top1 > bottom2) return false;
	if(right1 < left2) return false;
	if(left1 > right2) return false;
	return true;
};

Box.prototype.isCollidingWith = function(box) {
	var left1 = this.x;
	var right1 = left1 + this.width;
	var top1 = this.y;
	var bottom1 = top1 + this.height;
	var left2 = box.x;
	var right2 = left2 + box.width;
	var top2 = box.y;
	var bottom2 = top2 + box.height;
	
	if(bottom1 < top2) return false;
	if(top1 > bottom2) return false;
	if(right1 < left2) return false;
	if(left1 > right2) return false;
	return true;
};

Box.prototype.update = function(dt) {
};

Box.prototype.draw = function() {};
