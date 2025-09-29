import FAQ from "@/app/footer_faq/components/faq";
import Footer from "@/app/footer_faq/components/footer"
import Resources from "./resources/components/resources";
import HeroPage from "./hero/components/HeroPage";
import Participating from "./participatingHF/components/Participating";

export default function Home() {
  return (
    <div className="w-full">
      <HeroPage/>
      <Resources />
      <Participating />
      <FAQ />
      <Footer />
    </div>
  );
}
