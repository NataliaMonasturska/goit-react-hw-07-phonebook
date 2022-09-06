import React, { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from '../redux/contacts/contacts-operations'
import { RotatingLines } from 'react-loader-spinner';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.contacts.status);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])



  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {status === 'fetch' && (<div className={css.Loader}>
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      </div>)}
      <ContactList />
    </div>
  );
}



