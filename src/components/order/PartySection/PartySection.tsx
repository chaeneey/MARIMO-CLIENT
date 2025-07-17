"use client";
import { ChangeEvent } from "react";

import { Input, SelectBox } from "@/components/common";
import { ReceptionType } from "@types";

import * as styles from "./PartySection.css";

interface PartySectionProps {
  receptionData: ReceptionType;
  handleReceptionChange: (
    key: keyof ReceptionType,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PartySection = ({
  receptionData,
  handleReceptionChange,
}: PartySectionProps) => {
  // 예식 날짜 포맷 설정
  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
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
          onChange={handleReceptionChange("address")}
        />
      </section>

      <section className={styles.partyInputWrapper}>
        <span className={styles.inputTextStyle}>피로연 일시</span>
        <div className={styles.timeWrapper}>
          <Input
            maxWidth="32rem"
            placeholder="8글자로 입력해주세요"
            value={receptionData.datetime}
            onChange={handleChangeDate}
          />

          <SelectBox
            label="시간"
            options={[
              { value: { keyValue: "오전 8시" } },
              { value: { keyValue: "오전 9시" } },
              { value: { keyValue: "오전 10시" } },
              { value: { keyValue: "오전 11시" } },
              { value: { keyValue: "오후 12시" } },
              { value: { keyValue: "오후 1시" } },
              { value: { keyValue: "오후 2시" } },
              { value: { keyValue: "오후 3시" } },
              { value: { keyValue: "오후 4시" } },
              { value: { keyValue: "오후 5시" } },
              { value: { keyValue: "오후 6시" } },
              { value: { keyValue: "오후 7시" } },
              { value: { keyValue: "오후 8시" } },
              { value: { keyValue: "오후 9시" } },
              { value: { keyValue: "오후 10시" } },
            ]}
            selected={{ keyValue: receptionData.datetimeHour }}
            onSelect={(value) => {
              handleReceptionChange("datetimeHour")({
                target: { value: value.keyValue },
              } as ChangeEvent<HTMLInputElement>);
            }}
            variant="order"
          />

          <SelectBox
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
