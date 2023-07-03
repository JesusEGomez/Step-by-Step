import { Home, Landing, Tienda, ErrorPage, Form, Detail } from "./Pages";

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: '/tienda',
    element: <Tienda />
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
    path:'/form',
    element:<Form/>
  }

])

function App() {
  return (

    <div>
      <RouterProvider router={router} />

    </div>

  );
}

export default App;


