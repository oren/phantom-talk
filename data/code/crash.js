function onLoad() {
  console.log(this.responseText);
}

var request = new XMLHttpRequest();
request.onload = onLoad;
request.open('get', 'http://localhost:8000/', true);
request.send();
