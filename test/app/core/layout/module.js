define([
  'backbone',
  'marionette',
  'core/layout/module'
], function (Backbone, Marionette, LayoutModule) {

  function MockModel() {
    Backbone.Model.apply(this, arguments);
  }
  MockModel.prototype = new Backbone.Model();
  MockModel.prototype.sync = function () {};

  describe('LayoutModule', function () {
    it('→ exits', function () {
      var app = new Marionette.Application();
      var module = new LayoutModule('layout', app, {});
      expect(module).not.toBeUndefined();
    });

    describe('→ onStart', function () {
      var app = null;
      var module = null;

      beforeEach(function () {
        app = new Marionette.Application();
        module = new LayoutModule('layout', app, {});
        module.Model = MockModel;
      });

      it('→ will render view', function () {
        spyOn(module.View.prototype, 'render');
        module.onStart();
        expect(module.View.prototype.render).toHaveBeenCalled();
      });

      it('→ will fetch model', function () {
        spyOn(module.Model.prototype, 'fetch');
        module.onStart();
        expect(module.Model.prototype.fetch).toHaveBeenCalled();
      });
    });
  });
});
