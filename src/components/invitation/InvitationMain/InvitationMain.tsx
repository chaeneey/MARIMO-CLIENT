import { fetchInvitationItemList } from "@/apis/domains/invitation/fetchInvitationItemList";

import * as styles from "./InvitationMain.css";
import ProductsSection from "../ProductsSection/ProductsSection";

const InvitationMain = async () => {
  const invitationItemList = await fetchInvitationItemList();

  return (
    <section className={styles.mainSectionStyle}>
      <div className={styles.textSectionStyle}>
        <h1 className={styles.titleTextStyle}>WEDDING INVITATION</h1>
        <p className={styles.pStyle}>
          <span className={styles.body09Style}>
            마리모 청첩장은 모바일 청첩장을 무료로 제공하여 모든 상품은 종이
            청첩장 + 모바일 청첩장 세트 구성입니다
          </span>
          <span className={styles.body11Style}>
            모바일 청첩장 단품 구매를 희망하시는 고객님께서는 카카오채널 문의
            부탁드립니다.
          </span>
        </p>
      </div>
      <ProductsSection invitationItemList={invitationItemList} />
    </section>
  );
};

export default InvitationMain;
