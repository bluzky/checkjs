var GameObject = (function(){
  var GameObject = function(renderableObj){
    this.renderableComponent = renderableObj;
  };

  GameObject.prototype.update = function(dt){};
  GameObject.prototype.draw = function(){};
  GameObject.prototype.getRenderable = function(){ return this.renderableComponent;};
  GameObject.prototype.getXform = function(){return this.renderableComponent.getXform();};

  return GameObject;
})();

module.exports = GameObject;
