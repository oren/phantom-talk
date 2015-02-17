define(['underscore', 'core/model'], function CodeResultsDefine(_, Model) {
  'use strict';

  function ResultsModel() {
    Model.apply(this, arguments);
  }

  ResultsModel.prototype = new Model();

  _.extend(ResultsModel.prototype, {
    defaults: function defaults() {
      return {id: 0, env: ''};
    },

    url: function url() {
      var id = this.get('id');
      var env = this.get('env');
      if (id < 10) {
        return '/results/' + env + '/0' + id;
      } else {
        return '/results/' + env + '/' + id;
      }
    }
  });

  return ResultsModel;
});
