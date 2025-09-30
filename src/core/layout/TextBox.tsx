import React from 'react'
import Image from 'next/image';

interface TextBoxProps{
    title: React.ReactNode;
    description : React.ReactNode;
}

function TextBox({ title, description }: TextBoxProps) {
  return (
    <div 
        className='relative mx-5 sm:mx-18 flex flex-col gap-7 lg:mx-24 xl:max-w-560 my-30 px-10 sm:px-18 py-27.5 bg-textbox text-justify textbox-bg'>
        <Image 
            src='/svg/bottom_left.svg' 
            className='absolute -bottom-0 -left-0 bg-glow' 
            alt="bottom left frame border" 
            width={83}
            height={83}
        />
        <Image 
            src='/svg/top_right.svg' 
            className='absolute -top-0 -right-0 bg-glow' 
            alt="top right frame border"  
            width={83}
            height={83}
        />
        <Image 
            src='/svg/top_left.svg' 
            className='absolute -top-0 -left-0 bg-glow' 
            alt="top right frame border" 
            width={83}
            height={83}
        />
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-orbitron-regular text-left'>{title}</h1>
        <div className='text-lg font-spacegrotesk-regular'>
            {description}
        </div>
    </div>
  )
}

export default TextBox
