"use client";
import { useEffect, useState } from "react";

import { useFetchOrderInfo } from "@/apis/domains/order-check/useFetchOrderInfo";
import { Accordion } from "@/components/common";
import {
  InvitationCommonSection,
  InvitationProductSection,
  MemoSection,
  MobileInvitationSection,
  OrderInfoCheckSection,
  PaperInvitationSection,
  Receipt,
} from "@/components/order-check";

import * as styles from "./page.css";

const Page = () => {
  const [customerName, setCustomerName] = useState("");
  const [orderCode, setOrderCode] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("orderInfo-invitation");
    if (stored) {
      const { customerName, orderCode } = JSON.parse(stored);
      setCustomerName(customerName);
      setOrderCode(orderCode);
    }
  }, []);

  const { data } = useFetchOrderInfo("invitations", {
    customerName,
    orderCode,
  });

  if (!data) {
    return <div>로딩 중...</div>;
  }
  const {
    name,
    mainImageUrl,
    selectedOptionList,
    customerName: fetchedCustomerName,
    address,
    phoneNumber,
    email,
    invitationCommonInfo,
    paperInvitationInfo,
    mobileInvitationInfo,
    additionalRequest,
    hasMobileInvitation,
    discountAmount,
    finalAmount,
  } = data;

  const optionTypeNameMap: Record<string, string> = {
    QUANTITY: "상품 가격",
    STICKER: "스티커",
    ENVELOPE: "봉투",
    RIBBON: "리본",
    ADDITIONAL: "기타 옵션",
    MOBILE: "모바일 청첩장",
  };

  const priceInfoObj = selectedOptionList.reduce(
    (acc, option) => {
      const label = optionTypeNameMap[option.optionType] || option.optionType;
      acc[label] = option.finalPrice;
      return acc;
    },
    {} as Record<string, number>
  );

  priceInfoObj["상품 할인"] = -discountAmount;

  const accordionItems = [
    {
      title: "상품 정보",
      component: (
        <InvitationProductSection
          name={name}
          mainImageUrl={mainImageUrl}
          options={selectedOptionList}
          hasMobileInvitation={hasMobileInvitation}
        />
      ),
    },
    {
      title: "주문자 정보",
      component: (
        <OrderInfoCheckSection
          customerName={fetchedCustomerName}
          address={address}
          phoneNumber={phoneNumber}
          email={email}
        />
      ),
    },
    {
      title: "청첩장 공통 정보",
      component: <InvitationCommonSection info={invitationCommonInfo} />,
    },
    {
      title: "종이 청첩장 기본 정보",
      component: <PaperInvitationSection info={paperInvitationInfo} />,
    },
    {
      title: "모바일 청첩장 정보",
      component: <MobileInvitationSection info={mobileInvitationInfo} />,
    },
    {
      title: "기타 요청사항",
      component: <MemoSection request={additionalRequest} />,
    },
  ];

  return (
    <div className={styles.orderCheckInvitationLayout}>
      <section className={styles.orderCheckInviLeftSection}>
        {accordionItems.map(({ title, component }) => (
          <Accordion key={title} title={title}>
            {component}
          </Accordion>
        ))}
      </section>
      <section className={styles.orderCheckInviRightSection}>
        <Receipt
          priceObj={priceInfoObj}
          total={finalAmount}
          title="최종 결제 금액"
        />
      </section>
    </div>
  );
};

export default Page;
