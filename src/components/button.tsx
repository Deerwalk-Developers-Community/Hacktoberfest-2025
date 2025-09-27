'use client';

import React from 'react'
import Image from 'next/image'
import buttonBorder from '../../public/svg/Buttonborder.svg'
import pixelarrow from '../../public/svg/pixelarrow.svg'

interface NavbuttonProps {
    children: React.ReactNode;
    onClick?: () => void;
}
function Button({ children, onClick }: NavbuttonProps) {
    return (
        <button
            onClick={onClick}
            className="relative cursor-pointer"
        >
            <Image
                src={buttonBorder}
                alt="Button border"
                fill
                className="absolute inset-0 z-0 object-fill pointer-events-none"
            />

            <div className='inline-flex items-center justify-between w-40 px-2 py-4'>
                <span className="z-10 text-white ps-2 text-xl">
                    {children}
                </span>

                <div className="z-10 flex-shrink-0 pe-2">
                    <Image
                        src={pixelarrow}
                        alt="Pixel arrow"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </div>
            </div>

        </button>
    )
}

export default Button