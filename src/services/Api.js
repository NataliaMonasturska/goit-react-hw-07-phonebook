const axios = require('axios').default;

const CONTACTS_URL = 'https://63150aa45b85ba9b11dba549.mockapi.io/contacts/';

export const getContacts = async () => {
  const response = await axios.get(`${CONTACTS_URL}`);
  const contacts = await response.data;
  return contacts;
};

export const addContact = async (newContact) => {
  const response = await axios.post(CONTACTS_URL, newContact);
  const contact = await response.data;
  return contact;
};

export const deleteContact = async (contactId) => {
  const response = await axios.delete(`${CONTACTS_URL}${contactId}`);
  const id = await response.data.id;
  console.log("id",id);
  return id;
};
