define([
  'underscore',
  'marionette',
  'lib/markdown',
  'lib/syntax',
  'widgets/slide/template'
], function AppSlideWidget(_, Marionette, markdown, syntax, template) {
  'use strict';

  var SlideView = Marionette.ItemView.extend({
    template: template,

    ui: {
      copy: '.copy',
      code: '.language-javascript'
    },

    modelEvents: {
      change: 'render'
    },

    onRender: function onRender() {
      var copy = this.model.get('copy');
      if (copy) {
        this.ui.copy.html(markdown(copy));
      }
      var code = this.model.get('code');
      if (code) {
        this.ui.code.html(syntax(code));
      }
    }
  });

  return SlideView;
});
