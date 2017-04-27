import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    return this.store.findRecord('story', params.story_id);
  },
  actions:{
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var story = params.story;
      console.log(newComment.user);
      console.log(story.title);
      story.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return story.save();
      });
      this.transitionTo('article', story);
    },
  }

});
