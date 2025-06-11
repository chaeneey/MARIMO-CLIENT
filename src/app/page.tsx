import {
  MarimoConceptSection,
  MarimoInfoSection,
  MarimoProductInfoSection,
} from "@/components/home";

const Page = () => {
  return (
    <div>
      <MarimoInfoSection />
      <MarimoProductInfoSection />
      <MarimoConceptSection />
    </div>
  );
};

export default Page;
