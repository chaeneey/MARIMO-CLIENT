"use client";
import * as styles from "./OrderInfoSection.css";

const OrderInfoSection = () => {
  return (
    <div className={styles.orderInfoLayout}>
      <div className={styles.orderInfoTextWrapper}>
        <span className={styles.orderInfoTextStyle}>주문자 정보</span>
        <span className={styles.orderInfoSubTextStyle}>장세희</span>
      </div>

      <div className={styles.orderInfoTextWrapper}>
        <span className={styles.orderInfoTextStyle}>주소</span>
        <span className={styles.orderInfoSubTextStyle}>
          노원구 공릉동 379-32 주니빌 203호
        </span>
      </div>

      <div className={styles.orderInfoTextWrapper}>
        <span className={styles.orderInfoTextStyle}>휴대전화</span>
        <span className={styles.orderInfoSubTextStyle}>010-5712-2732</span>
      </div>

      <div className={styles.orderInfoTextWrapper}>
        <span className={styles.orderInfoTextStyle}>이메일</span>
        <span className={styles.orderInfoSubTextStyle}>
          tpgmltpgml0701@naver.com
        </span>
      </div>
    </div>
  );
};

export default OrderInfoSection;
