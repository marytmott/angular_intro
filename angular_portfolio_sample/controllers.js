app.controller('bioController', function($scope) {
  $scope.name = 'Me';
  $scope.age = 31;
  $scope.location = 'Seattle, Wa';
});
app.controller('projectsController', function($scope) {
  $scope.gHLink = 'https://github.com/marytmott';
});
app.controller('resumeController', function($scope) {
  $scope.resume = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
});


// app.controller('exercisesController', function($scope) {
//   $scope.favColor = 'green';
//   $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
//   $scope.rightNow = new Date();
// });