import React from 'react'
import navlogo from '../../assets/SVG/nav-logo/mobile-nav-logo.svg'

const Navbar = () => {
  return (
    <div className='text-white py-x-small flex justify-between align-middle tablet:py-small lg:align-top lg:py-x-small lg:mb-[6.8125rem]'>
        <img src={navlogo} className='lg:w-12 lg:h-[2.579375rem]'/>
        <div className='right-side flex justify-between align-middle'>
          <p className='hidden text-base font-sans font-bold w-[9.8125rem] leading-[1rem] mr-[28.4375rem] lg:block'>Frontend developer, UI/UX Designer</p>
          <div className='hamburger-menu flex flex-col justify-center align-middle lg:justify-start'>
              <span className='w-12 h-[2px] bg-white block mb-[4px] tablet:w-24'></span>
              <span className='w-12 h-[2px] bg-white block tablet:w-24'></span>
          </div>
        </div>
    </div>
  )
}

export default Navbar