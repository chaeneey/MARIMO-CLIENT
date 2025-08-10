import { IcComplete80 } from "@/assets/svgs";

import {
  completeIconWrapper,
  completeLayout,
  completeMainTextStyle,
  completeMessageTextStyle,
  completeOrderNumberTextStyle,
  completeSubTextStyle,
  completeSubTextWrapper,
  completeTextWrapper,
} from "./CompleteSection.css";

interface CompleteSectionProps {
  orderCode: string | null;
}

const CompleteSection = ({ orderCode }: CompleteSectionProps) => {
  return (
    <div className={completeLayout}>
      <div className={completeIconWrapper}>
        <IcComplete80 width={81} height={81} />
      </div>
      <div className={completeTextWrapper}>
        <h1 className={completeMainTextStyle}>주문이 완료되었습니다!</h1>
        <div className={completeSubTextWrapper}>
          <h2 className={completeSubTextStyle}>주문번호</h2>
          <span className={completeOrderNumberTextStyle}>{orderCode}</span>
        </div>
      </div>

      <span className={completeMessageTextStyle}>
        영업일 기준 1~2일 이내로 주문확인 및 결제 안내 카카오 알림톡이
        발송됩니다.
      </span>
    </div>
  );
};

export default CompleteSection;
