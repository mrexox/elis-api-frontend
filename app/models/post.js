import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  permalink: DS.attr('string'),
  //visible: DS.attr('boolean', {defaultValue: false}),
  createdAt: DS.attr('date'),
  likes: DS.attr('number'),
  tags: DS.hasMany('tag'),
  cover: DS.belongsTo('image')
});
