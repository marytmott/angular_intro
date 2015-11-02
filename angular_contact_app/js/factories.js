app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [
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

  ContactList.addContact = function(obj) {
    ContactList.contactList.push(obj);
  };

  ContactList.findContact = function(name) {
    // TODO
  };

  ContactList.removeContact = function(index) {
    ContactList.contactlist[index] = null;
    // TODO
  };

  return ContactList;
});