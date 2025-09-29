import React from 'react'
import Card from './card'
import ListLayout from './list-layout'

const reqColumns = [
    {
        idx: 1,
        title: "SHARE",
        links: [
            { linkText: "X (Twitter)", link: "https://twitter.com/share?url=https%3A%2F%2Fhacktoberfest.com&text=Spread%20the%20love%20for%20open%20source%20with%20%23Hacktoberfest%2C%20a%20month-long%20celebration%20of%20open-source%20projects%2C%20their%20maintainers%2C%20and%20the%20entire%20community%20of%20contributors." },
            { linkText: "Facebook", link: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhacktoberfest.com" },
            { linkText: "LinkedIn", link: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fhacktoberfest.com" },
            { linkText: "Hacker News", link: "https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fhacktoberfest.com&t=Hacktoberfest%202025" },
            { linkText: "Reddit", link: "https://www.reddit.com/submit?url=https%3A%2F%2Fhacktoberfest.com&title=Hacktoberfest%202025" },
        ],
    },
    {
        idx: 2,
        title: "FOLLOW",
        links: [
            { linkText: "LinkedIn", link: " https://www.linkedin.com/company/d-dev-community/posts/?feedView=all" },
            { linkText: "Instagram", link: "https://www.instagram.com/dwit_ddc/" },
            { linkText: "Email", link: "mailto:developers.community@deerwalk.edu.np" },
        ],
    },

]

const Footer = () => {
    return (
        <div className="bg-[#30226B] flex flex-col lg:flex-row py-20 px-10 lg:px-20 w-full justify-around font-spacegrotesk-regular">
            <Card
                title="DEERTOBER 2025"
                body="&copy; 2025 DEERWALK DEVELOPERS COMMUNITY. ALL RIGHTS RESERVED"
                buttonText="REGISTER"
            />
            <div className="flex flex-col lg:flex-row md:flex-row ms-10 lg:ms-60 lg:me-40 mt-10 lg:mt-10 lg:px-20 font-spacegrotesk-regular">
                {reqColumns.map((item, i) => (
                    <ListLayout key={i} list={item} />
                ))}
            </div>
        </div>
    )
}

export default Footer
