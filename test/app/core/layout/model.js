define(['core/layout/model'], function (LayoutModel) {
  describe('LayoutModel', function () {
    it('→ exits', function () {
      expect(new LayoutModel()).not.toBeUndefined();
    });

    describe('→ has defaults', function () {
      it('→ title', function () {
        expect(typeof (new LayoutModel()).get('title')).toBe('string');
      });
    });
  });
});
