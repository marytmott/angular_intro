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

app.filter('pigLatin', function() {
  return function(input) {
    //just does consonants and vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var punctuationMarks = ['.', ',', ';', '?', '!'];
    var inputWordsArr = input.split(' ');
    var pigLatinArr;
    var vowelEnding = '-hay';
    var pigLatinString;

    pigLatinArr = inputWordsArr.map(function(word, index) {
      var firstVowelIndex = word.length - 1;
      var pigLatinBeginning;
      var pigLatinEnd;
      var punctuationAtEnd = '';

      //find first index of vowel
      vowels.forEach(function(vowel) {
        var vowelIndex = word.indexOf(vowel);
        if (vowelIndex !== -1 && vowelIndex < firstVowelIndex) {
          firstVowelIndex = vowelIndex;
        }
      });

      //find any punctuation --- need to make filter for hyphens too?
      //refactor for multiple punctuation
      punctuationMarks.forEach(function(mark) {
        if (word.endsWith(mark)) {
          punctuationAtEnd = mark;
        }
      });
      //cut off end if punctuation found
      if (punctuationAtEnd) {
        word = word.substring(0, word.length - 2);
      }

      if (firstVowelIndex === 0) {
        //if word starts w/ vowel
        pigLatinBeginning = word;
        pigLatinEnd = '-hay';
      } else {
        //if word does not start w/ vowel
        pigLatinBeginning = word.substring(firstVowelIndex);
        pigLatinEnd = '-' + word.substring(0, firstVowelIndex) + 'ay';
      }
      return pigLatinBeginning + pigLatinEnd + punctuationAtEnd;
    });
    return pigLatinString = pigLatinArr.join(' ');
  };
});

app.filter('redact', function() {
  return function(input, optional1) {
    return input.replace(optional1, 'REDACTED');
  }
});