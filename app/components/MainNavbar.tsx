'use client'
import React from 'react'
import NavbarOne from './NavbarOne'
import NavbarTwo from './NavbarTwo'
import { usePathname } from 'next/navigation'

const MainNavbar = () => {

    const url = usePathname()
    console.log(url)
    return (
        <div>
            {
                /* Conditional rendering. Rendering the <NavbarOne /> if the route is admin.
                    /* Rendering the <NavbarTwo /> if the route is student.
                */
            }
            {url === '/admin' ? <NavbarOne /> : <NavbarTwo />}
        </div>
    )
}

export default MainNavbar
