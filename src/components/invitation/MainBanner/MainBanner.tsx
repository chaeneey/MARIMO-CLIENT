"use client";

import { useEffect, useState } from "react";

import { CustomImage } from "@/components/common";

import * as styles from "./MainBanner.css";

const realImages = [
  "/images/감딸기.jpeg",
  "/images/상어.png",
  "/images/짤2.jpeg",
];
const images = [
  realImages[realImages.length - 1],
  ...realImages,
  realImages[0],
];

const MainBanner = () => {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [transitioning, setTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIdx]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (currentIdx === 0) {
      timeoutId = setTimeout(() => {
        setTransitioning(false);
        requestAnimationFrame(() => {
          setCurrentIdx(images.length - 2);
          requestAnimationFrame(() => {
            setTransitioning(true);
          });
        });
      }, 600);
    } else if (currentIdx === images.length - 1) {
      timeoutId = setTimeout(() => {
        setTransitioning(false);
        requestAnimationFrame(() => {
          setCurrentIdx(1);
          requestAnimationFrame(() => {
            setTransitioning(true);
          });
        });
      }, 600);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIdx]);

  const realIdx =
    currentIdx === 0
      ? realImages.length - 1
      : currentIdx === images.length - 1
        ? 0
        : currentIdx - 1;

  return (
    <section className={styles.bannerSectionStyle}>
      <div
        style={{
          display: "flex",
          width: `${images.length * 100}%`,
          height: "100%",
          transform: `translateX(-${currentIdx * (100 / images.length)}%)`,
          transition: transitioning ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {images.map((src, i) => (
          <div key={i} className={styles.imageStyle}>
            <CustomImage src={src} alt={`banner-${i}`} />
          </div>
        ))}
      </div>
      <div className={styles.progressBarContainer}>
        <div className={styles.entireBar}>
          <div
            className={styles.presentBar}
            style={{
              transform: `translateX(${realIdx * 100}%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
