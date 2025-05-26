import { Accordion } from "@/components";
import Button from "@/components/Button/Button";

import * as styles from "./page.css";
import Receipt from "../(components)/Receipt/Receipt";

const page = () => {
  return (
    <div className={styles.orderCheckInvitationLayout}>
      <section className={styles.orderCheckInviLeftSection}>
        <Accordion title="상품 정보"></Accordion>
        <Accordion title="주문자 정보"></Accordion>
        <Accordion title="청첩장 공통 정보"></Accordion>
        <Accordion title="종이 청첩장 기본 정보"></Accordion>
        <Accordion title="모바일 청첩장 정보"></Accordion>
        <Accordion title="기타 요청사항"></Accordion>
      </section>

      <section className={styles.orderCheckInviRightSection}>
        <Receipt title="최종 결제 금액">
          <span>하이</span>
        </Receipt>

        <Button size="56" color="white">
          확인
        </Button>
      </section>
    </div>
  );
};

export default page;
