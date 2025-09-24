import Mainbutton from "@/components/layout/Mainbutton";
import React from "react";

export default function Home() {
  return (
    <>
      <div className= "flex flex-col items-center justify-items-center gap-10 mx-24">

        <div className="mt-16 text-center justify-start text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[orbitron] text-shadow:_0px_0px_20px_rgb(255_251_251_/_0.4)]">
        Celebrate our 8th year <br/>supporting open source!</div>

        <div className="text-[#D9A6FF] text-center text-lg sm:text-2xl font-[orbitron] ">Presented By</div>

        <img src="/svg/ddc_logo.svg" alt="Deer Logo" className="h-20 sm:h-22" />

        <div className="font-bold text-center text-white text-xl sm:text-2xl font-[space_grotesk]">Hacktoberfest Registration is Open Now !</div>

        <Mainbutton children="REGISTER"/>
      </div>
    </>
  );
}
