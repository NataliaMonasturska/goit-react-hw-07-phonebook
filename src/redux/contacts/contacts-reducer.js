import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { changeFilter } from './contacts-actions';
import { fetchContacts, postContact, contactDelete } from './contacts-operations'

const items = createReducer([],
    {
        [fetchContacts.fulfilled]: (_, { payload }) => payload,
        [postContact.fulfilled]: (state, { payload }) => [...state, payload],
        [contactDelete.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload)
    });

const status = createReducer(true, {
    [fetchContacts.pending]: () => 'fetch',
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [contactDelete.pending]: (_, action) => action.meta.arg,
    [contactDelete.fulfilled]: () => false,
    [contactDelete.rejected]: () => false,

    [postContact.pending]: () => 'add',
    [postContact.fulfilled]: () => 'addSuccess',
    [postContact.rejected]: () => false,
})

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, { payload }) => payload,
    [fetchContacts.pending]: () => null,

    [contactDelete.rejected]: (_, { payload }) => payload,
    [contactDelete.pending]: () => null,

    [postContact.rejected]: (_, { payload }) => payload,
    [postContact.pending]: () => null,
})

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})
export const contactsReducer = combineReducers({
    items,
    status,
    error,
    filter,
})

