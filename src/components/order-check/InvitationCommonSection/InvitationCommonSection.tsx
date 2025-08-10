import { InvitationCommonInfo } from "@types";

import * as styles from "./InvitationCommonSection.css";

interface InvitationCommonSectionProps {
  info: InvitationCommonInfo;
}

const InvitationCommonSection = ({ info }: InvitationCommonSectionProps) => {
  const {
    groomFatherName,
    groomMotherName,
    groomName,
    brideFatherName,
    brideMotherName,
    brideName,
    weddingDateTime,
    weddingVenueAddress,
  } = info;

  const [weddingDate, weddingHour, weddingMinute] = weddingDateTime.split(" ");
  const weddingTime = `${weddingHour} ${weddingMinute}`;
  return (
    <>
      <section className={styles.inviCommonContainer}>
        <span className={styles.inviCommonTitleStyle}>신랑측 정보</span>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>아버님</span>
          <span className={styles.inviCommonNameTextStyle}>
            {groomFatherName}
          </span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>어머님</span>
          <span className={styles.inviCommonNameTextStyle}>
            {groomMotherName}
          </span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>신랑님</span>
          <span className={styles.inviCommonNameTextStyle}>{groomName}</span>
        </div>
      </section>

      <section className={styles.inviCommonContainer}>
        <span className={styles.inviCommonTitleStyle}>신부측 정보</span>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>아버님</span>
          <span className={styles.inviCommonNameTextStyle}>
            {brideFatherName}
          </span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>어머님</span>
          <span className={styles.inviCommonNameTextStyle}>
            {brideMotherName}
          </span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>신랑님</span>
          <span className={styles.inviCommonNameTextStyle}>{brideName}</span>
        </div>
      </section>

      <section className={styles.inviCommonContainer}>
        <span className={styles.inviCommonTitleStyle}>예식 정보</span>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>예식장 장소</span>
          <span className={styles.inviCommonNameTextStyle}>
            {weddingVenueAddress}
          </span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>예식일시</span>
          <div className={styles.weddingTimeWrapper}>
            <span className={styles.inviCommonNameTextStyle}>
              {weddingDate}
            </span>
            <span className={styles.inviCommonNameTextStyle}>
              {weddingTime}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvitationCommonSection;
