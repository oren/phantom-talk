define(['underscore', 'backbone'], function SlideModelDefine(_, Backbone) {
  'use strict';
  var Model = Backbone.Model;

  function SlideModel() {
    Model.apply(this, arguments);
  }

  SlideModel.prototype = new Model();

  _.extend(SlideModel.prototype, {
    url: function url() {
      var id = this.get('id');
      if (id < 10) {
        return '/slide/0' + id;
      } else {
        return '/slide/' + id;
      }
    }
  });

  return SlideModel;
});
