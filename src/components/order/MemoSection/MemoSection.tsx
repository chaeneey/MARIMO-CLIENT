"use client";

import { ChangeEvent } from "react";

import { TextArea } from "@/components/common";
import ImageDragBox from "@/components/common/ImageDragBox/ImageDragBox";
import { AdditionalRequestType } from "@types";

import * as styles from "./MemoSection.css";

interface MemoSectionProps {
  additionalRequestData: AdditionalRequestType;
  handleAdditionalRequestChange: (
    key: keyof AdditionalRequestType,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MemoSection = ({
  additionalRequestData,
  handleAdditionalRequestChange,
}: MemoSectionProps) => {
  return (
    <>
      <section className={styles.memoContainer}>
        <span className={styles.inputTitleTextStyle}>요청사항 입력</span>
        <TextArea
          placeholder="제작에 대한 요청사항이 있다면 남겨주세요"
          currentLength={0}
          maxLength={500}
          value={additionalRequestData.requestText}
          onChange={handleAdditionalRequestChange("requestText")}
        />
      </section>

      <ImageDragBox />
    </>
  );
};

export default MemoSection;
