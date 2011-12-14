var FPS = 30;
var SECONDS_BETWEEN_FRAMES = 1/FPS;
var HALF_CANVAS_WIDTH = null;
var HALF_CANVAS_HEIGHT = null; 
var HALF_IMAGE_DIMENSION = null;
var currentFunction = alpha;
var elapsedTime = null;

var x = 0;
var y = 0;
var xDirection = 1;
var yDirection = 1;
var image = new Image();
var canvas = null;
var ctx = null;
var debug = null;
var date = null;
window.onload = function() {
	canvas = document.getElementById('canvas');
	HALF_CANVAS_HEIGHT = canvas.height/2;
	HALF_CANVAS_WIDTH = canvas.width/2;
	ctx = canvas.getContext('2d');
	debug = document.getElementById('debug');
	image.src = "http://javascript-tutorials.googlecode.com/files/jsplatformer1-smiley.jpg";
	HALF_IMAGE_DIMENSION = image.height/2;
	date = new Date();
	this.setInterval(draw, 1000/FPS);
	//debug.innerHTML += HALF_IMAGE_DIMENSION;
	//debug.innerHTML += '<br>' + image.height;
};

function draw()
{
	elapsedTime += SECONDS_BETWEEN_FRAMES;
	sineWave = (Math.sin(elapsedTime) + 1) / 2;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.save();
	ctx.translate(HALF_CANVAS_WIDTH - HALF_IMAGE_DIMENSION, HALF_CANVAS_HEIGHT - HALF_IMAGE_DIMENSION);
	currentFunction();
	ctx.drawImage(image, 0, 0);
	ctx.restore();
}

function alpha()
{
	ctx.globalAlpha = sineWave;
}

function shear()
{
	ctx.transform(1, 0, sineWave - 0.5,  1, 0, 0);
}

function scale()
{
	ctx.translate(HALF_IMAGE_DIMENSION * (1 - sineWave), HALF_IMAGE_DIMENSION * (1 - sineWave));
	ctx.scale(sineWave, sineWave);
}

function rotate()
{
	ctx.translate(HALF_IMAGE_DIMENSION, HALF_IMAGE_DIMENSION);
	ctx.rotate(sineWave * Math.PI * 2);
	ctx.translate(-HALF_IMAGE_DIMENSION, -HALF_IMAGE_DIMENSION);
}