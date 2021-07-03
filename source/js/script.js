'use strict';

var pageHeader = document.querySelector('.page__header--nojs');

var map = document.querySelector('.contacts__map-wrapper');
var menuButton = document.querySelector('.header__menu-button');
var menu = document.querySelector('.navigation');
var body = document.querySelector('.page');

var phone = document.querySelector('input[type=tel]');
var form = document.querySelector('.form-order');

var smoothLinks = document.querySelectorAll('a[href^="#link"]');

if (pageHeader) {
  pageHeader.classList.remove('page__header--nojs');
}

if (menuButton) {
  menuButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    menuButton.classList.toggle('header__menu-button--closed');
    menu.classList.toggle('navigation--active');
    body.classList.toggle('scroll-lock');
  });
}

if (smoothLinks) {
  smoothLinks.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      menuButton.classList.add('header__menu-button--closed');
      menu.classList.remove('navigation--active');
      body.classList.remove('scroll-lock');

      var id = item.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

if (form) {
  form.addEventListener('submit', formSend);
}

function formSend(evt) {

  var error = formValidate(form);

  if (!error) {
    document.querySelector('.form-order__field--phone').classList.remove('form-order__field--error');
    form.reset();
  }
  else {
    document.querySelector('.form-order__field--phone').classList.add('form-order__field--error');
    evt.preventDefault();
  }
}

function formValidate() {

  if (phoneTest(phone)) {
    return true;
  } else {
    return false;
  }
}

function phoneTest(input) {
  return !/^(\+|\d)\d+$/.test(input.value);
}
