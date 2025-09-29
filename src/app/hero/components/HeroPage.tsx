"use client"
import React from "react";
import TextBox from "@/core/layout/TextBox";
import Mainbutton from "@/core/layout/Mainbutton";
import Image from "next/image";

function HeroPage() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="flex flex-col items-center justify-items-center gap-10 mx-24 h-full">
        <div className="mt-16 text-center justify-start text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron-regular bg-glow">
          Celebrate our 8th year <br />
          supporting open source!
        </div>

        <div className="text-subtitle text-center text-lg sm:text-2xl font-orbitron-regular text-[#D9A6FF] ">
          Presented By
        </div>

        <Image
          src="/svg/ddc_logo.svg"
          alt="Deer Logo"
          className="h-20 sm:h-22"
          width={140}
          height={100}
        />

        <div className="text-center text-white text-xl sm:text-3xl font-spacegrotesk-regular">
          Hacktoberfest Registration is Open Now 
        </div>

        <Mainbutton text="REGISTER" onClick={() => {window.open("https://events.mlh.io/events/13019-deertober-2025?_gl=1*15jokgj*_ga*MTQ2MjUyNzI5MC4xNzU4MjYzNjY4*_ga_E5KT6TC4TK*czE3NTkxNTg3MTkkbzckZzEkdDE3NTkxNTg3NTkkajIwJGwwJGgw", "_blank");}} />
      </div>

      <TextBox
        title="Deertober25"
        description={
          <div>
            <p>
              This year marks the 8th anniversary of DDC, and we&apos;re calling
              on your support!
            </p>
            <p>
              Whether it&apos;s your first time participating or you have
              previously participated, it&apos;s almost time to hack out four
              pristine pull /merge requests as we continue our month of support
              for open source.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default HeroPage;
