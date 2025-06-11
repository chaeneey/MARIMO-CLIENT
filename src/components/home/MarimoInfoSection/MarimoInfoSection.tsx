"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect } from "react";

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

const MarimoInfoSection = () => {
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const listVariants = {
    showImage: {
      transition: {
        staggerChildren: 1.5,
      },
    },
    noShowImage: {},
  };

  const imageVariants = {
    noShowImage: { opacity: 0 },
    showImage: { opacity: 1 },
    transition: {
      duration: 150,
    },
  };

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
            animate={{ opacity: 0.8 }}
            transition={{ duration: 2 }}
          />
        </section>

        <motion.ul
          variants={listVariants}
          initial="noShowImage"
          animate="showImage"
          onAnimationComplete={() => (document.body.style.overflow = "auto")}
        >
          <motion.li variants={imageVariants}>
            <Image
              src={homeTop1}
              alt="마리모 상단 이미지 1"
              className={styles.homeSubImageStyle}
            />
          </motion.li>
          <motion.li variants={imageVariants}>
            <Image
              src={homeTop2}
              alt="마리모 상단 이미지 1"
              className={styles.homeSubImageStyle}
            />
          </motion.li>
          <motion.li variants={imageVariants}>
            <Image
              src={homeTop3}
              alt="마리모 상단 이미지 1"
              className={styles.homeSubImageStyle}
            />
          </motion.li>
          <motion.li variants={imageVariants}>
            <Image
              src={homeTop4}
              alt="마리모 상단 이미지 1"
              className={styles.homeSubImageStyle}
            />
          </motion.li>
        </motion.ul>

        <section className={styles.homeMainTextWrapper}>
          <IcLogoLarge width={403} height={138} />
          <h1 className={styles.homeMainTextStyle}>{"오래도록 변치 않는,"}</h1>
          <h1 className={styles.homeMainTextStyle}>{"사랑을 담다"}</h1>
        </section>
      </section>

      <section>
        <div className={styles.marimoInfoBottomContainer}>
          <h2 className={styles.homeSubMediumTextStyle}>Marimo는</h2>
          <h2 className={styles.homeSubBoldTextStyle}>
            두 사람의 특별한 순간을 더 아름답게 만들어주는
          </h2>
          <h2 className={styles.homeSubMediumTextStyle}>
            웨딩 콘텐츠 브랜드입니다
          </h2>
        </div>

        <Image src={marimoLabel} alt="marimo label" style={{ width: "100%" }} />
      </section>
    </div>
  );
};

export default MarimoInfoSection;
