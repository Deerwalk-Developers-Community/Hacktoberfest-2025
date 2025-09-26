import Alien1 from "../../public/alien1";
import Alien2 from "../../public/alien2";
import Alien3 from "../../public/alien3";
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
    icon: <Alien3 className="w-64px h-63px text-purple-400" />,
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
    <div className="w-full bg-slate-950 text-white py-20 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full flex flex-col items-start">
        <div className="ml-60">
          <PageHeader />
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-14 w-full">
          {resourceSections.map((section, idx) => (
            <section key={idx} className="">
              <div className="flex items-center gap-3">
                {section.icon}
                <h2 className="text-4xl font-semibold">{section.title}</h2>
              </div>
              <div className="ml-14 w-[1107px]">
                <ul className="list-disc list-inside text-[#79C645] space-y-1 text-3xl">
                  {section.links.map((link, i) => (
                    <li key={i}>{link}</li>
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
