import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    title: 'name',
    createdAt: 'created-at',
  }
});
