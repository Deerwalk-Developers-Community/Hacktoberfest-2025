import "./globals.css";
import Navbar from "@/core/layout/Navbar";
import {
  orbitronBold,
  orbitronRegular,
  pixelifySansRegular,
  spaceGroteskRegular,
} from "./utils/fonts";
import Image from "next/image";
import pixel from "../../public/svg/pixelcircle.svg";

export const metadata = {
  title: "Deertober 2025",
  icons: {
    icon: "/DDCfavicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${orbitronRegular.variable} ${orbitronBold.variable}  ${pixelifySansRegular.variable} ${spaceGroteskRegular.variable}  overflow-x-hidden gradient-bg relative`}
      >

          <Navbar />
          <Image className="hidden md:block absolute -top-20 -left-80" src={pixel} alt="decoration" width={800} height={500} />
          <Image className="hidden md:block absolute top-80 -right-80  " src={pixel} alt="decoration" width={800} height={500} />
          <Image className="hidden md:block absolute top-360 -left-160  " src={pixel} alt="decoration" width={1000} height={500} />
          <Image className="hidden md:block absolute top-560 -right-80  " src={pixel} alt="decoration" width={800} height={500} />

          {/* <div className="absolute top-0 left-0 hidden lg:block ">
            <Circle1 className="w-full h-full " />
          </div>

          <div className="absolute bottom-[200] right-0 hidden lg:block ">
            <Circle2 className="w-full h-full" />
          </div> */}
          {children}
      </body>
    </html>
  );
}
