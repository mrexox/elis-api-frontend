import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPost: function() {
      var tags = this.get('tags').split(/\s*,\s*/);
      var newTags = [];
      for(var i = 0; i < tags.length; ++i) {
        var newTag = this.store.createRecord('tag',{
          name: tags[i]
        });
        newTags.push(newTag);
      }
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        text: this.get('text'),
        permalink: this.get('permalink'),
        createdAt: new Date(),
        likes: 0,
        tags: newTags
      });
      newPost.save();
      console.dir(newPost);
    }
  } 
});
