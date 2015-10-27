var app = angular.module('pingPong', []);
app.controller('score', function($scope) {
  $scope.player1 = 0;
  $scope.player2 = 0;
  $scope.score = 0;
  $scope.turns = [0, 1, 2, 5, 6, 9, 10];
  $scope.addScore = function(player) {
    if ($scope.score < 11) {
      $scope[player] += 1;
      $scope.score = $scope.player1 + $scope.player2;
    }
  };
  $scope.reset = function() {
    $scope.player1 = 0;
    $scope.player2 = 0;
    $scope.score = 0;
  };
});