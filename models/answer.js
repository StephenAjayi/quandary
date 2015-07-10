Quandary.Answer = DS.Model.extend({
  text: DS.attr(),
  quandary: DS.belongsTo('quandary', {async: true})

});
