import { useEffect } from "react";
import {
  getAllUsers,
  fetchUsers,
  toggleOrderBy,
} from "../../features/users.slice.js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import Title from "./Title.jsx";
const URL = import.meta.env.VITE_URL;

function UserManagement() {
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // users.map(({ id }) => console.log(id))
  const handlerAdmin = async (userId, isAdmin) => {
    // Crea un nuevo objeto con los datos actualizados del usuario.
    // En este caso, solo actualizamos el campo "isAdmin".
    const updatedUser = {
      ...users.find((user) => user.id === userId),
      isAdmin: isAdmin,
    };
    // Llama a la acción updateUser para enviar la solicitud PUT.
    // dispatch(updateUser({ id: userId, data: updatedUser }));
    const updateUSer = async () => {
      const response = await axios.put(`${URL}/users/${userId}`, updatedUser);
      // console.log(response);
      location.reload();
    };

    Swal.fire({
      title: "Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro!",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        updateUSer();
      }
    });
  };

  const handlerOrderId = () => {
    dispatch(toggleOrderBy());
  };

  return (
    <div className="bg-white p-3 w-[120%] h-full">
      <Title>Usuarios</Title>
      <table className="table table-zebra text-center w-100% mx-auto">
        <thead>
          <tr>
            <th className="text-center">
              ID{" "}
              <svg
                onClick={handlerOrderId}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 inline-block align-text-bottom cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </th>
            <th className="text-center">
              USUARIO{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 inline-block align-text-bottom cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </th>
            <th className="text-center">
              CORREO ELECTRONICO{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 inline-block align-text-bottom cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </th>
            <th className="text-center">
              ADMINISTRADOR{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 inline-block align-text-bottom cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </th>
            <th>EDITAR</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.user}</td>
              <td>{user.mail}</td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={user.isAdmin}
                    onChange={(e) => handlerAdmin(user.id, e.target.checked)}
                  />
                </label>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 inline-block align-text-bottom cursor-pointer"
                >
                  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
