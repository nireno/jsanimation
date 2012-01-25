/**
 * The ApplicationManager is used to manage the application itself.
 * 
 * @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
 * @class
 */
function ApplicationManager(director) {
	var self = this;
	if (director instanceof Director)
		this.director = director;
	else
		throw new TypeError('Instance of Director was expected');

	var image = new Image();
	image.src = "images/map1.png";
	this.background = new Sprite(new Box(0, 0, 0, image.width, image.height), image);
	image = new Image();
	image.src = "../images/grid_ribbon.png";
	
	var url = "http://localhost/jsplatformer/examples/SimpleGame/maps/map1.json";
	var ctx = this.director.context2D;
	var loader = new PxLoader();
	var mapData = null; 
    loader.addJSON(url, function(data){mapData = data});
	loader.addCompletionListener(function(){
            console.log("done");
            console.log(mapData.version);
	});
	loader.start();
//	this.oMap = new Map(sPath, function(){
//		//'this' should now point to a Map object that contains an array of boxes.
//		for(var i in this.aBoxes) {
//			box = this.aBoxes[i];
//			ctx.fillRect(box.x, box.y, box.width, box.height);
//		}
//	});
	
	this.startGame = function() {
		self.director.addSprite(self.background);
		self.director.startRendering();
	};
	
}
