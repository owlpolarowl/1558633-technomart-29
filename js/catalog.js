const productList = document.querySelector('.product-list');
const buyButtons = document.querySelectorAll('.buy-button');
const popupProductAdd = document.querySelector('.product-add');
const modalClose = document.querySelector('.modal-close');


productList.addEventListener('click', function(evt) {
  let target = evt.target;
  if (target.className === 'buy-button') {
  popupProductAdd.classList.add('modal-show');
}
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();

  popupProductAdd.classList.remove('modal-show');
  });


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popupProductAdd.classList.contains('modal-show')) {
      evt.preventDefault();

     popupProductAdd.classList.remove('modal-show');
    }    
  }
});
