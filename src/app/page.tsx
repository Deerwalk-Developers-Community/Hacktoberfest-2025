import Mainbutton from "@/components/layout/Mainbutton";
import TextBox from "@/components/layout/TextBox";
import React from "react";

export default function Home() {
  return (
    <>
      <div className= "flex flex-col items-center justify-items-center gap-10 mx-24">

        <div className="mt-16 text-center justify-start text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[orbitron] text-shadow:_0px_0px_20px_rgb(255_251_251_/_0.4)]">
        Celebrate our 8th year <br/>supporting open source!</div>

        <div className="text-[#D9A6FF] text-center text-lg sm:text-2xl font-[orbitron] ">Presented By</div>

        <img src="/svg/ddc_logo.svg" alt="Deer Logo" className="h-20 sm:h-22" />

        <div className="font-bold text-center text-white text-xl sm:text-3xl font-[space_grotesk]">Hacktoberfest Registration is Open Now !</div>

        <Mainbutton children="REGISTER"/>
      </div>

      <TextBox
        title="Deertober25"
        description={
          <div>
            <p>This year marks the 8th anniversary of DDC, and we're calling on your support!</p>
            <p>Whether it's your first time participating or you have previously participated, it's almost time to hack out four pristine pull /merge requests as we continue our month of support for open source.</p>
          </div>
        }
      />
    </>
  );
}
