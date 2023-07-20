import { useEffect } from 'react';
import { getAllUsers, fetchUsers } from '../../features/users.slice.js';
import { useDispatch, useSelector } from 'react-redux';

function UserManagement() {
    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);

    useEffect(() => { dispatch(fetchUsers) }, [])

    console.log(users);

    return (
        <table className="table table-zebra w-[70%] mx-auto border border-black">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>E-Mail</th>
                    <th>Administrador</th>
                </tr>
            </thead>

            <tbody className='text-center'>
                {users?.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.user}</td>
                        <td>{user.mail}</td>
                        <td>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default UserManagement;