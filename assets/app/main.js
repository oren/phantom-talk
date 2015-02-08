define('main', ['config', 'app'], function main(config, App) {
  'use strict';
  requirejs.config(config());
  return function main(options) {
    var app = new App();
    app.start(options);
    return app;
  };
});
