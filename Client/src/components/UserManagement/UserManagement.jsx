function UserManagement() {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">isAdmin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>luciano@gmail.com</td>
                    <td>lucianogramajo</td>
                    <td><label htmlFor="isadmin">Adminitrador</label>
                        <input type="checkbox" />
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>lucho@gmail.com</td>
                    <td>lucho</td>
                    <td><label htmlFor="isadmin">Adminitrador</label>
                        <input type="checkbox" />
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>gramajo@gmail.com</td>
                    <td>gramajo</td>
                    <td><label htmlFor="isadmin">Adminitrador</label>
                        <input type="checkbox" />
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>nahuel@gmail.com</td>
                    <td>nahuel</td>
                    <td>
                        <label htmlFor="isadmin">Adminitrador</label>
                        <input type="checkbox" />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserManagement;