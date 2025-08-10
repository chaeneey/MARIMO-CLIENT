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
    paperInfoData,
    mobileInfoData,
    charterBusData,
    receptionData,
    galleryData,
    contactOptionData,
    giftAccountData,
    guestbookData,
    rsvpData,
    additionalRequestData,
    orderFormData,
    setProductOrderData,
    setOrderFormData,
    handleCustomerInfoChange,
    handleInvitationCommonInfoChange,
    handleInvitationCommonInfoBooleanChange,
    handlePaperInfoChange,
    handleMobileInfoChange,
    handleCharterBusChange,
    handleReceptionChange,
    handleContactOptionChange,
    handleGiftAccountChange,
    handleGuestbookChange,
    handleRsvpChange,
    handleAdditionalRequestChange,
    handleOrderFormChange,
  } = useOrderFormData();

  const [formValidity, setFormValidity] = useState({
    customerInfo: false,
    invitationCommonInfo: false,
    paperInfo: false,
    mobileInfo: false,
    charterBus: false,
    reception: false,
    gallery: false,
    contactOption: false,
    giftAccount: false,
    guestbook: false,
    rsvp: false,
    additionalRequest: false,
  });

  useEffect(() => {
    console.log("customerInfo", formValidity.customerInfo);
    console.log("invitationCommonInfo", formValidity.invitationCommonInfo);
    console.log("paperInfo", formValidity.paperInfo);
    console.log("charterBus", formValidity.charterBus);
  }, [
    formValidity.customerInfo,
    formValidity.invitationCommonInfo,
    formValidity.paperInfo,
    formValidity.charterBus,
  ]);

  const isFormValid = () => {
    // 필수 섹션: customerInfo, invitationCommonInfo, paperInfo
    if (!formValidity.customerInfo) {
      return false;
    }
    if (!formValidity.invitationCommonInfo) {
      return false;
    }
    if (!formValidity.paperInfo) {
      return false;
    }

    // 조건부 섹션들: 선택된 경우에만 유효성 체크
    if (orderFormData.hasCharterBus) {
      if (!formValidity.charterBus) return false;
    }

    if (orderFormData.hasReception) {
      if (!formValidity.reception) return false;
    }

    if (orderFormData.hasMobileInvitation) {
      if (!formValidity.mobileInfo) return false;
    }

    if (orderFormData.hasGallery) {
      if (!formValidity.gallery) return false;
    }

    if (orderFormData.hasContactOption) {
      if (!formValidity.contactOption) return false;
    }

    if (orderFormData.hasGiftAccount) {
      if (!formValidity.giftAccount) return false;
    }

    if (orderFormData.hasGuestbook) {
      if (!formValidity.guestbook) return false;
    }

    // if (orderFormData.hasRsvp) {
    //   if (!formValidity.rsvp) return false;
    // }

    if (orderFormData.hasAdditionalRequest) {
      if (!formValidity.additionalRequest) return false;
    }

    // 모든 필요 섹션이 유효하면 true 반환
    return true;
  };

  const submitButtonDisabled = !isFormValid();

  useEffect(() => {
    const invitationId = localStorage.getItem("invitationId");
    const selectedOptions = localStorage.getItem("selectedOptions");

    if (invitationId && selectedOptions) {
      const optionList = JSON.parse(selectedOptions);

      const newOptionList = optionList.map(
        (option: { id: number; quantity: number }) => ({
          optionId: option.id,
          quantity: option.quantity,
        })
      );

      const hasMobile = optionList.some(
        (option: { type: string }) => option.type === "mobile"
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({ ...prev, customerInfo: isValid }))
          }
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              invitationCommonInfo: isValid,
            }))
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              paperInfo: isValid,
            }))
          }
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              charterBus: isValid,
            }))
          }
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              reception: isValid,
            }))
          }
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              mobileInfo: isValid,
            }))
          }
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              contactOption: isValid,
            }))
          }
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              giftAccount: isValid,
            }))
          }
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({ ...prev, guestbook: isValid }))
          }
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
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              additionalRequest: isValid,
            }))
          }
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
      ...(!invitationCommonInfoData.groomFatherDeceased && {
        groomFatherName: invitationCommonInfoData.groomFatherName,
      }),
      ...(invitationCommonInfoData.hasGroomFatherChristianName && {
        groomFatherChristianName:
          invitationCommonInfoData.groomFatherChristianName,
      }),

      groomMotherDeceased: invitationCommonInfoData.groomMotherDeceased,
      hasGroomMotherChristianName:
        invitationCommonInfoData.hasGroomMotherChristianName,
      ...(!invitationCommonInfoData.groomMotherDeceased && {
        groomMotherName: invitationCommonInfoData.groomMotherName,
      }),
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
      ...(!invitationCommonInfoData.brideFatherDeceased && {
        brideFatherName: invitationCommonInfoData.brideFatherName,
      }),
      ...(invitationCommonInfoData.hasBrideFatherChristianName && {
        brideFatherChristianName:
          invitationCommonInfoData.brideFatherChristianName,
      }),
      //  brideFatherChristianName: invitationCommonInfoData.brideFatherChristianName,

      brideMotherDeceased: invitationCommonInfoData.brideMotherDeceased,
      hasBrideMotherChristianName:
        invitationCommonInfoData.hasBrideMotherChristianName,
      ...(!invitationCommonInfoData.brideMotherDeceased && {
        brideMotherName: invitationCommonInfoData.brideMotherName,
      }),
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
      ...(orderFormData.hasReception && {
        reception: {
          address: receptionData.address,
          dateTime: `${receptionData.datetime} ${receptionData.datetimeHour} ${receptionData.datetimeMinute}`,
        },
      }),

      hasMobileInvitation: orderFormData.hasMobileInvitation,
      ...(orderFormData.hasMobileInvitation && {
        mobileInvitationInfo: mobileInfoData,
      }),

      // hasGallery: orderFormData.hasGallery,
      ...(orderFormData.hasMobileInvitation && {
        hasGallery: orderFormData.hasGallery,
      }),
      ...(orderFormData.hasGallery && { gallery: galleryData }),

      // hasContactOption: orderFormData.hasContactOption,
      ...(orderFormData.hasMobileInvitation && {
        hasContactOption: orderFormData.hasContactOption,
      }),
      // ...(orderFormData.hasContactOption && {
      //   contactOption: contactOptionData,
      // }),
      ...(orderFormData.hasContactOption && {
        contactOption: Object.fromEntries(
          Object.entries(contactOptionData).filter(([_, value]) => value !== "")
        ),
      }),

      // hasGiftAccount: orderFormData.hasGiftAccount,
      ...(orderFormData.hasMobileInvitation && {
        hasGiftAccount: orderFormData.hasGiftAccount,
      }),
      ...(orderFormData.hasGiftAccount && { giftAccount: giftAccountData }),

      // hasCalendar: orderFormData.hasCalendar,
      ...(orderFormData.hasMobileInvitation && {
        hasCalendar: orderFormData.hasCalendar,
      }),
      ...(orderFormData.hasMobileInvitation && {
        hasMapNavigation: orderFormData.hasMapNavigation,
      }),

      // hasGuestbook: orderFormData.hasGuestbook,
      ...(orderFormData.hasMobileInvitation && {
        hasGuestbook: orderFormData.hasGuestbook,
      }),
      ...(orderFormData.hasGuestbook && { guestbook: guestbookData }),

      // hasRsvp: orderFormData.hasRsvp,
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
                mobileInfoData
              );
              handleSubmit();
            }}
            type="button"
            disabled={submitButtonDisabled}
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
            idx
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
          }
        )}
      </div>
    </form>
  );
};

export default Page;
