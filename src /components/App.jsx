
// // import ContactForm from 'components/ContactForm/ContactForm';
// // import ContactList from 'components/ContactList/ContactList';
// // import Filter from 'components/Filter/Filter';
// //  
// // import LoginPage from 'pages/LoginPage';
// // import RegisterPage from 'pages/RegisterPage';
// // import { Toaster } from 'react-hot-toast';
// import {  Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
// import { lazy } from 'react';

// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));


// export const App = () => {
  

//   return (
//     <div>
//      <Routes>
//               {/* <h1 >Phonebook</h1> */}
//                 {/* <ContactForm />
//                 <Filter/>
//             <ContactList /> */}
//           <Route path="/" element={<Layout/>} >
//             <Route index element={<div>Homeee</div>} />
//               <Route path="register" element={<RegisterPage />} />
//               <Route path="login" element={<LoginPage />} />
//               {/* <Route path="/contacts" element={<CoctactsPage />} /> */}
//               {/* <Toaster /> */}
//               {/* <Route path="*" element={<NotFound />} /> */}
//           </Route>
//         </Routes>
//     </div>
//   );
// };
  
  

//   export default App






import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/auth-services';
import { useAuth } from '../hook/useAuthHook';
import { lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';


// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(()=> import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};


  export default App