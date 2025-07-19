"use client";

import Link from "next/link";

import { Accordion, Button, ImageDragBox } from "@/components/common";
import {
  MemoSection,
  OrderInfoSection,
  VideoInfoSection,
} from "@/components/order";
import useOrderFormData from "@/hooks/useOrderFormData";

import * as styles from "./page.css";

const Page = () => {
  const {
    customerInfoData,
    additionalRequestData,
    handleCustomerInfoChange,
    handleAdditionalRequestChange,
  } = useOrderFormData();

  const accordionItems = [
    {
      title: "주문자 정보",
      content: (
        <OrderInfoSection
          customerInfoData={customerInfoData}
          handleCustomerInfoChange={handleCustomerInfoChange}
        />
      ),
    },
    { title: "식전영상 공통정보 입력", content: <VideoInfoSection /> },
    { title: "사진 / 영상 업로드", content: <ImageDragBox /> },
    {
      title: "기타 요청사항",
      content: (
        <MemoSection
          additionalRequestData={additionalRequestData}
          handleAdditionalRequestChange={handleAdditionalRequestChange}
        />
      ),
    },
  ];

  return (
    <form className={styles.orderPageLayout}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.titleTextStyle}>식전영상 주문하기</h1>
          <Link href={"/video/order/complete"}>
            <Button size="50" color="lime01">
              주문하기
            </Button>
          </Link>
        </div>

        <div className={styles.orderBarStyle} />
      </div>

      <div className={styles.accordionContainer}>
        {accordionItems.map(({ title, content }, idx) => (
          <Accordion key={idx} title={title}>
            {content && content}
          </Accordion>
        ))}
      </div>
    </form>
  );
};

export default Page;
