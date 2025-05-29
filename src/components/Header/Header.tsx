"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IcLogoSmall } from "@/assets/svgs";

import {
  buttonSection,
  headerWrapper,
  headerWrapperScrolled,
  tabBarSection,
} from "./Header.css";
import Button from "../Button/Button";
import TabBar from "../TabBar/TabBar";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isDarkHeaderPage = pathname?.includes("/order");
  console.log(pathname);

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={clsx(
        headerWrapper,
        (isScrolled || isDarkHeaderPage) && headerWrapperScrolled
      )}
    >
      <IcLogoSmall width={122} height={50} />

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
