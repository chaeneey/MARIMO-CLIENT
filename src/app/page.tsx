import { TabBar } from "@/components";

export default function Home() {
  return (
    <div>
      <TabBar tabType="headerTab" activeTab={0} />
      <TabBar tabType="productTab" activeTab={0} />
    </div>
  );
}
