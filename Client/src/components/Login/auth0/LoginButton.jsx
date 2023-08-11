import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <h2 onClick={() => loginWithRedirect()} className="cursor-pointer  hover:text-gray-400" >Iniciar sesión</h2>
    )
  );
}

export default LoginButton;

// className="fixed right-0 top-0 cursor-pointer font-semibold"
