import React from 'react'
import SectionContainer from '../../ui/SectionContainer'
import TitleHead from '../../ui/TitleHead'
import CardPeople from '../../ui/CardPeople'
import Slider from "react-slick";

export default function Testmonial() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    const peopleTestmonial = [
        { personName: 'Mostafa Ayman', position: 'STEM Coordinator, Lincoln Elementary School', describtion: '“STEMinds has made STEM fun and accessible. Our students love the hands-on projects and are  developing essential skills like problem-solving and teamwork.”' },
        { personName: 'Emily Johnson', position: 'STEM Coordinator, Lincoln Elementary School', describtion: '“STEMinds has made STEM fun and accessible. Our students love the hands-on projects and are  developing essential skills like problem-solving and teamwork.”' },
        { personName: 'Emily Johnson', position: 'STEM Coordinator, Lincoln Elementary School', describtion: '“STEMinds has made STEM fun and accessible. Our students love the hands-on projects and are  developing essential skills like problem-solving and teamwork.”' },
    ]

    return (
        <SectionContainer>
            <TitleHead firstWord={'What'} secondWord={'people say'} thirdWord={'about us'} />
            <Slider {...settings} className=''>
                {
                    peopleTestmonial.map((item, index) =>
                        <CardPeople key={index} personName={item.personName} position={item.position} description={item.describtion} />
                    )
                }

            </Slider>

        </SectionContainer>
    )
}
