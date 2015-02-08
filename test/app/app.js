define(['app/app'], function (App) {
  describe('App', function () {
    it('→ exits`', function () {
      expect(new App()).not.toBeUndefined();
    });

    describe('→ start()`', function () {
      it('→ can be called', function () {
        expect(function noError() {
          (new App()).start();
        }).not.toThrow();
      });
    });
  });
});
