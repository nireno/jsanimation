function PxLoaderJSON(url, fCallback, tags, priority) {
	var self = this;
	loader = null;

	// used by the loader to categorize and prioritize
	this.tags = tags;
	this.priority = priority;

	// called by PxLoader to trigger download
	this.start = function(pxLoader) {
		// we need the loader ref so we can notify upon completion
		loader = pxLoader;

		// set up event handlers so we send the loader progress updates

		// there are 3 possible events we can tell the loader about:
		// loader.onLoad(self); // the resource loaded
		// loader.onError(self); // an error occured
		// loader.onTimeout(self); // timeout while waiting

		// start downloading
		$.ajax({
			url : url,
			success : function(vData, sStatus, oRequest) {
                                fCallback(vData, sStatus, oRequest);
				loader.onLoad(self);
			},
			error : function(xhr, errorType, exception) {
				if (exception === 'timeout') {
					loader.onTimout(self);
				}
				else loader.onError(self);
			},
			dataType : "json"
		});
	};

	// called by PxLoader to check status of image (fallback in case
	// the event listeners are not triggered).
	this.checkStatus = function() {
		// check that xhr readystate is complete. the check status codes.
		// fire the onError for error states
		// fire the onLoad for success state i.e 200
		if (self.xhr.readyState === 4) {
			if (self.xhr.status === 200) {
				loader.onLoad(self);
			} else {
				loader.onError(self);
			}
		}
	};

	// called by PxLoader when it is no longer waiting
	this.onTimeout = function() {
		// must report a status to the loader: load, error, or timeout
		if (self.xhr.status === 200) {
			loader.onLoad(self);
		} else {
			loader.onTimeout(self);
		}
	};

	// returns a name for the resource that can be used in logging
	this.getName = function() {
		return url;
	};
}

// add a convenience method to PxLoader for adding a JSON resource
//@param {function} fCallback(vData, sStatus, oRequest) Callback function to be called if the request succeeds.
PxLoader.prototype.addJSON = function(url, fCallback, tags, priority) {
	var JSONLoader = new PxLoaderJSON(url, fCallback, tags, priority);
	this.add(JSONLoader);
};
