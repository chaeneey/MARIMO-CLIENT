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

const HIDDEN_TITLES_WHEN_NO_MOBILE: string[] = [
  "모바일 청첩장 기본 정보",
  "갤러리",
  "전화걸기",
  "축의금 계좌",
  "달력",
  "지도 및 길 찾기",
  "방명록",
  "참석의사 전달",
];

const Page = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const isMobileFreeProvided = searchParams.get("mobile") === "무료 제공 희망";

  const {
    productOrderData,
    customerInfoData,
    invitationCommonInfoData,
    // paperInvitationInfoData,
    invitationInfoData,
    charterBusData,
    receptionData,
    // mobileInvitationData,
    galleryData,
    contactOptionData,
    giftAccountData,
    guestbookData,
    rsvpData,
    additionalRequestData,
    orderFormData,
    // handleProductOrderChange,
    // handleOptionListChange,
    handleCustomerInfoChange,
    handleInvitationCommonInfoChange,
    handleInvitationCommonInfoBooleanChange,
    // handlePaperInvitationChange,
    handleInvitationInfoChange,
    handleCharterBusChange,
    handleReceptionChange,
    // handleMobileInvitationChange,
    handleGalleryChange,
    handleContactOptionChange,
    handleGiftAccountChange,
    handleGuestbookChange,
    handleRsvpChange,
    handleAdditionalRequestChange,
    handleOrderFormChange,
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
          invitationInfoData={invitationInfoData}
          handleInvitationInfoChange={handleInvitationInfoChange}
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
      checkboxState: orderFormData.hasCharterBus,
      handleCheckboxStateChange: handleOrderFormChange("hasCharterBus"),
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
      checkboxState: orderFormData.hasReception,
      handleCheckboxStateChange: handleOrderFormChange("hasReception"),
    },
    {
      title: "모바일 청첩장 기본 정보",
      content: (
        <CoverInfoSection
          type="mobile"
          invitationInfoData={invitationInfoData}
          handleInvitationInfoChange={handleInvitationInfoChange}
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
      checkboxState: orderFormData.hasGallery,
      handleCheckboxStateChange: handleOrderFormChange("hasGallery"),
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
      checkboxState: orderFormData.hasContactOption,
      handleCheckboxStateChange: handleOrderFormChange("hasContactOption"),
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
      checkboxState: orderFormData.hasGiftAccount,
      handleCheckboxStateChange: handleOrderFormChange("hasGiftAccount"),
    },
    {
      title: "달력",
      hasCheckbox: true,
      checkboxState: orderFormData.hasCalendar,
      handleCheckboxStateChange: handleOrderFormChange("hasCalendar"),
    },
    {
      title: "지도 및 길 찾기",
      hasCheckbox: true,
      checkboxState: orderFormData.hasMapNavigation,
      handleCheckboxStateChange: handleOrderFormChange("hasMapNavigation"),
    },
    {
      title: "방명록",
      hasCheckbox: true,
      content: (
        <GuestSection
          guestbookData={guestbookData}
          handleGuestbookChange={handleGuestbookChange}
        />
      ),
      checkboxState: orderFormData.hasGuestbook,
      handleCheckboxStateChange: handleOrderFormChange("hasGuestbook"),
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
      checkboxState: orderFormData.hasRsvp,
      handleCheckboxStateChange: handleOrderFormChange("hasRsvp"),
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
      checkboxState: orderFormData.hasAdditionalRequest,
      handleCheckboxStateChange: handleOrderFormChange("hasAdditionalRequest"),
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
              console.log(
                customerInfoData,
                invitationCommonInfoData,
                invitationInfoData,
                charterBusData,
                receptionData,
                contactOptionData,
                guestbookData,
                rsvpData,
                charterBusData,
                orderFormData,
              );
            }}
            type="button"
          >
            주문하기
          </Button>
        </div>
        <div className={styles.orderBarStyle} />
      </div>

      <div className={styles.accordionContainer}>
        {accordionItems.map(
          (
            {
              title,
              hasCheckbox,
              content,
              checkboxState,
              handleCheckboxStateChange,
            },
            idx,
          ) => {
            const shouldHide =
              !isMobileFreeProvided &&
              HIDDEN_TITLES_WHEN_NO_MOBILE.includes(title);

            if (shouldHide) return null;

            return (
              <Accordion
                key={idx}
                title={title}
                hasCheckbox={hasCheckbox}
                checkboxState={checkboxState}
                handleCheckboxStateChange={handleCheckboxStateChange}
              >
                {content}
              </Accordion>
            );
          },
        )}
      </div>
    </form>
  );
};

export default Page;
