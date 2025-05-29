import { TextArea } from "@/components";
import ImageDragBox from "@/components/ImageDragBox/ImageDragBox";

import * as styles from "./MemoSection.css";

const MemoSection = () => {
  return (
    <>
      <section className={styles.memoContainer}>
        <span className={styles.inputTitleTextStyle}>요청사항 입력</span>
        <TextArea
          placeholder="제작에 대한 요청사항이 있다면 남겨주세요"
          currentLength={0}
          maxLength={500}
        />
      </section>

      <ImageDragBox />
    </>
  );
};

export default MemoSection;
