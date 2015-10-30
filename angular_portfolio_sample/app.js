var app = angular.module('portfolio', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/bio.html',
      controller: 'bioController'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'projectsController'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'resumeController'
    })
    .otherwise({redirectTo: '/'})
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}]);