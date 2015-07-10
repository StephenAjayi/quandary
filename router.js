Quandary.Router.map(function() {
  this.resource("quandaries", {path: "/"});
  this.resource("recent-answers");
  this.resource('quandary', {path: 'quandaries/:quandary_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('new-quandary');

  });
