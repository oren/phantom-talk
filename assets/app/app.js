define(['marionette', 'jquery'], function AppDefine(Marionette, $) {
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
    $(options.el).text('started');
  };

  return App;
});
