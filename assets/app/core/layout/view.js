define([
  'marionette',
  'core/layout/template'
], function CoreLayoutDefine(Marionette, template) {
  'use strict';

  var CoreLayout = Marionette.LayoutView.extend({
    template: template
  });

  return CoreLayout;
});
