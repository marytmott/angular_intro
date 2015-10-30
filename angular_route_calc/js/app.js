var app = angular.module('calculateThis', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .when('/:operation/:num1/:num2', {
      templateUrl: 'partials/calc.html',
      controller: 'calcController'
    })
    .otherwise({redirectTo: '/'})
    $locationProvider.html5Mode(true);
}]);