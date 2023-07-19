import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from 'axios';

// axios.defaults.baseURL ='http://localhost:3001';
axios.defaults.baseURL = 'https://step-by-step-production.up.railway.app/products'; //si queremos trabajar de forma local hay que comentar esto 

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
// esbuild configuration (e.g., esbuild.config.js)



console.log(window.location.origin)
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>
);
