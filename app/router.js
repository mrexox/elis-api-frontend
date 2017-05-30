import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('blog');
  this.route('blogpost', {path: 'blog/:permalink'})
  this.route('portfolio');
  this.route('about');
  this.route('contacts', {path: 'contact-me'});

  this.route('admin', function() {
    this.route('posts', function() {
      this.route('new');
    });
    this.route('messages');
  });
});

export default Router;
