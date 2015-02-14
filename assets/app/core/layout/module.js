define([
  'underscore',
  'marionette',
  'core/layout/view',
  'core/layout/model'
], function LayoutModuleDefine(_, Marionette, LayoutView, LayoutModel) {
  'use strict';

  var LayoutModule = Marionette.Module.extend({
    Model: LayoutModel,
    View: LayoutView,

    onStart: function(options) {
      var opts = _.defaults({}, options || {}, {layout: {}});
      _.defaults(opts.layout, {view: {}, model: {}});

      var config = opts.layout;
      this.model = new this.Model(config.model);
      config.view.model = this.model;
      this.view = new this.View(config.view);
      this.model.fetch();
      this.view.render();
    }
  });

  return LayoutModule;
});
