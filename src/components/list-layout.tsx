import React from "react"
import DottedLine from "../../public/dottedline"
import Link from "next/link"

type LinkItem = {
    linkText: string
    link: string
}

type SectionProp = {
    idx: number
    title: string
    links: LinkItem[]
}

type Props = {
    list: SectionProp
}

const ListLayout = ({ list }: Props) => {
    return (
        <div className="flex-1 min-w-0 ps-0 lg:ps-10 mt-6 lg:mt-0">
            <h2 className="text-2xl lg:text-3xl mb-2">{list.title}</h2>
            <DottedLine className="w-[90%] h-1.5" />
            <ul className="list-disc pt-4 space-y-2">
                {list.links.map((element) => {
                    const isExternal = element.link.startsWith("http")
                    return (
                        <li key={element.link}>
                            {isExternal ? (
                                <a
                                    href={element.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-lg lg:text-2xl"
                                >
                                    {element.linkText}
                                </a>
                            ) : (
                                <Link
                                    href={element.link}
                                    className="underline text-lg lg:text-2xl"
                                >
                                    {element.linkText}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListLayout
