import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    tagName: 'tag-name'
  }
});
