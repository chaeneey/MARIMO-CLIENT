"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(
    pathname.includes("/invitation") ? 0 : 1,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const isTransparentMode = pathname === "/invitation" || pathname === "/video";
  const hasHideMode = pathname.includes("/order");

  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
    const routes = ["/invitation", "/video"];
    router.push(routes[tab]);
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
        isScrolled && headerWrapperScrolled({ hasHideMode }),
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
    </header>
  );
};

export default Header;
