import React from 'react'
import Mainbutton from './Mainbutton'

function Navbar() {
  return (
    <>
      <div className="sticky top-8 flex flex-row h-20 mb-8 justify-center min-w-[280px] sm:justify-between items-center px-16 py-4 rounded-2xl backdrop-blur-md border-1 border-[#ffffff3c] z-999 ">
   
        <div className="text-white text-3xl md:text-4xl lg:text-4xl xl:text-5xl font font-bold font-pixelifysans-regular [text-shadow:_3px_7px_0px_rgb(0_0_0_/_0.44)]">
        DEERTOBER
        </div>
        <div className='hidden sm:block'>
          <Mainbutton children = "START"/>
        </div>
        
      </div>
    </>
  )
}

export default Navbar
