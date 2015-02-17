define([
  'jquery',
  'underscore',
  'marionette',
  'lib/markdown',
  'lib/syntax',
  'widgets/slide/results',
  'widgets/slide/template'
], function AppSlideWidget(
  $,
  _,
  Marionette,
  markdown,
  syntax,
  ResultsModel,
  template
) {
  'use strict';

  var SlideView = Marionette.ItemView.extend({
    template: template,

    ui: {
      copy: '.copy',
      code: '.language-javascript',
      button: '.request',
      stdout: '.stdout',
      stderr: '.stderr'
    },

    events: {
      'click @ui.button': 'onRequestResult'
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
    },

    onRequestResult: function onRequestResult(event) {
      event.preventDefault();
      var env = $(event.target).data('env');
      var results = new ResultsModel({id: this.model.get('id'), env: env});
      var $stdout = this.ui.stdout;
      var $stderr = this.ui.stderr;
      results.fetch({
        success: function () {
          $stdout.text(results.get('stdout'));
          $stderr.text(results.get('stderr'));
        },
        error: function () {
          $stdout.text('error');
        }
      });
    }
  });

  return SlideView;
});
