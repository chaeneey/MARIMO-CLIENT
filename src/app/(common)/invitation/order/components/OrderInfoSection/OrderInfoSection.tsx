import { Button, Input, SelectBox } from "@/components";

import * as styles from "./OrderInfoSection.css";

const OrderInfoSection = () => {
  return (
    <>
      <div className={styles.customerNameWrapper}>
        <h3 className={styles.inputTextStyle}>주문자 정보</h3>
        <Input
          placeholder="주문자명을 입력해주세요"
          infoMessage="디자인 확인(교정)이 가능한 분의 성합을 기입해 주세요."
          width="32rem"
        />
      </div>

      <div className={styles.customerAdressWrapper}>
        <h3 className={styles.inputTextStyle}>주소</h3>
        <div className={styles.customerAdressInputWrapper}>
          <div className={styles.customerAdressSearchWrapper}>
            <Input width="32rem" placeholder="우편번호를 입력해주세요" />
            <Button size="56" color="stroke">
              주소검색
            </Button>
          </div>
          <Input width="62rem" />
          <Input
            width="62rem"
            placeholder="상세 주소를 입력해주세요. 예시) 마리빌 205호"
          />
        </div>
      </div>

      <div className={styles.customerPhoneNumberWrapper}>
        <h3 className={styles.inputTextStyle}>휴대전화</h3>
        <Input width="32rem" placeholder="010-0000-0000"></Input>
      </div>

      <div className={styles.customerEmailWrapper}>
        <h3 className={styles.inputTextStyle}>이메일</h3>
        <div className={styles.customerEmailInputWrapper}>
          <Input width="24rem" placeholder="marimo1234" />
          <span className={styles.customerEmailTextStyle}>@</span>
          <Input width="24rem" placeholder="gmail.com" />
          <SelectBox
            label="직접 입력"
            options={["직접 입력", "naver.com"]}
            selected={"직접 입력"}
            onSelect={() => {}}
            variant="order"
          />
        </div>
      </div>
    </>
  );
};

export default OrderInfoSection;
