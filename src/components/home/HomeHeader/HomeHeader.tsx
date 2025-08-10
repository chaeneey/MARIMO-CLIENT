"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { IcHeaderBar, IcLogoSmallHome, IcLogoSmallHome2 } from "@/assets/svgs";
import { Button } from "@/components/common";
import HamburgerBar from "@/components/common/HamburgerBar/HamburgerBar";

import * as styles from "./HomeHeader.css";

const HomeHeader = () => {
  const pathName = usePathname();
  const isHome = pathName == "/";

  const [isHamburgerBarOpen, setIsHamburgerBarOpen] = useState(false);
  const handleChanegeHamburgerBar = () => {
    setIsHamburgerBarOpen((prev) => !prev);
  };

  return (
    <div className={styles.homeHeaderLayout({ isHome })}>
      <div className={styles.homeHeaderLeftContainer}>
        <Link href={"/"}>
          {isHome ? (
            <IcLogoSmallHome width={127} height={27} />
          ) : (
            <IcLogoSmallHome2 width={127} height={27} />
          )}
        </Link>

        <div className={styles.homeHeaderLeftWrapper}>
          <Link href={"/invitation"} className={styles.homeHeaderLinkStyle}>
            WEDDING INVITATION
          </Link>
          <Link href={"/video"} className={styles.homeHeaderLinkStyle}>
            PRE-CEREMONY VIDEO
          </Link>
        </div>
      </div>

      <div className={styles.homeHeaderOrderButton}>
        <Link href={"/order-check"}>
          <Button size="30" color="lime04">
            주문 조회
          </Button>
        </Link>
      </div>

      <div className={styles.homeHeaderHamburderBar}>
        <IcHeaderBar onClick={handleChanegeHamburgerBar} />
      </div>

      {isHamburgerBarOpen && (
        <HamburgerBar handleCloseHamburgerBar={handleChanegeHamburgerBar} />
      )}
    </div>
  );
};

export default HomeHeader;
