"use client";

import { ChangeEvent } from "react";

import { Input } from "@/components/common";
import { GuestbookType } from "@types";

import * as styles from "./GuestSection.css";

interface GuestSectionProps {
  guestbookData: GuestbookType;
  handleGuestbookChange: (
    key: keyof GuestbookType,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const GuestSection = ({
  guestbookData,
  handleGuestbookChange,
}: GuestSectionProps) => {
  return (
    <>
      <div className={styles.guestWrapper}>
        <span className={styles.inputTextStyle}>관리자 비밀번호</span>
        <Input
          maxWidth="34rem"
          placeholder="숫자 4자리로 등록해주세요"
          infoMessage="관리 비밀번호를 사용하여 방명록 글을 삭제할 수 있습니다"
          value={guestbookData.adminPassword}
          onChange={handleGuestbookChange("adminPassword")}
        />
      </div>
    </>
  );
};

export default GuestSection;
