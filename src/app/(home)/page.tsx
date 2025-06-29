import {
  MarimoConceptSection,
  MarimoInfoSection,
  MarimoProductInfoSection,
} from "@/components/home";

const Page = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <MarimoInfoSection />
      <MarimoProductInfoSection />
      <MarimoConceptSection />
    </div>
  );
};

export default Page;
