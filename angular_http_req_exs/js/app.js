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
app.directive('gsAngularLogo', function() {
  return {
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  };
});