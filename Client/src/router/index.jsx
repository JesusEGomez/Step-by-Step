import ViewLoginRegister from "../components/Login/ViewLoginRegister.jsx";
import LayoutPublic from "../layout/LayoutPublic.jsx";

import { Home, Landing, Tienda, ErrorPage, Form, Detail, Checkout, Dashboard, About } from "../Pages";

import { createBrowserRouter, Route } from "react-router-dom";
import { verifyAdmin, verifyLoged } from "../hooks/verifierForRoutes.js";
import UserManagement from "../Pages/Dashboard/UserManagement.jsx";


const ProtectedRoute = ({ element, verify }) => {
    const thisIs = verify();

    if (!thisIs) {
        // Redireccionar a otra página o mostrar un mensaje de error
        return <ErrorPage />;
    }
    return element;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: '/tienda',
                element: <Tienda />,
            },
            {
                path: "/home/:id",
                element: <Detail />
            },
            {
                path: '/*',
                element: <ErrorPage />
            },
            {

                path: '/administracion',
                element: (
                    <ProtectedRoute element={<Form />} verify={verifyAdmin} />
                )
            },
            {
                path: '/login',
                element: <ViewLoginRegister />
            },
            {
                path: '/checkout',
                element: (
                    <ProtectedRoute element={<Checkout />} verify={verifyLoged} />
                )
            },
            {
                path: '/prueba',
                element: <UserManagement />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/administracion/:component',
                element: <ProtectedRoute element={<Dashboard />} verify={verifyAdmin} />


            },
            {
                path: '/login',
                element: <ViewLoginRegister />
            },
            {
                path: '/checkout',
                element: (
                    <ProtectedRoute element={<Checkout />} verify={verifyLoged} />
                )
            },
            // {
            //     path: '/prueba',
            //     element: <UserManagement />
            // }
        ]

    }
]);

export default router;
