app.filter('kebab', function() {
  return function(input) {
    if (isNaN(input)) {
      return input.replace(/_/g, '-'); //'g' at end means it will replace all underscores instead of just first one
    } else {
      return input;
    }
  }
});

app.filter('camel', function() {
  return function(input) {
    //for snake_case
    if (input.indexOf('_') !== -1) {

    }
    /*if include
      do this
    else if include
      do that*/
  }
});