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
    .otherwise({redirectTo: '/'})
}]);