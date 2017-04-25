import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books');
  this.route('contact');
  this.route('about');
  this.route('admin');
  this.route('article', {path: '/article/:story_id'});
});

export default Router;
