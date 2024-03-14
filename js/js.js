const modal = document.querySelector('.backdrop');
const Modalbtnopen = document.querySelector('.modal-btn-open');
const Modalbtnclose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

Modalbtnopen.addEventListener('click', toggleModal);
Modalbtnclose.addEventListener('click', toggleModal);

