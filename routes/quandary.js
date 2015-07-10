Quandary.QuandaryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('quandary', params.quandary_id);
  }

});
