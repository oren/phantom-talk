define([
  'marionette',
  'core/layout/module'
], function (Marionette, LayoutModule) {
  describe('LayoutModule', function () {
    it('→ exits', function () {
      var app = new Marionette.Application();
      var module = new LayoutModule('layout', app, {});
      expect(module).not.toBeUndefined();
    });

    describe('→ onStart', function () {
      it('→ will render view', function () {
        var app = new Marionette.Application();
        var module = new LayoutModule('layout', app, {});
        spyOn(module.View.prototype, 'render');
        module.onStart();
        expect(module.View.prototype.render).toHaveBeenCalled();
      });
    });
  });
});
