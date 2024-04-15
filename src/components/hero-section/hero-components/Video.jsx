import React, {useState} from 'react'

import heroVideo from '../../../assets/VIDEO/wave-iridescent.mp4'
import mobileSticker from '../../../assets/PNG/hero-sticker/mobile-hero-sticker.png'
import tabletSticker from '../../../assets/PNG/hero-sticker/tablet-hero-sticker.png'
import desktopSticker from '../../../assets/PNG/hero-sticker/desktop-hero-sticker.png'

const Video = () => {
    
console.log(window.innerWidth)
  const [sticker, setSticker] = useState(window.innerWidth >= 1366 ? desktopSticker: window.innerWidth  >= 768 ? tabletSticker : mobileSticker)

  window.addEventListener("resize", () => {
    setSticker(window.innerWidth >= 1366 ? desktopSticker: window.innerWidth  >= 768 ? tabletSticker : mobileSticker)
  })
  return (


    // h-[calc(100vh-167px-32px-24px)] --> mobile
    // h-[calc(100vh-295px-32px-24px)] --> tablet
    <div className='hero-video-section relative w-full h-[calc(100vh-167px-32px-24px)] rounded-2xl overflow-hidden tablet:h-[calc(100vh-295px-32px-24px)] lg:h-[67.5rem] lg:rounded-[2rem]'>
        <div className='video-content absolute z-10 top-0 w-full h-full flex flex-col justify-center items-center'>
            <div className='greet-message w-64 h-32 flex flex-col tablet:w-[24.610625rem] tablet:h-[11.01875rem] lg:hidden'>
                <h2 className='tracking-[-2.89px] leading-[2.889375rem] text-[2.889375rem] tablet:leading-[4.38rem] font-sans font-semibold italic tablet:text-[4.38rem]'>Hi welcome</h2>
                <h2 className='tracking-[-2.89px] leading-[2.889375rem] text-[2.889375rem] tablet:leading-[4.38rem] font-serif self-end tablet:text-[4.38rem]'>to my</h2>
                <h2 className='tracking-[-2.89px] leading-[2.166875rem] text-[2.166875rem] tablet:leading-[3.285rem] font-sans self-center tablet:text-[3.285rem]'>webfolio</h2>
            </div>
            <div className='lower-content w-full absolute bottom-0  flex justify-between items-center p-6 lg:p-24'>
                <p className='text-[0.625rem] font-bold italic font-sans tablet:text-base self-end'>EST. 2024</p>
                <img src={sticker} />
            </div>

        </div>
        <video autoPlay muted loop className='absolute z-0 top-0 w-full h-full bg-white rounded-2xl object-cover ]'>
            <source src={heroVideo} type="video/mp4"></source>
        </video>
    </div>
    
  )
}

export default Video