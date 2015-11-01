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
    var splitArr;
    var casedArr = [];
    var camelCased;
    //break up the word
    if (input.indexOf('_') !== -1) {
      splitArr = input.split('_');
    } else if (input.indexOf('-') !== -1) {
      splitArr = input.split('-');
    }

    //modify it
    splitArr.forEach(function(word, index) {
      var cased = '';
      if (splitArr[index] === splitArr[0]) {
        casedArr.push(word);
      } else if (splitArr[index] !== splitArr[0]) {
        // stash = word;
        // word[0] = word[0].toUpperCase()
        // // // splitArr[index[0]] = word[0].toUpperCase();
        // console.log(word[0]);
        // casedArr.push(word);

        for (var i = 0; i < word.length; i++) {
          if (i === 0) {
            cased += word[i].toUpperCase();
          } else {
            cased += word[i];
          }
        }
        console.log(cased);
        casedArr.push(cased);
      }
    });
    return camelCased = casedArr.join('');
  }
});

app.filter('redact', function() {
  return function(input, optional1) {
    return input.replace(optional1, 'REDACTED');
  }
});