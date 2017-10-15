var GameObjectSet = require("./game_object_set");

var Scene = (function(){
  function Scene(){
    this.gameObjects = new GameObjectSet();
  }
  Scene.prototype.initialize = function(){};
  Scene.prototype.loadScene = function(){};
  Scene.prototype.unloadScene = function(){};
  Scene.prototype.update = function(dt){
    this.gameObjects.map(function(obj){ obj.update(dt); });
  };
  Scene.prototype.draw = function(){
    this.gameObjects.map(function(obj){ obj.draw(); });
  };

  Scene.prototype.addObject = function(obj){
    this.gameObjects.add(obj);
  };

  Scene.prototype.removeObject = function(obj){
    this.gameObjects.remove(obj);
  };

  return Scene;
})();

module.exports = Scene;
