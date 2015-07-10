Quandary.QuandariesRoute = Ember.Route.extend({
  controllerName: 'quandaries',
  renderTemplate: function() {
    this.render('quandaries');
  },
  model: function() {
    return questions
  }

});
