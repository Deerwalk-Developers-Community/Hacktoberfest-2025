"use client";
import Image from 'next/image';

import { useState } from "react";
import { PageHeader } from "./page-header";

import Layout from "./layout";
import ufo from "../../public/ufo.svg"

const faqs = [
    {
        idx: 1,
        question: "Do I get a reward for participating?",
        answer: "Yes"
    },
    {
        idx: 2,
        question: "When do I need to claim my badges by?",
        answer: ""
    },
    {
        idx: 3,
        question: "Do issues/commits count?",
        answer: ""
    },
    {
        idx: 4,
        question: "I signed up for Hacktoberfest mid- October.Will pull / merge requests that I created earlier in October count ?",
        answer: ""
    },
    {
        idx: 5,
        question: "Do pull/merge requests made on my own repositories count?",
        answer: ""
    },
    {
        idx: 6,
        question: "Do multiple pull/merge requests to the same repository count?",
        answer: ""
    }
];

export default function FAQ() {

    const [active, setActive] = useState([false, false, false, false, false, false])

    const isActive = active.some(element => element)

    const handleClick = () => {
        isActive ? setActive([false, false, false, false, false, false]) : setActive([true, true, true, true, true, true])
    }

    return (
        <div className="w-full bg-slate-950 text-white pt-20 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full flex flex-col items-start">
                <PageHeader />
                <Layout
                    handleClick={handleClick}
                    isActive={isActive}
                    data={faqs}
                    turn={active}
                    setTurn={setActive}
                />
            </div>

            <div className="pt-32 flex flex-col lg:flex-row justify-between items-start lg:items-end w-full px-10 lg:px-60">
                <span className="text-green-600 text-xl sm:text-2xl lg:text-2xl font-semibold mb-4 lg:mb-0">
                    #DEERTOBER2025
                </span>
                <Image src={ufo} alt="" width={80} height={80} className="lg:w-24 lg:h-24 w-20 h-20" />
            </div>
        </div>
    );
}
