// import { Suspense } from "react";
// import { Toaster } from "react-hot-toast";
// import {  Outlet } from "react-router-dom";
// import AppBar from "./AppBar/AppBar";

// export const Layout = () => {
   
  
//     return (
//         < >
//             <div>
//                 <AppBar/>
//                  <Suspense fallback={null}>
//                     <Outlet />
//                 </Suspense>
//                 <Toaster />
//             </div>
//         </>
//     )
// };


import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    <Toaster position="top-right" reverseOrder={false} /> 
    </div>
  );
};