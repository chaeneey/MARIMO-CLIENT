"use client";
import { useEffect, useRef, useState } from "react";

import { clickTab, tabButton, tabIndicator, tabStyle } from "./TabBar.css";

interface TabBarProps {
  tabType: "headerTab" | "productTab";
  activeTab: number;
  onTabChange: (index: number) => void;
}

const tabs = {
  headerTab: ["WEDDING INVITATION", "PRE-CEREMONY VIDEO"],
  productTab: ["상품정보", "상세페이지", "주문 전 체크", "배송/환불"],
};

const TabBar = ({ tabType, activeTab, onTabChange }: TabBarProps) => {
  const tabList = tabType === "headerTab" ? tabs.headerTab : tabs.productTab;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorPosition, setIndicatorPosition] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    if (activeEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      setIndicatorPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className={tabStyle}>
      {tabList.map((tab, index) => (
        <div key={tab}>
          <button
            className={`${tabButton({ tabType })} ${activeTab === index ? clickTab({ tabType }) : ""}`}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            onClick={() => onTabChange(index)}
          >
            {tab}
          </button>
        </div>
      ))}
      <div
        className={tabIndicator({ tabType })}
        style={{
          left: indicatorPosition.left,
          width: indicatorPosition.width,
        }}
      />
    </div>
  );
};

export default TabBar;
