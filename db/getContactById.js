const contacts = require('./getContacts');

//-----------

async function getContactById(id) {
  const contactList = await contacts();

  const contact = contactList.find((item) => item.id === id);
  if (!contact) {
    throw new Error('Contact not found');
  } else {
    return contact;
  }
}

//-----------

module.exports = getContactById;
