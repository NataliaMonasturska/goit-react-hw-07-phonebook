import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from '../../services/Api'


export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async () => {
        const contacts = await getContacts();
        return contacts;
    }
)

export const postContact = createAsyncThunk('contacts/add',
    async (newContact) => {
        const contact = await addContact(newContact);
        return contact;
    }
)
export const contactDelete = createAsyncThunk('contacts/delete',
    async (contactId) => {
        const id = await deleteContact(contactId);
        return id;
    }
)