import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"

import { Outlet, useLocation } from 'react-router-dom'

export default function LayoutPublic() {
    const location = useLocation()
    return (
        <>
            {location.pathname !== "/" && <NavBar />}
            <main>
                <Outlet />
            </main>
            {location.pathname !== "/" && <Footer />}

        </>
    )
}
