import Arrow from "../../../../public/arrow";

export function PageHeader() {
  return (
    <header>
  <div className="flex flex-row items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
    <div className="text-white text-xl font-mono">
      <Arrow className="w-16 h-8 md:w-20 md:h-10 lg:w-[121px] lg:h-[77px]" />
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-orbitron-regular">
      Resources for Beginners
    </h1>
  </div>  
</header>

  )
}
