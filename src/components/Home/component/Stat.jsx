import React from 'react'
import SectionContainer from '../../ui/SectionContainer'

export default function Stat() {
    return (
        <SectionContainer>
            <div className=" shadow rounded-3xl border-2 p-8 bg-[#F9FbFF]">
                <span className='text-primary text-lg font-bold'>STEMinds BY NUMBERS</span>
                <div className=" flex justify-center  py-12">
                    
                    <div className="flex flex-col md:flex-row  w-full justify-start md:justify-evenly items-center text-center gap-10 md:gap-0  ">
                        <div className="w-4/5 md:w-1/3 lg:w-1/4  " >
                            <div className="text-4xl font-bold pb-4">500+</div>
                            <div className=" text-lg font-semibold text-gray-700">Partnering with innovative <br /> <span className="text-primary">Schools</span>  worldwide.</div>
                        </div>

                        <div className="w-4/5 md:w-1/3 lg:w-1/4  " >
                            <div className="text-4xl font-bold pb-4">10K</div>
                            <div className=" text-lg font-semibold text-gray-700">Supporting a community of <br /> passionate <span className="text-primary">Educators</span>  worldwide.</div>
                        </div>

                        <div className="w-4/5 md:w-1/3 lg:w-1/4  " >
                            <div className="text-4xl font-bold pb-4">1M+</div>
                            <div className=" text-lg font-semibold text-gray-700">Empowering <span className="text-primary">Students</span> with <br /> transformative learning experiences</div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}
