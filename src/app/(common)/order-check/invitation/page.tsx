import { Accordion } from "@/components";
import Button from "@/components/Button/Button";

import {
  InvitationCommonSection,
  MobileInvitationSection,
  PaperInvitationSection,
  ProductInfoSection,
} from "./_components";
import * as styles from "./page.css";
import { MemoSection, OrderInfoSection, Receipt } from "../_components";

const page = () => {
  const priceInfoObj = {
    "상품 가격": 504000,
    봉투: 8000,
    리본: 8000,
    스티커: 8000,
    "상품 할인": -204000,
  };

  const accordionItems = [
    { title: "상품 정보", component: <ProductInfoSection /> },
    { title: "주문자 정보", component: <OrderInfoSection /> },
    { title: "청첩장 공통 정보", component: <InvitationCommonSection /> },
    { title: "종이 청첩장 기본 정보", component: <PaperInvitationSection /> },
    { title: "모바일 청첩장 정보", component: <MobileInvitationSection /> },
    { title: "기타 요청사항", component: <MemoSection /> },
  ];

  return (
    <div className={styles.orderCheckInvitationLayout}>
      <section className={styles.orderCheckInviLeftSection}>
        {accordionItems.map(({ title, component }) => (
          <Accordion key={title} title={title}>
            {component}
          </Accordion>
        ))}
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
