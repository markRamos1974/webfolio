import { useState } from 'react'

//Video Assets
import noiseBg from './assets/VIDEO/NoiseBg.mp4'

//Components
import NavBar from './components/navbar/Navbar'
import HeroSection from './components/hero-section/HeroSection'

function App() {
  return (
    <>
      <div className='relative' onClick={() => setScreen(window.screenX)}>
        <div className='main-content-wrapper px-mobile-padding tablet:px-desktop-padding'>
          <NavBar />
          <HeroSection />
        </div>
        
        {/* noise video background */}
        <video autoPlay loop muted className='w-screen h-screen object-cover absolute top-0 left-0 right-0 bottom-0 z-[-1]'>
          <source src={noiseBg} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className='w-screen h-screen object-cover absolute top-[100vh] left-0 right-0 bottom-0 z-[-1]'>
          <source src={noiseBg} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>

        <video autoPlay loop muted className='w-screen h-screen object-cover absolute top-[calc(100vh * 2) left-0 right-0 bottom-0 z-[-1]'>
          <source src={noiseBg} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}

export default App
