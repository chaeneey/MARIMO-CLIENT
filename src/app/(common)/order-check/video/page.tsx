import { Accordion } from "@/components";
import Button from "@/components/Button/Button";

import {
  ProductInfoSection,
  SourceCheckSection,
  VideoInfoSection,
} from "./_components";
import * as styles from "./page.css";
import { MemoSection, OrderInfoSection, Receipt } from "../_components";

const page = () => {
  const accordionItems = [
    { title: "상품 정보", component: <ProductInfoSection /> },
    { title: "주문자 정보", component: <OrderInfoSection /> },
    { title: "식전영상 기본 정보", component: <VideoInfoSection /> },
    { title: "사진 / 영상 업로드", component: <SourceCheckSection /> },
    { title: "기타 요청사항", component: <MemoSection /> },
  ];

  const priceInfoObj = {
    "상품 가격": 504000,
    "상품 할인": -204000,
  };

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
