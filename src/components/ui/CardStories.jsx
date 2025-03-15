import React from 'react'
import Button from './Button'
import { Clock4 } from 'lucide-react';

export default function CardStories({ image, title, description }) {
    return (
        <>
            <div className="p-2 lg:p-4 lg:w-1/3 ">
                <div className="card bg-base-100  shadow-sm rounded-2xl  border-2 ">
                    <div className="p-3 rounded-lg">
                        <figure>
                            <img
                                className='rounded-lg w-full'
                                src={image}
                                alt={title} />
                        </figure>
                        <div className="card-body pb-2">
                            <h2 className="card-title text-2xl font-bold">{title}</h2>
                            <p className='text-[#494A4c] text-lg'>{description}</p>
                            <div className="card-actions justify-between items-center">
                                <div className='flex gap-2 items-center font-semibold'>
                                    <Clock4 strokeWidth={1} />
                                    <p className='text-lg'>3 Min reading time</p>
                                </div>
                                <Button bgcolor={'primary'} text={'Read Now'} textcolor={'white'} card={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
