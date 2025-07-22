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
        <a href="https://cumbersome-cactus-843.notion.site/1e442376b33e808192daf8483bcae8d9" target="_blank" rel="noopener noreferrer">
          이용약관
        </a>
        <div className={dividerStyle} />
        <a href="https://cumbersome-cactus-843.notion.site/1e442376b33e80f08ceae0dce31c0b6f" target="_blank" rel="noopener noreferrer">
          개인정보처리방침
        </a>
      </div>
      <div className={footerRight}>
        <IcKakao width={36} height={36} />
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
