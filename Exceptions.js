function IllegalArgumentException(message, argument)
{
	this.message = message;
	this.argument = argument;
	this.toString = function() {return 'IllegalArgumentException: ' + this.message;};
}