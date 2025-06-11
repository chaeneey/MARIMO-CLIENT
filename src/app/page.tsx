import { Footer } from "@/components/common";
import {
  HomeHeader,
  MarimoConceptSection,
  MarimoInfoSection,
  MarimoProductInfoSection,
} from "@/components/home";

const Page = () => {
  return (
    <>
      <HomeHeader />
      <MarimoInfoSection />
      <MarimoProductInfoSection />
      <MarimoConceptSection />
      <Footer />
    </>
  );
};

export default Page;
