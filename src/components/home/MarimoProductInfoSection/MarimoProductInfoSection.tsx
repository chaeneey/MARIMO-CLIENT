"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  background02,
  img_invitation_thumbnail01,
  img_invitation_thumbnail02,
  img_invitation_thumbnail03,
  img_video_thumbnail01,
  img_video_thumbnail02,
  img_video_thumbnail03,
  img_card,
} from "@/assets/images";
import { IcMarimoSymbol } from "@/assets/svgs";

import * as styles from "./MarimoProductInfoSection.css";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const MarimoProductInfoSection = () => {
  const [invitationScrollEvent, setInvitationScrollEvent] = useState(false);
  const [videoScrollEvent, setVideoScrollEvent] = useState(false);

  return (
    <section className={styles.productInfoLayout}>
      <Image
        src={background02}
        alt="배경 이미지"
        className={styles.productInfoBackgoundImageStyle}
      />

      <section className={styles.productInfoTopContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <IcMarimoSymbol className={styles.productInfoMarimoSymbolStyle} />
        </motion.div>

        <section className={styles.productInfoCarouselWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            onAnimationComplete={() => {
              setInvitationScrollEvent(true);
            }}
          >
            <ProductCarousel
              mainText="WEDDING INVITATION"
              subText="마리모만의 감각적인 청첩장 디자인부터"
              direction="right"
              carouselImages={[
                img_invitation_thumbnail01,
                img_invitation_thumbnail02,
                img_invitation_thumbnail03,
              ]}
              scrollState={invitationScrollEvent}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => {
              setVideoScrollEvent(true);
            }}
          >
            <ProductCarousel
              mainText="PRE-CEREMONY VIDEO"
              subText="두 사람의 이야기를 특별한 감성으로 담아낸 식전영상까지"
              direction="left"
              carouselImages={[
                img_video_thumbnail01,
                img_video_thumbnail02,
                img_video_thumbnail03,
              ]}
              scrollState={videoScrollEvent}
            />
          </motion.div>
        </section>
      </section>

      <section className={styles.productInfoBottomCantainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.productInfoBottomImageStyle}
        >
          <Image src={img_card} alt="마리모 소개 이미지" />
        </motion.div>
        <motion.div
          className={styles.productInfoTextWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span>결혼이라는 특별한 시작을</span>
          <span>마리모와 함께 더욱 특별하게 완성해보세요</span>
        </motion.div>
      </section>
    </section>
  );
};

export default MarimoProductInfoSection;
