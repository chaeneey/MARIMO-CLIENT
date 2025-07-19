"use client";

import { animate } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

import { IcStrokeLeft, IcStrokeRight } from "@/assets/svgs";

import * as styles from "./ProductCarousel.css";

interface ProductCarouselProps {
  mainText: string;
  subText: string;
  direction: "right" | "left";
  carouselImages: StaticImageData[];
  scrollState?: boolean;
}

const ProductCarousel = ({
  mainText,
  subText,
  direction,
  carouselImages,
  scrollState,
}: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollState && scrollRef.current) {
      const currentScroll = scrollRef.current;
      const maxScroll = currentScroll.scrollWidth - currentScroll.clientWidth;

      const controls = animate(0, maxScroll, {
        duration: 5,
        ease: "easeInOut",
        onUpdate: (latest) => {
          currentScroll.scrollLeft = latest;
        },
      });

      return () => controls.stop();
    }
  }, [scrollState]);

  const handleClickButton = () => {
    scrollRef.current?.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carouselLayout}>
      <section className={styles.carouselTopContainer({ direction })}>
        <div className={styles.carouselTopTextWrapper({ direction })}>
          <h1 className={styles.carouselMainTextStyle}>{mainText}</h1>
          <span className={styles.carouselSubTextStyle}>{subText}</span>
        </div>
        {direction == "right" ? (
          <IcStrokeRight
            onClick={handleClickButton}
            className={styles.carouselArrowStyle}
          />
        ) : (
          <IcStrokeLeft
            onClick={handleClickButton}
            className={styles.carouselArrowStyle}
          />
        )}
      </section>

      <section
        className={styles.carouselBottomContainer({ direction })}
        ref={scrollRef}
      >
        {carouselImages.map((image, index) => (
          <Image
            src={image}
            alt={`${image}`}
            key={index}
            className={
              direction == "right"
                ? styles.carouselRightImageStyle
                : styles.carouselLeftImageStyle
            }
          />
        ))}
      </section>
    </div>
  );
};

export default ProductCarousel;
