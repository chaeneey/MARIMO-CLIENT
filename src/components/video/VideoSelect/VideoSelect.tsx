import { Button } from "@/components/common";

import * as styles from "./VideoSelect.css";

const VideoSelect = () => {
  return (
    <div className={styles.videoSelectLayout}>
      <div className={styles.videoImageStyle} />

      <section className={styles.videoOrderContainer}>
        <section className={styles.videoOrderTopSection}>
          <div className={styles.videoOrderTopWrapper}>
            <h1 className={styles.videoOrderTitleStyle}>
              이건 식전영상이라구요
            </h1>
            <div className={styles.videoOrderTitleBarStyle} />
            <span className={styles.videoOrderSaleTextStyle}>15%</span>
            <span className={styles.videoOrderPriceTextStyle}>304,000원</span>
          </div>
          <span className={styles.videoOrderDetailTextStyle}>
            이건 이런 청첩장이라니까요? 이런 스타일을 가지고 있어요!
          </span>
        </section>

        <section className={styles.videoOrderCenterSection}>
          <span className={styles.videoTextStyle}>주문 수량</span>
          <div className={styles.videoSelectBar} />
          <div className={styles.videoOrderCenterWrapper}>
            <span className={styles.videoTextStyle}>1개</span>
            <span className={styles.videoTextStyle}>304,000원</span>
          </div>
        </section>

        <div className={styles.videoSelectBar} />

        <section className={styles.videoOrderCenterWrapper}>
          <span className={styles.videoTotalTextStyle}>총 주문금액</span>
          <span className={styles.videoTotalPriceStyle}>304,000원</span>
        </section>

        <div className={styles.videoOrderButtonStyle}>
          <Button size="56" color="lime01">
            주문하기
          </Button>
        </div>
      </section>
    </div>
  );
};

export default VideoSelect;
