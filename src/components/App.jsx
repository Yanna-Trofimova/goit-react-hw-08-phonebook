
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
//  
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';
// import { Toaster } from 'react-hot-toast';
import {  Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));


export const App = () => {
  

  return (
    <div>
     <Routes>
              {/* <h1 >Phonebook</h1> */}
                {/* <ContactForm />
                <Filter/>
            <ContactList /> */}
          <Route path="/" element={<Layout/>} >
            <Route index element={<div>Homeee</div>} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              {/* <Route path="/contacts" element={<CoctactsPage />} /> */}
              {/* <Toaster /> */}
              {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
    </div>
  );
};
  
  

  export default App