import { Input } from "@/components";

import * as styles from "./GuestSection.css";

const GuestSection = () => {
  return (
    <>
      <div className={styles.guestWrapper}>
        <span className={styles.inputTextStyle}>관리자 비밀번호</span>
        <Input
          maxWidth="34rem"
          placeholder="숫자 4자리로 등록해주세요"
          infoMessage="관리 비밀번호를 사용하여 방명록 글을 삭제할 수 있습니다"
        />
      </div>
    </>
  );
};

export default GuestSection;
