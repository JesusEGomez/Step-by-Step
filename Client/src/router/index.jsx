import ViewLoginRegister from "../components/Login/ViewLoginRegister.jsx";
import LayoutPublic from "../layout/LayoutPublic";
import { Home, Landing, Tienda, ErrorPage, Form, Detail, Checkout } from "../Pages";
import {
    createBrowserRouter,
} from "react-router-dom";
import { verifyAdmin } from "../hooks/verifyAdmin.js";

const ProtectedRoute = ({ element: Element, adminRequired, ...rest }) => {
    const isAdmin = verifyAdmin();
    if (adminRequired && !isAdmin) {
        // Redireccionar a otra página o mostrar un mensaje de error
        return <ErrorPage />;
    }
    return <Route element={Element} {...rest} />;
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
                    <ProtectedRoute
                        element={<Form />}
                        adminRequired={true}
                    />
                )
            },
            {
                path: '/login',
                element: <ViewLoginRegister />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
        ]
    }


])
export default router