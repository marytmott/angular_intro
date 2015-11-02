var app = angular.module('contacts', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/show.html',
      controller: 'showContactsController'
    })
    .when('/add-contact', {
      templateUrl: 'partials/add_contact.html',
      controller: 'addContactController'
    })
    .otherwise({redirectTo: '/'});
}]);

