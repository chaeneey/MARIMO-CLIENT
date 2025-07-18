import { IcMinus, IcPlus } from "@/assets/svgs";
import { Button } from "@/components/common";

import * as styles from "./SelectedOptionCard.css";

interface SelectedOptionCardProps {
  id: string;
  type: string;
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const SelectedOptionCard = ({
  id,
  type,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
}: SelectedOptionCardProps) => {
  const isFixedQuantity = type === "quantity" || type === "mobile";
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        {isFixedQuantity ? "주문 수량" : name}
      </div>
      <div className={styles.dividerStyle} />
      <div className={styles.bottomWrapper}>
        {isFixedQuantity ? (
          <div className={styles.fixedQuantityText}>{name}</div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <div className={styles.buttonStyle}>
              <Button onClick={onDecrease}>
                <IcMinus width={12} height={12} />
              </Button>
            </div>
            <div className={styles.buttonDividerStyle} />
            <div className={styles.quantityTextStyle}>{quantity}</div>
            <div className={styles.buttonDividerStyle} />
            <div className={styles.buttonStyle}>
              <Button onClick={onIncrease}>
                <IcPlus width={12} height={12} />
              </Button>
            </div>
          </div>
        )}
        <span className={styles.priceTextStyle}>
          {(price * quantity).toLocaleString()}원
        </span>
      </div>
    </div>
  );
};

export default SelectedOptionCard;
