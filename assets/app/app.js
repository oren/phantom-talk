define([
  'underscore',
  'marionette',
  'core/layout/module'
], function AppDefine(_, Marionette, Layout) {
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
      if (config.Layout) {
        this.Layout = config.Layout;
      }
      this.module('layout', this.Layout);
    }
  });

  return App;
});
