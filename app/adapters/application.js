import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:7070/api',
  shouldRealoadAll() { return true; }
});
