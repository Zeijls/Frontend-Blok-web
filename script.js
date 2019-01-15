var button = document.querySelector('header > button');
console.log("button",button);
var form = document.querySelector('header > div');
console.log("form",form);
button.addEventListener('click', function() {
  //console.log("haaaaiiii")
  form.classList.toggle('block');
});


var buttonScrollDown = document.querySelector ('.scroll');
console.log("buttonScrollDown fgrtgrt",buttonScrollDown)

buttonScrollDown.addEventListener('click', function(){
  var windowScroll = document.documentElement.clientHeight;
  console.log(windowScroll);
    (function scroll(){
      console.log(window.pageYOffset)
      if (window.pageYOffset < windowScroll) {
        window.scrollBy({
          top: 5000,
          behavior: 'smooth'
        });
      }
      // if (window.pageYOffset > windowScroll) {
      //   window.scrollTo(0, windowScroll);
      // }
    })();
});
