"use client";
import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "@/components/common";
import { ReceptionType } from "@types";

import * as styles from "./PartySection.css";
import OrderSelectBox from "../OrderSelectBox/OrderSelectBox";

interface PartySectionProps {
  receptionData: ReceptionType;
  handleReceptionChange: (
    key: keyof ReceptionType
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onValidChange: (isValid: boolean) => void;
}

const PartySection = ({
  receptionData,
  handleReceptionChange,
  onValidChange,
}: PartySectionProps) => {
  const [addressError, setAddressError] = useState<string | undefined>(
    undefined
  );
  const [datetimeError, setDatetimeError] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const isValid =
      !addressError &&
      !datetimeError &&
      !!receptionData.address &&
      !!receptionData.datetime &&
      !!receptionData.datetimeHour &&
      !!receptionData.datetimeMinute;
    onValidChange(isValid);
  }, [addressError, datetimeError, receptionData]);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleReceptionChange("address")(e);

    if (!value.trim()) {
      setAddressError("주소를 입력해주세요.");
    } else {
      setAddressError(undefined);
    }
  };

  // 예식일자 핸들러 함수
  const handleDatetimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value;
    raw = raw.replace(/[^0-9]/g, "");
    raw = raw.slice(0, 8);
    let formatted = "";
    if (raw.length <= 4) {
      formatted = raw;
    } else if (raw.length <= 6) {
      formatted = `${raw.slice(0, 4)}-${raw.slice(4)}`;
    } else {
      formatted = `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
    }
    handleReceptionChange("datetime")({
      target: { value: formatted },
    } as ChangeEvent<HTMLInputElement>);

    if (!formatted.trim()) {
      setDatetimeError("예식 일시를 입력해주세요.");
    } else if (formatted.length < 10) {
      setDatetimeError("8글자로 입력해주세요.");
    } else {
      setDatetimeError(undefined);
    }
  };

  return (
    <>
      <section className={styles.partyInputWrapper}>
        <span className={styles.inputTextStyle}>피로연 장소</span>
        <Input
          maxWidth="32rem"
          placeholder="피로연 장소를 입력해주세요"
          infoMessage="정확한 장소를 입력해주세요"
          value={receptionData.address}
          onChange={handleAddressChange}
          errorMessage={addressError}
        />
      </section>

      <section className={styles.partyInputWrapper}>
        <span className={styles.inputTextStyle}>피로연 일시</span>
        <div className={styles.timeWrapper}>
          <Input
            maxWidth="32rem"
            placeholder="8글자로 입력해주세요"
            value={receptionData.datetime}
            onChange={handleDatetimeChange}
            errorMessage={datetimeError}
          />

          <OrderSelectBox
            label="시간"
            options={[
              { value: { keyValue: "08시" } },
              { value: { keyValue: "09시" } },
              { value: { keyValue: "10시" } },
              { value: { keyValue: "11시" } },
              { value: { keyValue: "12시" } },
              { value: { keyValue: "13시" } },
              { value: { keyValue: "14시" } },
              { value: { keyValue: "15시" } },
              { value: { keyValue: "16시" } },
              { value: { keyValue: "17시" } },
              { value: { keyValue: "18시" } },
              { value: { keyValue: "19시" } },
              { value: { keyValue: "20시" } },
              { value: { keyValue: "21시" } },
              { value: { keyValue: "22시" } },
            ]}
            selected={{ keyValue: receptionData.datetimeHour }}
            onSelect={(value) => {
              handleReceptionChange("datetimeHour")({
                target: { value: value.keyValue },
              } as ChangeEvent<HTMLInputElement>);
            }}
            variant="order"
          />

          <OrderSelectBox
            label="분"
            options={[
              { value: { keyValue: "00분" } },
              { value: { keyValue: "05분" } },
              { value: { keyValue: "10분" } },
              { value: { keyValue: "15분" } },
              { value: { keyValue: "20분" } },
              { value: { keyValue: "25분" } },
              { value: { keyValue: "30분" } },
              { value: { keyValue: "35분" } },
              { value: { keyValue: "40분" } },
              { value: { keyValue: "45분" } },
              { value: { keyValue: "50분" } },
              { value: { keyValue: "55분" } },
            ]}
            selected={{ keyValue: receptionData.datetimeMinute }}
            onSelect={(value) => {
              handleReceptionChange("datetimeMinute")({
                target: { value: value.keyValue },
              } as ChangeEvent<HTMLInputElement>);
            }}
            variant="order"
          />
        </div>
      </section>
    </>
  );
};

export default PartySection;
