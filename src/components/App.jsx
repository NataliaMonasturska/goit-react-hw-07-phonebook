import React, { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from "react-redux";
import {fetchContacts} from '../redux/contacts/contacts-operations'
import css from './App.module.css';
// const LS_KEY = 'reader_contacts';

export const App = () => {
  // const items = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // window.localStorage.setItem(LS_KEY, JSON.stringify(items))
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList
      />
    </div>
  );
}



