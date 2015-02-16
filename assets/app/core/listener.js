define([
  'jquery',
  'underscore',
  'marionette'
], function ListenerDefine($, _, Marionette) {
  'use strict';

  var spaceCode = 32;
  var leftArrowCode = 37;
  var rightArrowCode = 39;

  var ListenerModule = Marionette.Module.extend({
    initialize: function initialize() {
      this._nextCodes = [spaceCode, rightArrowCode];
      this._prevCodes = [leftArrowCode];
    },

    onStart: function onStart(options) {
      options = options || {};
      this.$el = $(options.el || document);
      this.$el.on('keyup', _.bind(this.onKeyUp, this));
    },

    onKeyUp: function onKeyUp(event) {
      if (_.contains(this._nextCodes, event.which)) {
        this.app.nextSlide();
      } else if (_.contains(this._prevCodes, event.which)) {
        this.app.prevSlide();
      }
    }
  });

  return ListenerModule;
});
