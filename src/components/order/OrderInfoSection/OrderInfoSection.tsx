"use client";
import { ChangeEvent, useState } from "react";

import { Button, Input } from "@/components/common";
import { useDaumPostcode } from "@/hooks/useDaumPostcode";
import { CustomerInfoType } from "@types";

import * as styles from "./OrderInfoSection.css";
import OrderSelectBox from "../OrderSelectBox/OrderSelectBox";
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
  const [selectedDomain, setSelectedDomain] = useState("직접 입력");

  const handleAddressData = (address: string, zoneCode: string) => {
    handleCustomerInfoChange("address")({
      target: { value: address },
    } as ChangeEvent<HTMLInputElement>);

    handleCustomerInfoChange("zoneCode")({
      target: { value: zoneCode },
    } as ChangeEvent<HTMLInputElement>);
  };

  const { handleClick } = useDaumPostcode(handleAddressData);

  // const handleChangePhoneNumber = (key: string, value: string) => {
  //   const updated = { ...phoneNumber, [key]: value };
  //   setPhoneNumber(updated);
  //   const fullNumber =
  //     updated.first + "-" + updated.second + "-" + updated.third;
  //   handleCustomerInfoChange("phoneNumber")({
  //     target: { value: fullNumber },
  //   } as ChangeEvent<HTMLInputElement>);
  // };

  // const handleChangeEmail = (key: string, value: string) => {
  //   const updated = { ...email, [key]: value };
  //   setEmail(updated);
  //   const fullEmail = updated.emailId + "@" + updated.emailDomain;
  //   handleCustomerInfoChange("email")({
  //     target: { value: fullEmail },
  //   } as ChangeEvent<HTMLInputElement>);
  // };

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
              value={customerInfoData.zoneCode}
              onChange={handleCustomerInfoChange("zoneCode")}
              maxWidth="32rem"
              placeholder="우편번호를 입력해주세요"
              readOnly
            />
            <Button size="56" color="stroke" onClick={handleClick}>
              주소검색
            </Button>
          </div>
          <Input
            value={customerInfoData.address}
            onChange={handleCustomerInfoChange("address")}
            type="text"
            placeholder="건물, 지번 또는 도로명 검색"
            maxWidth="62rem"
            readOnly={true}
          />
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
          <OrderSelectBox
            label="시간"
            options={[
              { value: { keyValue: "010" } },
              { value: { keyValue: "011" } },
              { value: { keyValue: "016" } },
              { value: { keyValue: "017" } },
              { value: { keyValue: "018" } },
              { value: { keyValue: "019" } },
            ]}
            selected={{ keyValue: customerInfoData.firstPhoneNumber }}
            onSelect={(value) => {
              // handleChangePhoneNumber("first", value.keyValue);
              handleCustomerInfoChange("firstPhoneNumber")({
                target: { value: value.keyValue },
              } as ChangeEvent<HTMLInputElement>);
            }}
            variant="order"
          />
          <Input
            maxWidth="15rem"
            placeholder="1234"
            value={customerInfoData.secondPhoneNumber}
            onChange={handleCustomerInfoChange("secondPhoneNumber")}
          />
          <Input
            maxWidth="15rem"
            placeholder="1234"
            value={customerInfoData.thirdPhoneNumber}
            onChange={handleCustomerInfoChange("thirdPhoneNumber")}
          />
        </div>
      </div>

      <div className={styles.customerEmailWrapper}>
        <h3 className={styles.inputTextStyle}>이메일</h3>
        <div className={styles.customerEmailInputWrapper}>
          <Input
            maxWidth="24rem"
            placeholder="marimo1234"
            value={customerInfoData.emailId}
            onChange={handleCustomerInfoChange("emailId")}
          />
          <span className={styles.customerEmailTextStyle}>@</span>
          <Input
            maxWidth="24rem"
            placeholder="gmail.com"
            value={
              selectedDomain == "직접 입력"
                ? customerInfoData.emailDomain
                : (customerInfoData.emailDomain = selectedDomain)
            }
            onChange={handleCustomerInfoChange("emailDomain")}
          />
          <OrderSelectBox
            label="직접 입력"
            options={[
              { value: { keyValue: "직접 입력" } },
              { value: { keyValue: "naver.com" } },
              { value: { keyValue: "google.com" } },
              { value: { keyValue: "daum.net" } },
              { value: { keyValue: "nate.com" } },
            ]}
            selected={{ keyValue: selectedDomain }}
            onSelect={(value) => {
              setSelectedDomain(value.keyValue);
            }}
            variant="order"
          />
        </div>
      </div>
    </>
  );
};

export default OrderInfoSection;
