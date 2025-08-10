"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { TextArea } from "@/components/common";
import ImageDragBox from "@/components/common/ImageDragBox/ImageDragBox";
import { AdditionalRequestType } from "@types";

import * as styles from "./MemoSection.css";

interface MemoSectionProps {
  additionalRequestData: AdditionalRequestType;
  handleAdditionalRequestChange: (
    key: keyof AdditionalRequestType
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onValidChange: (isValid: boolean) => void;
}

const MemoSection = ({
  additionalRequestData,
  handleAdditionalRequestChange,
  onValidChange,
}: MemoSectionProps) => {
  const [requestTextError, setRequestTextError] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const isValid = !requestTextError && !!additionalRequestData.requestText;
    onValidChange(isValid);
  }, [requestTextError, additionalRequestData]);

  const handleRequestTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    handleAdditionalRequestChange("requestText")(e);

    if (!value.trim()) {
      setRequestTextError("요청 내용을 입력해주세요.");
    } else {
      setRequestTextError(undefined);
    }
  };
  return (
    <>
      <section className={styles.memoContainer}>
        <span className={styles.inputTitleTextStyle}>요청사항 입력</span>
        <TextArea
          placeholder="제작에 대한 요청사항이 있다면 남겨주세요"
          currentLength={additionalRequestData.requestText.length}
          maxLength={150}
          value={additionalRequestData.requestText}
          onChange={handleRequestTextChange}
          errorMessage={requestTextError}
        />
      </section>

      <ImageDragBox />
    </>
  );
};

export default MemoSection;
