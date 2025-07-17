import { CustomImage } from "@/components/common";
import { PaperInvitationInfo } from "@types";

import * as styles from "./PaperInvitationSection.css";

interface PaperInvitationSectionProps {
  info: PaperInvitationInfo;
}

const PaperInvitationSection = ({ info }: PaperInvitationSectionProps) => {
  const {
    mainImage,
    message,
    hasCharterBus,
    charterBus,
    hasReception,
    reception,
  } = info;

  const formattedReceptionTime = reception?.datetime?.[0]
    ? new Date(reception.datetime[0])
    : null;

  const receptionTime =
    formattedReceptionTime &&
    `${formattedReceptionTime.getHours()}시 ${formattedReceptionTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}분`;

  return (
    <>
      <section className={styles.paperInviLayout}>
        <section className={styles.paperInviColContainer}>
          <span className={styles.paperInviTypeText}>메인 이미지</span>
          <div className={styles.paperInviImageStyle}>
            <CustomImage src={mainImage} alt="종이청첩장-메인이미지" />
          </div>
        </section>

        <section className={styles.paperInviColContainer}>
          <span className={styles.paperInviTypeText}>인사말</span>
          <div className={styles.paperInviTextBoxStyle}>
            <span className={styles.paperInviTextStyle}>{message}</span>
          </div>
        </section>
      </section>
      <section className={styles.paperInviLayout}>
        {hasCharterBus && charterBus && (
          <section className={styles.paperInviRowContainer}>
            <span className={styles.paperInviTypeText}>전세버스</span>
            <span className={styles.paperInviTextStyle}>
              {charterBus.busStopLocation} 출발 시간:{" "}
              {charterBus.busStopTimeList.join(", ")}
            </span>
          </section>
        )}
        {hasReception && reception && (
          <section className={styles.paperInviRowContainer}>
            <span className={styles.paperInviTypeText}>피로연</span>
            <div className={styles.receptionWrapper}>
              <span className={styles.paperInviTextStyle}>
                {reception.address}
              </span>
              <span className={styles.paperInviTextStyle}>{receptionTime}</span>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default PaperInvitationSection;
