(function (phantom) {
  var foo = {bar: {baz: 123}};
  delete foo.bar;
  try {
    console.log(foo.bar.baz);
  } catch (err) {
    console.log(err);
    phantom && phantom.exit();
  }
}(this.phantom));
