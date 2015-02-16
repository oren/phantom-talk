define([
  'underscore',
  'marionette',
  'lib/markdown',
  'widgets/slide/template'
], function AppSlideWidget(_, Marionette, markdown, template) {
  'use strict';

  var SlideView = Marionette.ItemView.extend({
    template: template,

    ui: {
      copy: '.copy',
      code: 'pre.language-javascript'
    },

    modelEvents: {
      change: 'render'
    },

    onRender: function onRender() {
      var copy = this.model.get('copy');
      if (copy) {
        this.ui.copy.html(markdown(copy));
      }
    }
  });

  return SlideView;
});
