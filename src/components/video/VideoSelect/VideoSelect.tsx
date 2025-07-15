import Link from "next/link";

import { Button, CustomImage } from "@/components/common";
import { PreVideoDetail } from "@types";

import * as styles from "./VideoSelect.css";

const VideoSelect = ({ preVideoDetail }: PreVideoDetail) => {
  console.log(preVideoDetail);
  const { mainImageUrl, name, discountRate, price, description } =
    preVideoDetail;
  return (
    <div className={styles.videoSelectLayout}>
      <div className={styles.videoImageStyle}>
        <CustomImage src={mainImageUrl} />
      </div>
      <section className={styles.videoOrderContainer}>
        <section className={styles.videoOrderTopSection}>
          <div className={styles.videoOrderTopWrapper}>
            <h1 className={styles.videoOrderTitleStyle}>{name}</h1>
            <div className={styles.videoOrderTitleBarStyle} />
            <span className={styles.videoOrderSaleTextStyle}>
              {discountRate}%
            </span>
            <span className={styles.videoOrderPriceTextStyle}>
              {price.toLocaleString()}원
            </span>
          </div>
          <span className={styles.videoOrderDetailTextStyle}>
            {description}
          </span>
        </section>

        <section className={styles.videoOrderCenterSection}>
          <span className={styles.videoTextStyle}>주문 수량</span>
          <div className={styles.videoSelectBar} />
          <div className={styles.videoOrderCenterWrapper}>
            <span className={styles.videoTextStyle}>1개</span>
            <span className={styles.videoTextStyle}>{price.toLocaleString()}원</span>
          </div>
        </section>

        <div className={styles.videoSelectBar} />

        <section className={styles.videoOrderCenterWrapper}>
          <span className={styles.videoTotalTextStyle}>총 주문금액</span>
          <span className={styles.videoTotalPriceStyle}>{price.toLocaleString()}원</span>
        </section>

        <div className={styles.videoOrderButtonStyle}>
          <Link href={"/video/order"}>
            <Button size="56" color="lime01">
              주문하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VideoSelect;
