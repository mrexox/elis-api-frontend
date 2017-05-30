import Ember from 'ember';

export default Ember.Component.extend({
/*	didInsertElement() {
		this._super(...arguments);
		Ember.$(document).bind('scroll', this.showMenuStatic);
	},
	willDestroyElement() {
		this._super(...arguments);
		Ember.$(document).unbind('scroll');
	},
	showMenuStatic() {
			var menu = document.getElementById('menu');
			var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		if(scroll > 500) {
			menu.classList.remove('on-the-top');
			menu.classList.add('fixed');
			if (scroll > 500 && scroll < 800) {
				menu.style.opacity = (scroll - 560) / 300;
			} else if (scroll > 800) {
				menu.style.opacity = 0.8;
			}
		} else {
			menu.classList.remove('fixed');
			menu.classList.add('on-the-top');
			menu.style.opacity = 1;
		}
	}*/
});
