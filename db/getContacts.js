const fs = require('fs/promises');
const path = require('path');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const getContacts = async () => {
  const contacts = JSON.parse(await fs.readFile(contactsPath));
  return contacts;
};

//-----------
getContacts();
module.exports = getContacts;
