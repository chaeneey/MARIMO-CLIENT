"use client";

import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

import { Button, Input, SelectBox } from "@/components/common";

import * as styles from "./OrderInfoSection.css";

const scriptUrl =
  "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const OrderInfoSection = () => {
  const [form, setForm] = useState({
    address: "",
    addressDetail: "",
    zonecode: "",
  });
  const [email, setEmail] = useState("직접 입력");
  const [phoneNumber, setPhoneNumber] = useState("010");

  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: DaumPostcodeData) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setForm((prevForm) => ({
      ...prevForm,
      address: fullAddress,
      zonecode: data.zonecode,
    }));
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

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
              value={form.zonecode}
              maxWidth="32rem"
              placeholder="우편번호를 입력해주세요"
              readOnly
            />
            <Button size="56" color="stroke" onClick={handleClick}>
              주소검색
            </Button>
          </div>
          <Input
            value={form.address}
            type="text"
            placeholder="건물, 지번 또는 도로명 검색"
            maxWidth="62rem"
            readOnly={true}
          />
          <Input
            value={form.addressDetail}
            onChange={(e) =>
              setForm({ ...form, addressDetail: e.target.value })
            }
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
              { value: { keyValue: "016" } },
              { value: { keyValue: "017" } },
              { value: { keyValue: "018" } },
              { value: { keyValue: "019" } },
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
