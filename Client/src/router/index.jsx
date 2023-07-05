import LayoutPublic from "../layout/LayoutPublic";
import { Home, Landing, Tienda, ErrorPage, Form, Detail } from "../pages";
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
            }
        ]
    }


])
export default router
