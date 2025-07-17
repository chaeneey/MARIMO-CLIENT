import * as styles from "./MemoSection.css";

interface MemoSectionProps {
  requestText: string;
  attachmentList: string[];
}

const MemoSection = ({ request }: MemoSectionProps) => {
  const { requestText, attachmentList } = request;
  return (
    <>
      <div className={styles.MemoWrapper}>
        <span className={styles.MemoTextStyle}>요청사항</span>
        <div className={styles.MemoStyle}>
          <span className={styles.MemoSubTextStyle}>{requestText}</span>
        </div>
      </div>
      <div className={styles.MemoWrapper}>
        <span className={styles.MemoTextStyle}>파일첨부</span>
        {attachmentList.length > 0 ? (
          attachmentList.map((fileUrl, index) => {
            const fileName = decodeURIComponent(
              fileUrl.split("/").pop() ?? `파일_${index + 1}`
            );
            return (
              <a
                key={index}
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.MemoSubTextStyle}
              >
                {fileName}
              </a>
            );
          })
        ) : (
          <span className={styles.MemoSubTextStyle}>
            첨부된 파일이 없습니다.
          </span>
        )}
      </div>
    </>
  );
};

export default MemoSection;
