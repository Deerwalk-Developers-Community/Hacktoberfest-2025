import Alien1 from "../../public/alien1";
import Alien2 from "../../public/alien2";
import Alien3 from "../../public/alien3";
import Circle1 from "../../public/circle1";
import Circle from "../../public/circle1";
import Circle2 from "../../public/circle2";
import { DottedBorder } from "./dotted-border";
import { PageHeader } from "./page-header";

const resourceSections = [
  {
    title: "Intro to open source",
    icon: <Alien1 className="w-64px h-63px text-purple-400" />,
    links: [
      "Introduction to GitHub and Open-Source Projects",
      "How to Contribute to Open Source",
      "What is Open Source",
      "How to use Git",
    ],
  },
  {
    title: "Sharpen Your Skills",
    icon: <Alien3 className="w-64px h-63px " />,
    links: [
      "[GitHub] GitHub Training Manual",
      "[General] How to write the perfect pull request",
      "[General] How to write a good commit message",
      "[General] 5 things for your first time contributing",
    ],
  },
  {
    title: "Contributing",
    icon: <Alien2 className="w-64px h-63px" />,
    links: [
      "[GitHub] Participating Hacktoberfest projects",
      "[GitLab] Participating Hacktoberfest projects",
      "[GitHub] Explore projects with issues on good firstissues.dev",
    ],
  },
];

export default function Resources() {
  return (
    <div className="relative w-full text-white py-8 sm:py-12 lg:py-20 px-8 flex flex-col items-center justify-center bg-gradient min-h-screen overflow-hidden">
      <div className="absolute top-[-60] left-0 hidden lg:block md:block">
        <Circle1 className="w-full h-full " />
      </div>

      <div className="absolute bottom-60 right-0 hidden lg:block md:block">
        <Circle2 className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full mb-8 sm:mb-12 flex lg:items-start lg:pl-30">
        <PageHeader />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start max-w-6xl lg:pb-20 md:pb-20">
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-14">
          {resourceSections.map((section, idx) => (
            <section key={idx} className="">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                {section.icon}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-tektur">{section.title}</h2>
              </div>

              <div className="ml-14 lg:w-276">
                <ul className="list-disc list-inside text-[#79C645] space-y-1 sm:space-y-2 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-grotesk ">
                  {section.links.map((link, i) => (
                    <li key={i} className="leading-none">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      <DottedBorder />
    </div>
  )
}

