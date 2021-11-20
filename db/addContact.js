const fs = require('fs/promises');
const path = require('path');
const contactList = require('./getContacts');
const { v4: uuidv4 } = require('uuid');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const addContact = async (contact) => {
  if (
    !contact.name ||
    !contact.phone ||
    !contact.email ||
    typeof contact.name === 'boolean' ||
    typeof contact.phone === 'boolean' ||
    typeof contact.email === 'boolean'
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
