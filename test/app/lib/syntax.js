define(['jquery', 'lib/syntax'], function ($, syntax) {
  describe('syntax', function () {
    it('→ converts javascript to html', function () {
      var src = 'function () {console.log("hi");}';
      var actual = syntax(src);
      expect($(actual).text()).toBe(src);
    });
  });
});
