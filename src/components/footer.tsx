import React from 'react'
import Card from './card'
import ListLayout from './list-layout'

const reqColumns = [
    {
        idx: 1,
        title: "SHARE",
        links: [
            { linkText: "X (Twitter)", link: "https://www.twitter.com" },
            { linkText: "Facebook", link: "https://www.facebook.com" },
            { linkText: "LinkedIn", link: "https://www.linkedin.com" },
            { linkText: "Hacker News", link: "https://news.ycombinator.com" },
            { linkText: "Reddit", link: "https://www.reddit.com" },
        ],
    },
    {
        idx: 2,
        title: "FOLLOW",
        links: [
            { linkText: "Discord", link: "https://www.discord.com" },
            { linkText: "LinkedIn", link: "https://www.linkedin.com" },
            { linkText: "Instagram", link: "https://www.instagram.com" },
            { linkText: "Email", link: "mailto:example@gmail.com" },
        ],
    },
    {
        idx: 3,
        title: "LEGAL",
        links: [
            { linkText: "Terms", link: "#" },
            { linkText: "Privacy", link: "#" },
            { linkText: "Brand Guideline", link: "#" },
        ],
    },
]

const Footer = () => {
    return (
        <div className="bg-[#30226B] flex flex-col lg:flex-row py-20 px-10 lg:px-20 w-full justify-between">
            <Card
                title="HACKTOBER FEST 2025"
                body="&copy; 2024 DEERWALK DEVELOPERS COMMUNITY. ALL RIGHTS RESERVED"
                buttonText="REGISTER"
            />
            <div className="flex flex-col lg:flex-row lg:w-[70%] justify-between ms-10 lg:ms-60 lg:me-40 mt-10 lg:mt-10 lg:px-20">
                {reqColumns.map((item, i) => (
                    <ListLayout key={i} list={item} />
                ))}
            </div>
        </div>
    )
}

export default Footer
