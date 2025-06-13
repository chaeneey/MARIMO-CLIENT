"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  homeThumbnail,
  homeTop1,
  homeTop2,
  homeTop3,
  homeTop4,
  marimoLabel,
} from "@/assets/images";
import { IcLogoLarge } from "@/assets/svgs";

import * as styles from "./MarimoInfoSection.css";

const homeTopImageList = [homeTop1, homeTop2, homeTop3, homeTop4];

const MarimoInfoSection = () => {
  const [index, setIndex] = useState(0);
  const canScroll = useRef(true);
  const maxCount = homeTopImageList.length - 1;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!canScroll.current) return;
      e.preventDefault();

      canScroll.current = false;
      if (e.deltaY > 0 && index < maxCount) {
        setIndex((prev) => prev + 1);
      }

      setTimeout(() => {
        canScroll.current = true;
      }, 1000); // 1.5초 쿨타임
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (index >= maxCount) {
        setTimeout(() => {
          window.removeEventListener("wheel", handleWheel);
          document.body.style.overflow = "auto";
        }, 1000);
      }
    };
  }, [index]);

  return (
    <div>
      <section className={styles.marimoInfoTopContainer}>
        <section>
          <Image
            className={styles.homeThumbnailImageStyle}
            src={homeThumbnail}
            alt="마리모 메인 이미지"
          />
          <motion.div
            className={styles.homeThumbnailBlackStyle}
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </section>

        <motion.ul>
          {homeTopImageList.map((src, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: index > idx ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src={src}
                alt={`마리모 상단 이미지 ${idx}`}
                className={styles.homeSubImageStyle}
              />
            </motion.li>
          ))}
        </motion.ul>

        <section className={styles.homeMainTextWrapper}>
          <IcLogoLarge width={403} height={138} />
          <h1 className={styles.homeMainTextStyle}>{"오래도록 변치 않는,"}</h1>
          <h1 className={styles.homeMainTextStyle}>{"사랑을 담다"}</h1>
        </section>
      </section>

      <section className={styles.marimoInfoBottomContainer}>
        <motion.div
          className={styles.marimoInfoBottomTextWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.homeSubMediumTextStyle}>Marimo는</h2>
          <h2 className={styles.homeSubBoldTextStyle}>
            두 사람의 특별한 순간을 더 아름답게 만들어주는
          </h2>
          <h2 className={styles.homeSubMediumTextStyle}>
            웨딩 콘텐츠 브랜드입니다
          </h2>
        </motion.div>
      </section>

      <Image src={marimoLabel} alt="marimo label" style={{ width: "100%" }} />
    </div>
  );
};

export default MarimoInfoSection;
