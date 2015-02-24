var page = require('webpage').create();
page.viewportSize = {width: 1280, height: 720};

page.open('https://html5test.com/', function() {
  function doneLoading() {
    var el = document.getElementById('loading');
    return window.getComputedStyle(el).display === 'none';
  }

  function checkPage() {
    if (page.evaluate(doneLoading)) {
      page.render('static/html5.' + phantom.version.major + '.png');
      console.log('created static/html5.' + phantom.version.major + '.png');
      phantom.exit();
    }
    setTimeout(checkPage, 100);
  }
  checkPage();
});
