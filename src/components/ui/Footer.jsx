import React from 'react'
import footerLogo from '/public/images/logo footer.png'



export default function Footer() {
    return (
        <>
            <footer>
                <div className='bg-dark px-10'>
                    <div className="text-white footer sm:footer-horizontal bg-transparent lg:px-10 py-10 lg:pb-0 border-b-[1px] border-[grey]">
                        <aside className='lg:border-r-[1px] border-[grey] pr-12 pb-10 '>
                            <img src={footerLogo} alt="" />
                            <p className='text-white text-xl pt-6 md:pt-10 lg:pt-14'>
                                STEMinds is an American global leader in <br /> developing (STEM)-based approaches to <br /> programming, robotics and Ai.
                            </p>
                        </aside>
                        <nav>
                            <h6 className="text-white text-xl font-bold">Pages</h6>
                            <a className="text-white link link-hover pt-6 md:pt-8 ">Home</a>
                            <a className="text-white link link-hover">Solutions</a>
                            <a className="text-white link link-hover">Blog</a>
                            <a className="text-white link link-hover">About Us</a>
                            <a className="text-white link link-hover">Contact Us</a>
                        </nav>
                        <nav>
                            <h6 className="text-white text-xl font-bold">Curricula</h6>
                            <a className="text-white link link-hover pt-6 md:pt-8 ">Programming</a>
                            <a className="text-white link link-hover">Robotics</a>
                            <a className="text-white link link-hover">AI</a>

                        </nav>
                        <nav>
                            <h6 className="text-white text-xl font-bold">Social</h6>
                            <a className="text-white link link-hover pt-6 md:pt-8">Terms of use</a>
                            <a className="text-white link link-hover">Privacy policy</a>
                            <a className="text-white link link-hover">Cookie policy</a>
                        </nav>

                    </div>
                </div>
                <div className="footer sm:footer-horizontal footer-center bg-dark text-white p-4 ">
                    <aside>
                        <p> © {new Date().getFullYear()} - Steminds | All Rights Reserved</p>
                    </aside>
                </div>

            </footer>

        </>

    )
}
