/**
 * A Map object contains an array of collision boxes that define the map.
 * It will load JSON data output by the 'Tiled Map Editor'. 
 * The JSON file is loaded asychronously so a callback must be provided so that the client can be alerted when the data has been retrieved and processed.
 * @param sPath
 * @param callback
 * @returns
 */
function Map(sPath, callback) {
	this.callback = callback;
	this.aBoxes = null;
	this.loadData(sPath);
}

Map.prototype.loadData = function(sPath) {
	var that = this;
	var req = new XMLHttpRequest();
	req.overrideMimeType("application/json");
	req.open('GET', sPath, true);
	req.send(null);
	req.onreadystatechange = function() {
		switch (this.readyState) {
		case 0:
			console.log("open() has not been called yet.");
			break;
		case 1:
			console.log("send() has not been called yet.");
			break;
		case 2:
			console.log("send() has been called, headers and status are available.");
			break;
		case 3:
			console.log("Downloading, responseText holds the partial data.");
			break;
		case 4:
			console.log("Complete!");
			var oMapData = JSON.parse(req.responseText);
			that.aBoxes = that.createBoxesFromData(that.extractBoxesData(oMapData));
			console.log(that.aBoxes.length);
			that.callback.apply(that, that.arguments); //Callback with the Map taking the place of 'this'
		}
	};
};

/**
 * The JSON object containing the map data should contain a named layer for the
 * collision boxes in the map. This function searches for the layer with the
 * given name and returns the array of 'Tiled Objects' that will be used to
 * define collision boxes.
 */
Map.prototype.extractBoxesData = function(oMapData, layerName) {
	layerName = layerName || "boxes"; // Use the default name if none is
										// provided
	var aLayersData = oMapData.layers;
	for ( var i = 0; i < aLayersData.length; i++) {
		if (aLayersData[i].name === layerName) {
			return aLayersData[i].objects;
		}
	}
};

/**
 * This function is designed to use the output of extractBoxesData() to produce
 * an array of Boxes.
 * 
 * @param aBoxesData
 */
Map.prototype.createBoxesFromData = function(aBoxesData) {
	var aCollisionBoxes = [];
	for(var i = 0; i < aBoxesData.length; i++) {
		var oBoxData = aBoxesData[i];
		aCollisionBoxes[i] = new Box(oBoxData.x, oBoxData.y, 0, oBoxData.width, oBoxData.height);
	}
	return aCollisionBoxes;
};