app.controller('homeController', ['$scope', function($scope) {
  $scope.formatExample1 = 'math operation/number1/number2';
  $scope.formatExample2 = 'math operation/?variable=number1&variable2=number2';
  $scope.example1 = '/add/1/2';
  $scope.example2 = '/add/?x=1&y=10';
  $scope.operators = ['add', 'subtract', 'multiply', 'divide'];
}]);

//--> REFACTOR/DRY UP these 2 controllers!!!
app.controller('Calc1Controller', ['$scope', '$routeParams', function($scope, $routeParams) {
  // debugger
  var operation = $routeParams.operation.toLowerCase();
  var num1 = parseInt($routeParams.num1);
  var num2 = parseInt($routeParams.num2);

  if (operation === 'add') {
    $scope.solution = num1 + num2;
  } else if (operation === 'subtract') {
    $scope.solution = num1 - num2;
  } else if (operation === 'multiply') {
    $scope.solution = num1 * num2;
  } else if (operation === 'divide') {
    $scope.solution = num1 / num2;
  } else {
    $scope.solution = 'Operation is not valid.'
  }
}]);
app.controller('Calc2Controller', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
  console.log($location.search());
  //add invalid entry string
  var operation = $routeParams.operation.toLowerCase();
  var userInput = $location.search();
  var variables = Object.keys(userInput);
  var num1 = parseInt(userInput[variables[0]]);
  var num2 = parseInt(userInput[variables[1]]);

  if (operation === 'add') {
    $scope.solution = num1 + num2;
  } else if (operation === 'subtract') {
    $scope.solution = num1 - num2;
  } else if (operation === 'multiply') {
    $scope.solution = num1 * num2;
  } else if (operation === 'divide') {
    $scope.solution = num1 / num2;
  } else {
    $scope.solution = 'Operation is not valid.'
  }
}]);