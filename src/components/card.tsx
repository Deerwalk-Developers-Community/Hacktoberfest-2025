import React from 'react'
import Button from './button'

type CardProps = {
    title: string
    body: string
    buttonText: string
}

const Card = ({ title, body, buttonText }: CardProps) => {
    return (
        <div className="w-full sm:w-80 lg:w-[300px]">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl lg:pb-6 pb-2">{title}</h1>
            <p className="text-sm sm:text-base lg:text-base lg:pb-12 pb-6">{body}</p>
            <Button>{buttonText}</Button>
        </div>
    )
}

export default Card
