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
  const firstSpaceIndex = weddingDatetime.indexOf(" ");
  const weddingDate =
    firstSpaceIndex !== -1
      ? weddingDatetime.slice(0, firstSpaceIndex)
      : weddingDatetime;
  const weddingTime =
    firstSpaceIndex !== -1 ? weddingDatetime.slice(firstSpaceIndex + 1) : "";
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
        <div className={styles.dateTimeWrapper}>
          <span className={styles.videoInfoTextStyle}>{weddingDate}</span>
          <span className={styles.videoInfoTextStyle}>{weddingTime}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoInfoCheckSection;
