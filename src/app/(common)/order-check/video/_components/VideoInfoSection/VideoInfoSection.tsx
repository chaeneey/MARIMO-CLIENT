import * as styles from "./VideoInfoSection.css";

const VideoInfoSection = () => {
  return (
    <div className={styles.videoInfoLayout}>
      <div className={styles.videoInfoTextWrapper}>
        <span className={styles.videoInfoTypeTextStyle}>신랑님</span>
        <span className={styles.videoInfoTextStyle}>장세희</span>
      </div>
      <div className={styles.videoInfoTextWrapper}>
        <span className={styles.videoInfoTypeTextStyle}>신부님</span>
        <span className={styles.videoInfoTextStyle}>손지유</span>
      </div>
      <div className={styles.videoInfoTextWrapper}>
        <span className={styles.videoInfoTypeTextStyle}>예식일시</span>
        <span className={styles.videoInfoTextStyle}>2025/07/01 14시 00분</span>
      </div>
    </div>
  );
};

export default VideoInfoSection;
