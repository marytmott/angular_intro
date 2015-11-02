app.controller('homeController', ['$scope', '$http', function($scope, $http) {
  $http.get('../itunes.json').then(function(data) {
    $scope.itunesData = data.data.results;
  });
}]);
app.controller('invalidTestController', ['$scope', '$http', function($scope, $http) {
  $http.get('https://www.google.com').then(function(res) {
    console.log('res',  res);
    if (res) {
      console.log(res);
      $scope.data = res;
    }
  }, function(res) {
    if (res) {
      console.log(res);
      $scope.error = res;
    }
  });
}]);
app.controller('messagesController', ['$scope', '$http', function($scope, $http) {
  $http.get('https://still-tundra-8387.herokuapp.com').then(function(res) {
    if (res) {
      $scope.messages = res;
    }
  }, function(res) {
    if (res) {
      $scope.error = res;
    }
  });
}]);