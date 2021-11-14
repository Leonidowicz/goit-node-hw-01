const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const addContact = async (contact) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const newContact = { id: uuidv4(), ...contact };
  await fs.writeFile(
    contactsPath,
    JSON.stringify([...contacts, newContact]),
    [],
    (() => {
      console.log('New contact addet', newContact);
    })()
  );
};

//-----------

module.exports = addContact;
