define('main', [
  'underscore',
  'backbone',
  'config',
  'app'
], function main(_, Backbone, config, App) {
  'use strict';
  requirejs.config(config());
  return function main(options) {
    var opts = _.defaults({}, options, {config: {}});
    var app = new App(opts);

    app.on('start', function () {
      if (!Backbone.history.start({pushState: true})) {
        app.router.navigate('slide/1');
      }
    });

    app.start(opts.config);

    return app;
  };
});
