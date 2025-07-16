"use client";
import Link from "next/link";
// import { useForm, FormProvider } from "react-hook-form";

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
import useOrderFormData from "@/hooks/useOrderFormData";

import * as styles from "./page.css";

const Page = () => {
  const {
    customerInfoData,
    invitationCommonInfoData,
    paperInvitationInfoData,
    charterBusData,
    receptionData,
    mobileInvitationData,
    galleryData,
    contactOptionData,
    giftAccountData,
    rsvpData,
    additionalRequestData,
    handleProductOrderChange,
    handleOptionListChange,
    handleCustomerInfoChange,
    handleInvitationCommonInfoChange,
    handleInvitationCommonInfoBooleanChange,
    handlePaperInvitationChange,
    handleCharterBusChange,
    handleReceptionChange,
    handleMobileInvitationChange,
    handleGalleryChange,
    handleContactOptionChange,
    handleGiftAccountChange,
    handleRsvpChange,
    handleAdditionalRequestChange,
    handleMiscOptionChange,
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
    {
      title: "청첩장 공통정보 입력",
      content: (
        <CommonInfoSection
          invitationCommonInfoData={invitationCommonInfoData}
          handleInvitationCommonInfoChange={handleInvitationCommonInfoChange}
          handleInvitationCommonInfoBooleanChange={
            handleInvitationCommonInfoBooleanChange
          }
        />
      ),
    },
    {
      title: "종이 청첩장 기본 정보",
      content: (
        <CoverInfoSection
          paperInvitationInfoData={paperInvitationInfoData}
          handlePaperInvitationChange={handlePaperInvitationChange}
        />
      ),
    },
    {
      title: "전세버스",
      hasCheckbox: true,
      content: (
        <BusSection
          charterBusData={charterBusData}
          handleCharterBusChange={handleCharterBusChange}
        />
      ),
    },
    {
      title: "피로연",
      hasCheckbox: true,
      content: (
        <PartySection
          receptionData={receptionData}
          handleReceptionChange={handleReceptionChange}
        />
      ),
    },
    {
      title: "모바일 청첩장 기본 정보",
      content: (
        <CoverInfoSection
          type="mobile"
          mobileInvitationData={mobileInvitationData}
          handleMobileInvitationChange={handleMobileInvitationChange}
        />
      ),
    },
    {
      title: "갤러리",
      hasCheckbox: true,
      content: (
        <ImageDragBox
          galleryData={galleryData}
          handleGalleryChange={handleGalleryChange}
        />
      ),
    },
    {
      title: "전화걸기",
      hasCheckbox: true,
      content: (
        <PhoneInfoSection
          contactOptionData={contactOptionData}
          handleContactOptionChange={handleContactOptionChange}
        />
      ),
    },
    {
      title: "축의금 계좌",
      hasCheckbox: true,
      content: (
        <AccountSection
          giftAccountData={giftAccountData}
          handleGiftAccountChange={handleGiftAccountChange}
        />
      ),
    },
    { title: "달력", hasCheckbox: true },
    { title: "지도 및 길 찾기", hasCheckbox: true },
    {
      title: "방명록",
      hasCheckbox: true,
      content: <GuestSection />, // 필요 시 handleGuestbookChange 추가
    },
    {
      title: "참석의사 전달",
      hasCheckbox: true,
      content: (
        <AttendSection
          rsvpData={rsvpData}
          handleRsvpChange={handleRsvpChange}
        />
      ),
    },
    {
      title: "기타 요청사항",
      hasCheckbox: true,
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
          <h1 className={styles.titleTextStyle}>청첩장 주문하기</h1>
          <Button
            size="50"
            color="lime01"
            onClick={() => {
              console.log(customerInfoData, invitationCommonInfoData);
            }}
            type="button"
          >
            주문하기
          </Button>
        </div>
        <div className={styles.orderBarStyle} />
      </div>

      <div className={styles.accordionContainer}>
        {accordionItems.map(({ title, hasCheckbox, content }, idx) => (
          <Accordion key={idx} title={title} hasCheckbox={hasCheckbox}>
            {content}
          </Accordion>
        ))}
      </div>
    </form>
  );
};

export default Page;
