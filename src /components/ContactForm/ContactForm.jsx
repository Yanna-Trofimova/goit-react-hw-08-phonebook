import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
import toast from 'react-hot-toast';

import { Audio } from 'react-loader-spinner';





import { useAddContactMutation, useFetchContactsQuery } from 'redux/contacts/items'

export const ContactForm = ({
    initialValues = { name: '', number: '' }
}) => {

    const { data: items} = useFetchContactsQuery()

    const [AddContact, { isLoading }] = useAddContactMutation();

    const handelAddContact = async (values) => {
        try {
            await AddContact(values);
            toast.success('Контакт додано');
        } catch (error) {
            toast.error('Помилка при додаванні контакту');
            // console.log(error);
        }
    }
     
    const handleSubmit = async (values, actions) => {
         items.find(cont => cont.name.toLowerCase() === values.name.toLowerCase(),) ?
          alert(`${values.name} is already in contacts.`)
             : handelAddContact(values) && actions.resetForm();
    }

    return (
        items &&
            <Formik className={css.formOfContact} initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <label className={css.textName}>
                            Name
                            <Field className={css.inputName} name="name" type="text" />
                        </label>
                        <br />
                        <label className={css.textNumber}>
                            Number
                            <Field  className={css.inputNumber} name="number" type="text" />
                        </label>
                        <br />
                        <button className={css.btnContact}  type="submit" disabled={isSubmitting}>
                            Add contact
                             {isLoading && ( <Audio
                                            height="20"
                                            width="20"
                                            radius="9"
                                            color="green"
                                            ariaLabel="loading"
                                            // wrapperStyle
                                            // wrapperClass
                                            /> )}
                        </button>
                    </Form>
                )}
            </Formik>
        );
}


    
export default ContactForm