import * as styles from "./VideoInfoCheckSection.css";

interface VideoInfoCHeckSectionProps {
  groomName: string;
  brideName: string;
  weddingDatetime: string;
}

const VideoInfoCheckSection = ({
  groomName,
  brideName,
  weddingDatetime,
}: VideoInfoCHeckSectionProps) => {
  const date = new Date(weddingDatetime);

  const weddingDate = date.toISOString().split("T")[0];
  const weddingHour = date.getHours().toString().padStart(2, "0");
  const weddingMinute = date.getMinutes().toString().padStart(2, "0");
  const weddingTime = `${weddingHour}시 ${weddingMinute}분`;
  return (
    <div className={styles.videoInfoLayout}>
      <div className={styles.videoInfoTextWrapper}>
        <span className={styles.videoInfoTypeTextStyle}>신랑님</span>
        <span className={styles.videoInfoTextStyle}>{groomName}</span>
      </div>
      <div className={styles.videoInfoTextWrapper}>
        <span className={styles.videoInfoTypeTextStyle}>신부님</span>
        <span className={styles.videoInfoTextStyle}>{brideName}</span>
      </div>
      <div className={styles.videoInfoTextWrapper}>
        <span className={styles.videoInfoTypeTextStyle}>예식일시</span>
        <span className={styles.videoInfoTextStyle}>{weddingDate}</span>
        <span className={styles.videoInfoTextStyle}>{weddingTime}</span>
      </div>
    </div>
  );
};

export default VideoInfoCheckSection;
