// import React from 'react';



// const CoctactsPage = () => {
   
  
//     return (
//         < >
//           <h2>CoctactsPage</h2>
//         </>
//     )
// };



// export default CoctactsPage


import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { FilterContact } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import React from 'react';

// import { ContactList } from 'components/ContactList/ContactList'
// import { FilterContact } from 'components/FilterContact/FilterContact';

// import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/items';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/selectors';
// import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
// import { fetchContacts } from 'redux/contacts/contactsOperations';
// import { ContactForm } from 'components/ContactForm/ContactForm';

// import css from './App.module.css';

export default function Contacts () {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div >
      <Section title="Phonebook">
        <ContactForm />
      </Section>
     
      {contacts.length > 0 && (
        <Section title="Contacts">
          <FilterContact />
          <ContactList/>
          {isLoading && !error && <Loader/> } 
        </Section>
      )}
    </div>
  );
};