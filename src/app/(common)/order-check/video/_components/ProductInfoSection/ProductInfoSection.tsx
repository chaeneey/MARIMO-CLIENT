import * as styles from "./ProductInfoSection.css";

const ProductInfoSection = () => {
  return (
    <div className={styles.productInfoLayout}>
      <div className={styles.productInfoImage} />
      {/* 추후 이미지가 들어갈 곳 */}
      <section className={styles.productInfoTextContainer}>
        <span className={styles.productInfoTitleStyle}>
          이것이 바로 식전영상
        </span>
        <div className={styles.productInfoTextWrapper}>
          <span className={styles.productInfoTextStyle}>수량 1개</span>
          <span className={styles.productInfoTitleStyle}>304,000원</span>
        </div>
      </section>
    </div>
  );
};

export default ProductInfoSection;
