import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <h2 className="fixed right-2 max-sm:right-14 top-0 cursor-pointer font-semibold" onClick={() => loginWithRedirect()}>
        Iniciar sesión
      </h2>
    )
  );
}

export default LoginButton;
