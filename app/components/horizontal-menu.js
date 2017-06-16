import Ember from 'ember';

export default Ember.Component.extend({
	didRender() {
		if ( Ember.$(window).width() < 720 ) {
			Ember.$('.toggler').show();
			Ember.$('.toggler').on('click', function() {
					Ember.$('.menu').toggle(100);
			});
		} 
	},
	didUpdate() { didRender(); }
});
