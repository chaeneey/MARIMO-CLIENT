import { CustomImage } from "@/components/common";
import { MobileInvitationInfo } from "@types";

import * as styles from "./MobileInvitationSection.css";

interface MobileInvitationSectionProps {
  info: MobileInvitationInfo;
}

const MobileInvitationSection = ({ info }: MobileInvitationSectionProps) => {
  const {
    urlSlug,
    mainImage,
    message,
    hasGallery,
    gallery,
    hasContactOption,
    contactOption,
    hasGiftAccount,
    giftAccount,
    hasCalendar,
    hasMapNavigation,
    hasGuestbook,
    hasRsvp,
    rsvp,
  } = info;
  return (
    <div>
      <section className={styles.mobileColContainer}>
        <span className={styles.mobileInviTitleStyle}>모바일 청첩장</span>
        <div className={styles.mobileColWrapper}>
          <span className={styles.mobileInviTypeTextStyle}>URL</span>
          <span className={styles.mobileInviTextStyle}>{urlSlug}</span>
        </div>

        <div className={styles.mobileColWrapper}>
          <span className={styles.mobileInviTypeTextStyle}>메인 이미지</span>
          <div className={styles.mobileInviImageStyle}>
            <CustomImage src={mainImage} alt="모바일청첩장-메인이미지" />
          </div>
        </div>

        <div className={styles.mobileColWrapper}>
          <span className={styles.mobileInviTypeTextStyle}>인사말</span>
          <div className={styles.mobileInviTextBoxStyle}>
            <span className={styles.mobileInviTextStyle}>{message}</span>
          </div>

          {hasGallery && gallery && (
            <div className={styles.mobileColWrapper}>
              <span className={styles.mobileInviTypeTextStyle}>
                사진파일 ({gallery.imageList.length})
              </span>
              <div className={styles.mobileInviImageWrapper}>
                {gallery.imageList.map((img, i) => (
                  <div className={styles.mobileInviImageStyle} key={i}>
                    <CustomImage src={img} alt={`갤러리 이미지-${i}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className={styles.mobileInviBarStyle} />

      {hasContactOption && contactOption && (
        <section className={styles.mobileColContainer}>
          <span className={styles.mobileInviTitleStyle}>전화걸기</span>
          <div className={styles.mobileColWrapper}>
            <span className={styles.mobileInviTextStyle}>신랑측 정보</span>
            <div className={styles.phoneNumberWrapper}>
              <div className={styles.mobileRowWrapper}>
                <span className={styles.mobileInviTypeTextStyle}>아버님</span>
                <span className={styles.mobileInviTextStyle}>
                  {contactOption.groomFatherPhoneNumber}
                </span>
              </div>
              <div className={styles.mobileRowWrapper}>
                <span className={styles.mobileInviTypeTextStyle}>어머님</span>
                <span className={styles.mobileInviTextStyle}>
                  {contactOption.groomMotherPhoneNumber}
                </span>
              </div>
              <div className={styles.mobileRowWrapper}>
                <span className={styles.mobileInviTypeTextStyle}>신랑님</span>
                <span className={styles.mobileInviTextStyle}>
                  {contactOption.groomPhoneNumber}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.mobileColWrapper}>
            <span className={styles.mobileInviTextStyle}>신부측 정보</span>
            <div className={styles.phoneNumberWrapper}>
              <div className={styles.mobileRowWrapper}>
                <span className={styles.mobileInviTypeTextStyle}>아버님</span>
                <span className={styles.mobileInviTextStyle}>
                  {contactOption.brideFatherPhoneNumber}
                </span>
              </div>
              <div className={styles.mobileRowWrapper}>
                <span className={styles.mobileInviTypeTextStyle}>어머님</span>
                <span className={styles.mobileInviTextStyle}>
                  {contactOption.brideMotherPhoneNumber}
                </span>
              </div>
              <div className={styles.mobileRowWrapper}>
                <span className={styles.mobileInviTypeTextStyle}>신부님</span>
                <span className={styles.mobileInviTextStyle}>
                  {contactOption.bridePhoneNumber}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className={styles.mobileInviBarStyle} />

      {hasCalendar && (
        <>
          <section className={styles.mobileRowContainer}>
            <span className={styles.mobileInviTitleStyle}>달력</span>
            <span className={styles.mobileInviTextStyle}>사용</span>
          </section>
          <div className={styles.mobileInviBarStyle} />
        </>
      )}

      {hasMapNavigation && (
        <>
          <section className={styles.mobileRowContainer}>
            <span className={styles.mobileInviTitleStyle}>지도 및 길찾기</span>
            <span className={styles.mobileInviTextStyle}>사용</span>
          </section>
          <div className={styles.mobileInviBarStyle} />
        </>
      )}

      {hasGiftAccount && giftAccount && (
        <>
          <section className={styles.mobileColContainer}>
            <span className={styles.mobileInviTitleStyle}>계좌번호</span>
            <div className={styles.mobileColWrapper}>
              {giftAccount.groomGiftAccountList.map((account, i) => (
                <div key={i} className={styles.mobileRowWrapper}>
                  <span className={styles.mobileInviTypeTextStyle}>신랑측</span>
                  <div className={styles.movileRowNarrowWrapper}>
                    <span className={styles.mobileInviTextStyle}>
                      {account.holder}
                    </span>
                    <span className={styles.mobileInviTextStyle}>
                      {account.bank}
                    </span>
                    <span className={styles.mobileInviTextStyle}>
                      {account.number}
                    </span>
                  </div>
                </div>
              ))}
              {giftAccount.brideGiftAccountList.map((account, i) => (
                <div key={i} className={styles.mobileRowWrapper}>
                  <span className={styles.mobileInviTypeTextStyle}>신부측</span>
                  <div className={styles.movileRowNarrowWrapper}>
                    <span className={styles.mobileInviTextStyle}>
                      {account.holder}
                    </span>
                    <span className={styles.mobileInviTextStyle}>
                      {account.bank}
                    </span>
                    <span className={styles.mobileInviTextStyle}>
                      {account.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className={styles.mobileInviBarStyle} />
        </>
      )}

      {hasGuestbook && (
        <>
          <section className={styles.mobileRowContainer}>
            <span className={styles.mobileInviTitleStyle}>방명록</span>
            <span className={styles.mobileInviTextStyle}>사용</span>
          </section>
          <div className={styles.mobileInviBarStyle} />
        </>
      )}

      {hasRsvp && rsvp && (
        <section className={styles.mobileRowContainer}>
          <span className={styles.mobileInviTitleStyle}>참석의사 전달</span>
          <span className={styles.mobileInviTextStyle}>
            {[
              rsvp.hasPrimaryContactField && "대표 연락처",
              rsvp.hasCompanionField && "동행인 여부",
              rsvp.hasMealOptionField && "식사",
            ]
              .filter(Boolean)
              .join(" / ")}
          </span>
        </section>
      )}
    </div>
  );
};

export default MobileInvitationSection;
