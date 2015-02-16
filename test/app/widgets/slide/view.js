define([
  'backbone',
  'lib/markdown',
  'widgets/slide/view'
], function (Backbone, markdown, SlideView) {
  var Model = Backbone.Model;

  describe('SlideView', function () {
    it('→ exits', function () {
      expect(new SlideView()).not.toBeUndefined();
    });

    describe('→ onRender', function () {
      it('→ renders', function () {
        var model = new Model({'copy': '**hello**'});
        var view = new SlideView({model: model});
        view.render();
        expect(view.ui.copy.html()).toBe(markdown('**hello**'));
      });
    });
  });
});
