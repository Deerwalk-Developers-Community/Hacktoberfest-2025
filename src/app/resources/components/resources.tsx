import Alien1 from "../../../../public/alien1";
import Alien2 from "../../../../public/alien2";
import Alien3 from "../../../../public/alien3";
import Circle1 from "../../../../public/circle1";
import Circle2 from "../../../../public/circle2";
import { DottedBorder } from "./dotted-border";
import { PageHeader } from "./page-header";

const resourceSections = [
  {
    title: "Intro to open source",
    icon: <Alien1 className="w-64px h-63px " />,
    links: [
      { label: "Introduction to GitHub and Open-Source Projects", href: "https://www.digitalocean.com/community/tutorial-series/an-introduction-to-open-source" },
      { label: "How to Contribute to Open Source", href: "https://opensource.guide/how-to-contribute/" },
      { label: "What is Open Source", href: "https://www.digitalocean.com/community/tutorials/what-is-open-source" },
      { label: "How to use Git", href: "https://www.digitalocean.com/community/cheatsheets/how-to-use-git-a-reference-guide" },
    ],
  },
  {
    title: "Sharpen Your Skills",
    icon: <Alien3 className="w-64px h-63px " />,
    links: [
      { label: "[GitHub] GitHub Training Manual", href: "https://training.github.com/" },
      { label: "[General] How to write the perfect pull request", href: "https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/" },
      { label: "[General] How to write a good commit message", href: "https://dev.to/chrissiemhrk/git-commit-message-5e21" },
      { label: "[General] 5 things for your first time contributing", href: "https://about.gitlab.com/blog/first-time-open-source-contributor-5-things-to-get-you-started/" },
    ],
  },
  {
    title: "Contributing",
    icon: <Alien2 className="w-64px h-63px" />,
    links: [
      { label: "[GitHub] Participating Hacktoberfest projects", href: "https://github.com/topics/hacktoberfest" },
      { label: "[GitLab] Participating Hacktoberfest projects", href: "https://gitlab.com/explore/projects/topics/hacktoberfest" },
      { label: "[GitHub] Explore projects with issues on good firstissues.dev", href: "https://goodfirstissue.dev/" },
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron-bold">
                  {section.title}
                </h2>
              </div>

              <div className="ml-14 lg:w-276">
                <ul className="list-disc list-inside text-[#79C645] space-y-1 sm:space-y-2 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-spacegrotesk-regular ">
                  {section.links.map((link, i) => (
                    <li key={i} className="leading-none">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {link.label}
                      </a>
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
  );
}
