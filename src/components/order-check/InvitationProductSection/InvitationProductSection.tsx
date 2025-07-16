import { CustomImage } from "@/components/common";

import * as styles from "./InvitationProductSection.css";

interface Option {
  optionType: string;
  name: string;
  detailOption: string;
  quantity: number;
  price: number;
  finalPrice: number;
}

interface InvitationProductSectionProps {
  name: string;
  mainImageUrl: string;
  options: Option[];
  hasMobileInvitation: boolean;
}

const InvitationProductSection = ({
  name,
  mainImageUrl,
  options,
  hasMobileInvitation,
}: InvitationProductSectionProps) => {
  const quantityOption = options.find((opt) => opt.optionType === "QUANTITY");
  const envelopeOption = options.find((opt) => opt.optionType === "ENVELOPE");
  const ribbonOption = options.find((opt) => opt.optionType === "RIBBON");
  const stickerOption = options.find((opt) => opt.optionType === "STICKER");
  const additionalOption = options.find(
    (opt) => opt.optionType === "ADDITIONAL"
  );
  return (
    <div className={styles.productInfoSectionLayout}>
      <section className={styles.productInfoTopContainer}>
        <div className={styles.productImgStyle}>
          <CustomImage src={mainImageUrl} alt="상품이미지" />
        </div>
        <div className={styles.productTextContainer}>
          <span className={styles.productTitleStyle}>{name}</span>
          <div className={styles.productSubTextContainer}>
            <div className={styles.productSubTextWrapper}>
              <span className={styles.productSubTextStyle}>수량</span>
              <span className={styles.productSubTextStyle}>
                {quantityOption?.name}
              </span>
            </div>
            <span className={styles.productTitleStyle}>
              {quantityOption.finalPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </section>

      <section className={styles.productInfoBottomContainer}>
        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>모바일 청첩장</span>
          <span className={styles.optionSubTextStyle}>
            {hasMobileInvitation ? "O" : "X"}
          </span>
        </div>

        <div className={styles.optionBarStyle} />

        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>봉투</span>
          <div className={styles.optionTextWrapper}>
            <span className={styles.optionSubTextStyle}>
              {envelopeOption &&
                `${envelopeOption.name} / ${envelopeOption.detailOption} / ${envelopeOption.price.toLocaleString()}원`}
            </span>
            <span className={styles.optionSubTextStyle}>
              {envelopeOption.quantity}개
            </span>
          </div>
        </div>

        <div className={styles.optionBarStyle} />

        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>리본</span>
          <div className={styles.optionTextWrapper}>
            <span className={styles.optionSubTextStyle}>
              {ribbonOption &&
                `${ribbonOption.name} / ${ribbonOption.price.toLocaleString()}원`}
            </span>
            <span className={styles.optionSubTextStyle}>
              {ribbonOption.quantity}개
            </span>
          </div>
        </div>

        <div className={styles.optionBarStyle} />

        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>스티커</span>
          <div className={styles.optionTextWrapper}>
            <span className={styles.optionSubTextStyle}>
              {stickerOption &&
                `${stickerOption.name} / ${stickerOption.detailOption} / ${stickerOption.price.toLocaleString()}원`}
            </span>
            <span className={styles.optionSubTextStyle}>
              {stickerOption.quantity}개
            </span>
          </div>
        </div>

        <div className={styles.optionBarStyle} />

        <div className={styles.productInfoOptionWrapper}>
          <span className={styles.optionTextStyle}>추가서비스</span>
          <div className={styles.optionTextWrapper}>
            <span className={styles.optionSubTextStyle}>
              {additionalOption &&
                `${additionalOption.name} / ${additionalOption.detailOption} / ${additionalOption.price.toLocaleString()}원`}
            </span>
            <span className={styles.optionSubTextStyle}>
              {additionalOption.quantity}개
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvitationProductSection;
