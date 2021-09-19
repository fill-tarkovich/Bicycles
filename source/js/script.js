'use strict';

var navigation = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__button');
var navItem = document.querySelectorAll('.main-nav__item');

const NO_JS = 'main-nav--nojs';
const CLOSED = 'main-nav--closed';
const OPENED = 'main-nav--opened';
const NO_SCROLL = 'no-scroll';


if (navigation) {
  navigation.classList.remove(NO_JS);
}

if (navButton) {
  navButton.addEventListener('click', function () {
    if (navigation.classList.contains(CLOSED)) {
      navigation.classList.remove(CLOSED);
      navigation.classList.add(OPENED);
      document.body.classList.add(NO_SCROLL);
    } else {
      navigation.classList.add(CLOSED);
      navigation.classList.remove(OPENED);
      document.body.classList.remove(NO_SCROLL);
    }
  });
}

if (navItem) {
  navItem.forEach(function (item) {
    item.addEventListener('click', function () {
      if (document.body.classList.contains(NO_SCROLL)) {
        document.body.classList.remove(NO_SCROLL);
        navigation.classList.remove(OPENED);
        navigation.classList.add(CLOSED);
      }
    });
  });
}
