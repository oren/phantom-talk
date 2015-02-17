define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'core/listener',
  'core/router',
  'widgets/slide/view',
  'widgets/slide/model'
], function AppDefine(
  $,
  _,
  Backbone,
  Marionette,
  Listener,
  Router,
  SlideView,
  SlideModel
) {
  'use strict';

  var Application = Marionette.Application;
  var SlideCollection = Backbone.Collection.extend({
    url: '/slides'
  });

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

      this.collection = new SlideCollection();

      this.module('listener', Listener);

      this.model = new SlideModel();
      this.view = new SlideView({el: options.el, model: this.model});

      this.router = new Router();
      this.listenTo(this.router.model, 'change:slide', function (model, num) {
        this.triggerMethod('slide:change', num);
      }, this);
    },

    goToSlide: function goToSlide(nextId) {
      if (this.collection.get(nextId)) {
        this.router.navigate('slide/' + nextId, {trigger: true});
      }
    },

    nextSlide: function nextSlide() {
      this.goToSlide(this.model.get('id') + 1);
    },

    prevSlide: function prevSlide() {
      this.goToSlide(this.model.get('id') - 1);
    },

    onStart: function onStart() {
      this.view.render();
      this.collection.fetch();
    },

    onSlideChange: function onSlideChange(num) {
      $('body').removeClass().addClass('page-' + num);
      this.model.set('id', num);
      this.model.fetch();
    }
  });

  return App;
});
