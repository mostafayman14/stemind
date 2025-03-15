import React from 'react'
import KnowUs from './component/KnowUs'
import TopStories from './component/TopStories'
import Partners from './component/Partners'
import Testmonial from './component/Testmonial'
import Stat from './component/Stat'
import Hero from './component/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <KnowUs />
      <TopStories />
      <Partners />
      <Testmonial />
      <Stat />
    </>
  )
}
