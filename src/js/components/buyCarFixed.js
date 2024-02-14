import { addClass, containsClass, removeClass } from './helpers.js';

// появление плашки купить

const buyCarFixed = document.querySelector('.buy-car-fixed');
const detailsTopBtnPhone = document.querySelector('.details-top__btn-phone'); // элемент за котором будем следить, точнее за её верхней точкой
const TopDetailsTopBtnPhone = detailsTopBtnPhone.getBoundingClientRect().top; // верхняя точка элемента, который содержит рассрочка, trade-in

const stickyBuyCarFixed = () => {
	// console.log('window.scrollY:', window.scrollY);
	// console.log('TopDetailsTopBtnPhone:', TopDetailsTopBtnPhone);
	if (window.scrollY > TopDetailsTopBtnPhone) {
		addClass(buyCarFixed, 'buy-car-fixed-show');
	} else {
		containsClass(buyCarFixed, 'buy-car-fixed-show') && removeClass(buyCarFixed, 'buy-car-fixed-show');
	}
};
window.addEventListener('scroll', stickyBuyCarFixed);
