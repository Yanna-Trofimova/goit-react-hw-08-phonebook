import React from "react";
import css from './ContactList.module.css';
import {useFetchContactsQuery, useDeleteContactMutation} from 'redux/items'
import {  useSelector } from "react-redux";
import { getFilterContacts } from "redux/selectors";
import toast from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';




const ContactList = () => {

    const [deleteContact, array] = useDeleteContactMutation()

    const filterContact = useSelector(getFilterContacts)
    
    const { isLoading, data: items, isError } = useFetchContactsQuery()

    
    const filteredContacts = filterContact? items.filter(contact =>
        contact.name.toLowerCase().includes(filterContact.toLowerCase())
        )
        : items;
    
  console.log(useFetchContactsQuery())
    
    return (   
        <>
             {isLoading && (<h2>loading...</h2>)}
                 <ul className={css.contactList}>
                     {(filteredContacts && filteredContacts.map(({ id, name, number }) => (
                    <li key={id} className={css.contactItem}>

                            
                        <p className="TodoList__text"><span className={css.contactName} >{name}</span> :  {number}</p>
                        <button
                            type="button"
                            className={css.contactBtn}
                                 onClick={() => deleteContact(id)&&
                                     toast.success('Контакт видалено')}
                        >
                                 Удалить
                                 {array.isLoading && ( <Audio
                                            height="15"
                                            width="10"
                                            radius="9"
                                            color="green"
                                            ariaLabel="loading"
                                            // wrapperStyle
                                            // wrapperClass
                                            /> )}
                        </button>

                    </li>)))}
                </ul> 
            {isError && (<h2>erro</h2>)}
        </>)
}



export default ContactList