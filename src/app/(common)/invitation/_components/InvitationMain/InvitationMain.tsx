import {
  body09Style,
  body11Style,
  invitationProductsSection,
  mainSectionStyle,
  pStyle,
  textSectionStyle,
  titleTextStyle,
} from "./InvitationMain.css";

const InvitationMain = () => {
  return (
    <section className={mainSectionStyle}>
      <div className={textSectionStyle}>
        <h1 className={titleTextStyle}>WEDDING INVITATION</h1>
        <p className={pStyle}>
          <span className={body09Style}>
            마리모 청첩장은 모바일 청첩장을 무료로 제공하여 모든 상품은 종이
            청첩장 + 모바일 청첩장 세트 구성입니다
          </span>
          <span className={body11Style}>
            모바일 청첩장 단품 구매를 희망하시는 고객님께서는 카카오채널 문의
            부탁드립니다.
          </span>
        </p>
      </div>
      <div className={invitationProductsSection}>
        <div
          style={{ width: "260px", height: "454px", backgroundColor: "pink" }}
        >
          1
        </div>
        <div
          style={{ width: "260px", height: "454px", backgroundColor: "pink" }}
        >
          1
        </div>
        <div
          style={{ width: "260px", height: "454px", backgroundColor: "pink" }}
        >
          1
        </div>
      </div>
    </section>
  );
};

export default InvitationMain;
