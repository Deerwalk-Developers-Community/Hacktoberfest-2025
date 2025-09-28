import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { orbitronRegular, pixelifySansRegular , spaceGroteskRegular} from "./utils/fonts";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang='en'>
      <body className={`${orbitronRegular.variable} ${pixelifySansRegular.variable} ${spaceGroteskRegular.variable} overflow-x-hidden` }>
      <div className="flex flex-col mx-4 sm:mx-8 md:mx-24">
        <Navbar/>
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <img className="hidden md:block absolute -top-20 -left-20 h-96 w-96 " src={'/svg/pixelcircle.svg'} alt="decoration"></img>
          <img className="hidden md:block absolute top-80 -right-40 h-96 w-96 " src={'/svg/pixelcircle.svg'} alt="decoration"></img>
        </div>
        {children}
      </div>
      </body>
    </html>
  )
}