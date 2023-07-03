import {  Home, Landing } from "./Pages";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import './App.css'

const router =createBrowserRouter([
  {
    path:"/",
    element:<Landing/>
  },
  {
    path: "/home",
    element: <Home />
  }
])

function App() {
  return (
    
    <div>
    <RouterProvider router={router}/>
    
    </div>
    
    );
  }
  
  export default App;
  
  
  