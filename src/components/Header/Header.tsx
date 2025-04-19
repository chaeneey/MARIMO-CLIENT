"use client";
import { useState } from "react";

import {
  buttonSection,
  headerLogoStyle,
  headerWrapper,
  tabBarSection,
} from "./Header.css";
import Button from "../Button/Button";
import TabBar from "../TabBar/TabBar";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <header className={headerWrapper}>
      <div className={headerLogoStyle}>Logo</div>
      <section className={tabBarSection}>
        <TabBar
          tabType="headerTab"
          activeTab={activeTab}
          onTabChange={(index) => handleTabChange(index)}
        />
      </section>
      <section className={buttonSection}>
        <Button size="30" color="lime04">
          주문 조회
        </Button>
      </section>
    </header>
  );
};

export default Header;
