"use client";

import { CheckBox } from "@/components/common";

import * as styles from "./AttendSection.css";

const AttendSection = () => {
  return (
    <>
      <section className={styles.attendContainer}>
        <span className={styles.attendTextStyle}>입력정보 선택</span>
        <div className={styles.attendWrapper}>
          <div className={styles.attendTextWrapper}>
            <CheckBox />
            <span className={styles.attendCheckBoxStyle}>대표 연락처</span>
          </div>
          <div className={styles.attendTextWrapper}>
            <CheckBox />
            <span className={styles.attendCheckBoxStyle}>동행인 여부</span>
          </div>
          <div className={styles.attendTextWrapper}>
            <CheckBox />
            <span className={styles.attendCheckBoxStyle}>식사 여부</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AttendSection;
