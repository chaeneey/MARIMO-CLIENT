"use client";

import { Accordion, Button } from "@/components";
import ImageDragBox from "@/components/ImageDragBox/ImageDragBox";

import AttendSection from "./components/AttendSection/AttendSection";
import BusSection from "./components/BusSection/BusSection";
import CommonInfoSection from "./components/CommonInfoSection/CommonInfoSection";
import CoverInfoSection from "./components/CoverInfoSection/CoverInfoSection";
import GuestSection from "./components/GuestSection/GuestSection";
import MemoSection from "./components/MemoSection/MemoSection";
import OrderInfoSection from "./components/OrderInfoSection/OrderInfoSection";
import PartySection from "./components/PartySection/PartySection";
import PhoneInfoSection from "./components/PhoneInfoSection/PhoneInfoSection";
import * as styles from "./page.css";

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
        <Accordion title="주문자 정보">
          <OrderInfoSection />
        </Accordion>

        <Accordion title="청첩장 공통정보 입력">
          <CommonInfoSection />
        </Accordion>

        <Accordion title="종이 청첩장 기본 정보">
          <CoverInfoSection />
        </Accordion>

        <Accordion title="전세버스" hasCheckbox>
          <BusSection />
        </Accordion>

        <Accordion title="피로연" hasCheckbox>
          <PartySection />
        </Accordion>

        <Accordion title="모바일 청첩장 기본 정보">
          <CoverInfoSection type="mobile" />
        </Accordion>

        <Accordion title="갤러리" hasCheckbox>
          <ImageDragBox />
        </Accordion>

        <Accordion title="전화걸기" hasCheckbox>
          <PhoneInfoSection />
        </Accordion>

        <Accordion title="축의금 계좌" hasCheckbox></Accordion>

        <Accordion title="달력" hasCheckbox />

        <Accordion title="지도 및 길 찾기" hasCheckbox />

        <Accordion title="방명록" hasCheckbox>
          <GuestSection />
        </Accordion>

        <Accordion title="카카오톡 공유" hasCheckbox />

        <Accordion title="참석의사 전달" hasCheckbox>
          <AttendSection />
        </Accordion>

        <Accordion title="기타 요청사항" hasCheckbox>
          <MemoSection />
        </Accordion>
      </div>
    </form>
  );
};

export default Page;
