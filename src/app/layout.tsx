import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import {Space_Grotesk, Orbitron, Pixelify_Sans} from 'next/font/google'

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
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} ${pixelifySans.variable}`}>
        <Navbar/>
        <img className="absolute -top-20 -left-40 -z-999 h-100 w-100" src={'/svg/pixelcircle.svg'}></img>
        <img className="absolute top-80 -right-40 -z-999 h-100 w-100" src={'/svg/pixelcircle.svg'}></img>
        {children}
      </body>
    </html>
  )
}