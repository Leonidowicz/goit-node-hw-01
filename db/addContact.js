const fs = require('fs/promises');
const path = require('path');
const contactList = require('./getContacts');
const { v4: uuidv4 } = require('uuid');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const addContact = async (contact) => {
  if (
    contact.name &&
    contact.phone &&
    contact.email &&
    contact.name?.length &&
    contact.email?.length &&
    typeof contact.phone === 'number'
  ) {
    const contacts = await contactList();
    const newContact = { id: uuidv4(), ...contact };
    try {
      await fs.writeFile(
        contactsPath,
        JSON.stringify([...contacts, newContact])
      );
      return newContact;
    } catch {
      (error) => error;
    }
  } else {
    throw new Error('Please check name/email/phone information');
  }
};

//-----------

module.exports = addContact;
