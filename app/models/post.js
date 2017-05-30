import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  permalink: DS.attr('string'),
  likes: DS.attr('number'),
  createdAt: DS.attr('date'),
  tags: DS.hasMany('tag')
});
