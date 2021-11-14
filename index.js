const argv = require('yargs').argv;

//----------

const operation = require('./db/index');

//----------

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.log(await operation.getContacts());
      break;

    case 'get':
      console.log(await operation.getContactById(id));
      break;

    case 'add':
      console.log(await operation.addContact({ name, email, phone }));
      break;

    case 'del':
      console.log(await operation.removeContact(id));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
      break;
  }
}

//----------

invokeAction(argv);
