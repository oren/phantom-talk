define([
  'underscore',
  'backbone',
  'marionette'
], function (_, Backbone, Marionette) {
  var Obj = Marionette.Object;
  var Model = Backbone.Model;

  function BaseModel() {
    Model.apply(this, arguments);
  }

  BaseModel.prototype = new Model();

  _.extend(BaseModel.prototype, Obj.prototype);

  return BaseModel;
});
