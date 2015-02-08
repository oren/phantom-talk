(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define('config', [], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.RequireConfig = factory();
  }
}(this, function () {
  'use strict';

  return function (prefix) {
    prefix = prefix || '';

    return {
      paths: {
        backbone: prefix + '/vendor/backbone/backbone',
        jquery: prefix + '/vendor/jquery/dist/jquery',
        marionette: prefix + '/vendor/marionette/lib/backbone.marionette',
        underscore: prefix + '/vendor/underscore/underscore'
      },
      shim: {
        underscore: {exports: '_'}
      }
    };
  };
}));
