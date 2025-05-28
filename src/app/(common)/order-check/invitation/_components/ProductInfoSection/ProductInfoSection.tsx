import * as styles from "./ProductInfoSection.css";

const ProductInfoSection = () => {
  return (
    <div className={styles.productInfoSectionLayout}>
      <section className={styles.productInfoTopContainer}>
        <div className={styles.productImgStyle} />{" "}
        {/* 추후에 이미지가 들어갈 예정 */}
        <div className={styles.productTextContainer}>
          <span className={styles.productTitleStyle}>이것이 바로 청첩장</span>
          <div className={styles.productSubTextContainer}>
            <div className={styles.productSubTextWrapper}>
              <span className={styles.productSubTextStyle}>수량</span>
              <span className={styles.productSubTextStyle}>50장</span>
            </div>

            <span className={styles.productTitleStyle}>304,000원</span>
          </div>
        </div>
      </section>

      <section className={styles.productInfoBottomContainer}>
        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>모바일 청첩장</span>
          <span className={styles.optionSubTextStyle}>구매</span>
        </div>

        <div className={styles.optionBarStyle} />

        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>봉투</span>
          <span className={styles.optionSubTextStyle}>
            구매 / 8000원 / 화이트 / 250장
          </span>
        </div>

        <div className={styles.optionBarStyle} />

        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>리본</span>
          <span className={styles.optionSubTextStyle}>구매 / 8000원 / 2롤</span>
        </div>

        <div className={styles.optionBarStyle} />

        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>스티커</span>
          <span className={styles.optionSubTextStyle}>
            구매 / 8000원 / 1번 / 250개
          </span>
        </div>
      </section>
    </div>
  );
};

export default ProductInfoSection;
