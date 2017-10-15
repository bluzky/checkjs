
var gameLoop = require("./loop.js");
var core = require("./core/core");
var event = require("./core/event");
var gameObject = require("./core/game_object");
var gameObjectSet = require("./core/game_object_set");
var input = require("./core/input");
var renderable = require("./core/renderable");
var scene = require("./core/scene");
var transform = require("./core/transform");
var audio = require("./resource/audio");
var resourceManager = require("./resource/resource_manager");

var Chek = core.merge({}, core, {
  GameLoop: gameLoop,
  Observable: event,
  GameObject: gameObject,
  GameObjectSet: gameObjectSet,
  Input: input,
  Renderable: renderable,
  Scene: scene,
  Transform: transform,
  Audio: audio,
  ResourceManager: resourceManager
});

module.exports = Chek;
