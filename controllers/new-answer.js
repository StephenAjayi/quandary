Quandary.NewAnswerController = Ember.Controller.extend({
  needs: ['quandary'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        text: this.get('text')
      });
      answer.save();

      var quandary = this.get('controllers.quandary.model');
      quandary.get('answers').pushObject(answer);
      quandary.save();
      this.transitionToRoute('quandary', quandary.id);
    }
  }
});
