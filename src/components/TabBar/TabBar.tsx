import { clickTab, tabButton, tabStyle } from "./TabBar.css";

interface TabBarProps {
  tabType: "headerTab" | "productTab";
  activeTab: number;
}

const tabs = {
  headerTab: ["WEDDING INVITATION", "PRE-CEREMONY VIDEO"],
  productTab: ["상품정보", "상세페이지", "주문 전 체크", "배송/환불"],
};

const TabBar = ({ tabType, activeTab }: TabBarProps) => {
  const tabList = tabType === "headerTab" ? tabs.headerTab : tabs.productTab;
  return (
    <div className={tabStyle}>
      {tabList.map((tab, index) => (
        <div key={tab}>
          <button
            className={`${tabButton({ tabType })} ${activeTab === index ? clickTab({ tabType }) : ""}`}
          >
            {tab}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
