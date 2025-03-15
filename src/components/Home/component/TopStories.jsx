import React from 'react'
import TitleHead from '../../ui/TitleHead'
import SectionContainer from '../../ui/SectionContainer'
import CardStories from '../../ui/CardStories'

export default function TopStories() {
    const TopStoriesData = [
        { img: '/images/insights/Rectangle 4528.png', title: 'How to learn web design', desc: "In today’s digital world, a well-designed website is more than just aesthetics—it's about creating an experience that feels intuitive and engaging." },
        { img: '/images/insights/Rectangle 4528 (1).png', title: 'How to learn web design', desc: "In today’s digital world, a well-designed website is more than just aesthetics—it's about creating an experience that feels intuitive and engaging." },
        { img: '/images/insights/Rectangle 4528 (2).png', title: 'How to learn web design', desc: "In today’s digital world, a well-designed website is more than just aesthetics—it's about creating an experience that feels intuitive and engaging." },
    ]
    return (
        <SectionContainer>
            <TitleHead firstWord={'STEMinds Top'} secondWord={'Stories'} />
            <div className="flex flex-wrap justify-between  ">
                {
                    TopStoriesData.map((item, index) =>
                        <CardStories key={index} image={item.img} title={item.title} description={item.desc}/>
                    )
                }
               
            </div>
        </SectionContainer>

    )
}
