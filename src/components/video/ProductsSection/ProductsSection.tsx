import Link from "next/link";

import {
  productCardContainer,
  productCardLayout,
  productSectionLayout,
  productSectionTitleStyle,
  videoInfoWrapper,
  videoPriceStyle,
  videoSaleStyle,
  videoStyle,
  videoTitleStyle,
} from "./ProductSection.css";

const ProductsSection = () => {
  return (
    <section className={productSectionLayout}>
      <h1 className={productSectionTitleStyle}>PRE-CEREMONY VIDEO</h1>
      <section className={productCardLayout}>
        <Link href={`video/detail/${1}`}>
          <section className={productCardContainer}>
            <div className={videoStyle} />
            <span className={videoTitleStyle}>My Name is Chaeyeon</span>
            <div className={videoInfoWrapper}>
              <span className={videoSaleStyle}>15%</span>
              <span className={videoPriceStyle}>30400원</span>
            </div>
          </section>
        </Link>

        <Link href={`video/detail/${1}`}>
          <section className={productCardContainer}>
            <div className={videoStyle} />
            <span className={videoTitleStyle}>My Name is Chaeyeon</span>
            <div className={videoInfoWrapper}>
              <span className={videoSaleStyle}>15%</span>
              <span className={videoPriceStyle}>30400원</span>
            </div>
          </section>
        </Link>

        <Link href={`video/detail/${1}`}>
          <section className={productCardContainer}>
            <div className={videoStyle} />
            <span className={videoTitleStyle}>My Name is Chaeyeon</span>
            <div className={videoInfoWrapper}>
              <span className={videoSaleStyle}>15%</span>
              <span className={videoPriceStyle}>30400원</span>
            </div>
          </section>
        </Link>
      </section>
    </section>
  );
};

export default ProductsSection;
