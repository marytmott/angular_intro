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
  var url = 'https://still-tundra-8387.herokuapp.com/messages';
  function getMessages() {
    $http.get(url).then(function(res) {
      if (res) {
        $scope.messages = res.data;
      }
    }, function(res) {
      if (res) {
        $scope.error = 'error!';
      }
    });
  }
  getMessages();
  $scope.addMessage = function() {

    console.log($scope.message);
    $http.post(url, {
      message: $scope.message
    }).then(function(data) {
      $scope.message = {};
      getMessages();
    });
  }
}]);

// .success()
// .error()