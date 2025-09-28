'use client';

import React from 'react'
import Image from 'next/image'

interface NavbuttonProps {
    text ?: string;
    onClick?: () => void;
}

function Mainbutton({ text, onClick }: NavbuttonProps) {
  return (
    <button className="relative flex items-center justify-between font-pixelifysans-regular w-32 h-12 p-4 gap-2 z-10 cursor-pointer" onClick={onClick}>
        <Image
            src="/svg/Buttonborder.svg"
            alt="Button border"
            fill
            className='absolute inset-0 object-fill'
        />
        <Image
            src="/svg/pixelarrow.svg"
            alt="Pixel arrow"
            width={20}
            height={20}
            className='object-contain'
        />
        <div className='text-white'>{text}</div>
    </button>
  )
}

export default Mainbutton
