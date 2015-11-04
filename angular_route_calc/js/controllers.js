app.controller('homeController', ['$scope', function($scope) {
  $scope.formatExample = 'math operation/number1/number2';
  $scope.example = 'add/1/2';
  $scope.operators = ['add', 'subtract', 'multiply', 'divide'];
}]);

app.controller('calcController', ['$scope', '$routeParams', function($scope, $routeParams) {
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