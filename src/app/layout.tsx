import "./globals.css";
import Navbar from "@/core/layout/Navbar";
import { orbitronBold, orbitronRegular, pixelifySansRegular , spaceGroteskRegular} from "./utils/fonts";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang='en'>
      <body className={`${orbitronRegular.variable} ${orbitronBold.variable}  ${pixelifySansRegular.variable} ${spaceGroteskRegular.variable}  overflow-x-hidden ` }>
      <div className="flex flex-col gradient-bg">
        <Navbar/> 
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <Image className="hidden md:block absolute -top-20 -left-20 h-96 w-96 " src={'/svg/pixelcircle.svg'} alt="decoration" width={384} height={384} />
          <Image className="hidden md:block absolute top-80 -right-40 h-96 w-96 " src={'/svg/pixelcircle.svg'} alt="decoration" width={384} height={384} />
        </div>
        {children}
      </div>
      </body>
    </html>
  )
}