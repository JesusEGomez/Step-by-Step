import { useEffect, useState, useMemo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getAllUsers, fetchUsers } from '../features/users.slice';
import { useDispatch, useSelector } from 'react-redux';


export const verifyAdmin = () => {
    const dispatch = useDispatch();
    const dbUsers = useSelector(getAllUsers);
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isAuthenticated) {
        return dbUsers.some((dbUser) => dbUser?.mail === user?.email && dbUser.isAdmin);
    }

    return false;
};

export const verifyLoged = () => {
    const { isAuthenticated, user } = useAuth0();
    const isLogged = useMemo(() => {
        return isAuthenticated;
    }, [isAuthenticated]);

    return (isLogged && user?.email_verified);
};