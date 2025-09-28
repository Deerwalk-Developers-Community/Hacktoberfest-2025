import Navbar from "@/components/layout/Navbar";
import {Space_Grotesk, Orbitron, Pixelify_Sans} from 'next/font/google'
import "../app/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  variable: "--font-space_grotesk"
})
const orbitron = Orbitron({
  subsets:['latin'],
  variable:"--font-orbitron"
})
const pixelifySans = Pixelify_Sans({
  subsets:['latin'], 
  variable: '--font-pixelify_sans'
})

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang='en'>
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} ${pixelifySans.variable} overflow-x-hidden` }>
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