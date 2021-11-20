const fs = require('fs/promises');
const path = require('path');
const contactList = require('./getContacts');
const { v4: uuidv4 } = require('uuid');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const addContact = async (contact) => {
  if (
    typeof contact.name !== 'string' ||
    typeof contact.phone !== 'string' ||
    typeof contact.email !== 'string'
  ) {
    throw new Error('Please check name/email/phone information');
  } else {
    const contacts = await contactList();
    const newContact = { id: uuidv4(), ...contact };

    await fs.writeFile(contactsPath, JSON.stringify([...contacts, newContact]));
    return newContact;
  }
};

//-----------

module.exports = addContact;
