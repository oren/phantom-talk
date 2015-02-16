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
        commonmark: prefix + '/vendor/commonmark/dist/commonmark',
        handlebars: prefix + '/vendor/handlebars/handlebars.runtime',
        jquery: prefix + '/vendor/jquery/dist/jquery',
        marionette: prefix + '/vendor/marionette/lib/backbone.marionette',
        prism: prefix + '/vendor/prism/prism',
        underscore: prefix + '/vendor/underscore/underscore'
      },
      shim: {
        handlebars: {exports: 'Handlebars'},
        prism: {exports: 'Prism'},
        underscore: {exports: '_'}
      }
    };
  };
}));
