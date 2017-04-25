import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
  actions: {
    updateStoryForm() {
      this.set('updateStoryForm', true);
    },
    update(story) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        author: this.get('author'),
        date: this.get('date'),
        featured: this.get('featured'),
        category: this.get('category'),
      };
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
