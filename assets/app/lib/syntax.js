define(['prism'], function (Prism) {
  return function (text, language) {
    language = language || 'javascript';
    return Prism.highlight(text, Prism.languages[language]);
  };
});
