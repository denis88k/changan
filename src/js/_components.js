import './components/address.js'; // address
import './components/bank-partner.js'; // bank-partner
import './components/calc-credit.js'; // calc-credit
import './components/select.js'; // select
import './components/validateForm.js'; // validateForm

(CSS.paintWorklet || paintWorklet).addModule('smooth-corners.js');

registerPaint(
	'smooth-corners',
	class {
		static get inputProperties() {
			return ['--smooth-corners'];
		}
		paint(ctx, size, styleMap) {
			const exp = styleMap.get('--smooth-corners').toString();

			const n = exp;
		}
	},
);
