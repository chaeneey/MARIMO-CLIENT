import { IcInstagram, IcKakao } from "@/assets/svgs";

import {
  dividerStyle,
  footerCenter,
  footerStyle,
  iconStyle,
  logoStyle,
  snsIconWrapper,
} from "./Footer.css";

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <div className={logoStyle}>로고이미지</div>
      <div className={footerCenter}>
        <span>이용약관</span>
        <div className={dividerStyle} />
        <span>개인정보처리방침</span>
      </div>
      <div className={snsIconWrapper}>
        <IcKakao className={iconStyle} />
        <IcInstagram className={iconStyle} />
      </div>
    </footer>
  );
};

export default Footer;
