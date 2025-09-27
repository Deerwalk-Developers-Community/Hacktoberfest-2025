import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import down from "../../public/arrow-down.svg"
import up from "../../public/arrow-up.svg"

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number

}

const Accordion = ({ question, answer, turn, setTurn, idx }: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px` : "0px"
        }
    },
        [contentRef, turn, idx])

    const toggelAccordion = () => {
        let newTurn = [...turn]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)

    }
    return (

        <div
            onClick={toggelAccordion}
            className="flex flex-col items-center justify-center w-full px-2  lg:text-base">
            <button className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${turn![idx]}`}>
                <div className='py-3'>

                    <div className="flex items-center justify-between text-left gap-4">
                        <span className="ml-2 lg:font-semibold lg:text-4xl text-2xl">
                            {question}
                        </span>
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                            {turn![idx] ? (
                                <Image src={up} alt="" width={20} height={20} />
                            ) : (
                                <Image src={down} alt="" width={20} height={20} />
                            )}
                        </div>
                    </div>
                    <div ref={contentRef} className="mx-4 overflow-hidden text-left transition-all duration-500 h-full">
                        <p className='py-1 leading-normal text-justify whitespace-pre-line text-xl lg:text-2xl'>
                            {answer}
                        </p>

                    </div>
                    <hr className='pt-2' />
                </div>

            </button>

        </div >
    )
}



export default Accordion
