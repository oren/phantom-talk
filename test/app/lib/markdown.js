define(['lib/markdown'], function (markdown) {
  describe('markdown', function () {
    it('→ converts to html', function () {
      var expected = '<p>some <em>example</em> ' +
        '<a href="http://example.com">yo</a></p>\n';
      var actual = markdown('some *example* [yo](http://example.com)');
      expect(actual).toBe(expected);
    });
  });
});
