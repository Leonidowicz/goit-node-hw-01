const fs = require('fs/promises');
const path = require('path');
const c = require('./getContacts');
const { v4: uuidv4 } = require('uuid');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const addContact = async (contact) => {
  console.log('~ contact~', contact);

  if (
    contact.name &&
    contact.phone &&
    contact.email &&
    contact.name?.length > 0 &&
    contact.email?.length > 0
  ) {
    const contacts = await c();
    const newContact = { id: uuidv4(), ...contact };
    try {
      await fs.writeFile(
        contactsPath,
        JSON.stringify([...contacts, newContact])
      );
      return newContact;
    } catch {
      throw new Error('Please check name/email/phone information');
    }
  }
};

//-----------

module.exports = addContact;
