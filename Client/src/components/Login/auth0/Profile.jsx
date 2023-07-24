import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { verifyAdmin } from "../../../hooks/verifierForRoutes.js";
import { addNewUsers, getAllUsers } from "../../../features/users.slice.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function Profile() {
  const { user, logout, isAuthenticated, auth0 } = useAuth0();
  const isAdmin = verifyAdmin();
  const dispatch = useDispatch();
  const dbUsers = useSelector(getAllUsers)

  const [newUser, setNewUser] = useState({
    name: user?.given_name ?? "none",
    lastname: user?.family_name ?? "none",
    user: user?.nickname ?? "",
    mail: user?.email ?? "",
    isAdmin: false,
  })

  const sendVerificationEmail = () => {
    if (auth0 && user?.email) {
      auth0.sendEmailVerification({ email: user.email })
        .then(() => {
          Swal.fire(
            'Correo enviado con éxito!',
            'Si no encuentras el correo, revisa en tu bandeja de correos no deseados.',
            'success'
          );
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Hubo un problema al enviar el correo, inténtalo más tarde.',
          });
        });
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin))
  }, [user, isAuthenticated]);

  useEffect(() => {
    const userExists = dbUsers.some((dbUser) => dbUser.mail !== newUser.mail || dbUser.user !== newUser.user);

    if (newUser.mail !== "" || newUser.user !== "") {
      if (!userExists) {
        dispatch(addNewUsers(newUser));
      }
    }

  }, [dispatch])
  return (
    isAuthenticated && (
      <div className="fixed right-0 top-0 dropdown dropdown-end">
        <label tabIndex={0} className="cursor-pointer m-1 flex items-center">
          <strong>{user?.nickname}</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-0 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
          </svg>
        </label>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li >
            <Link className="text-gray-500" to={"/cuenta"}>Mi cuenta</Link>
          </li>
          <li>
            <Link className="text-gray-500" to={"/compras"}>Mis compras</Link>
          </li>
          {user.email_verified === false &&
            (<li onClick={sendVerificationEmail}>
              <span className="text-gray-500 cursor-pointer text-red-600 font-semibold">Verificar email</span>
            </li>)
          }
          {isAdmin && (
            <li>
              <Link className="text-gray-500" to={"/administracion/index"}>Administracion</Link>
            </li>
          )}
          <li onClick={() => logout()}>
            <a className="text-gray-500">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    )
  );
}

export default Profile;