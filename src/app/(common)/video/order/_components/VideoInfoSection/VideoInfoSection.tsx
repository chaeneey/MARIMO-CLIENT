"use client";
import { useState } from "react";

import { Input, SelectBox } from "@/components";

import * as styles from "./VideoInfoSection.css";

const VideoInfoSection = () => {
  const [hour, setHour] = useState("시간");
  const [minute, setMinute] = useState("분");
  return (
    <>
      <div className={styles.videoInfoRowContainer}>
        <span className={styles.titleTextStyle}>신랑님</span>
        <Input placeholder="이름을 입력해주세요" maxWidth={"32rem"} />
      </div>

      <div className={styles.videoInfoRowContainer}>
        <span className={styles.titleTextStyle}>신부님</span>
        <Input placeholder="이름을 입력해주세요" maxWidth={"32rem"} />
      </div>

      <div className={styles.videoInfoRowContainer}>
        <span className={styles.titleTextStyle}>예식일시</span>
        <div className={styles.videoInfoRowWrapper}>
          <Input placeholder="년도/월/일을 작성해주세요" maxWidth={"32rem"} />
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
            selected={{ keyValue: hour }}
            onSelect={(value) => setHour(value.keyValue)}
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
            selected={{ keyValue: minute }}
            onSelect={(value) => setMinute(value.keyValue)}
            variant="order"
          />
        </div>
      </div>
    </>
  );
};

export default VideoInfoSection;
