"use client";
import { useEffect, useState } from "react";

import { useFetchOrderInfo } from "@/apis/domains/order-check/useFetchOrderInfo";
import { Accordion } from "@/components/common";
import {
  MemoSection,
  OrderInfoCheckSection,
  ProductInfoSection,
  Receipt,
  SourceCheckSection,
  VideoInfoCheckSection,
} from "@/components/order-check";

import * as styles from "./page.css";

const Page = () => {
  const [customerName, setCustomerName] = useState("");
  const [orderCode, setOrderCode] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("orderInfo-video");
    if (stored) {
      const { customerName, orderCode } = JSON.parse(stored);
      setCustomerName(customerName);
      setOrderCode(orderCode);
    }
  }, []);

  const { data } = useFetchOrderInfo("pre-videos", {
    customerName,
    orderCode,
  });

  if (!data) {
    return <div>로딩 중...</div>;
  }
  const {
    mainImageUrl,
    name,
    price,
    discountAmount,
    finalAmount,
    customerName: fetchedCustomerName,
    address,
    phoneNumber,
    email,
    groomName,
    brideName,
    weddingDatetime,
    media,
    requestText,
    attachmentList,
  } = data;

  const additionalRequest = {
    requestText,
    attachmentList,
  };
  const accordionItems = [
    {
      title: "상품 정보",
      component: (
        <ProductInfoSection
          name={name}
          mainImageUrl={mainImageUrl}
          price={price}
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
      title: "식전영상 기본 정보",
      component: (
        <VideoInfoCheckSection
          groomName={groomName}
          brideName={brideName}
          weddingDatetime={weddingDatetime}
        />
      ),
    },
    {
      title: "사진 / 영상 업로드",
      component: <SourceCheckSection media={media} />,
    },
    {
      title: "기타 요청사항",
      component: <MemoSection request={additionalRequest} />,
    },
  ];

  const priceInfoObj = {
    "상품 가격": price,
    "상품 할인": -discountAmount,
  };

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
