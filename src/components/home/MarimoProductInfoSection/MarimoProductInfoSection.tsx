import Image from "next/image";

import {
  homeBackground,
  homeCenter1,
  homeInvitation1,
  homeInvitation2,
  homeInvitation3,
  homeVideo1,
  homeVideo2,
  homeVideo3,
} from "@/assets/images";
import { IcMarimoSymbol } from "@/assets/svgs";

import * as styles from "./MarimoProductInfoSection.css";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const MarimoProductInfoSection = () => {
  return (
    <section className={styles.productInfoLayout}>
      <Image
        src={homeBackground}
        alt="배경 이미지"
        className={styles.productInfoBackgoundImageStyle}
      />

      <section className={styles.productInfoTopContainer}>
        <IcMarimoSymbol className={styles.productInfoMarimoSymbolStyle} />

        <section className={styles.productInfoCarouselWrapper}>
          <ProductCarousel
            mainText="WEDDING INVITATION"
            subText="마리모만의 감각적인 청첩장 디자인부터"
            direction="right"
            carouselImages={[homeInvitation1, homeInvitation2, homeInvitation3]}
          />

          <ProductCarousel
            mainText="PRE-CEREMONY VIDEO"
            subText="두 사람의 이야기를 특별한 감성으로 담아낸 식전영상까지"
            direction="left"
            carouselImages={[homeVideo1, homeVideo2, homeVideo3]}
          />
        </section>
      </section>

      <section className={styles.productInfoBottomCantainer}>
        <Image src={homeCenter1} alt="마리모 소개 이미지" />
        <div className={styles.productInfoTextWrapper}>
          <span>결혼이라는 특별한 시작을</span>
          <span>마리모와 함께 더욱 특별하게 완성해보세요</span>
        </div>
      </section>
    </section>
  );
};

export default MarimoProductInfoSection;
