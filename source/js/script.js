'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

var map = document.querySelector('.contacts__map-wrapper');
var menuButton = document.querySelector('.header__menu-button');
var menu = document.querySelector('.navigation');
var body = document.querySelector('.page');

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuButton.classList.toggle('header__menu-button--closed');
  menu.classList.toggle('navigation--active');
  body.classList.toggle('scroll-lock');
});

map.classList.add('contacts__map-wrapper--hide');

if (document.querySelector('.contacts__map-wrapper')) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.938536, 30.323324],
      zoom: 14
    }),

      // Создаём макет содержимого.
      // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      //   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      // ),

      myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
        hintContent: "Магазин велосипедов",
        balloonContent: "г. Санкт-Петербург, ул. Большая Конюшенная"
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        // iconImageHref: "img/map-pin.svg",
        // Размеры метки.
        // iconImageSize: [67, 100],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        // iconImageOffset: [-30, -100]
      });

    myMap.geoObjects
      .add(myPlacemark)
  });
}
var phone = document.querySelector('input[type=tel]');
var form = document.querySelector('.form-order');

form.addEventListener('submit', formSend);

function formSend(evt) {
  evt.preventDefault();

  var error = formValidate(form);

  if (error > 0) {
    document.querySelector('.form-order__field--phone').classList.add('form-order__field--error');
  } else {
    document.querySelector('.form-order__field--phone').classList.remove('form-order__field--error');
  }
}

function formValidate() {
  var error = 0;

  if (phoneTest(phone)) {
    error++;
  }

  return error;
}

function phoneTest(input) {
  return !/[1-9]/.test(input.value);
}
