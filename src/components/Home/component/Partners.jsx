import React from 'react'
import SectionContainer from '../../ui/SectionContainer'
import TitleHead from '../../ui/TitleHead'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Partners() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <SectionContainer className={'pt-12'}>
            <TitleHead firstWord={'Our'} secondWord={'Partners'} />
            <Slider {...settings} className=''>
                <div className='p-8 md:p-4 '>
                    <img src="/images/partners/Artboard 2.png" alt="" />
                </div>
                <div className='p-8 md:p-4'>
                    <img src="/images/partners/Artboard 4 1.png" alt="" />
                </div>
                <div className='p-8 md:p-4'>
                    <img src="/images/partners/Artboard 9 1.png" alt="" />
                </div>
                <div className='p-8 md:p-4'>
                    <img src="/images/partners/Artboard 15 1.png" alt="" />
                </div>
                <div className='p-8 md:p-4'>
                    <img src="/images/partners/Artboard 2.png" alt="" />
                </div>
                <div className='p-8 md:p-4'>
                    <img src="/images/partners/Artboard 4 1.png" alt="" />
                </div>
                <div className='p-8 md:p-4'>
                    <img src="/images/partners/Artboard 9 1.png" alt="" />
                </div>
                <div className='p-8 md:p-4'>
                    <img src="/images/partners/Artboard 15 1.png" alt="" />
                </div>


            </Slider>

        </SectionContainer>
    )
}
