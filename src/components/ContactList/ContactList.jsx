import React from 'react';
import { Contact } from 'components/ContactList/Contact/Contact';
import { useSelector } from "react-redux";
import css from './contactList.module.css';


export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const status = useSelector(state => state.contacts.status)
  const FilterNormalize = filter.toLowerCase();
  const filterContacts = items.filter(({ name }) => {
    return name.toLowerCase().includes(FilterNormalize)
  })

  return (
    <ul className={css.contactList}>
      {filterContacts.length > 0 ?
        (filterContacts.map(item => (
          <Contact
            key={item.id}
            contact={item}
          />
        )))
        : !status && <p>You dont have contacts</p>}
    </ul>
  );
};

