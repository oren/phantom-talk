define(['backbone', 'marionette', 'app'], function (Backbone, Marionette, App) {
  describe('App', function () {
    it('→ exits', function () {
      expect(new App()).not.toBeUndefined();
    });

    describe('→ start()', function () {
      it('→ can be called', function () {
        expect(function noError() {
          var app = new App();
          app.start();
        }).not.toThrow();
      });
    });

    describe('→ has view', function () {
      it('→ exits', function () {
        expect(new App().view).not.toBeUndefined();
      });
    });

    describe('→ has router', function () {
      it('→ exits', function () {
        expect(new App().router).not.toBeUndefined();
      });

      describe('→ listens to events', function () {
        it('→ exits', function () {
          var app = new App();
          app.onSlideChange = app.onSlideChange || function () {};
          spyOn(app, 'onSlideChange');
          app.router.model.set('slide', 123);
          expect(app.onSlideChange).toHaveBeenCalledWith(123);
        });
      });
    });
  });
});
