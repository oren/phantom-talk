define(['commonmark'], function (commonmark) {
  return function convert(source) {
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();
    var parsed = reader.parse(source);
    return writer.render(parsed);
  };
});
