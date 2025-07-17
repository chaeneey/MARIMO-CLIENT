"use client";
import { useState } from "react";

import { IcDeleteGray0428 } from "@/assets/svgs";
import { Button } from "@/components/common";

import * as styles from "./GreetingsSampleModal.css";
import MiniAccordion from "../MiniAccordion/MiniAccordion";

interface GreetingsSampleModalProps {
  onClose: () => void;
}

const greetingSamples = [
  "평생을 함께하고 싶은 인연을 찾았습니다. 이제 저희는 영원을 약속하고자 합니다. 삶에서 가장 소중한 이날, 가장 귀한 분들과 함께 이 기쁨을 나누고 싶습니다. 귀한 발걸음으로 함께해 주신다면 진심으로 감사드리겠습니다.",
  "저희 두 사람이 함께하는 새로운 시작을 알립니다. 결혼이라는 뜻깊은 첫걸음을 내딛는 날 함께해 주신다면 더없이 감사하겠습니다. 귀한 발걸음으로 자리를 빛내 주세요.",
  "아름다운 인연의 결실을 맺게 된 저희는 이제 앞으로의 삶을 함께 걸어가기로 약속했습니다. 이 뜻깊은 시작을 기념하며, 소중한 분들과 이 순간을 함께하려 합니다. 따뜻한 응원과 축복으로 자리를 빛내주시면 진심으로 감사드리겠습니다.",
  "서로를 향한 사랑과 존중, 믿음을 바탕으로 저희 두 사람은 앞으로의 여정을 함께하기로 약속했습니다. 이 새로운 시작에 귀한 발걸음으로 자리를 빛내주신다면 정말 감사드리겠습니다.",
];

const GreetingsSampleModal = ({ onClose }: GreetingsSampleModalProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <span className={styles.modalHeaderTextStyle}>인사말 샘플</span>
        <IcDeleteGray0428
          width={28}
          height={28}
          onClick={onClose}
          className={styles.closeButtonStyle}
        />
      </div>
      <div className={styles.dividerStyle} />
      <div className={styles.accordionWrapper}>
        {greetingSamples.map((text, i) => (
          <MiniAccordion
            key={i}
            index={(i + 1).toString()}
            text={text}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
          />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button size="50" color="lime01" onClick={onClose}>
          확인
        </Button>
      </div>
    </div>
  );
};

export default GreetingsSampleModal;
