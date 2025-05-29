import * as styles from "./MemoSection.css";

const MemoSection = () => {
  return (
    <>
      <div className={styles.MemoWrapper}>
        <span className={styles.MemoTextStyle}>요청사항</span>
        <div className={styles.MemoStyle}>
          <span className={styles.MemoSubTextStyle}>
            장세희는 지금 배고파서 감자탕이 너무 먹고싶다다 그래서 을지로에서
            졸고있다
          </span>
        </div>
      </div>

      <div className={styles.MemoWrapper}>
        <span className={styles.MemoTextStyle}>파일첨부</span>
        <span className={styles.MemoSubTextStyle}>장세희.MP4</span>
      </div>
    </>
  );
};

export default MemoSection;
