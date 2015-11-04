app.factory('Solution', function() {
  var Solution;

  Solution.calculate = function(operator, num1, num2){
    if (operation === 'add') {
      Solution = num1 + num2;
    } else if (operation === 'subtract') {
      Solution = num1 - num2;
    } else if (operation === 'multiply') {
      Solution = num1 * num2;
    } else if (operation === 'divide') {
      Solution = num1 / num2;
    } else {
      Solution = 'Operation is not valid.'
    }
  }
  return Solution;
});