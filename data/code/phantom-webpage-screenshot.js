var page = require('webpage').create();

page.viewportSize = {width: 1280, height: 720};

page.open('http://phantomjs.org', function() {
   page.render('phantomjs.png');
   console.log('created phantomjs.png. ☮ out!');
   phantom.exit();
});
