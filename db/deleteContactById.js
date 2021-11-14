const listContacts = require('./getContacts');
const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const deleteContactById = async (contactId) => {
  const contacts = await listContacts();

  const index = contacts.findIndex((i) => i.id === contactId);

  if (index === -1) {
    throw new Error(`Id "${contactId}" not found`);
  }

  const deletedContact = JSON.stringify(contacts[index], null, 2);
  contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return `The contact  ${deletedContact} was delete`;
};

//-----------

module.exports = deleteContactById;
