// app.controller('exercisesController', ['$scope', '$http', function($scope, $http) {
//   $scope.favColor = 'green';
//   $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
//   $scope.rightNow = new Date();
// }]);
app.controller('exercisesController', ['$scope', function($scope) {
  $scope.favColor = 'green';
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
  $scope.rightNow = new Date();
  $scope.snakeCase = 'snake_case_for_ruby!';
  $scope.num = 3294723;
}]);

//$ becomes a
//minifiers don't minifies string
//ensures first arg is scope and second is http regardless of what you end up calling them