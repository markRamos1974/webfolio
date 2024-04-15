import React from 'react'

//Hero Section Components
import Name from './hero-components/Name'
import Video from './hero-components/Video'

const HeroSection = () => {
  return (
    <div className='hero-section-wrapper'>
        <Name />
        <Video />
    </div>
  )
}

export default HeroSection