import modal from './modal.js';

const btnDiscountClose = document.querySelector('.present__btn');

btnDiscountClose.addEventListener('click', () => {
	document.querySelector('.present').style.display = 'none';
});

modal('.present__icon', '.modal-discount', '.modal-discount .modal__close');
