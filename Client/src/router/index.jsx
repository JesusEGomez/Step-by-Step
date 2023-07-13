import ViewLoginRegister from "../components/Login/ViewLoginRegister.jsx";
import LayoutPublic from "../layout/LayoutPublic";
import { Home, Landing, Tienda, ErrorPage, Form, Detail, Checkout } from "../Pages";
import {
    createBrowserRouter,
} from "react-router-dom";
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
                element: <Form />
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
            }
        ]
    }


])
export default router
