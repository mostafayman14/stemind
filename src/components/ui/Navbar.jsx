import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '/public/images/logo.png'
import Button from './Button'





export default function Navbar() {
    return (
        <div className="navbar  px-2 md:px-6">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='text-grey text-base font-bold'><Link to={'/home'}>Item 1</Link></li>
                        <li className='text-grey text-base font-bold'><Link to={'/nav'}>Item 2</Link></li>
                        <li className='text-grey text-base font-bold'>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li className='text-grey text-base font-bold'><a>Submenu 1</a></li>
                                <li className='text-grey text-base font-bold'><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li className='text-grey text-base font-bold'><a>Item 3</a></li>
                    </ul>
                </div>
                <Link className=""><img src={Logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">
                    <li className='text-grey text-base font-bold'><NavLink to={'/home'}>Home</NavLink></li>
                    <li className='text-grey text-base font-bold'>
                        <details>
                            <summary>Solutions</summary>
                            <ul className="p-2">
                                <li className='text-grey text-base font-bold'><NavLink>Submenu 1</NavLink></li>
                                <li className='text-grey text-base font-bold'><NavLink>Submenu 2</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li className='text-grey text-base font-bold'><NavLink>Blog</NavLink></li>
                    <li className='text-grey text-base font-bold'><NavLink>About Us</NavLink></li>
                    <li className='text-grey text-base font-bold'><NavLink>Agent Program</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Button bgcolor={"black"} textcolor={'white'} link={'/home'} text={'Contact Us'} />
            </div>
        </div>

    )
}
