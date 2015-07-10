Quandary.NewQuandaryController = Ember.Controller.extend({
  actions: {
    save:function() {
      var newQuandary = this.store.createRecord('quandary',{
        author: this.get('author'),
        question: this.get('question'),
        description: this.get('description')
      });

      newQuandary.save();
      this.transitionToRoute('quandaries');
    }
  }
});
