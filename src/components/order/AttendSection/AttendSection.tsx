"use client";

import { CheckBox } from "@/components/common";
import { RsvpType } from "@types";

import * as styles from "./AttendSection.css";

interface AttendSectionProps {
  rsvpData: RsvpType;
  handleRsvpChange: (key: keyof RsvpType) => (checked: boolean) => void;
}

const AttendSection = ({ rsvpData, handleRsvpChange }: AttendSectionProps) => {
  return (
    <>
      <section className={styles.attendContainer}>
        <span className={styles.attendTextStyle}>입력정보 선택</span>
        <div className={styles.attendWrapper}>
          <div className={styles.attendTextWrapper}>
            <CheckBox
              checked={rsvpData.hasPrimaryContactField}
              onChange={handleRsvpChange("hasPrimaryContactField")}
            />
            <span className={styles.attendCheckBoxStyle}>대표 연락처</span>
          </div>
          <div className={styles.attendTextWrapper}>
            <CheckBox
              checked={rsvpData.hasCompanionField}
              onChange={handleRsvpChange("hasCompanionField")}
            />
            <span className={styles.attendCheckBoxStyle}>동행인 여부</span>
          </div>
          <div className={styles.attendTextWrapper}>
            <CheckBox
              checked={rsvpData.hasMealOptionField}
              onChange={handleRsvpChange("hasMealOptionField")}
            />
            <span className={styles.attendCheckBoxStyle}>식사 여부</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AttendSection;
