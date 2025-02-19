'use strict';

let mybutton = document.getElementById('topBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  mybutton.style.display =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? 'block'
      : 'none';
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
