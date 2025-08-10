"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "@/components/common";
import { GuestbookType } from "@types";

import * as styles from "./GuestSection.css";

interface GuestSectionProps {
  guestbookData: GuestbookType;
  handleGuestbookChange: (
    key: keyof GuestbookType
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onValidChange: (isValid: boolean) => void;
}

const GuestSection = ({
  guestbookData,
  handleGuestbookChange,
  onValidChange,
}: GuestSectionProps) => {
  const [adminPasswordError, setAdminPasswordError] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    const isValid = !adminPasswordError;
    onValidChange(isValid);
  }, [adminPasswordError]);

  const handleAdminPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력받고 4자리까지만 자름
    const raw = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);

    handleGuestbookChange("adminPassword")({
      target: { value: raw },
    } as ChangeEvent<HTMLInputElement>);

    if (!raw.trim()) {
      setAdminPasswordError("비밀번호를 입력해주세요.");
    } else if (raw.length !== 4) {
      setAdminPasswordError("숫자 4자리를 입력해주세요.");
    } else {
      setAdminPasswordError(undefined);
    }
  };
  return (
    <>
      <div className={styles.guestWrapper}>
        <span className={styles.inputTextStyle}>관리자 비밀번호</span>
        <Input
          maxWidth="34rem"
          placeholder="숫자 4자리로 등록해주세요"
          infoMessage="관리 비밀번호를 사용하여 방명록 글을 삭제할 수 있습니다"
          maxLength={4}
          value={guestbookData.adminPassword}
          onChange={handleAdminPasswordChange}
          errorMessage={adminPasswordError}
        />
      </div>
    </>
  );
};

export default GuestSection;
