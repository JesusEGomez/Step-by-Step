import ViewLoginRegister from "../components/Login/ViewLoginRegister.jsx";
import LayoutPublic from "../Layout/LayoutPublic.jsx";
import { Home, Landing, Tienda, ErrorPage, Form, Detail, Checkout } from "../Pages";
import { createBrowserRouter, Route } from "react-router-dom";
import { verifyAdmin } from "../hooks/verifyAdmin.js";
import UserManagement from "../components/UserManagement/UserManagement.jsx";

const ProtectedRoute = ({ element }) => {
    const isAdmin = verifyAdmin();
    if (!isAdmin) {
        // Redireccionar a otra página o mostrar un mensaje de error
        return <ErrorPage />;
    }
    return element;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <ErrorPage />,
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
                    <ProtectedRoute element={<Form />} />
                )
            },
            {
                path: '/login',
                element: <ViewLoginRegister />
            }, {
                path: '/administracion',
                element: <Form />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/prueba',
                element: <UserManagement />
            }
        ]
    }
]);

export default router;
