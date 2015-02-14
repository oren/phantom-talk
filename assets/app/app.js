define([
  'marionette',
  'core/layout/module'
], function AppDefine(Marionette, Layout) {
  'use strict';

  var Application = Marionette.Application;

  function App(options) {
    if (options == null) {
      options = {};
    }
    Application.apply(this, arguments);
  }

  App.prototype = new Application();

  App.prototype.initialize = function initialize() {
    this.module('layout', Layout);
  };

  return App;
});
