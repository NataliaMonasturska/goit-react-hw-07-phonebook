import React from 'react';
import { Contact } from 'components/ContactList/Contact/Contact';
import { useSelector } from "react-redux";


export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const FilterNormalize = filter.toLowerCase();
  const filterContacts = items.filter(({ name }) => {
    return name.toLowerCase().includes(FilterNormalize)
  })

  return (
    <div>
      <ul>
        {filterContacts.length > 0 && (filterContacts.map(item => (
          <Contact
            key={item.id}
            contact={item}
          />
        )))}
      </ul>
    </div>
  );
};

