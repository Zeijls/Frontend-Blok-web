var button = document.querySelector('header > button');

var form = document.querySelector('header > div');
button.addEventListener('click', function() {
  form.classList.toggle('block');
});

var downloadButton = document.querySelector(".download");

downloadButton.addEventListener("click", function(){
  downloadButton.classList.add('start-download');
  console.log(downloadButton);
})

var buttonScrollDown = document.querySelector('.scroll');

buttonScrollDown.addEventListener('click', function(){
  var windowScroll = document.documentElement.clientHeight;

    (function scroll(){
      if (window.pageYOffset < windowScroll) {
        window.scrollBy({
          top: 5000,
          behavior: 'smooth'
        });
      }
    })();
});
