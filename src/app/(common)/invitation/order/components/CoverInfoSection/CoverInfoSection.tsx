import { Button, Input, IUButton, TextArea } from "@/components";

import * as styles from "./CoverInfoSection.css";

interface CoverInfoSectionType {
  type?: "paper" | "mobile";
}

const CoverInfoSection = ({ type = "paper" }: CoverInfoSectionType) => {
  return (
    <>
      {type == "mobile" && (
        <section className={styles.coverContentContainer}>
          <span className={styles.inputTitleTextStyle}>
            모바일 청첩장 URL 기입
          </span>
          <div className={styles.urlWrapper}>
            <span
              className={styles.urlTextStyle}
            >{`https://mcard.marimo.co.kr/`}</span>
            <Input width="32rem" placeholder="주소를 생성해주세요" />
            <Button color="gray" size="35">
              중복 확인
            </Button>
          </div>
        </section>
      )}

      <section className={styles.coverContentContainer}>
        <span className={styles.inputTitleTextStyle}>
          {type == "mobile" && "모바일"} 청첩장 표지 업로드
        </span>

        <IUButton onUpload={() => {}} />

        <section className={styles.cautionContainer}>
          <span className={styles.cautionTitleStyle}>주문 시 유의사항</span>
          <div className={styles.cautionTextWrapper}>
            <span className={styles.cautionTextStyle}>
              {`핸드폰 촬영사진은 불가합니다. 스튜디오의 원본 사진(고해상도)을 권장합니다.`}
            </span>
            <span className={styles.cautionTextStyle}>
              {`사진 크기는 해상도 200dpi 이상, 용량 2MB 이상의 원본 사진으로 첨부해주세요`}
            </span>
          </div>
        </section>
      </section>

      <section className={styles.coverContentContainer}>
        <div className={styles.textWithButtonWrapper}>
          <span className={styles.inputTitleTextStyle}>인사말</span>
          <Button color="gray" size="35">
            샘플 확인
          </Button>
        </div>

        <TextArea
          placeholder="반드시 오탈자, 띄어쓰기가 제대로 되어있는지 다시 한 번 확인해 주세요!"
          currentLength={0}
          maxLength={500}
        />
      </section>
    </>
  );
};

export default CoverInfoSection;
