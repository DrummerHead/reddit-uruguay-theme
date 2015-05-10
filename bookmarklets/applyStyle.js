javascript:(function(){
  var link = document.createElement('link');
  link.setAttribute('href', 'http://localhost:8080/style.css?1');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('id', 'customStyleUy');
  var caput = document.getElementsByTagName('head');
  caput[0].appendChild(link);
})();
