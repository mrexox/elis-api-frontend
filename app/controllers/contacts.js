import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitMessage: function() {
     alert(this.get('name')); 
    }
  },
  email: 'anilexez@ya.ru'
  
});
