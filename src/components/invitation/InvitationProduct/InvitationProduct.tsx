import { Chip, CustomImage } from "@/components/common";
import { InvitationItem } from "@types";

import * as styles from "./InvitationProduct.css";

const InvitationProduct = ({ invitationItem }: InvitationItem) => {
  const { id, imageUrl, hasBundle, name, discountRate, price, quantity } =
    invitationItem;
  return (
    <article className={styles.articleWrapperStyle}>
      <div className={styles.imageSection}>
        <CustomImage src={imageUrl} alt={`${imageUrl}-${id}`} />
      </div>
      {hasBundle && <Chip text="세트 구성" />}
      <div className={styles.discriptionBox}>
        <span className={styles.titleStyle}>{name}</span>
        <div className={styles.detailWrapper}>
          <span className={styles.discountRateStyle}>{discountRate}%</span>
          <span className={styles.body08BlackStyle}>{price}원</span>
          <div className={styles.dividerStyle} />
          <span className={styles.body08BlackStyle}>{quantity}</span>
        </div>
      </div>
    </article>
  );
};

export default InvitationProduct;
