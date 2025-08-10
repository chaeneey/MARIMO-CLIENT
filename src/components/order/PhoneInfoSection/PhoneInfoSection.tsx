"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "@/components/common";
import { ContactOptionType } from "@types";

import * as styles from "./PhoneInfoSection.css";

interface PhoneInfoSectionProps {
  contactOptionData: ContactOptionType;
  handleContactOptionChange: (
    key: keyof ContactOptionType
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onValidChange: (isValid: boolean) => void;
}

const PhoneInfoSection = ({
  contactOptionData,
  handleContactOptionChange,
  onValidChange,
}: PhoneInfoSectionProps) => {
  const [groomPhoneNumberError, setGroomPhoneNumberError] = useState<
    string | undefined
  >(undefined);
  const [groomFatherPhoneNumberError, setGroomFatherPhoneNumberError] =
    useState<string | undefined>(undefined);
  const [groomMotherPhoneNumberError, setGroomMotherPhoneNumberError] =
    useState<string | undefined>(undefined);
  const [bridePhoneNumberError, setBridePhoneNumberError] = useState<
    string | undefined
  >(undefined);
  const [brideFatherPhoneNumberError, setBrideFatherPhoneNumberError] =
    useState<string | undefined>(undefined);
  const [brideMotherPhoneNumberError, setBrideMotherPhoneNumberError] =
    useState<string | undefined>(undefined);

  useEffect(() => {
    const hasAnyPhoneNumber = Object.values(contactOptionData).some(
      (value) =>
        value &&
        value.trim() !== "" &&
        !groomPhoneNumberError &&
        !groomFatherPhoneNumberError &&
        !groomMotherPhoneNumberError &&
        !bridePhoneNumberError &&
        !brideFatherPhoneNumberError &&
        !brideMotherPhoneNumberError
    );
    onValidChange?.(hasAnyPhoneNumber);
  }, [
    contactOptionData,
    onValidChange,
    groomPhoneNumberError,
    groomFatherPhoneNumberError,
    groomMotherPhoneNumberError,
    bridePhoneNumberError,
    brideFatherPhoneNumberError,
    brideMotherPhoneNumberError,
  ]);

  const validatePhoneNumber = (formatted: string): string | undefined => {
    if (formatted.length < 12 && formatted.length > 0) {
      return "올바른 전화번호 형식이 아닙니다.";
    }
    return undefined;
  };

  const createPhoneNumberHandler =
    (
      key: keyof ContactOptionType,
      setError: React.Dispatch<React.SetStateAction<string | undefined>>
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
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

      const error = validatePhoneNumber(formatted);
      setError(error);
    };

  const handleGroomPhoneNumberChange = createPhoneNumberHandler(
    "groomPhoneNumber",
    setGroomPhoneNumberError
  );
  const handleGroomFatherPhoneNumberChange = createPhoneNumberHandler(
    "groomFatherPhoneNumber",
    setGroomFatherPhoneNumberError
  );
  const handleGroomMotherPhoneNumberChange = createPhoneNumberHandler(
    "groomMotherPhoneNumber",
    setGroomMotherPhoneNumberError
  );
  const handleBridePhoneNumberChange = createPhoneNumberHandler(
    "bridePhoneNumber",
    setBridePhoneNumberError
  );
  const handleBrideFatherPhoneNumberChange = createPhoneNumberHandler(
    "brideFatherPhoneNumber",
    setBrideFatherPhoneNumberError
  );
  const handleBrideMotherPhoneNumberChange = createPhoneNumberHandler(
    "brideMotherPhoneNumber",
    setBrideMotherPhoneNumberError
  );

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
              onChange={handleGroomFatherPhoneNumberChange}
              errorMessage={groomFatherPhoneNumberError}
              maxLength={13}
            />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>어머님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.groomMotherPhoneNumber}
              onChange={handleGroomMotherPhoneNumberChange}
              errorMessage={groomMotherPhoneNumberError}
              maxLength={13}
            />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>신랑님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.groomPhoneNumber}
              onChange={handleGroomPhoneNumberChange}
              errorMessage={groomPhoneNumberError}
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
              onChange={handleBrideFatherPhoneNumberChange}
              errorMessage={brideFatherPhoneNumberError}
              maxLength={13}
            />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>어머님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.brideMotherPhoneNumber}
              onChange={handleBrideMotherPhoneNumberChange}
              errorMessage={brideMotherPhoneNumberError}
              maxLength={13}
            />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>신부님</span>
            <Input
              maxWidth="32rem"
              placeholder="010-0000-0000"
              value={contactOptionData.bridePhoneNumber}
              onChange={handleBridePhoneNumberChange}
              errorMessage={bridePhoneNumberError}
              maxLength={13}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PhoneInfoSection;
