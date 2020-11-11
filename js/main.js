const feedbackButton = document.querySelector('.button-feedback');

const buyButtons = document.querySelectorAll('.buy-button');
const productList = document.querySelector('.product-list');
const popupProductAdd = document.querySelector('.product-add');
const popupProductClose = popupProductAdd.querySelector('.modal-close');
const modalWindow = document.querySelectorAll('.modal');
// MAP
const mapLink = document.querySelector('.about-map');
const popupMap = document.querySelector('.modal-map');
const mapClose = popupMap.querySelector('.modal-close');
//feedback
const feedback = document.querySelector('.feedback');
const feedbackForm = document.querySelector('.feedback-form');
const name = feedbackForm.querySelector('[name=name]');
const email = feedbackForm.querySelector('[name=email]');
const message = feedbackForm.querySelector('.message');
const feedbackClose = feedback.querySelector('.modal-close');
//services
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

popupProductClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupProductAdd.classList.remove('modal-show');
  });



mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.remove('modal-show');
});


// Модальное окно с фидбеком
feedbackButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  feedback.classList.add('modal-show');
  
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

feedbackClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedback.classList.remove('modal-show');
});


 // Обработчик отправки данных формы
 feedback.addEventListener('submit', function(evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();

    feedback.classList.remove('modal-error');
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {

      feedback.classList.remove('modal-show');
      feedback.classList.remove('modal-error');
    // }

    popupMap.classList.remove('modal-show');
    popupProductAdd.classList.remove('modal-show');
  }
});



// Карта

mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('modal-show');
  });
  
  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.remove('modal-show');
  });
  
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains('modal-show')) {
        evt.preventDefault();
        popupMap.classList.remove('modal-show');
      }
    }
  });

// slider services

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

  sliderControl.classList.add('delivery-button');
});

guaranteeButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  sliderControl.classList.add('guarantee-button');
});

creditButton.addEventListener('click', function(evt) {
  evt.preventDefault();

});