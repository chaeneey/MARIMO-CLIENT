"use client";

import { Accordion, Button, ImageDragBox } from "@/components/common";
import {
  AccountSection,
  AttendSection,
  BusSection,
  CommonInfoSection,
  CoverInfoSection,
  GuestSection,
  MemoSection,
  OrderInfoSection,
  PartySection,
  PhoneInfoSection,
} from "@/components/order";

import * as styles from "./page.css";

const accordionItems = [
  { title: "주문자 정보", content: <OrderInfoSection /> },
  { title: "청첩장 공통정보 입력", content: <CommonInfoSection /> },
  { title: "종이 청첩장 기본 정보", content: <CoverInfoSection /> },
  { title: "전세버스", hasCheckbox: true, content: <BusSection /> },
  { title: "피로연", hasCheckbox: true, content: <PartySection /> },
  {
    title: "모바일 청첩장 기본 정보",
    content: <CoverInfoSection type="mobile" />,
  },
  { title: "갤러리", hasCheckbox: true, content: <ImageDragBox /> },
  { title: "전화걸기", hasCheckbox: true, content: <PhoneInfoSection /> },
  { title: "축의금 계좌", hasCheckbox: true, content: <AccountSection /> },
  { title: "달력", hasCheckbox: true },
  { title: "지도 및 길 찾기", hasCheckbox: true },
  { title: "방명록", hasCheckbox: true, content: <GuestSection /> },
  { title: "카카오톡 공유", hasCheckbox: true },
  { title: "참석의사 전달", hasCheckbox: true, content: <AttendSection /> },
  { title: "기타 요청사항", hasCheckbox: true, content: <MemoSection /> },
];

const Page = () => {
  return (
    <form className={styles.orderPageLayout}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.titleTextStyle}>청첩장 주문하기</h1>
          <Button size="50" color="lime01">
            주문하기
          </Button>
        </div>

        <div className={styles.orderBarStyle} />
      </div>

      <div className={styles.accordionContainer}>
        {accordionItems.map(({ title, hasCheckbox, content }, idx) => (
          <Accordion key={idx} title={title} hasCheckbox={hasCheckbox}>
            {content && content}
          </Accordion>
        ))}
      </div>
    </form>
  );
};

export default Page;
