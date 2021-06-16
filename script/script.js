  /* MODAL */

  const open = document.getElementById('open');
  const modal__container = document.getElementById('modal__container');
  const close = document.getElementById('close-modal-btn');

open.addEventListener('click', () => {
  modal__container.classList.add('show');
})

close.addEventListener('click', () => {
  modal__container.classList.remove('show');
})
