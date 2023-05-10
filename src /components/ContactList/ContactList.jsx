// import React from "react";
// import css from './ContactList.module.css';
// import {useFetchContactsQuery, useDeleteContactMutation} from 'redux/contacts/items'
// import {  useSelector } from "react-redux";
// import { getFilterContacts } from "redux/contacts/selectors";
// import toast from 'react-hot-toast';
// import { Audio } from 'react-loader-spinner';




// const ContactList = () => {

//     const [deleteContact, array] = useDeleteContactMutation()

//     const filterContact = useSelector(getFilterContacts)
    
//     const { isLoading, data: items, isError } = useFetchContactsQuery()

    
//     const filteredContacts = filterContact? items.filter(contact =>
//         contact.name.toLowerCase().includes(filterContact.toLowerCase())
//         )
//         : items;
    
//   console.log(useFetchContactsQuery())
    
//     return (   
//         <>
//             <h2>Contacts</h2>
//              {isLoading && (<h2>loading...</h2>)}
//                  <ul className={css.contactList}>
//                      {(filteredContacts && filteredContacts.map(({ id, name, number }) => (
//                     <li key={id} className={css.contactItem}>

                            
//                         <p className="TodoList__text"><span className={css.contactName} >{name}</span> :  {number}</p>
//                         <button
//                             type="button"
//                             className={css.contactBtn}
//                                  onClick={() => deleteContact(id)&&
//                                      toast.success('Контакт видалено')}
//                         >
//                                  Удалить
//                                  {array.isLoading && ( <Audio
//                                             height="15"
//                                             width="10"
//                                             radius="9"
//                                             color="green"
//                                             ariaLabel="loading"
//                                             // wrapperStyle
//                                             // wrapperClass
//                                             /> )}
//                         </button>

//                     </li>)))}
//                 </ul> 
//             {isError && (<h2>erro</h2>)}
//         </>)
// }



// export default ContactList


import React from 'react';
// import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectFiltredContacts } from 'redux/contacts/contactsSelectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
// import { deleteContact } from 'services/fetch';

export const ContactList = () => {
  const FiltredContacts = useSelector(selectFiltredContacts);

  return (
    <ul className={css.form}>
      {FiltredContacts.map(contact => (
        <li className={css.list} key={contact.id}>
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

// export const ContactList = () => {
//   const FiltredContacts = useSelector(getFiltredContacts);

//   return (
//     <>
//       <ul>
//         {FiltredContacts.map(contact => (
//           <li className={css.list} key={contact.id}>
//             <ContactItem contact={contact} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
ContactList.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};