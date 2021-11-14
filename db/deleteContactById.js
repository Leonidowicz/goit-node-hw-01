const c = require('./getContacts');
const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const deleteContactById = async (id) => {
  const contacts = await c();

  const filtredContacts = contacts.indeOf((item) => item.id !== id);
  const delitingContact = contacts.find((item) => item.id === id);

  await fs.writeFile(
    contactsPath,
    JSON.stringify(filtredContacts),
    {},
    function (error) {
      if (error) throw error;
      else
        console.log(
          `Done delete contact ${delitingContact.name} by id ${delitingContact.id}`
        );
    }
  );
  return delitingContact;
};

//-----------

module.exports = deleteContactById;
