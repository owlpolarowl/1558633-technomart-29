const feedbackButton = document.querySelector('.button-feedback');

const buyButtons = document.querySelectorAll('.buy-button');
const modalClose = document.querySelector('.modal-close');
const productList = document.querySelector('.product-list');
const popupProductAdd = document.querySelector('.product-add');
const modalWindow = document.querySelectorAll('.modal');
const feedback = document.querySelector('.feedback');
// MAP
const mapLink = document.querySelector(".about-map");
const popupMap = document.querySelector('.modal-map');
const mapClose = popupMap.querySelector(".modal-close");

const feedbackForm = feedback.querySelector('.feedback-form');

const name = feedback.querySelector('[name=name]');
const email = feedback.querySelector('[name=email]');
const message = feedback.querySelector('.message');
const sliderControl = document.querySelector('.slider-services-control');
const buttonList = document.querySelectorAll('.slider-services-button');
const slideTitle = document.querySelector('.slider-services-title');
const slideDesc = document.querySelector('.slider-services-description');
const deliveryButton = document.querySelector('.delivery-button');
const guaranteeButton = document.querySelector('.guarantee-button');
const creditButton = document.querySelector('.credit-button');


// localStorage
let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

// Товары
productList.addEventListener('click', function(evt) {
  let target = evt.target;
  if (target.className == 'buy-button') {
  popupProductAdd.classList.add('modal-show');
}
});

modalClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupProductAdd.classList.remove('modal-show');
  });


window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackForm.classList.contains('modal-show')) {
        evt.preventDefault();
  
        feedbackForm.classList.remove('modal-show');
        feedbackForm.classList.remove('modal-error');
      }
  
      popupMap.classList.remove('modal-show');
      popupProductAdd.classList.remove('modal-show');
    }
  });

// Модальное окно с фидбеком
feedbackButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  feedbackForm.classList.add('modal-show');
  
  if (storageName && storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
    message.focus();
  } else if (storageEmail && !storageName) {
    email.value = storageEmail;
    name.focus();
  } else if (storageName && !storageEmail) {
    name.value = storageName;
    email.focus();
  } else {
    name.focus();
  }
});


 // Обработчик отправки данных формы
feedbackButton.addEventListener('submit', function(evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();

    feedbackForm.classList.remove('modal-error');
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains('modal-show')) {
      evt.preventDefault();

      feedbackForm.classList.remove('modal-show');
      feedbackForm.classList.remove('modal-error');
    }

    popupMap.classList.remove('modal-show');
    popupProductAdd.classList.remove('modal-show');
  }
});

// Карта

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
  });
  
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal-show")) {
        evt.preventDefault();
        popupMap.classList.remove("modal-show");
      }
    }
  });
//  Cлайдер с делегированием, который работает, но не меняет картиночки

// sliderControl.addEventListener('click', function(event) {
//     let target = event.target;
//     if (target.className == 'slider-button-button') {
//         buttonList.classList.remove('slider-button-active');
//     };
//   });

// Слайдер 2, который работает

function removeActive() {
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove('slider-button-active');
  }
}

for (let i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener('click', function(evt) {
    removeActive();
    evt.currentTarget.classList.add('slider-button-active');
  });
}

deliveryButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  slideTitle.innerHTML = 'Доставка';
  slideDesc.innerHTML = 'Мы с удовольствием доставим ваш товар прямо<br>к вашему подъезду совершенно бесплатно!<br>Ведь мы неплохо заработаем,<br>поднимая его на ваш этаж!'; 
//   sliderControl.classList.add('delivery-button');
});

guaranteeButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  slideTitle.innerHTML = 'Гарантия';
  slideDesc.innerHTML = 'Если купленный у нас товар поломается или заискрит,<br>а также в случае пожара, спровоцированного его<br> возгоранием, вы всегда можете быть уверены в нашей<br>гарантии. Мы обменяем сгоревший товар на новый. Дом уж восстановите как-нибудь сами.';
//   sliderControl.classList.add('guarantee-button');
});

creditButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  slideTitle.innerHTML = 'Кредит';
  slideDesc.innerHTML = 'Залезть в долговую яму стало проще!<br>Кредитные консультанты придут вам на помощь.';
//   sliderControl.classList.add('credit-button');
});