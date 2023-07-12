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
                path: '/form',
                element: <Form />
            },
            {
                path: '/login',
                element: <ViewLoginRegister />
<<<<<<< HEAD
            }, {
                path: '/administracion',
                element: <Form />
=======
            },
            {
                path: '/checkout',
                element: <Checkout />
>>>>>>> fb157f242713404449660e75dc7579a6024eee90
            }
        ]
    }


])
export default router
