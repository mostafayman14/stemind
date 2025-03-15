import React from 'react'
import Button from './Button'
import Slider from "react-slick";

import { Clock4, Quote, Star } from 'lucide-react';

export default function CardPeople({ description, personName, position }) {
  
    return (
        <>
            <div className="p-2 lg:p-4  ">
                <div className="card bg-base-100  shadow-sm rounded-2xl  border-2 bg-[#F9FbFF]">
                    <div className="p-3 rounded-lg">
                        <div className="card-body pb-2">
                            <h2 className=" text-2xl font-bold -scale-y-100 "><Quote size={32} color="#4F8EF7" /></h2>
                            <p className='text-[#494A4c] text-lg py-10 border-b-2'>{description}</p>
                            <i class="fa-solid fa-square-quote"></i>
                            <i class="fa-solid fa-quote-left"></i>
                            <div className="">
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h4 className='text-lg font-bold'>{personName}</h4>
                                        <p className='text-xs'>{position}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Star size={16} color="#ffc600" strokeWidth={1.25} absoluteStrokeWidth />
                                        <Star size={16} color="#ffc600" strokeWidth={1.25} absoluteStrokeWidth />
                                        <Star size={16} color="#ffc600" strokeWidth={1.25} absoluteStrokeWidth />
                                        <Star size={16} color="#ffc600" strokeWidth={1.25} absoluteStrokeWidth />
                                        <Star size={16} color="#ffc600" strokeWidth={1.25} absoluteStrokeWidth />
                                        <span className='pl-2'>5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
