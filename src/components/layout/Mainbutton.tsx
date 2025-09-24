'use client';

import React from 'react'
import Image from 'next/image'

interface NavbuttonProps {
    children : React.ReactNode;
    onClick?: () => void;
}

function Mainbutton({ children, onClick }: NavbuttonProps) {
  return (
    <button className="relative flex items-center justify-between font-[pixelify_sans] w-32 h-12 p-4 gap-2" onClick={onClick}>
        <Image
            src="/svg/Buttonborder.svg"
            alt="Button border"
            fill
            className='absolute inset-0 z-0 object-fill'
        />
        <Image
            src="/svg/pixelarrow.svg"
            alt="Pixel arrow"
            width={20}
            height={20}
            className='z-10 object-contain'
        />
        <div className='z-10  text-white'>{children}</div>
    </button>
  )
}

export default Mainbutton
