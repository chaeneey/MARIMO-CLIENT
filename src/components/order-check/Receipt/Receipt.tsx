"use client";
import * as styles from "./Receipt.css";

interface receiptProps {
  priceObj: object;
  total: number;
  title: string;
}

const Receipt = ({ priceObj, total, title }: receiptProps) => {
  return (
    <div className={styles.receiptLayout}>
      <section className={styles.receiptTopSection}>
        <h1 className={styles.receiptTitleStyle}>{title}</h1>
        <div className={styles.receiptBarStyle} />
      </section>

      <section className={styles.receiptBottomSection}>
        {Object.entries(priceObj).map(([type, value]) => (
          <div key={type} className={styles.receiptRowContainer}>
            <span className={styles.receiptTypeTextStyle}>{type}</span>
            <span className={styles.receiptTextStyle}>
              {value.toLocaleString()}원
            </span>
          </div>
        ))}
      </section>

      <div className={styles.receiptThinBarStyle} />

      <section className={styles.receiptRowContainer}>
        <span className={styles.receiptTypeTextStyle}>총 결제 금액</span>
        <span className={styles.receiptTotalTextStyle}>
          {total.toLocaleString()}원
        </span>
      </section>
    </div>
  );
};

export default Receipt;
