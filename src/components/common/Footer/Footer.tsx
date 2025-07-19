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
        <span>이용약관</span>
        <div className={dividerStyle} />
        <span>개인정보처리방침</span>
      </div>
      <div className={footerRight}>
        <IcKakao width={36} height={36} />
        <IcInsta width={36} height={36} />
      </div>
    </footer>
  );
};

export default Footer;
