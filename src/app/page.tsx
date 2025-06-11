import { Footer } from "@/components/common";
import {
  HomeHeader,
  MarimoConceptSection,
  MarimoInfoSection,
  MarimoProductInfoSection,
} from "@/components/home";

const Page = () => {
  return (
    <div>
      <HomeHeader />
      <MarimoInfoSection />
      <MarimoProductInfoSection />
      <MarimoConceptSection />
      <Footer />
    </div>
  );
};

export default Page;
