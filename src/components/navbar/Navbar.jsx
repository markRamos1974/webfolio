import React from 'react'
import navlogo from '../../assets/SVG/nav-logo/mobile-nav-logo.svg'

function Navbar() {
  return (
    <div className='text-white py-x-small flex justify-between align-middle'>
        <img src={navlogo} />
        <div className='hamburger-menu flex flex-col justify-center align-middle'>
            <span className='w-[20px] bg-white h-[2px] block'></span>
            <span className='w-[20px] bg-white h-[2px] block'></span>
        </div>
    </div>
  )
}

export default Navbar