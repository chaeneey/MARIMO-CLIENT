"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { homeBottom1, homeBottom2, homeBottom3 } from "@/assets/images";

import * as styles from "./MarimoConceptSection.css";

const MarimoConceptSection = () => {
  const listVariants = {
    showItem: {
      transition: {
        staggerChildren: 1,
      },
    },
    noShowItem: {},
  };

  const variants = {
    noShowItem: { opacity: 0 },
    showItem: { opacity: 1 },
    transition: {
      duration: 2,
    },
  };
  return (
    <div className={styles.conceptSectionLayout}>
      <section className={styles.conceptSectionTopContainer}>
        <motion.span
          className={styles.conceptSectionMainTextStyle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          with Marimo by your side
        </motion.span>
        <section>
          <motion.ul
            className={styles.conceptSectionImageWrapper}
            variants={listVariants}
            initial={"noShowItem"}
            whileInView={"showItem"}
          >
            <motion.li variants={variants}>
              <Image
                src={homeBottom1}
                alt="마리모 컨셉사진1"
                style={{ transform: "rotate(6.57deg)" }}
              />
            </motion.li>
            <motion.li variants={variants}>
              <Image
                src={homeBottom2}
                alt="마리모 컨셉사진2"
                style={{ transform: "rotate(-3.16deg) translateY(-50px)" }}
              />
            </motion.li>
            <motion.li variants={variants}>
              <Image
                src={homeBottom3}
                alt="마리모 컨셉사진3"
                style={{ transform: "rotate(11.72deg)" }}
              />
            </motion.li>
            <motion.li variants={variants}>
              <Image
                src={homeBottom1}
                alt="마리모 컨셉사진1"
                style={{ transform: "rotate(-15.25deg)" }}
              />
            </motion.li>
            <motion.li variants={variants}>
              <Image
                src={homeBottom2}
                alt="마리모 컨셉사진2"
                style={{ transform: "rotate(4.65deg) translateY(-50px)" }}
              />
            </motion.li>
            <motion.li variants={variants}>
              <Image
                src={homeBottom3}
                alt="마리모 컨셉사진3"
                style={{ transform: "rotate(-0.17deg)" }}
              />
            </motion.li>
          </motion.ul>
        </section>
      </section>

      <motion.section
        className={styles.conceptSectionBottomContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span>마리모는 예비부부의 취향과 감성을 세심하게 반영해,</span>
        <span>오직 당신만을 위한 단 하나의 웨딩 콘텐츠를 제작합니다</span>
      </motion.section>
    </div>
  );
};

export default MarimoConceptSection;
