// Select
const  defaultSelect = () => {
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false
  });
};

defaultSelect();

// Map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    controls: ['smallMapDefaultSet'],
    center: [48.872185073737896, 2.354223999999991],
    zoom: 19
  });

  var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/subtract.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-23, -42]
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.controls.remove('typeSelector');
}

//  SimpleBar
new SimpleBar(document.querySelector('.knowledge-base__scroll'), {
  autoHide: false,
  scrollbarMaxSize: 70
});

// Inputmask
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

// JustValidate
new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.length === 10;
      }
    },
    email: {
      required: true,
      email: true
    },
  },
});

// Tooltip
tippy('#tooltip', {
  content: 'Глава 2, страница 176',
});
