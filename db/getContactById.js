const contacts = require('./getContacts');

//-----------

async function getContactById(id) {
  const c = await contacts();

  const contact = c.find((item) => item.id === id);
  if (!contact || contact.length === 0) {
    throw new Error('Contact not found');
  } else {
    return contact;
  }
}

//-----------

module.exports = getContactById;
