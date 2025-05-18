import { Input } from "@/components";

import * as styles from "./PhoneInfoSection.css";

const PhoneInfoSection = () => {
  return (
    <>
      <section className={styles.phoneNumberContainer}>
        <span className={styles.inputTitleTextStyle}>신랑측 정보</span>
        <div className={styles.phoneNumberWrapper}>
          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>아버님</span>
            <Input maxWidth="32rem" placeholder="010-0000-0000" />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>어머님</span>
            <Input maxWidth="32rem" placeholder="010-0000-0000" />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>신랑님</span>
            <Input maxWidth="32rem" placeholder="010-0000-0000" />
          </div>
        </div>
      </section>

      <section className={styles.phoneNumberContainer}>
        <span className={styles.inputTitleTextStyle}>신부측 정보</span>
        <div className={styles.phoneNumberWrapper}>
          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>아버님</span>
            <Input maxWidth="32rem" placeholder="010-0000-0000" />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>어머님</span>
            <Input maxWidth="32rem" placeholder="010-0000-0000" />
          </div>

          <div className={styles.phoneNumberInputWrapper}>
            <span className={styles.phoneNumberSubTextStyle}>신부님</span>
            <Input maxWidth="32rem" placeholder="010-0000-0000" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PhoneInfoSection;
