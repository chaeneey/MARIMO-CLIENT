import { Chip, CustomImage } from "@/components";

import * as styles from "./InvitationProduct.css";

interface InvitationProductProps {
  imageUrl: string;
  title: string;
  discountRate: number;
  price: number;
  piece: number;
  id: number;
}
type ProductProps = {
  product: InvitationProductProps;
};

const InvitationProduct = ({ product }: ProductProps) => {
  const { imageUrl, title, discountRate, price, piece, id } = product;
  return (
    <article className={styles.articleWrapperStyle}>
      <div className={styles.imageSection}>
        <CustomImage src={imageUrl} alt={`${imageUrl}-${id}`} />
      </div>
      <Chip text="세트 구성" />
      <div className={styles.discriptionBox}>
        <span className={styles.titleStyle}>{title}</span>
        <div className={styles.detailWrapper}>
          <span className={styles.discountRateStyle}>{discountRate}%</span>
          <span className={styles.body08BlackStyle}>{price}원</span>
          <div className={styles.dividerStyle} />
          <span className={styles.body08BlackStyle}>{piece}장</span>
        </div>
      </div>
    </article>
  );
};

export default InvitationProduct;
