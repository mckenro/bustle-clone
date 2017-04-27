import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    return Ember.RSVP.hash({
      stories: this.store.findAll('story'),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
    
  }
});
