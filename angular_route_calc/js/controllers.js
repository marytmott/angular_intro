app.controller('homeController', function($scope) {
  $scope.formatExample = 'math operation/number1/number2';
  $scope.example = 'add/1/2';
});
app.controller('calcController', function($scope, $routeParams) {
  $scope.operation = $routeParams.operation;
  $scope.num1 = $routeParams.num1;
  $scope.num2 = $routeParams.num2;
  //isNaN
  $scope.calculate = function() {
    return console.log(typeof num1);
  }

});