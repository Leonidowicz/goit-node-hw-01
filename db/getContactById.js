const fs = require('fs/promises');
const path = require('path');

//-----------

const contactsPath = path.resolve('./db/', 'contacts.json');

//-----------

const getContactById = async (id) => {
  const data = await fs.readFile(contactsPath);
  const contact = JSON.parse(data).filter((item) => item.id === id);
  return contact?.length === 1
    ? contact
    : console.log(`something is wrong, you need check the get parameters`);
};

//-----------

module.exports = getContactById;
