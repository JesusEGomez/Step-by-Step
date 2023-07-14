import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getAllUsers, fetchUsers } from '../features/users.slice';
import { useDispatch, useSelector } from 'react-redux';

export const verifyAdmin = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();
    const dbUser = useSelector(getAllUsers);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isAuthenticated) {
        return dbUser.some(db => db?.mail === user?.email && db.isAdmin);
    }

    return false;
};
