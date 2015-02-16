define(['underscore', 'backbone', 'core/model'], function (_, Backbone, Model) {
  var Router = Backbone.Router;

  function DeckRouter() {
    Router.apply(this, arguments);
  }

  DeckRouter.prototype = new Router();

  _.extend(DeckRouter.prototype, {
    Model: Model,
    model: null,

    routes: {
      'slide/:id': 'slide'
    },

    initialize: function initialize(config) {
      config = config || {};
      this.model = config.model || new this.Model();
    },

    slide: function slide(id) {
      this.model.set('slide', parseInt(id, 10));
    }
  });

  return DeckRouter;
});
