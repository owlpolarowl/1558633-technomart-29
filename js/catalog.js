const buyButtons = document.querySelectorAll('.buy-button');
const modalClose = document.querySelectorAll('.modal-close');
const popupProductAdd = document.querySelector('.product-add');

for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    popupProductAdd.classList.add('modal-show');
  });
}

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    popupProductAdd.classList.remove('modal-show');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popupProductAdd.classList.contains('modal-show')) {
      evt.preventDefault();

     popupProductAdd.classList.remove('modal-show');
    }    
  }
});