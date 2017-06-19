import DS from 'ember-data';

export default DS.Model.extend({
	createdAt: DS.attr('date'),
	description: DS.attr('string'),
	image: DS.hasOne('image')
});
