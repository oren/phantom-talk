define('main', ['underscore', 'config', 'app'], function main(_, config, App) {
  'use strict';
  requirejs.config(config());
  return function main(options) {
    var opts = _.defaults({}, options, {config: {}});
    var app = new App(opts);
    app.start(opts.config);
    return app;
  };
});
