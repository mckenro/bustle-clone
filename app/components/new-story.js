import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveStory() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image'),
        category: this.get('category'),
        featured: this.get('featured'),
      };
      this.sendAction('saveStory', params);
    }
  }
});
