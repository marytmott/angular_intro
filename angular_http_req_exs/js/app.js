var app = angular.module('reqApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/data.html',
      controller: 'homeController'
    })
    .when('/invalid-test', {
      templateUrl: 'partials/invalid-test.html',
      controller: 'invalidTestController'
    })
    .when('/messages', {
      templateUrl: 'partials/messages.html',
      controller: 'messagesController'
    })
    .otherwise({redirectTo: '/'});
}]);