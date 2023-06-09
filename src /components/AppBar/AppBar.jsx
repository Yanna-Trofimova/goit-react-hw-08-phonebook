// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { dellToken } from 'redux/auth/auth-services';
// import { logOut } from 'redux/auth/auth-slice';
// import { getContactsThunk } from 'redux/auth/auth-thunk';

// const AppBar = () => {
//     const navigate = useNavigate()

//     // const { contacts, token } = useSelector((state) => state.auth)
//      const data= useSelector((state) => state.auth)
//     console.log('ssss', data)
      
//     //  const { isLoggedIn } = useAuth();
//     const handleLogin = () => {
//         navigate('/login')
//     }

//     const dispatch = useDispatch()

//     const handleLogOut = () => {
//         dispatch(logOut)
//         dellToken()
//     }

//     useEffect(() => {
//         console.log('object')
//         data.token && dispatch(getContactsThunk() )
//     }, [data.token, dispatch])
  
//     return (
//        <header>
//                     <NavLink to="/">Home</NavLink>
//                     <br />
//                     <NavLink to="/register">Зареєструватися</NavLink>
//                     <br />
            
//                      {data && <div className='text-black' >{data.name}</div>}
//                      <br />
//                     <NavLink to="/login" onClick={data ? handleLogOut : handleLogin}>
//                         {data ? 'LogOut' : 'LogIn'}
//                     </NavLink>
            
//                   {/* <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
//          </header>
//     )
// };



// export default AppBar


// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks/useAuth';
import { useAuth } from 'hook/useAuthHook';
import css from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};