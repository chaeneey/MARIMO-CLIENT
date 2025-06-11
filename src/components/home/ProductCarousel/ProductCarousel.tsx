"use client";

import Image, { StaticImageData } from "next/image";
import { useLayoutEffect, useRef } from "react";

import { IcStrokeLeft, IcStrokeRight } from "@/assets/svgs";

import * as styles from "./ProductCarousel.css";

interface ProductCarouselProps {
  mainText: string;
  subText: string;
  direction: "right" | "left";
  carouselImages: StaticImageData[];
}

const ProductCarousel = ({
  mainText,
  subText,
  direction,
  carouselImages,
}: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className={styles.carouselLayout}>
      <section className={styles.carouselTopContainer({ direction })}>
        <div className={styles.carouselTopTextWrapper({ direction })}>
          <h1 className={styles.carouselMainTextStyle}>{mainText}</h1>
          <span className={styles.carouselSubTextStyle}>{subText}</span>
        </div>
        {direction == "right" ? <IcStrokeRight /> : <IcStrokeLeft />}
      </section>

      <section
        className={styles.carouselBottomContainer}
        ref={direction == "left" ? scrollRef : null}
      >
        {carouselImages.map((image, index) => (
          <Image src={image} alt={`${image}`} key={index} />
        ))}
      </section>
    </div>
  );
};

export default ProductCarousel;
