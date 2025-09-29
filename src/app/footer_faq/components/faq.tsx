"use client";
import Image from 'next/image';

import { useState } from "react";
import { PageHeader } from "./faq-header";

import Layout from "./layout";
import ufo from "../../../../public/ufo.svg"

const faqs = [
    {
        idx: 1,
        question: "Do I get a reward for participating?",
        answer: "Yes, you can earn digital badges (and sometimes swag if eligible)."
    },
    {
        idx: 2,
        question: "When do I need to claim my badges by?",
        answer: "Before the deadline set by Hacktoberfest (usually mid-November)."
    },
    {
        idx: 3,
        question: "Do issues/commits count?",
        answer: "No, only accepted pull/merge requests count."
    },
    {
        idx: 4,
        question: "I signed up for Hacktoberfest mid- October.Will pull / merge requests that I created earlier in October count ?",
        answer: "Yes, as long as they were made in October and meet the rules."
    },
    {
        idx: 5,
        question: "Do pull/merge requests made on my own repositories count?",
        answer: "No, they must be on others’ repositories."
    },
    {
        idx: 6,
        question: "Do multiple pull/merge requests to the same repository count?",
        answer: "Yes, but they need to be meaningful and accepted."
    }
];

export default function FAQ() {

    const [active, setActive] = useState([false, false, false, false, false, false])


    return (
        <div className="w-full text-white pt-20 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full flex flex-col items-start">
                <PageHeader />
                <Layout
                    data={faqs}
                    turn={active}
                    setTurn={setActive}
                />
            </div>

            <div className="pt-32 flex lg:flex-row justify-between items-end w-full px-10 lg:px-60">
                <span className="text-white text-xl sm:text-2xl lg:text-2xl font-pixelifysans-regular mb-4 lg:mb-0">
                    #DEERTOBER2025
                </span>
                <Image src={ufo} alt="" width={80} height={80} className="lg:w-24 lg:h-24 w-20 h-20" />
            </div>
        </div>
    );
}
