"use client";
import * as styles from "./MobileInvitationSection.css";

const MobileInvitationSection = () => {
  return (
    <div>
      <section className={styles.mobileColContainer}>
        <span className={styles.mobileInviTitleStyle}>모바일 청첩장</span>
        <div className={styles.mobileColWrapper}>
          <span className={styles.mobileInviTypeTextStyle}>URL</span>
          <span className={styles.mobileInviTextStyle}>
            https://mcard.marimo.co.kr/chaeneey
          </span>
        </div>

        <div className={styles.mobileColWrapper}>
          <span className={styles.mobileInviTypeTextStyle}>메인 이미지</span>
          <div className={styles.mobileInviImageStyle} />
        </div>

        <div className={styles.mobileColWrapper}>
          <span className={styles.mobileInviTypeTextStyle}>인사말</span>
          <div className={styles.mobileInviTextBoxStyle}>
            <span className={styles.mobileInviTextStyle}>
              {`모든 것이 새로워지는 봄날,
                사랑하는 두 사람이 새 인생을 시작하려 합니다.
                두 사람의 결혼을 축복해 주시고
                따뜻한 마음으로 격려해 주신다면
                큰 힘이 되겠습니다.`}
            </span>
          </div>

          <div className={styles.mobileColWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>사진파일</span>
            <div className={styles.mobileInviImageWrapper}>
              <div className={styles.mobileInviImageStyle} />
              <div className={styles.mobileInviImageStyle} />
              <div className={styles.mobileInviImageStyle} />
              <div className={styles.mobileInviImageStyle} />
              <div className={styles.mobileInviImageStyle} />
              <div className={styles.mobileInviImageStyle} />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.mobileInviBarStyle} />

      <section className={styles.mobileColContainer}>
        <span className={styles.mobileInviTitleStyle}>전화걸기</span>
        <div className={styles.mobileColWrapper}>
          <span className={styles.mobileInviTextStyle}>신랑측 정보</span>
          <div className={styles.mobileRowWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>아버님</span>
            <span className={styles.mobileInviTextStyle}>010-0000-0000</span>
          </div>
          <div className={styles.mobileRowWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>어머님</span>
            <span className={styles.mobileInviTextStyle}>010-0000-0000</span>
          </div>
          <div className={styles.mobileRowWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>신랑님</span>
            <span className={styles.mobileInviTextStyle}>010-0000-0000</span>
          </div>
        </div>

        <div className={styles.mobileColWrapper}>
          <span className={styles.mobileInviTextStyle}>신부측 정보</span>
          <div className={styles.mobileRowWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>아버님</span>
            <span className={styles.mobileInviTextStyle}>010-0000-0000</span>
          </div>
          <div className={styles.mobileRowWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>어머님</span>
            <span className={styles.mobileInviTextStyle}>010-0000-0000</span>
          </div>
          <div className={styles.mobileRowWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>신부님</span>
            <span className={styles.mobileInviTextStyle}>010-0000-0000</span>
          </div>
        </div>
      </section>

      <div className={styles.mobileInviBarStyle} />

      <section className={styles.mobileRowContainer}>
        <span className={styles.mobileInviTitleStyle}>달력</span>
        <span className={styles.mobileInviTextStyle}>사용</span>
      </section>

      <div className={styles.mobileInviBarStyle} />

      <section className={styles.mobileRowContainer}>
        <span className={styles.mobileInviTitleStyle}>지도 및 길찾기</span>
        <span className={styles.mobileInviTextStyle}>사용</span>
      </section>

      <div className={styles.mobileInviBarStyle} />

      <section className={styles.mobileColContainer}>
        <span className={styles.mobileInviTitleStyle}>계좌번호</span>
        <div className={styles.mobileColWrapper}>
          <div className={styles.mobileRowWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>신랑측</span>
            <div className={styles.movileRowNarrowWrapper}>
              <span className={styles.mobileInviTextStyle}>장세희</span>
              <span className={styles.mobileInviTextStyle}>카카오뱅크</span>
              <span className={styles.mobileInviTextStyle}>79420945418</span>
            </div>
          </div>
          <div className={styles.mobileRowWrapper}>
            <span className={styles.mobileInviTypeTextStyle}>신부측</span>
            <div className={styles.movileRowNarrowWrapper}>
              <span className={styles.mobileInviTextStyle}>장세희</span>
              <span className={styles.mobileInviTextStyle}>카카오뱅크</span>
              <span className={styles.mobileInviTextStyle}>79420945418</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.mobileInviBarStyle} />

      <section className={styles.mobileRowContainer}>
        <span className={styles.mobileInviTitleStyle}>방명록</span>
        <span className={styles.mobileInviTextStyle}>사용</span>
      </section>

      <div className={styles.mobileInviBarStyle} />

      <section className={styles.mobileRowContainer}>
        <span className={styles.mobileInviTitleStyle}>참석의사 전달</span>
        <span className={styles.mobileInviTextStyle}>
          대표 연락처 / 동행인 여부 / 식사
        </span>
      </section>
    </div>
  );
};

export default MobileInvitationSection;
