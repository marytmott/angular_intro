var app = angular.module('calculateThis', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .when('/:operation/', {
      templateUrl: 'partials/calc.html',
      controller: 'Calc2Controller'
    })
    .when('/:operation/:num1/:num2', {
      templateUrl: 'partials/calc.html',
      controller: 'Calc1Controller'
    })
    .otherwise({redirectTo: '/'});
    // $locationProvider.html5Mode(true);
}]);