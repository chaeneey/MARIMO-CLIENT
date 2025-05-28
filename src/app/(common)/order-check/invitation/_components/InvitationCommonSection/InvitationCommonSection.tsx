import * as styles from "./InvitationCommonSection.css";

const InvitationCommonSection = () => {
  return (
    <>
      <section className={styles.inviCommonContainer}>
        <span className={styles.inviCommonTitleStyle}>신랑측 정보</span>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>아버님</span>
          <span className={styles.inviCommonNameTextStyle}>장세희</span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>어머님</span>
          <span className={styles.inviCommonNameTextStyle}>손지유</span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>신랑님</span>
          <span className={styles.inviCommonNameTextStyle}>박채연</span>
        </div>

        <span className={styles.inviCommonTitleStyle}>신부측 정보</span>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>아버님</span>
          <span className={styles.inviCommonNameTextStyle}>장세희</span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>어머님</span>
          <span className={styles.inviCommonNameTextStyle}>손지유</span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>신랑님</span>
          <span className={styles.inviCommonNameTextStyle}>박채연</span>
        </div>

        <span className={styles.inviCommonTitleStyle}>예식 정보</span>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>예식장 장소</span>
          <span className={styles.inviCommonNameTextStyle}>
            서울특별시 중구 동호로 249 신라호텔 8층 다이너스티홀
          </span>
        </div>
        <div className={styles.inviCommonTextWrapper}>
          <span className={styles.inviCommonRoleTextStyle}>예식일시</span>
          <span className={styles.inviCommonNameTextStyle}>
            2025-05-05 14시 00분
          </span>
        </div>
      </section>
    </>
  );
};

export default InvitationCommonSection;
