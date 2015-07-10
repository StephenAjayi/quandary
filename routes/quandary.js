Quandary.QuandaryRoute = Ember.Route.extend({
  model: function(params) {
    return quandaries.findBy('id', params.quandary_id);
  }

});
