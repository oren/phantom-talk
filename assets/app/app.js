define([
  'underscore',
  'backbone',
  'marionette',
  'core/layout/module',
  'core/router'
], function AppDefine(_, Backbone, Marionette, Layout, Router) {
  'use strict';

  var Application = Marionette.Application;

  function App(options) {
    if (options == null) {
      options = {};
    }
    Application.apply(this, arguments);
  }

  App.prototype = new Application();

  _.extend(App.prototype, {
    Layout: Layout,

    initialize: function initialize(config) {
      config = config || {};
      this.Layout = config.Layout || this.Layout;
      this.module('layout', this.Layout);

      this.router = new Router();
      this.listenTo(this.router.model, 'change:slide', function (model, num) {
        this.triggerMethod('slide:change', num);
      }, this);
    }
  });

  return App;
});
