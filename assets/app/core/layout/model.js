define(['backbone'], function LayoutModelDefine(Backbone) {
  'use strict';

  var Model = Backbone.Model;

  function LayoutModel() {
    Model.apply(this, arguments);
  }
  LayoutModel.prototype = new Model();

  LayoutModel.prototype.defaults = function defaults() {
    return {
      title: 'some title'
    };
  };

  return LayoutModel;
});
