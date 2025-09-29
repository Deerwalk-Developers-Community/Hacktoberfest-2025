import Image from "next/image";

export function PageHeader() {
    return (
        <div className="ml-4 sm:ml-10 lg:ml-53 flex flex-row items-center gap-3 mb-6 sm:mb-8 lg:mb-12 mr-4 sm:mr-6 ">
            <div className="text-white text-xl font-mono">
                <Image
                    src="/arrow.svg"
                    alt="Arrow"
                    width={85}
                    height={45}
                    className="w-[85px] h-[45px]"
                />
            </div>
            <h1 className="lg:text-6xl text-5xl font-orbitron-regular text-white">
                FAQs
            </h1>
        </div>
    );
}
