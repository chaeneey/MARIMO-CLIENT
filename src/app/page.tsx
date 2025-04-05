"use client";
import { SelectBox } from "@components";

export default function Home() {
  const options = ["50장", "100장", "150장", "200장"];
  const handleSelect = () => {
    console.log("clicked");
  };
  return (
    <div>
      <SelectBox
        label="청첩장 수량"
        options={options}
        onSelect={handleSelect}
      />
    </div>
  );
}
