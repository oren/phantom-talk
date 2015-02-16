define([
  'underscore',
  'backbone',
  'marionette',
  'core/router',
  'widgets/slide/view',
  'widgets/slide/model'
], function AppDefine(
  _,
  Backbone,
  Marionette,
  Router,
  SlideView,
  SlideModel
) {
  'use strict';

  var Application = Marionette.Application;

  function App(options) {
    if (options == null) {
      options = {};
    }
    Application.apply(this, arguments);
  }

  App.prototype = new Application();

  _.extend(App.prototype, {
    initialize: function initialize(options) {
      options = options || {};

      this.model = new SlideModel();
      this.view = new SlideView({el: options.el, model: this.model});

      this.router = new Router();
      this.listenTo(this.router.model, 'change:slide', function (model, num) {
        this.triggerMethod('slide:change', num);
      }, this);
    },

    onStart: function onStart() {
      this.view.render();
    },

    onSlideChange: function onSlideChange(num) {
      this.model.set('id', num);
      this.model.fetch();
    }
  });

  return App;
});
