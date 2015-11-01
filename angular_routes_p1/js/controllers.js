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
  $scope.kebabCase = 'kebab-case-for-bbqs-imo';
  $scope.num = 3294723;
}]);
app.controller('pigLatinController', ['$scope', function($scope) {
  $scope.sample;
}]);
app.controller('redactController', ['$scope', function($scope) {
  $scope.redact = 'What can we redact in this sentence?';
}]);

//$ becomes a
//minifiers don't minifies string
//ensures first arg is scope and second is http regardless of what you end up calling them