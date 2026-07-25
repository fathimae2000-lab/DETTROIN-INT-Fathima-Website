import React from 'react'
import Hero from '../components/Hero'
import HeroCards from '../components/HeroCards'
import RecentEventsTimeline from '../components/RecentEventsTimeline'

const Home = () => {
  return (


    <>
    <div>
    <Hero />
    </div>
    <div className='mt-8'>
    <HeroCards/>
    </div>
    <div>
    <RecentEventsTimeline />
    </div>

    </>
  )
}

export default Home