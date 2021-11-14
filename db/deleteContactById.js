const fs = require('fs/promises');
const path = require('path');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const deleteContactById = async (id) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data).filter((item) => item.id !== id);
  const delitingContact = JSON.parse(data).filter((item) => item.id === id);
  await fs.writeFile(
    contactsPath,
    JSON.stringify(contacts),
    [],
    (function (error) {
      if (error) throw error;
      else
        console.log(
          `Done delete contact ${delitingContact[0].name} by id ${delitingContact[0].id}`
        );
    })()
  );
};

//-----------

module.exports = deleteContactById;
