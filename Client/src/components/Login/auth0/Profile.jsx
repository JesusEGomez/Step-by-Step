import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllUsers, fetchUsers } from "../../../features/users.slice";
import { useSelector, useDispatch } from "react-redux";


function Profile() {
  const { user, isAuthenticated, logout } = useAuth0();
  const dbUser = useSelector(getAllUsers);
  const dispatch = useDispatch()

  useEffect(() => { dispatch(fetchUsers()) }, [])

  const validateAdmin = (dbUser, userEmail) => {
    for (let i = 0; i < dbUser.length; i++) {
      if (dbUser[i].mail === userEmail) {
        return true;
      }
    }
    return false;
  }
  const isAdmin = validateAdmin(dbUser, user?.email);


  return (
    isAuthenticated && (
<<<<<<< HEAD
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="cursor-pointer m-1 flex items-center">
          <strong>{user?.nickname}</strong>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
          </svg>
        </label>

        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to={'/cuenta'}>Mi cuenta</Link></li>
          <li><Link to={'/compras'}>Mis compras</Link></li>
          {isAdmin && <li><Link to={'/administracion'}>Administracion</Link></li>}
          <li onClick={() => logout()}><a>Cerrar sesión</a></li>
        </ul>
      </div>
=======
      <article className="w-6">
        {/* {JSON.stringify(user)} */}

        {user?.picture && <img className=" mask mask-squircle" src={user.picture} />}
        <h2>{user?.name}</h2>

        {/* <ul>
          {Object.values(user).map((objVal, i) => (
            <li key={i}>{objVal}</li>
          ))}
        </ul> */}
      </article>
>>>>>>> fb157f242713404449660e75dc7579a6024eee90
    )
  )
}

export default Profile;
