import DS from 'ember-data';

export default DS.Model.extend({
  tagName: DS.attr('string'),
  posts: DS.hasMany('post')
});
