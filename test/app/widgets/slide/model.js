define(['widgets/slide/model'], function (SlideModel) {
  describe('SlideModel', function () {
    it('→ exits', function () {
      expect(new SlideModel()).not.toBeUndefined();
    });

    describe('→ url', function () {
      it('→ with slide id 1', function () {
        expect((new SlideModel({id: 1})).url()).toBe('/slide/01');
      });

      it('→ with slide id 10', function () {
        expect((new SlideModel({id: 10})).url()).toBe('/slide/10');
      });
    });
  });
});
