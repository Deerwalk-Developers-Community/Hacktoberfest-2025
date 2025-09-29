"use client"
import React from 'react'
import Mainbutton from '@/core/layout/Mainbutton'

type CardProps = {
    title: string
    body: string
    buttonText: string
}

const Card = ({ title, body, buttonText }: CardProps) => {
    return (
        <div className="w-full sm:w-80 lg:w-[300px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:pb-6 pb-2 font-orbitron-regular">{title}</h1>
            <p className="text-sm sm:text-base lg:text-base lg:pb-12 pb-6 font-spacegrotesk-regular">{body}</p>
            {/* <Button>{buttonText}</Button> */}
            <Mainbutton text={buttonText} onClick={() => {window.open("https://events.mlh.io/events/13019-deertober-2025?_gl=1*15jokgj*_ga*MTQ2MjUyNzI5MC4xNzU4MjYzNjY4*_ga_E5KT6TC4TK*czE3NTkxNTg3MTkkbzckZzEkdDE3NTkxNTg3NTkkajIwJGwwJGgw", "_blank");}} />
        </div>
    )
}

export default Card
