var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var PLUGIN_NAME = "LLCameraPreview";

var CameraPreview = function(){};

LLCameraPreview.setOnPictureTakenHandler = function(onPictureTaken) {
  exec(onPictureTaken, onPictureTaken, PLUGIN_NAME, "setOnPictureTakenHandler", []);
};

LLCameraPreview.setFlashMode = function(flashMode) {
  exec(null, null, PLUGIN_NAME, "setFlashMode", [flashMode]);
};

LLCameraPreview.setOnLogHandler = function(onLog) {
  exec(onLog, onLog, PLUGIN_NAME, "wLog", []);
};

LLCameraPreview.startCamera = function(options){
  options = options || {};
  if(typeof(options.x) === 'undefined'){
    options.x = 0;
  }
  if(typeof(options.y) === 'undefined'){
    options.y = 0;
  }
  if(typeof(options.width) === 'undefined'){
    options.width = window.screen.width;
  }
  if(typeof(options.height) === 'undefined'){
    options.height = window.screen.height;
  }
  if(typeof(options.camera) === 'undefined'){
    options.camera = 'front';
  }
  if(typeof(options.tapPhoto) === 'undefined'){
    options.tapPhoto = true;
  }
  if(typeof(options.previewDrag) === 'undefined'){
    options.previewDrag = false;
  }
  if(typeof(options.toBack) === 'undefined'){
    options.toBack = false;
  }
  if(typeof(options.alpha) === 'undefined'){
    options.alpha = 1;
  }

  exec(null, null, PLUGIN_NAME, "startCamera", [options.x, options.y, options.width, options.height, options.camera, options.tapPhoto, options.previewDrag, options.toBack, options.alpha]);
};

LLCameraPreview.stopCamera = function(onCameraStopped){
  exec(onCameraStopped, onCameraStopped, PLUGIN_NAME, "stopCamera", []);
};

LLCameraPreview.takePicture = function(dim){
  dim = dim || {};
  exec(null, null, PLUGIN_NAME, "takePicture", [dim.orientation || 0, dim.maxWidth || 0, dim.maxHeight || 0]);
};

LLCameraPreview.setColorEffect = function(effect){
  exec(null, null, PLUGIN_NAME, "setColorEffect", [effect]);
};

LLCameraPreview.switchCamera = function(){
  exec(null, null, PLUGIN_NAME, "switchCamera", []);
};

LLCameraPreview.hide = function(){
  exec(null, null, PLUGIN_NAME, "hideCamera", []);
};

LLCameraPreview.show = function(){
  exec(null, null, PLUGIN_NAME, "showCamera", []);
};

LLCameraPreview.disable = function(disable){
  exec(null, null, PLUGIN_NAME, "disable", [disable]);
};

LLCameraPreview.FlashMode = {OFF: 0, ON: 1, AUTO: 2};
LLCameraPreview.Orientation = {UP: 3, LEFT: 0, DOWN: 1, RIGHT:2};

module.exports = LLCameraPreview;
