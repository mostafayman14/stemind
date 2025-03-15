import React from 'react'
import Button from '../../ui/Button'

export default function Hero() {
    return (
        <>
            <section className="flex flex-col lg:flex-row-reverse  items-center lg:justify-between gap-4 lg:gap-0 ">
                <div className="lg:w-1/3 flex  justify-end ">
                    <img className=' xl:w-full' src="/images/Frame 3025.png" alt="" />
                </div>

                <div className='lg:w-2/3 flex flex-col items-center lg:items-start gap-12'>
                    <h1 className=' text-7xl lg:text-9xl font-bold'>Empowering Minds</h1>
                    <p className='text-2xl md:text-lg lg:text-4xl text-[#494A4c] pb-6 '>STEMinds is an American global leader in developing (STEM)-based approaches to <span className="text-primary">Programming</span></p>
                    <Button bgcolor={'primary'} text={'Get in touch'} textcolor={'white'} hero={true} defaultState={false} />
                </div>
            </section>
        </>
    )
}
