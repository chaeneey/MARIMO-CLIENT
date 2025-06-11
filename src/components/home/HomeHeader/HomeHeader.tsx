import Link from "next/link";

import { IcLogoSmallHome } from "@/assets/svgs";
import { Button } from "@/components/common";

import * as styles from "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className={styles.homeHeaderLayout}>
      <div className={styles.homeHeaderLeftContainer}>
        <IcLogoSmallHome width={127} height={27} />
        <Link href={"/invitation"} className={styles.homeHeaderLinkStyle}>
          WEDDING INVITATION
        </Link>
        <Link href={"/video"} className={styles.homeHeaderLinkStyle}>
          PRE-CEREMONY VIDEO
        </Link>
      </div>

      <Button size="30" color="lime04">
        주문 조회
      </Button>
    </div>
  );
};

export default HomeHeader;
