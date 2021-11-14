const getContacts = require('./getContacts');
const getContactById = require('./getContactById');
const removeContact = require('./deleteContactById');
const addContact = require('./addContact');

module.exports = { getContacts, getContactById, removeContact, addContact };

// 7) https://prnt.sc/1zjihr9
// По первому блоку - зачем делать две фильтрации (у массивов есть куча классных методов кроме filter) можно сначала найти индекс подходящего контакта (если не найден, обработать корректный ответ), потом например сделать splice

// e887e695-2ac5-45bd-9294-b37b3e75f315
// 4a76e1ff-b911-4680-a13d-82e80f5d4fd5
// 9d4ec45a-c62c-43ee-ae65-c8cfe4a59506
// d07e1e5b-2f60-48ea-87b7-cf7e0e57814f
// 034eb0e3-109a-43bd-abe7-633010bbe630
// cd9295cb-44c9-4075-b568-7214aabb1d93
//
//
//
//
//
//
//
//
//
//
////////////////////////////////////
