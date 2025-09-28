import React from 'react'
import TextBox from '@/core/layout/TextBox'
import Mainbutton from '@/core/layout/Mainbutton'
import Image from 'next/image'

function HeroPage() {
  return (
    <div>
        <div className= "flex flex-col items-center justify-items-center gap-10 mx-24">

        <div className="mt-16 text-center justify-start text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron-regular bg-glow">
        Celebrate our 8th year <br/>supporting open source!</div>

        <div className="text-subtitle text-center text-lg sm:text-2xl font-orbitron-regular ">Presented By</div>
        
        <Image src="/svg/ddc_logo.svg" alt="Deer Logo" className="h-20 sm:h-22" width={140} height={100} />

        <div className="font-bold text-center text-white text-xl sm:text-3xl font-spacegrotesk-regular">Hacktoberfest Registration is Open Now !</div>

        <Mainbutton>Register Now</Mainbutton>
      </div>

      <TextBox
        title="Deertober25"
        description={
          <div>
            <p>This year marks the 8th anniversary of DDC, and we&aposre calling on your support!</p>
            <p>Whether it&aposs your first time participating or you have previously participated, it&aposs almost time to hack out four pristine pull /merge requests as we continue our month of support for open source.</p>
          </div>
        }
      />
    </div>
  )
}

export default HeroPage
