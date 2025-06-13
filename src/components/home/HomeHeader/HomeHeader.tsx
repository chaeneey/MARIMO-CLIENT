"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IcLogoSmallHome, IcLogoSmallHome2 } from "@/assets/svgs";
import { Button } from "@/components/common";

import * as styles from "./HomeHeader.css";

const HomeHeader = () => {
  const pathName = usePathname();
  const isHome = pathName == "/";

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

      <Link href={"/order-check"}>
        <Button size="30" color="lime04">
          주문 조회
        </Button>
      </Link>
    </div>
  );
};

export default HomeHeader;
