"use client";
import { CustomImage } from "@/components/common";

import * as styles from "./ProductInfoSection.css";

interface ProductInfoSectionProps {
  name: string;
  mainImageUrl: string;
  price: number;
}

const ProductInfoSection = ({
  name,
  mainImageUrl,
  price,
}: ProductInfoSectionProps) => {
  return (
    <div className={styles.productInfoLayout}>
      <div className={styles.productInfoImage}>
        <CustomImage src={mainImageUrl} alt="식전영상-이미지" />
      </div>
      <section className={styles.productInfoTextContainer}>
        <span className={styles.productInfoTitleStyle}>{name}</span>
        <div className={styles.productInfoTextWrapper}>
          <span className={styles.productInfoTextStyle}>수량 1개</span>
          <span className={styles.productInfoTitleStyle}>
            {price.toLocaleString()}원
          </span>
        </div>
      </section>
    </div>
  );
};

export default ProductInfoSection;
