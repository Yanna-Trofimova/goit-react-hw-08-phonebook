import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
   
  
    return (
        < >
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <br />
                    <NavLink to="/register">Зареєструватися</NavLink>
                    <br />
                    <NavLink to="/login">Увійти</NavLink>
                </nav>
                 <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
                <Toaster />
            </div>
        </>
    )
};
