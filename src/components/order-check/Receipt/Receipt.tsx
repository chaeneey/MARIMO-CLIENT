"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/common";

import * as styles from "./Receipt.css";

interface receiptProps {
  priceObj: object;
  total: number;
  title: string;
}

const Receipt = ({ priceObj, total, title }: receiptProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className={styles.receiptContainer}>
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
      <div className={styles.buttonWrapper}>
        <Button size="56" color="white" onClick={handleClick}>
          확인
        </Button>
      </div>
    </div>
  );
};

export default Receipt;
