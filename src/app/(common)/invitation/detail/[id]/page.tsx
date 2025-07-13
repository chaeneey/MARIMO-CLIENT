import { fetchInvitationItemDetail } from "@/apis/domains/invitation/detail/fetchInvitationItemDetail";
import { InvitationInfoTab, InvitationSelect } from "@/components/invitation";

import * as styles from "./page.css";

const page = async ({ params }) => {
  const { id } = params;
  const invitationItemDetail = await fetchInvitationItemDetail(id);
  return (
    <div className={styles.invitationDetailPageStyle}>
      <InvitationSelect invitationItemDetail={invitationItemDetail} />
      <div className={styles.noteWrapper}>
        <span className={styles.noteSpanStyle}>주문 시 유의사항</span>
        <small className={styles.noteSmallStyle}>
          주문 후 제공해주신 이미지의 적합성 파악을 위해 카카오 알림톡을 받으신
          후 결제하실 수 있습니다. (영업일 기준 2~3일 소요)
        </small>
      </div>
      <InvitationInfoTab detailImageList={invitationItemDetail.detailImageList} />
    </div>
  );
};

export default page;
