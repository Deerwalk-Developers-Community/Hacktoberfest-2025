// import Image from "next/image";
import Arrow from "../../../../public/arrow";

export function PageHeader() {
  return (
    <div className="flex flex-row items-center gap-3 lg:pl-30 lg:mb-14 mb-8">
      <div className="text-white text-xl font-mono">
        {/* <Image
                    src="/arrow.svg"
                    alt="Arrow"
                    width={85}
                    height={45}
                    className="w-[85px] h-[45px]"
                /> */}
        <Arrow className="w-16 h-8 md:w-20 md:h-10 lg:w-[121px] lg:h-[77px]" />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-orbitron-regular text-white">
        FAQs
      </h1>
    </div>
  );
}
