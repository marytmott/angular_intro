app.filter('kebab', function() {
  return function(input) {
    return input.replace(/_/g, '-'); //'g' at end means it will replace all underscores instead of just first one
  }
});