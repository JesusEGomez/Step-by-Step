import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function LayoutPublic() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}
