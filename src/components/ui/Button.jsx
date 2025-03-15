import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ bgcolor, textcolor, link, text, card = false, hero = false, defaultState = true }) {
  return (
    <>
      <Link className='w-fit' to={link}><button
        className={`
      ${defaultState ? 'text-xl px-8 py-3' : ' '} 
      ${hero ? 'text-3xl px-16 py-5 rounded-[3rem]' : ' '}  
      ${card ? 'text-base px-4 py-2' : ' '} 
      bg-${bgcolor}  rounded-[2rem] 
      text-${textcolor}  `}>
        {text}
      </button></Link>

    </>
  )
}
