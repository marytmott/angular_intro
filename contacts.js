var app = angular.module('contacts', []);
app.controller('contactsInfo', function($scope) {
  $scope.contacts = [
    {
      name: 'Peter',
      email: 'peter@email.com',
      phone: '(123) 456-7890'
    },
    {
      name: 'Sarah Myers',
      email: 'sarah@email.com',
      phone: '(123) 456-7890'
    }
    ];
  $scope.newContact = {};
  $scope.addContact = function() {
    //save new contact
    // console.log($scope.newContact);
    $scope.contacts.push($scope.newContact);
    //clear out fields
    $scope.newContact = {};
  };


});