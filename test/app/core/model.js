define(['core/model'], function (Model) {
  describe('Model', function () {
    it('→ exits', function () {
      expect(new Model()).not.toBeUndefined();
    });

    describe('→ triggerMethod', function () {
      it('→ exits', function () {
        expect((new Model()).triggerMethod).not.toBeUndefined();
      });
    });
  });
});
