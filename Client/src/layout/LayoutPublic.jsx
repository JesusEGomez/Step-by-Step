import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

export default function LayoutPublic() {
    const location = useLocation()
    return (
        <>
            {location.pathname !== "/" && <NavBar />}
            <main>
                <Outlet />
            </main>
        </>
    )
}
