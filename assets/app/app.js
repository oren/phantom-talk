define([
  'marionette',
  'jquery',
  'template'
], function AppDefine(Marionette, $, tmpl) {
  'use strict';

  var Application = Marionette.Application;

  function App() {
    Application.apply(this, arguments);
  }
  App.prototype = new Application();

  App.prototype.onStart = function onStart(options) {
    if (options == null) {
      options = {};
    }
    if (options.el == null) {
      options.el = 'body';
    }
    $(options.el).html(tmpl({title: 'started'}));
  };

  return App;
});
