import Resources from "@/app/resources/components/resources";
import HeroPage from "./hero/components/HeroPage";


export default function Home() {
  return (
    <div className="w-full">
      <HeroPage/>
      <Resources />
    </div>
  );
}
