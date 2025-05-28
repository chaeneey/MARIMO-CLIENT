import { Accordion } from "@/components";
import Button from "@/components/Button/Button";

import * as styles from "./page.css";
import Receipt from "../_components/Receipt/Receipt";
import ProductInfoSection from "./_components/ProductInfoSection/ProductInfoSection";
import OrderInfoSection from "../_components/OrderInfoSection/OrderInfoSection";
import InvitationCommonSection from "./_components/InvitationCommonSection/InvitationCommonSection";
import MobileInvitationSection from "./_components/MobileInvitationSection/MobileInvitationSection";
import PaperInvitationSection from "./_components/PaperInvitationSection/PaperInvitationSection";
import MemoSection from "../_components/MemoSection/MemoSection";

const page = () => {
  const priceInfoObj = {
    "상품 가격": 504000,
    봉투: 8000,
    리본: 8000,
    스티커: 8000,
    "상품 할인": -204000,
  };

  return (
    <div className={styles.orderCheckInvitationLayout}>
      <section className={styles.orderCheckInviLeftSection}>
        <Accordion title="상품 정보">
          <ProductInfoSection />
        </Accordion>
        <Accordion title="주문자 정보">
          <OrderInfoSection />
        </Accordion>
        <Accordion title="청첩장 공통 정보">
          <InvitationCommonSection />
        </Accordion>
        <Accordion title="종이 청첩장 기본 정보">
          <PaperInvitationSection />
        </Accordion>
        <Accordion title="모바일 청첩장 정보">
          <MobileInvitationSection />
        </Accordion>
        <Accordion title="기타 요청사항">
          <MemoSection />
        </Accordion>
      </section>

      <section className={styles.orderCheckInviRightSection}>
        <Receipt
          priceObj={priceInfoObj}
          total={124000}
          title="최종 결제 금액"
        />

        <Button size="56" color="white">
          확인
        </Button>
      </section>
    </div>
  );
};

export default page;
