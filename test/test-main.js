(function (root) {
  'use strict';

  var testDir = /base\/test/;
  var isTestMain = /test-main.js$/;

  var tests = Object.keys(root.__karma__.files).filter(function (file) {
    return testDir.test(file) && !isTestMain.test(file);
  });

  require(['config'], function configRequire(mkConfig) {
    var config = mkConfig('/base');

    config.deps = tests;
    config.baseUrl = '/base/static/app';
    config.callback = root.__karma__.start;

    require.config(config);
  });

}(this));
