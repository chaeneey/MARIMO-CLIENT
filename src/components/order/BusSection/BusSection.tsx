"use client";

import { ChangeEvent, useState } from "react";

import { IcBtnDelete } from "@/assets/svgs";
import { Input } from "@/components/common";
import { CharterBusType } from "@types";

import * as styles from "./BusSection.css";
import AddButton from "../AddButton/AddButton";
import OrderSelectBox from "../OrderSelectBox/OrderSelectBox";

interface BusSectionProps {
  charterBusData: CharterBusType;
  handleCharterBusChange: (
    key: keyof CharterBusType,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const BusSection = ({
  charterBusData,
  handleCharterBusChange,
}: BusSectionProps) => {
  const [hour, setHour] = useState("시간");
  const [minute, setMinute] = useState("분");

  const handleClickAddButton = () => {
    if (hour !== "시간" && minute !== "분") {
      const newTime = `${hour} ${minute}`;

      handleCharterBusChange("busStopTimeList")({
        target: { value: [...charterBusData.busStopTimeList, newTime] },
      } as unknown as ChangeEvent<HTMLInputElement>);
    }
  };

  const handleClickDeleteButton = (indexToRemove: number) => {
    const newList = charterBusData.busStopTimeList.filter(
      (_, index) => index !== indexToRemove,
    );

    handleCharterBusChange("busStopTimeList")({
      target: { value: newList },
    } as unknown as ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <section className={styles.busInputWrapper}>
        <span className={styles.inputTextStyle}>버스 정차 위치</span>
        <Input
          maxWidth="32rem"
          placeholder="버스 정차 위치를 입력해주세요"
          infoMessage="정확한 장소를 입력해주세요"
          value={charterBusData.busStopLocation}
          onChange={handleCharterBusChange("busStopLocation")}
        />
      </section>

      <section className={styles.busContainer}>
        <AddButton onClick={handleClickAddButton}>일시 추가</AddButton>
        <div className={styles.busInputWrapper}>
          <span className={styles.inputTextStyle}>버스 정차 시간</span>
          <div className={styles.selectedTimeContainer}>
            <div className={styles.timeWrapper}>
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
                selected={{ keyValue: hour }}
                onSelect={(value) => setHour(value.keyValue)}
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
                selected={{ keyValue: minute }}
                onSelect={(value) => setMinute(value.keyValue)}
                variant="order"
              />
            </div>
            <div className={styles.selectedTimeContainer}>
              {charterBusData.busStopTimeList.length > 0 &&
                charterBusData.busStopTimeList.map((time, idx) => {
                  return (
                    <div key={idx} className={styles.selectedTimeWrapper}>
                      <span className={styles.selectedTimeTextStyle}>
                        {time}
                      </span>
                      <IcBtnDelete
                        width={18}
                        height={18}
                        onClick={() => handleClickDeleteButton(idx)}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusSection;
