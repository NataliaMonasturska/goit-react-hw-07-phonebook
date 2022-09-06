import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { changeFilter } from './contacts-actions';
import {fetchContacts, postContact, contactDelete} from './contacts-operations'

const items = createReducer([], 
     {
        [fetchContacts.fulfilled]: (_,{ payload }) => payload,
        [postContact.fulfilled]: (state, { payload }) => [...state, payload],
        [contactDelete.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload)
    });

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
})

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, {payload}) => payload,
    [fetchContacts.pending]: () => null,
})

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})
export const contactsReducer = combineReducers({
    items,
    isLoading,
    error,
    filter,
})

