import Ember from 'ember';

export default Ember.Component.extend({
		classNames: ['blog'],
		host: 'http://localhost:3000',
		neq(a, b) {
			return a == b;
		}
});
