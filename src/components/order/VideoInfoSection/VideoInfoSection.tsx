"use client";
import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "@/components/common";
import { VideoCommonInfoType } from "@types";

import * as styles from "./VideoInfoSection.css";
import OrderSelectBox from "../OrderSelectBox/OrderSelectBox";

interface VideoInfoSectionProps {
  videoCommonInfoData: VideoCommonInfoType;
  handleVideoCommonInfoChange: (
    key: keyof VideoCommonInfoType
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onValidChange: (isValid: boolean) => void;
}

const VideoInfoSection = ({
  videoCommonInfoData,
  handleVideoCommonInfoChange,
  onValidChange,
}: VideoInfoSectionProps) => {
  const [brideNameErrorMessage, setBrideNameErrorMessage] = useState<
    string | undefined
  >(undefined);
  const [groomNameErrorMessage, setGrommNameErrorMessage] = useState<
    string | undefined
  >(undefined);
  const [weddingDateErrorMessage, setWeddingDateErrorMessage] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    const isValid =
      !brideNameErrorMessage &&
      !groomNameErrorMessage &&
      !weddingDateErrorMessage &&
      !!videoCommonInfoData.weddingHour &&
      !!videoCommonInfoData.weddingMinute;

    onValidChange(isValid);
  }, [brideNameErrorMessage, groomNameErrorMessage, videoCommonInfoData]);

  const handleBrideNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleVideoCommonInfoChange("brideName")(e);

    if (!value.trim()) {
      setBrideNameErrorMessage("신부 이름을 입력해주세요.");
    } else if (/[^가-힣a-zA-Z\s]/.test(value)) {
      setBrideNameErrorMessage("숫자나 특수문자는 입력할 수 없습니다.");
    } else {
      setBrideNameErrorMessage(undefined);
    }
  };

  const handleGroomNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleVideoCommonInfoChange("groomName")(e);

    if (!value.trim()) {
      setGrommNameErrorMessage("주문자명을 입력해주세요.");
    } else if (/[^가-힣a-zA-Z\s]/.test(value)) {
      setGrommNameErrorMessage("숫자나 특수문자는 입력할 수 없습니다.");
    } else {
      setGrommNameErrorMessage(undefined);
    }
  };

  const handleWeddingDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    handleVideoCommonInfoChange("weddingDate")({
      target: { value: formatted },
    } as ChangeEvent<HTMLInputElement>);

    if (!formatted.trim()) {
      setWeddingDateErrorMessage("예식 일시를 입력해주세요.");
    } else if (formatted.length < 10) {
      setWeddingDateErrorMessage("8글자로 입력해주세요.");
    } else {
      setWeddingDateErrorMessage(undefined);
    }
  };

  return (
    <>
      <div className={styles.videoInfoRowContainer}>
        <span className={styles.titleTextStyle}>신랑님</span>
        <Input
          placeholder="이름을 입력해주세요"
          maxWidth={"32rem"}
          value={videoCommonInfoData.groomName}
          onChange={handleGroomNameOnChange}
          errorMessage={groomNameErrorMessage}
        />
      </div>

      <div className={styles.videoInfoRowContainer}>
        <span className={styles.titleTextStyle}>신부님</span>
        <Input
          placeholder="이름을 입력해주세요"
          maxWidth={"32rem"}
          value={videoCommonInfoData.brideName}
          onChange={handleBrideNameOnChange}
          errorMessage={brideNameErrorMessage}
        />
      </div>

      <div className={styles.videoInfoRowContainer}>
        <span className={styles.titleTextStyle}>예식일시</span>
        <div className={styles.videoInfoRowWrapper}>
          <Input
            placeholder="년도/월/일을 작성해주세요"
            maxWidth={"32rem"}
            value={videoCommonInfoData.weddingDate}
            onChange={handleWeddingDateChange}
            errorMessage={weddingDateErrorMessage}
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
            selected={{ keyValue: videoCommonInfoData.weddingHour }}
            onSelect={(value) =>
              handleVideoCommonInfoChange("weddingHour")({
                target: { value: value.keyValue },
              } as ChangeEvent<HTMLInputElement>)
            }
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
            selected={{ keyValue: videoCommonInfoData.weddingMinute }}
            onSelect={(value) =>
              handleVideoCommonInfoChange("weddingMinute")({
                target: { value: value.keyValue },
              } as ChangeEvent<HTMLInputElement>)
            }
            variant="order"
          />
        </div>
      </div>
    </>
  );
};

export default VideoInfoSection;
