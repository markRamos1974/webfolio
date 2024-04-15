import { useState } from 'react'
import noiseBg from './assets/VIDEO/NoiseBg.mp4'

//Components
import NavBar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative'>
        <div className='main-content-wrapper p-mobile-padding tablet:p-desktop-padding'>
          <NavBar />
        </div>
        
        {/* noise video background */}
        <video autoPlay loop muted className='w-screen h-screen object-cover absolute top-0 left-0 right-0 bottom-0 z-[-1]'>
          <source src={noiseBg} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}

export default App
