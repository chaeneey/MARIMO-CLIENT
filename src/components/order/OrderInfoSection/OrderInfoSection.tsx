"use client";
import { ChangeEvent, useState } from "react";

import { Button, Input, SelectBox } from "@/components/common";
import { CustomerInfoType } from "@types";

import * as styles from "./OrderInfoSection.css";

interface OrderInfoSectionProps {
  customerInfoData: CustomerInfoType;
  handleCustomerInfoChange: (
    key: keyof CustomerInfoType,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const OrderInfoSection = ({
  customerInfoData,
  handleCustomerInfoChange,
}: OrderInfoSectionProps) => {
  const [email, setEmail] = useState({
    emailId: "",
    emailDomain: "",
  });
  const [selectedEmailDomain, setSelectedEmailDomain] = useState("직접 입력");
  const [firstPhoneNumber, setFirstPhoneNumber] = useState("010");
  const [phoneNumber, setPhoneNumber] = useState({
    second: "",
    third: "",
  });

  const handleChangePhoneNumber = () => {
    const fullNumber =
      firstPhoneNumber + "-" + phoneNumber.second + "-" + phoneNumber.third;
    handleCustomerInfoChange("phoneNumber")({
      target: { value: fullNumber },
    } as ChangeEvent<HTMLInputElement>);
  };

  const handleChangeEmail = () => {
    const fullEmail = email.emailId + "@" + email.emailDomain;
    handleCustomerInfoChange("email")({
      target: { value: fullEmail },
    } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <div className={styles.customerNameWrapper}>
        <h3 className={styles.inputTextStyle}>주문자 정보</h3>
        <Input
          placeholder="주문자명을 입력해주세요"
          infoMessage="디자인 확인(교정)이 가능한 분의 성합을 기입해 주세요."
          maxWidth="32rem"
          value={customerInfoData.name}
          onChange={handleCustomerInfoChange("name")}
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
            value={customerInfoData.detailAddress}
            onChange={handleCustomerInfoChange("detailAddress")}
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
              { value: { keyValue: "016" } },
              { value: { keyValue: "017" } },
              { value: { keyValue: "018" } },
              { value: { keyValue: "019" } },
            ]}
            selected={{ keyValue: firstPhoneNumber }}
            onSelect={(value) => {
              setFirstPhoneNumber(value.keyValue);
              handleChangePhoneNumber();
            }}
            variant="order"
          />
          <Input
            maxWidth="15rem"
            placeholder="1234"
            value={phoneNumber["second"]}
            onChange={(e) => {
              setPhoneNumber((prev) => ({ ...prev, second: e.target.value }));
            }}
          />
          <Input
            maxWidth="15rem"
            placeholder="1234"
            value={phoneNumber["third"]}
            onChange={(e) => {
              setPhoneNumber((prev) => ({ ...prev, third: e.target.value }));
              handleChangePhoneNumber();
            }}
          />
        </div>
      </div>

      <div className={styles.customerEmailWrapper}>
        <h3 className={styles.inputTextStyle}>이메일</h3>
        <div className={styles.customerEmailInputWrapper}>
          <Input
            maxWidth="24rem"
            placeholder="marimo1234"
            value={email.emailId}
            onChange={(e) => {
              setEmail((prev) => ({ ...prev, emailId: e.target.value }));
              handleChangeEmail();
            }}
          />
          <span className={styles.customerEmailTextStyle}>@</span>
          <Input
            maxWidth="24rem"
            placeholder="gmail.com"
            value={email.emailDomain}
            onChange={(e) => {
              if (selectedEmailDomain == "직접 입력") {
                setEmail((prev) => ({ ...prev, emailDomain: e.target.value }));
              } else {
                setEmail((prev) => ({
                  ...prev,
                  emailDomain: selectedEmailDomain,
                }));
              }
              handleChangeEmail();
            }}
          />
          <SelectBox
            label="직접 입력"
            options={[
              { value: { keyValue: "직접 입력" } },
              { value: { keyValue: "naver.com" } },
              { value: { keyValue: "google.com" } },
              { value: { keyValue: "daum.net" } },
              { value: { keyValue: "nate.com" } },
            ]}
            selected={{ keyValue: selectedEmailDomain }}
            onSelect={(value) => {
              setSelectedEmailDomain(value.keyValue);
              handleChangeEmail();
            }}
            variant="order"
          />
        </div>
      </div>
    </>
  );
};

export default OrderInfoSection;
