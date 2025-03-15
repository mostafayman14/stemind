import React from 'react'

export default function TitleHead({ firstWord, secondWord, thirdWord, bgImage }) {
    return (
        <h2
            style={{ backgroundImage: `url(${ bgImage })` }}
            className="text-primary text-center text-3xl md:text-4xl lg:text-6xl font-semibold py-6 md:py-12 mt-12"
        >
            {firstWord}
            {secondWord && <span className="bg-primary text-white pb-4 px-4 mx-1">{secondWord}</span>}
            {thirdWord}
        </h2>
    )
}
