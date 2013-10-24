javascript:(function(){
  var link = document.querySelector('#customStyleUy');
  var href = link.getAttribute('href');
  var version = parseInt(/\d+$/.exec(href), 10);
  version += 1;
  var newHref = href.replace(/\d+$/, version);
  link.setAttribute('href', newHref);
})();
