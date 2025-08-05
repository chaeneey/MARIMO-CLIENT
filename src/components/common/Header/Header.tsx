"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { IcHeaderBar, IcLogoSmall } from "@/assets/svgs";

import {
  buttonSection,
  hamburgerBarSection,
  headerWrapper,
  headerWrapperScrolled,
  tabBarSection,
} from "./Header.css";
import Button from "../Button/Button";
import HamburgerBar from "../HamburgerBar/HamburgerBar";
import TabBar from "../TabBar/TabBar";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(
    pathname.includes("/invitation") ? 0 : 1
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const isTransparentMode = pathname === "/invitation" || pathname === "/video";
  const hasHideMode = pathname.includes("/order");

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
    const routes = ["/invitation", "/video"];
    router.push(routes[tab]);
  };

  const [isHamburgerBarOpen, setIsHamburgerBarOpen] = useState(false);
  const handleChanegeHamburgerBar = () => {
    setIsHamburgerBarOpen((prev) => !prev);
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
        headerWrapper({ isTransparentMode }),
        isScrolled && headerWrapperScrolled({ hasHideMode })
      )}
    >
      <Link href="/">
        <IcLogoSmall width={122} height={50} />
      </Link>

      <section className={tabBarSection}>
        <TabBar
          tabType="headerTab"
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </section>

      <section className={buttonSection}>
        <Link href={"/order-check"}>
          <Button size="30" color="lime04">
            주문 조회
          </Button>
        </Link>
      </section>

      <section className={hamburgerBarSection}>
        <IcHeaderBar onClick={handleChanegeHamburgerBar} />
      </section>

      {isHamburgerBarOpen && (
        <HamburgerBar handleCloseHamburgerBar={handleChanegeHamburgerBar} />
      )}
    </header>
  );
};

export default Header;
