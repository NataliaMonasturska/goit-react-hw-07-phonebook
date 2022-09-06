import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch, useSelector } from "react-redux";
import { contactDelete} from '../../../redux/contacts/contacts-operations';
import { RotatingLines } from 'react-loader-spinner';

export const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.contacts.status);
  return (
    <li className={css.item}>
      <span className={css.contactName}>{contact.name}: </span>
      <div className={css.container}>
        <span className={css.contactNumber}>{contact.phone}</span>
        <button
          type="button"
          onClick={() => dispatch(contactDelete(contact.id))}
          className={css.btn}
        >
          Delete
          {status === contact.id && (<div className={css.Loader}>
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="20"
          visible={true}
        />
      </div>)}
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
