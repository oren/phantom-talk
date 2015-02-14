define(['underscore', 'backbone'], function LayoutModelDefine(_, Backbone) {
  'use strict';

  var Model = Backbone.Model;

  function LayoutModel() {
    Model.apply(this, arguments);
  }

  LayoutModel.prototype = new Model();

  _.extend(LayoutModel.prototype, {
    url: '/data/vendor.json',
    defaults: function defaults() {
      return {
        title: ''
      };
    }
  });

  return LayoutModel;
});
