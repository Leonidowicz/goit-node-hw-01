const argv = require('yargs').argv;

//----------

const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./db/index');

//----------

function errorMesage(err) {
  console.log(`  !!!!!__an error occurred__!!!!! -->   `, err);
}
function showMessage(msg, result) {
  console.log(msg, result);
}

//----------

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    //
    case 'list':
      getContacts()
        .then((contacts) => {
          showMessage(`Contact list received: `, contacts);
        })
        .catch(error => errorMesage(error));
      break;

    case 'get':
      getContactById(id)
        .then((contact) => {
          showMessage(`Contact by id received: `, contact);
        })
        .catch(error => errorMesage(error));
      break;

    case 'add':
      addContact({ name, email, phone })
        .then((contact) => {
          showMessage(`New contact was addet: `, contact);
        })
        .catch(error => errorMesage(error));
      break;

    case 'remove':
      removeContact(id)
        .then((contact) => {
          showMessage(`Contact by id deleted: `, contact);
        })
        .catch(error => errorMesage(error));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
      break;
  }
}

//----------

invokeAction(argv);
