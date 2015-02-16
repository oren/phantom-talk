(function (phantom) {
  console.log(Function.prototype.bind);

  if (phantom) {
    phantom.exit();
  }
}(this.phantom));
