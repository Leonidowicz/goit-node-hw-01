const fs = require('fs/promises');
const path = require('path');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const getContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

//-----------

module.exports = getContacts;