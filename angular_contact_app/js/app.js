var app = angular.module('contacts', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/contacts.html',
      controller: 'contactsController'
    })
    .when('/:name', {
      templateUrl: 'partials/show.html',
      controller: 'showContactController'
    })
    .otherwise({redirectTo: '/'});
}]);

