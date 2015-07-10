Quandary.QuandariesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('quandary');
  }

});
