import Link from "next/link";

import { IcDeleteWhite } from "@/assets/svgs";

import * as styles from "./HamburgerBar.css";

interface HamburgerBarProps {
  handleCloseHamburgerBar: () => void;
}

const HamburgerBar = ({ handleCloseHamburgerBar }: HamburgerBarProps) => {
  return (
    <div className={styles.hamburgerBarLayout}>
      <div className={styles.hamburgerDeleteButtonStyle}>
        <IcDeleteWhite
          width={28}
          height={28}
          onClick={handleCloseHamburgerBar}
        />
      </div>

      <section className={styles.hamburgerBarButtonContainer}>
        <div className={styles.hamburgerBarButtonStyle({ isHome: true })}>
          <Link href={"/"} onClick={handleCloseHamburgerBar}>
            HOME
          </Link>
        </div>

        <div className={styles.hamburgerBarDivStyle} />

        <div className={styles.hamburgerBarButtonStyle({ isHome: false })}>
          <Link href={"/invitation"} onClick={handleCloseHamburgerBar}>
            WEDDING INVITATION
          </Link>
        </div>

        <div className={styles.hamburgerBarDivStyle} />

        <div className={styles.hamburgerBarButtonStyle({ isHome: false })}>
          <Link href={"/video"} onClick={handleCloseHamburgerBar}>
            PRE-CEREMONY VIDEO
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HamburgerBar;
