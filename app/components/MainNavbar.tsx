'use client'
import React from 'react'
import NavbarOne from './NavbarOne'
import NavbarTwo from './NavbarTwo'
import { usePathname } from 'next/navigation'

const MainNavbar = () => {

    const pathname = usePathname()
    console.log(pathname)
    return (
        <div>
            {pathname === '/admin' ? <NavbarOne /> : <NavbarTwo />}
        </div>
    )
}

export default MainNavbar
