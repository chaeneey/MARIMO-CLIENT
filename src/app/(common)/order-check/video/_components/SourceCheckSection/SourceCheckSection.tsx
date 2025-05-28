import * as styles from "./SourceCheckSection.css";

const SourceCheckSection = () => {
  return (
    <>
      <div className={styles.sourceColWrapper}>
        <span className={styles.sourceTypeTextStyle}>사진파일 (6)</span>
        <div className={styles.sourceImageWrapper}>
          <div className={styles.sourceImageStyle} />
          <div className={styles.sourceImageStyle} />
          <div className={styles.sourceImageStyle} />
          <div className={styles.sourceImageStyle} />
          <div className={styles.sourceImageStyle} />
          <div className={styles.sourceImageStyle} />
        </div>
      </div>

      <div className={styles.sourceRowWrapper}>
        <span className={styles.sourceTypeTextStyle}>피로연</span>
        <span className={styles.sourceTextStyle}>장세희.MP4</span>
      </div>
    </>
  );
};

export default SourceCheckSection;
