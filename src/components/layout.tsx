import React, { Dispatch, ReactEventHandler, SetStateAction } from 'react'
import Accordion from './accordion'

type Props = {
    question: string,
    answer: string,
    idx: number
}
interface LayoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[],
}

const Layout = ({ handleClick, isActive, turn, setTurn, data }: LayoutProps) => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-14 w-full">
            {data.map((element, i) => (
                <div className="w-full" key={i}>
                    <Accordion
                        question={element.question}
                        answer={element.answer}
                        turn={turn}
                        setTurn={setTurn}
                        idx={element.idx}
                    />

                </div>
            ))}
        </div>
    )
}

export default Layout
