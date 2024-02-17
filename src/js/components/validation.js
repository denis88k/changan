import JustValidate from 'just-validate';
import './../vendor/inputMask.js';

// formSelector --- класс формы

const validateForms = form => {
	const inputTel = form.querySelector('input[type="tel"]');

	if (inputTel) {
		const inputMask = new Inputmask('+7 (999) 999 - 99 - 99');
		inputMask.mask(inputTel);
	}

	const validation = new JustValidate(form);

	const inputName = form.querySelector('.input__name');

	if (inputName) {
		// console.log('name', form);

		validation
			.addField('.input__tel', [
				{
					rule: 'required',
					value: true,
					errorMessage: 'Некорректный номер',
				},
				{
					rule: 'function',
					validator: function () {
						const phone = inputTel.inputmask.unmaskedvalue();
						return phone.length === 10;
					},
					errorMessage: 'Некорректный номер',
				},
			])
			.addField('.input__name', [
				{
					rule: 'minLength',
					value: 3,
					errorMessage: 'Впишите не менее 3 букв',
				},
				{
					rule: 'maxLength',
					value: 30,
					errorMessage: 'Впишите не более 30 букв',
				},
				{
					rule: 'required',
					value: true,
					errorMessage: 'Введите имя',
				},
			])
			.onSuccess(event => {
				event.target.reset();

				document.querySelectorAll('.form')?.forEach(form => {
					form.querySelectorAll('.form__input')?.forEach(input => {
						if (input.classList.contains('just-validate-error-field')) {
							input.classList.remove('just-validate-error-field');
						}
						if (input.classList.contains('just-validate-success-field')) {
							input.classList.remove('just-validate-success-field');
						}
					});
				});
			});
	} else {
		// console.log('tel', form);

		validation
			.addField('.input__tel', [
				{
					rule: 'required',
					value: true,
					errorMessage: 'Некорректный номер',
				},
				{
					rule: 'function',
					validator: function () {
						const phone = inputTel.inputmask.unmaskedvalue();
						return phone.length === 10;
					},
					errorMessage: 'Некорректный номер',
				},
			])
			.onSuccess(event => {
				event.target.reset();

				document.querySelectorAll('.form')?.forEach(form => {
					form.querySelectorAll('.form__input')?.forEach(input => {
						if (input.classList.contains('just-validate-error-field')) {
							input.classList.remove('just-validate-error-field');
						}
						if (input.classList.contains('just-validate-success-field')) {
							input.classList.remove('just-validate-success-field');
						}
					});
				});
			});
	}
};

export default validateForms;
