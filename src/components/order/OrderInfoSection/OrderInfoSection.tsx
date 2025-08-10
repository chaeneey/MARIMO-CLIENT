"use client";
import { ChangeEvent, useEffect, useState } from "react";

import { Button, Input } from "@/components/common";
import { useDaumPostcode } from "@/hooks/useDaumPostcode";
import { CustomerInfoType } from "@types";

import * as styles from "./OrderInfoSection.css";
import OrderSelectBox from "../OrderSelectBox/OrderSelectBox";
interface OrderInfoSectionProps {
  customerInfoData: CustomerInfoType;
  handleCustomerInfoChange: (
    key: keyof CustomerInfoType
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onValidChange: (isValid: boolean) => void;
}

const OrderInfoSection = ({
  customerInfoData,
  handleCustomerInfoChange,
  onValidChange,
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

  const [nameErrorMessage, setNameErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [adressErrorMessage, setAdressMessage] = useState<string | undefined>(
    undefined
  );
  const [zoneCodeErrorMessage, setZoneCodeErrorMessage] = useState<
    string | undefined
  >(undefined);

  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState<
    string | undefined
  >(undefined);

  const [emailErrorMessage, setEmailErrorMessage] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    const isValid =
      !!customerInfoData.name &&
      !nameErrorMessage &&
      !!customerInfoData.address &&
      !adressErrorMessage &&
      !!customerInfoData.zoneCode &&
      !zoneCodeErrorMessage &&
      !phoneNumberErrorMessage &&
      !emailErrorMessage;

    onValidChange(isValid);
  }, [
    nameErrorMessage,
    adressErrorMessage,
    zoneCodeErrorMessage,
    phoneNumberErrorMessage,
    emailErrorMessage,
  ]);

  const handleNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleCustomerInfoChange("name")(e);

    if (!value.trim()) {
      setNameErrorMessage("주문자명을 입력해주세요.");
    } else if (/[^가-힣a-zA-Z\s]/.test(value)) {
      setNameErrorMessage("숫자나 특수문자는 입력할 수 없습니다.");
    } else {
      setNameErrorMessage(undefined);
    }
  };

  const handleAddressOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleCustomerInfoChange("address")(e);

    if (!value.trim()) {
      setAdressMessage("주소를 입력해주세요.");
    } else {
      setAdressMessage(undefined);
    }
  };

  const handleZoneCodeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleCustomerInfoChange("zoneCode")(e);

    if (!value.trim()) {
      setZoneCodeErrorMessage("우편번호를 입력해주세요.");
    } else if (!/^\d{5}$/.test(value)) {
      setZoneCodeErrorMessage("우편번호는 5자리 숫자여야 합니다.");
    } else {
      setZoneCodeErrorMessage(undefined);
    }
  };

  const validatePhoneNumber = (second: string, third: string) => {
    if (!second.trim() || !third.trim()) {
      setPhoneNumberErrorMessage("전화번호를 입력해주세요.");
    } else if (!/^\d{3,4}$/.test(second) || !/^\d{3,4}$/.test(third)) {
      setPhoneNumberErrorMessage("전화번호는 각 3~4자리 숫자여야 합니다.");
    } else {
      setPhoneNumberErrorMessage(undefined);
    }
  };

  const handleSecondPhoneNumberOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^0-9]/g, "");

    handleCustomerInfoChange("secondPhoneNumber")({
      target: { value: filteredValue },
    } as ChangeEvent<HTMLInputElement>);

    validatePhoneNumber(filteredValue, customerInfoData.thirdPhoneNumber);
  };

  const handleThirdPhoneNumberOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^0-9]/g, "");

    handleCustomerInfoChange("thirdPhoneNumber")({
      target: { value: filteredValue },
    } as ChangeEvent<HTMLInputElement>);

    validatePhoneNumber(customerInfoData.secondPhoneNumber, filteredValue);
  };

  const handleEmailIdOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleCustomerInfoChange("emailId")(e);

    validateFullEmail(value, customerInfoData.emailDomain); // emailDomain은 상태값
  };

  const handleEmailDomainOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    handleCustomerInfoChange("emailDomain")(e);

    validateFullEmail(customerInfoData.emailId, value); // emailId는 상태값
  };

  const validateFullEmail = (id: string, domain: string) => {
    if (!id.trim() && !domain.trim()) {
      setEmailErrorMessage("이메일 아이디와 도메인을 입력해주세요.");
      return;
    }

    if (!id.trim()) {
      setEmailErrorMessage("이메일 아이디를 입력해주세요.");
      return;
    }

    if (!domain.trim()) {
      setEmailErrorMessage("이메일 도메인을 입력해주세요.");
      return;
    }

    const isValidId = /^[a-zA-Z0-9._%+-]+$/.test(id);
    const isValidDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain);
    const fullEmail = `${id}@${domain}`;
    const isValidFullEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fullEmail);

    if (!isValidId) {
      setEmailErrorMessage(
        "이메일 아이디는 영문, 숫자 및 일부 특수문자(._%+-)만 가능합니다."
      );
    } else if (!isValidDomain) {
      setEmailErrorMessage("유효한 이메일 도메인을 입력해주세요.");
    } else if (!isValidFullEmail) {
      setEmailErrorMessage("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailErrorMessage(undefined);
    }
  };

  return (
    <>
      <div className={styles.customerNameWrapper}>
        <h3 className={styles.inputTextStyle}>주문자 정보</h3>
        <Input
          placeholder="주문자명을 입력해주세요"
          infoMessage="디자인 확인(교정)이 가능한 분의 성합을 기입해 주세요."
          maxWidth="32rem"
          maxLength={20}
          value={customerInfoData.name}
          onChange={handleNameOnChange}
          errorMessage={nameErrorMessage}
        />
      </div>

      <div className={styles.customerAdressWrapper}>
        <h3 className={styles.inputTextStyle}>주소</h3>
        <div className={styles.customerAdressInputWrapper}>
          <div className={styles.customerAdressSearchWrapper}>
            <Input
              value={customerInfoData.zoneCode}
              onChange={handleZoneCodeOnChange}
              errorMessage={zoneCodeErrorMessage}
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
            onChange={handleAddressOnChange}
            errorMessage={adressErrorMessage}
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
            // errorMessage={detailAdressErrorMessage}
          />
        </div>
      </div>

      <div className={styles.customerPhoneNumberWrapper}>
        <h3 className={styles.inputTextStyle}>휴대전화</h3>
        <div className={styles.inputWithErrorMessage}>
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
              onChange={handleSecondPhoneNumberOnChange}
              maxLength={4}
            />
            <Input
              maxWidth="15rem"
              placeholder="1234"
              value={customerInfoData.thirdPhoneNumber}
              onChange={handleThirdPhoneNumberOnChange}
              maxLength={4}
            />
          </div>
          {phoneNumberErrorMessage && (
            <span className={styles.inputErrorTextStyle}>
              {phoneNumberErrorMessage}
            </span>
          )}
        </div>
      </div>

      <div className={styles.customerEmailWrapper}>
        <h3 className={styles.inputTextStyle}>이메일</h3>
        <div className={styles.inputWithErrorMessage}>
          <div className={styles.customerEmailInputWrapper}>
            <Input
              maxWidth="24rem"
              placeholder="marimo1234"
              value={customerInfoData.emailId}
              onChange={handleEmailIdOnChange}
              // errorMessage={emailIdErrorMessage}
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
              onChange={handleEmailDomainOnChange}
              // errorMessage={
              //   selectedDomain == "직접 입력"
              //     ? emailDomainErrorMessage
              //     : undefined
              // }
              readOnly={selectedDomain != "직접 입력"}
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
          {emailErrorMessage && (
            <span className={styles.inputErrorTextStyle}>
              {emailErrorMessage}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderInfoSection;
