"use client";

import { useState } from "react";

import { Button, Input, SelectBox } from "@/components";

import * as styles from "./OrderInfoSection.css";

const OrderInfoSection = () => {
  const [email, setEmail] = useState("직접 입력");
  const [phoneNumber, setPhoneNumber] = useState("010");

  return (
    <>
      <div className={styles.customerNameWrapper}>
        <h3 className={styles.inputTextStyle}>주문자 정보</h3>
        <Input
          placeholder="주문자명을 입력해주세요"
          infoMessage="디자인 확인(교정)이 가능한 분의 성합을 기입해 주세요."
          maxWidth="32rem"
        />
      </div>

      <div className={styles.customerAdressWrapper}>
        <h3 className={styles.inputTextStyle}>주소</h3>
        <div className={styles.customerAdressInputWrapper}>
          <div className={styles.customerAdressSearchWrapper}>
            <Input
              maxWidth="32rem"
              placeholder="우편번호를 입력해주세요"
              readOnly={true}
            />
            <Button size="56" color="stroke">
              주소검색
            </Button>
          </div>
          <Input maxWidth="62rem" readOnly={true} />
          <Input
            maxWidth="62rem"
            placeholder="상세 주소를 입력해주세요. 예시) 마리빌 205호"
          />
        </div>
      </div>

      <div className={styles.customerPhoneNumberWrapper}>
        <h3 className={styles.inputTextStyle}>휴대전화</h3>
        <div className={styles.customerPhoneNumberInputWrapper}>
          <SelectBox
            label="시간"
            options={[
              { value: { keyValue: "010" } },
              { value: { keyValue: "011" } },
              { value: { keyValue: "012" } },
            ]}
            selected={{ keyValue: phoneNumber }}
            onSelect={(value) => setPhoneNumber(value.keyValue)}
            variant="order"
          />
          <Input maxWidth="15rem" placeholder="1234" />
          <Input maxWidth="15rem" placeholder="1234" />
        </div>
      </div>

      <div className={styles.customerEmailWrapper}>
        <h3 className={styles.inputTextStyle}>이메일</h3>
        <div className={styles.customerEmailInputWrapper}>
          <Input maxWidth="24rem" placeholder="marimo1234" />
          <span className={styles.customerEmailTextStyle}>@</span>
          <Input maxWidth="24rem" placeholder="gmail.com" />
          <SelectBox
            label="직접 입력"
            options={[
              { value: { keyValue: "직접 입력" } },
              { value: { keyValue: "naver.com" } },
              { value: { keyValue: "google.com" } },
              { value: { keyValue: "daum.net" } },
              { value: { keyValue: "nate.com" } },
            ]}
            selected={{ keyValue: email }}
            onSelect={(value) => setEmail(value.keyValue)}
            variant="order"
          />
        </div>
      </div>
    </>
  );
};

export default OrderInfoSection;
