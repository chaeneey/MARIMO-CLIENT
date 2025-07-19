"use client";
// import Link from "next/link";
// import { useForm, FormProvider } from "react-hook-form";

import { useEffect, useState } from "react";

import { usePostOrderInfo } from "@/apis/domains/order/usePostOrderInfo";
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
import { PostOrderInfoRequest } from "@types";

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
  const [isMobileFreeProvided, setIsMobileFreeProvided] = useState<
    boolean | null
  >(null);

  const {
    productOrderData,
    customerInfoData,
    invitationCommonInfoData,
    // paperInvitationInfoData,
    paperInfoData,
    mobileInfoData,
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
    setProductOrderData,
    setOrderFormData,
    handleCustomerInfoChange,
    handleInvitationCommonInfoChange,
    handleInvitationCommonInfoBooleanChange,
    // handlePaperInvitationChange,
    handlePaperInfoChange,
    handleMobileInfoChange,
    handleCharterBusChange,
    handleReceptionChange,
    // handleMobileInvitationChange,
    // handleGalleryChange,
    handleContactOptionChange,
    handleGiftAccountChange,
    handleGuestbookChange,
    handleRsvpChange,
    handleAdditionalRequestChange,
    handleOrderFormChange,
  } = useOrderFormData();

  useEffect(() => {
    const invitationId = localStorage.getItem("invitationId");
    const selectedOptions = localStorage.getItem("selectedOptions");

    if (invitationId && selectedOptions) {
      const optionList = JSON.parse(selectedOptions);

      const newOptionList = optionList.map(
        (option: { id: number; quantity: number }) => ({
          optionId: option.id,
          quantity: option.quantity,
        }),
      );

      const hasMobile = optionList.some(
        (option: { type: string }) => option.type === "mobile",
      );

      setIsMobileFreeProvided(hasMobile);
      setOrderFormData((prev) => ({ ...prev, hasMobileInvitation: hasMobile }));

      setProductOrderData({
        invitationId: `${JSON.parse(invitationId)}`,
        optionList: newOptionList,
      });
    } else {
      setIsMobileFreeProvided(false);
    }
  }, []);

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
          invitationInfoData={paperInfoData}
          handleInvitationInfoChange={handlePaperInfoChange}
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
          invitationInfoData={mobileInfoData}
          handleInvitationInfoChange={handleMobileInfoChange}
        />
      ),
    },
    {
      title: "갤러리",
      hasCheckbox: true,
      content: (
        <ImageDragBox
        // galleryData={galleryData}
        // handleGalleryChange={handleGalleryChange}
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

  const { mutate: postOrderInfo } = usePostOrderInfo();

  const handleSubmit = () => {
    if (!productOrderData) {
      alert("상품 정보가 없습니다.");
      return;
    }

    const phoneNumber = `${customerInfoData.firstPhoneNumber}-${customerInfoData.secondPhoneNumber}-${customerInfoData.thirdPhoneNumber}`;
    const email = `${customerInfoData.emailId}@${customerInfoData.emailDomain}`;

    const cleanedCustomerInfo = {
      name: customerInfoData.name,
      zoneCode: customerInfoData.zoneCode,
      address: customerInfoData.address,
      detailAddress: customerInfoData.detailAddress,
      phoneNumber,
      email,
    };

    const cleanedInvitationCommonInfo = {
      groomFatherDeceased: invitationCommonInfoData.groomFatherDeceased,
      hasGroomFatherChristianName:
        invitationCommonInfoData.hasGroomFatherChristianName,
      groomFatherName: invitationCommonInfoData.groomFatherName,
      ...(invitationCommonInfoData.hasGroomFatherChristianName && {
        groomFatherChristianName:
          invitationCommonInfoData.groomFatherChristianName,
      }),

      groomMotherDeceased: invitationCommonInfoData.groomMotherDeceased,
      hasGroomMotherChristianName:
        invitationCommonInfoData.hasGroomMotherChristianName,
      groomMotherName: invitationCommonInfoData.groomMotherName,
      ...(invitationCommonInfoData.hasGroomMotherChristianName && {
        groomMotherChristianName:
          invitationCommonInfoData.groomMotherChristianName,
      }),

      hasGroomChristianName: invitationCommonInfoData.hasGroomChristianName,
      groomName: invitationCommonInfoData.groomName,
      // groomChristianName: invitationCommonInfoData.groomChristianName,
      ...(invitationCommonInfoData.hasGroomChristianName && {
        groomChristianName: invitationCommonInfoData.groomChristianName,
      }),

      brideFatherDeceased: invitationCommonInfoData.brideFatherDeceased,
      hasBrideFatherChristianName:
        invitationCommonInfoData.hasBrideFatherChristianName,
      brideFatherName: invitationCommonInfoData.brideFatherName,
      ...(invitationCommonInfoData.hasBrideFatherChristianName && {
        brideFatherChristianName:
          invitationCommonInfoData.brideFatherChristianName,
      }),
      //  brideFatherChristianName: invitationCommonInfoData.brideFatherChristianName,

      brideMotherDeceased: invitationCommonInfoData.brideMotherDeceased,
      hasBrideMotherChristianName:
        invitationCommonInfoData.hasBrideMotherChristianName,
      brideMotherName: invitationCommonInfoData.brideMotherName,
      // brideMotherChristianName:
      //   invitationCommonInfoData.hasBrideMotherChristianName,
      ...(invitationCommonInfoData.hasBrideMotherChristianName && {
        brideMotherChristianName:
          invitationCommonInfoData.brideMotherChristianName,
      }),

      hasBrideChristianName: invitationCommonInfoData.hasBrideChristianName,
      brideName: invitationCommonInfoData.brideName,
      // brideChristianName: invitationCommonInfoData.brideChristianName,
      ...(invitationCommonInfoData.hasBrideChristianName && {
        brideChristianName: invitationCommonInfoData.brideChristianName,
      }),

      weddingDateTime: `${invitationCommonInfoData.weddingDate} ${invitationCommonInfoData.weddingHour} ${invitationCommonInfoData.weddingMinite}`,
      weddingVenueZoneCode: invitationCommonInfoData.weddingVenueZoneCode,
      weddingVenueAddress: invitationCommonInfoData.weddingVenueAddress,
      weddingVenueDetailAddress:
        invitationCommonInfoData.weddingVenueDetailAddress,
    };

    const cleanedInvitationInfoData = {
      mainImage: paperInfoData.mainImage,
      message: paperInfoData.message,
    };

    const payload: PostOrderInfoRequest = {
      ...productOrderData,
      customerInfo: cleanedCustomerInfo,
      invitationCommonInfo: cleanedInvitationCommonInfo,
      paperInvitationInfo: cleanedInvitationInfoData,

      hasCharterBus: orderFormData.hasCharterBus,
      ...(orderFormData.hasCharterBus && { charterBus: charterBusData }),

      hasReception: orderFormData.hasReception,
      ...(orderFormData.hasReception && { reception: receptionData }),

      hasMobileInvitation: orderFormData.hasMobileInvitation,
      ...(orderFormData.hasMobileInvitation && {
        mobileInvitationInfo: mobileInfoData,
      }),

      ...(orderFormData.hasMobileInvitation && {
        hasGallery: orderFormData.hasGallery,
      }),
      ...(orderFormData.hasGallery && { gallery: galleryData }),

      ...(orderFormData.hasMobileInvitation && {
        hasContactOption: orderFormData.hasContactOption,
      }),
      ...(orderFormData.hasContactOption && {
        contactOption: contactOptionData,
      }),

      ...(orderFormData.hasMobileInvitation && {
        hasGiftAccount: orderFormData.hasGiftAccount,
      }),
      ...(orderFormData.hasGiftAccount && { giftAccount: giftAccountData }),

      ...(orderFormData.hasMobileInvitation && {
        hasCalendar: orderFormData.hasCalendar,
      }),
      ...(orderFormData.hasMobileInvitation && {
        hasMapNavigation: orderFormData.hasMapNavigation,
      }),

      ...(orderFormData.hasMobileInvitation && {
        hasGuestbook: orderFormData.hasGuestbook,
      }),
      ...(orderFormData.hasGuestbook && { guestbook: guestbookData }),

      ...(orderFormData.hasMobileInvitation && {
        hasRsvp: orderFormData.hasRsvp,
      }),
      ...(orderFormData.hasRsvp && { rsvp: rsvpData }),

      hasAdditionalRequest: orderFormData.hasAdditionalRequest,
      ...(orderFormData.hasAdditionalRequest && {
        additionalRequest: additionalRequestData,
      }),
    };

    postOrderInfo(payload, {
      onSuccess: (response) => {
        alert(`주문이 완료되었습니다! 주문코드: ${response.orderCode}`);
      },
      onError: (error) => {
        alert("주문 중 오류가 발생했습니다. 다시 시도해주세요.");
        console.error(error);
      },
    });
  };

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
                productOrderData,
                customerInfoData,
                invitationCommonInfoData,
                charterBusData,
                receptionData,
                contactOptionData,
                guestbookData,
                rsvpData,
                charterBusData,
                orderFormData,
                paperInfoData,
                mobileInfoData,
              );
              handleSubmit();
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
