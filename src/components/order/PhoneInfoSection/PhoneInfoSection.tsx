"use client";

import { ChangeEvent } from "react";

import { Input } from "@/components/common";
import { ContactOptionType } from "@types";

import * as styles from "./PhoneInfoSection.css";

interface PhoneInfoSectionProps {
  contactOptionData: ContactOptionType;
  handleContactOptionChange: (
    key: keyof ContactOptionType,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PhoneInfoSection = ({
  contactOptionData,
  handleContactOptionChange,
}: PhoneInfoSectionProps) => {
  const handlePhoneNumberFormat =
    (key: keyof ContactOptionType) => (e: ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
      let formatted = "";

      if (raw.length <= 3) {
        formatted = raw;
      } else if (raw.length <= 7) {
        formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
      } else {
        formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
      }

      handleContactOptionChange(key)({
        target: { value: formatted },
      } as ChangeEvent<HTMLInputElement>);
    };

  return (
    <>
      <section className={styles.phoneNumberContainer}>
        <span className={styles.inputTitleTextStyle}>신랑측 정보</span>
        <div className={styles.phoneNumberWrapper}>
          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>아버님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.groomFatherPhoneNumber}
              onChange={handlePhoneNumberFormat("groomFatherPhoneNumber")}
              maxLength={13}
            />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>어머님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.groomMotherPhoneNumber}
              onChange={handlePhoneNumberFormat("groomMotherPhoneNumber")}
              maxLength={13}
            />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>신랑님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.groomPhoneNumber}
              onChange={handlePhoneNumberFormat("groomPhoneNumber")}
              maxLength={13}
            />
          </div>
        </div>
      </section>

      <section className={styles.phoneNumberContainer}>
        <span className={styles.inputTitleTextStyle}>신부측 정보</span>
        <div className={styles.phoneNumberWrapper}>
          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>아버님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.brideFatherPhoneNumber}
              onChange={handlePhoneNumberFormat("brideFatherPhoneNumber")}
              maxLength={13}
            />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>어머님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.brideMotherPhoneNumber}
              onChange={handlePhoneNumberFormat("brideMotherPhoneNumber")}
              maxLength={13}
            />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>신부님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.bridePhoneNumber}
              onChange={handlePhoneNumberFormat("bridePhoneNumber")}
              maxLength={13}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PhoneInfoSection;
