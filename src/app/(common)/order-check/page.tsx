"use client";
import { useState } from "react";

import { IcRadioFill, IcRadioStroke } from "@/assets/svgs";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

import {
  orderCheckBarStyle,
  orderCheckBottomSection,
  orderCheckInputWrapper,
  orderCheckLayout,
  orderCheckRadioContainer,
  orderCheckRadioTextStyle,
  orderCheckRadioWrapper,
  orderCheckTitleStyle,
  orderCheckTopSection,
} from "./page.css";

type orderType = "invitation" | "video";

const page = () => {
  const [selectedOrderType, setSelectedOrderType] =
    useState<orderType>("invitation");

  const handleChangeOrderType = (type: orderType) => {
    setSelectedOrderType(type);
  };

  return (
    <div className={orderCheckLayout}>
      <section className={orderCheckTopSection}>
        <h1 className={orderCheckTitleStyle}>주문 조회</h1>
        <div className={orderCheckBarStyle} />
      </section>

      <section className={orderCheckBottomSection}>
        <div className={orderCheckInputWrapper}>
          <Input placeholder="주문자명을 입력해주세요" />
          <Input placeholder="주문번호를 입력해주세요" />
        </div>

        <div className={orderCheckRadioContainer}>
          <div
            className={orderCheckRadioWrapper}
            onClick={() => handleChangeOrderType("invitation")}
          >
            {selectedOrderType == "invitation" ? (
              <IcRadioFill width={24} height={24} />
            ) : (
              <IcRadioStroke width={24} height={24} />
            )}
            <span className={orderCheckRadioTextStyle}>청첩장</span>
          </div>

          <div
            className={orderCheckRadioWrapper}
            onClick={() => handleChangeOrderType("video")}
          >
            {selectedOrderType == "video" ? (
              <IcRadioFill width={24} height={24} />
            ) : (
              <IcRadioStroke width={24} height={24} />
            )}
            <span className={orderCheckRadioTextStyle}>식전 영상</span>
          </div>
        </div>

        <Button size="56" color="white">
          조회하기
        </Button>
      </section>
    </div>
  );
};

export default page;
