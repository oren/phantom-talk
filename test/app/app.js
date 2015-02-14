define(['marionette', 'app'], function (Marionette, App) {
  describe('App', function () {
    it('→ exits', function () {
      expect(new App()).not.toBeUndefined();
    });

    describe('→ start()', function () {
      it('→ can be called', function () {
        expect(function noError() {
          var app = new App({Layout: Marionette.Module});
          app.start();
        }).not.toThrow();
      });
    });

    describe('→ has layout', function () {
      it('→ exits', function () {
        expect(new App().layout).not.toBeUndefined();
      });
    });
  });
});
