(function (phantom) {
  console.log('bind:', typeof Function.prototype.bind);
  console.log('9 === parseInt("09"):', 9 === parseInt('09'));

  console.log('map:', typeof Array.prototype.map);
  console.log('reduce:', typeof Array.prototype.reduce);
  console.log('filter:', typeof Array.prototype.filter);
  console.log('Object.create:', typeof Object.create);

  if (phantom) {
    phantom.exit();
  }
}(this.phantom));
