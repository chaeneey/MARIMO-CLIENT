import * as styles from "./PaperInvitationSection.css";

const PaperInvitationSection = () => {
  return (
    <>
      <section className={styles.paperInviLayout}>
        <section className={styles.paperInviColContainer}>
          <span className={styles.paperInviTypeText}>사진 파일(6)</span>
          <div className={styles.parperInviImageWrapper}>
            <div className={styles.paperInviImageStyle} />
            <div className={styles.paperInviImageStyle} />
            <div className={styles.paperInviImageStyle} />
            <div className={styles.paperInviImageStyle} />
            <div className={styles.paperInviImageStyle} />
            <div className={styles.paperInviImageStyle} />
          </div>
        </section>

        <section className={styles.paperInviColContainer}>
          <span className={styles.paperInviTypeText}>인사말</span>
          <div className={styles.paperInviTextBoxStyle}>
            <span className={styles.paperInviTextStyle}>
              {`모든 것이 새로워지는 봄날, 
            사랑하는 두 사람이 새 인생을 시작하려 합니다. 
            두 사람의 결혼을 축복해 주시고 따뜻한 마음으로 격려해
            주신다면 큰 힘이 되겠습니다.`}
            </span>
          </div>
        </section>
      </section>

      <section className={styles.paperInviLayout}>
        <section className={styles.paperInviRowContainer}>
          <span className={styles.paperInviTypeText}>전세버스</span>
          <span className={styles.paperInviTextStyle}>
            건대입구역 2번 출구 오전 10시 출발
          </span>
        </section>

        <section className={styles.paperInviRowContainer}>
          <span className={styles.paperInviTypeText}>피로연</span>
          <span className={styles.paperInviTextStyle}>
            신나는 파티룸 오후 4시
          </span>
        </section>
      </section>
    </>
  );
};

export default PaperInvitationSection;
