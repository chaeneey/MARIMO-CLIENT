import * as styles from "./OrderInfoCheckSection.css";

interface OrderInfoCheckSectionProps {
  customerName: string;
  address: string;
  phoneNumber: string;
  email: string;
}

const OrderInfoCheckSection = ({
  customerName,
  address,
  phoneNumber,
  email,
}: OrderInfoCheckSectionProps) => {
  return (
    <div className={styles.orderInfoLayout}>
      <div className={styles.orderInfoTextWrapper}>
        <span className={styles.orderInfoTextStyle}>주문자 정보</span>
        <span className={styles.orderInfoSubTextStyle}>{customerName}</span>
      </div>

      <div className={styles.orderInfoTextWrapper}>
        <span className={styles.orderInfoTextStyle}>주소</span>
        <span className={styles.orderInfoSubTextStyle}>{address}</span>
      </div>

      <div className={styles.orderInfoTextWrapper}>
        <span className={styles.orderInfoTextStyle}>휴대전화</span>
        <span className={styles.orderInfoSubTextStyle}>{phoneNumber}</span>
      </div>

      <div className={styles.orderInfoTextWrapper}>
        <span className={styles.orderInfoTextStyle}>이메일</span>
        <span className={styles.orderInfoSubTextStyle}>{email}</span>
      </div>
    </div>
  );
};

export default OrderInfoCheckSection;
