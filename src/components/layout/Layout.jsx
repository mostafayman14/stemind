import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'


export default function Layout() {

    return <>

        <Navbar />
        <div className="bg-[FBFBFB]">
            <div className=" mx-2 md:mx-6 mt-4 py-12 ">
                <Outlet></Outlet>
            </div>
        </div>
        <Footer />

    </>
}
