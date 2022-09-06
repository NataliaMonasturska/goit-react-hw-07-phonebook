import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact} from '../../../redux/contacts/contacts-actions';
import { contactDelete} from '../../../redux/contacts/contacts-operations';



export const Contact = ({contact}) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <span className={css.contactName}>{contact.name}: </span>
      <div>
        <span className={css.contactNumber}>{contact.phone}</span>
        <button
          type="button"
          onClick={() => dispatch(contactDelete(contact.id))}
          className={css.btn}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
