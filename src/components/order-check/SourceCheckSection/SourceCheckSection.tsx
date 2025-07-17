import { CustomImage } from "@/components/common";

import * as styles from "./SourceCheckSection.css";

interface SourceCheckSectionProps {
  imageList: string[];
  videoList: string[];
}

const SourceCheckSection = ({ media }: SourceCheckSectionProps) => {
  return (
    <>
      <div className={styles.sourceColWrapper}>
        <span className={styles.sourceTypeTextStyle}>
          사진파일 ({media.imageList.length})
        </span>
        <div className={styles.sourceImageWrapper}>
          {media.imageList.map((img, i) => (
            <div key={i} className={styles.sourceImageStyle}>
              <CustomImage src={img} alt={`갤러리 이미지-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sourceRowWrapper}>
        <span className={styles.sourceTypeTextStyle}>
          영상파일 ({media.videoList.length})
        </span>
        <ul>
          {media.videoList.map((video, i) => (
            <li key={i}>
              <a
                href={video}
                target="_blank"
                className={styles.sourceVideoLink}
              >
                영상 {i + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SourceCheckSection;
