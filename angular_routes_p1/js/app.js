var app = angular.module('exercises', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'exercisesController'
    })
    .when('/pig-latin', {
      templateUrl: 'partials/pig-latin.html',
      controller: 'pigLatinController'
    })
    .when('/redact', {
      templateUrl: 'partials/redact.html',
      controller: 'redactController'
    })
    .otherwise({redirectTo: '/'})
}]);