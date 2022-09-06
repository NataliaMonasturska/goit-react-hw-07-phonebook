import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from '../../redux/contacts/contacts-actions';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChangeInputFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.labelFilter}>
        <span className={css.text}>Find contacts by name</span>
        <input
          className={css.input}
          onChange={handleChangeInputFilter}
          value={filter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

