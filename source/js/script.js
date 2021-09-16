'use strict';

var navigation = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__button');
var navItem = document.querySelectorAll('.main-nav__item');

if (navigation) {
  navigation.classList.remove('main-nav--nojs');
}

if (navButton) {
  navButton.addEventListener('click', function () {
    if (navigation.classList.contains('main-nav--closed')) {
      navigation.classList.remove('main-nav--closed');
      navigation.classList.add('main-nav--opened');
      document.body.classList.add('no-scroll');
    } else {
      navigation.classList.add('main-nav--closed');
      navigation.classList.remove('main-nav--opened');
      document.body.classList.remove('no-scroll');
    }
  });
}

if (navItem) {
  navItem.forEach(function (link) {
    link.addEventListener('click', function () {
      if (document.body.classList.contains('no-scroll')) {
        document.body.classList.remove('no-scroll');
      }
    });
  });
}
