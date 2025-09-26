import Arrow from "../../public/arrow";

export function PageHeader() {
  return (
    <div className="flex flex-row items-center gap-3 mb-12 mr-10">
      <div className="text-white text-xl font-mono">
        <Arrow className="w-85px h-45px " />
      </div>
      <h1 className="text-6xl font-medium text-white">
        Resources for Beginners
      </h1>
    </div>
  );
}
