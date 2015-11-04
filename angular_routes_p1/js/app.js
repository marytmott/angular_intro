var app = angular.module('exercises', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'ExercisesController'
    })
    .when('/pig-latin', {
      templateUrl: 'partials/pig-latin.html',
      controller: 'PigLatinController'
    })
    .when('/redact', {
      templateUrl: 'partials/redact.html',
      controller: 'RedactController'
    })
    .otherwise({redirectTo: '/'})
}]);