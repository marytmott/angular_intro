app.controller('showContactsController', ['$scope', 'ContactList', function($scope, ContactList) {
  $scope.contactData = ContactList.contactList;
}]);
app.controller('addContractController', ['$scope', function($scope) {
  $scope.addContact = ContactList.addContact(newContact);

}]);