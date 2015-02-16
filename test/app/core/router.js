define(['backbone', 'core/router'], function (Backbone, Router) {
  describe('Router', function () {
    it('→ exits', function () {
      expect(new Router()).not.toBeUndefined();
    });

    describe('→ is passed model', function () {
      it('→ exits', function () {
        expect((new Router()).model).not.toBeUndefined();
      });

      it('→ same as passed in', function () {
        var model = new Backbone.Model();
        expect((new Router({model: model})).model).toBe(model);
      });
    });

    describe('→ navigate changes model', function () {
      it('→ goes to the number for page', function () {
        var router = new Router();
        router.slide('123');
        expect(router.model.get('slide')).toBe(123);
      });
    });
  });
});
