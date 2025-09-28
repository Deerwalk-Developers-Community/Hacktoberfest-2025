import React from 'react'

interface TextBoxProps{
    title: React.ReactNode;
    description : React.ReactNode;
}

function TextBox({ title, description }: TextBoxProps) {
  return (
    <div 
        className='relative flex flex-col gap-7 mx-24 lg:mx-42 2xl:mx-auto my-30 px-28 py-27.5 bg-textbox text-justify'
        style={{ background: 'var(--textbox_bg)' }}
    >
        <img 
            src='/svg/bottom_left.svg' 
            className='absolute -bottom-6 -left-6' 
            style={{ filter: 'var(--glow-filter)' }} 
            alt="bottom left frame border" 
        />
        <img 
            src='/svg/top_right.svg' 
            className='absolute -top-6 -right-6' 
            style={{ filter: 'var(--glow-filter)' }}
            alt="top right frame border"  
        />
        <img 
            src='/svg/top_left.svg' 
            className='absolute -top-6 -left-6' 
            style={{ filter: 'var(--glow-filter)' }} 
            alt="top right frame border" 
        />
        <h1 className='text-4xl'>{title}</h1>
        <div>
            {description}
        </div>
    </div>
  )
}

export default TextBox
