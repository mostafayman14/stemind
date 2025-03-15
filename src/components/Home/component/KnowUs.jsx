import React from 'react'
import TitleHead from '../../ui/TitleHead'
import Button from '../../ui/Button'
import SectionContainer from '../../ui/SectionContainer'


export default function KnowUs() {
    return (
        <>
            <SectionContainer>
                <TitleHead firstWord={'Get to know Us'} bgImage={'/images/Frame.png'} />
                <div className="flex flex-col lg:flex-row-reverse  items-center lg:justify-between gap-4 lg:gap-0 ">
                    <div className="xl:w-1/2 flex  justify-end ">
                        <img className=' xl:w-2/3' src="/images/metaverse_4_ 2.png" alt="" />
                    </div>

                    <div className='lg:w-2/3 flex flex-col items-center lg:items-start'>
                        <p className='text-xl md:text-lg lg:text-2xl text-black pb-6 '>STEMinds, we empower the next generation of innovators through hands-on STEM education.
                            as a leading American company with a rich history, we are now transforming STEM learning in the Arab world.
                            from robotics to AI, our curriculums inspire creativity, critical thinking, and problem-solving skills.</p>
                        <Button bgcolor={'primary'} text={'Learn More'} textcolor={'white'} />
                    </div>
                </div>
            </SectionContainer>
        </>
    )
}
