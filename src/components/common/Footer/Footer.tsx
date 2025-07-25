import { IcInsta, IcKakao } from "@/assets/svgs";

import {
  dividerStyle,
  footerLeft,
  footerRight,
  footerStyle,
} from "./Footer.css";

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <div className={footerLeft}>
        <a href="https://cumbersome-cactus-843.notion.site/21942376b33e8011997cf10912f44bfc" target="_blank" rel="noopener noreferrer">
          이용약관
        </a>
        <div className={dividerStyle} />
        <a href="https://cumbersome-cactus-843.notion.site/21942376b33e8027b8a3e8cd3667010c" target="_blank" rel="noopener noreferrer">
          개인정보처리방침
        </a>
      </div>
      <div className={footerRight}>
        <a
          href="https://pf.kakao.com/_xbdxiWn"
          target="_blank"
          rel="noopener noreferrer"
        >
        <IcKakao width={36} height={36} />
        </a>
        <a
          href="https://www.instagram.com/dear.marimo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IcInsta width={36} height={36} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
