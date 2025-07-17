import { useState } from "react";

import {
  createBooleanChangeHandler,
  createChangeHandler,
} from "@/utils/createChangeHandler";

const useOrderFormData = () => {
  const [productOrderData, setProductOrderData] = useState({
    invitationId: "",
    optionList: [
      { optionId: "", quantity: "" },
      { optionId: "", quantity: "" },
      { optionId: "", quantity: "" },
    ],
  });

  const [customerInfoData, setCustomerInfoData] = useState({
    name: "",
    zoneCode: "",
    address: "",
    detailAddress: "",
    // phoneNumber: "",
    firstPhoneNumber: "010",
    secondPhoneNumber: "",
    thirdPhoneNumber: "",
    // email: "",
    emailId: "",
    emailDomain: "직접 입력",
  });

  const [invitationCommonInfoData, setInvitationCommonInfoData] = useState({
    groomFatherDeceased: false,
    hasGroomFatherChristianName: false,
    groomFatherName: "",
    groomFatherChristianName: "",
    groomMotherDeceased: false,
    hasGroomMotherChristianName: false,
    groomMotherName: "",
    groomMotherChristianName: "",
    hasGroomChristianName: false,
    groomName: "",
    groomChristianName: "",
    brideFatherDeceased: false,
    hasBrideFatherChristianName: false,
    brideFatherName: "",
    brideFatherChristianName: "",
    brideMotherDeceased: false,
    hasBrideMotherChristianName: false,
    brideMotherName: "",
    brideMotherChristianName: "",
    hasBrideChristianName: false,
    brideName: "",
    brideChristianName: false,
    // weddingDatetime: "",
    weddingDate: "",
    weddingHour: "",
    weddingMinite: "",
    weddingVenueZoneCode: "",
    weddingVenueAddress: "",
    weddingVenueDetailAddress: "",
  });

  const [invitationInfoData, setInvitationInfoData] = useState({
    urlPath: "",
    mainImage: "",
    message: "",
  });

  const [charterBusData, setCharterBusData] = useState({
    // hasCharterBus: false,
    busStopLocation: "",
    busStopTimeList: [],
  });

  const [receptionData, setReceptionData] = useState({
    // hasReception: false,
    address: "",
    datetime: "",
    datetimeHour: "시간",
    datetimeMinute: "분",
  });

  const [galleryData, setGalleryData] = useState({
    // hasGallery: false,
    imageList: [] as string[],
  });

  const [contactOptionData, setContactOptionData] = useState({
    // hasContactOption: false,
    groomFatherPhoneNumber: "",
    groomMotherPhoneNumber: "",
    groomPhoneNumber: "",
    brideFatherPhoneNumber: "",
    brideMotherPhoneNumber: "",
    bridePhoneNumber: "",
  });

  const [giftAccountData, setGiftAccountData] = useState({
    // hasGiftAccount: false,
    groomGiftAccountList: [],
    brideGiftAccountList: [],
  });

  const [guestbookData, setGuestbookData] = useState({
    adminPassword: "",
  });

  const [rsvpData, setRsvpData] = useState({
    // hasRsvp: false,
    hasPrimaryContactField: false,
    hasCompanionField: false,
    hasMealOptionField: false,
  });

  const [additionalRequestData, setAdditionalRequestData] = useState({
    // hasAdditionalRequest: false,
    requestText: "",
    attachmentList: [],
  });

  // const [miscOptionData, setMiscOptionData] = useState({
  //   hasCalendar: false,
  //   hasMapNavigation: false,
  // });

  // handle 함수
  const handleProductOrderChange = createChangeHandler(setProductOrderData);
  const handleCustomerInfoChange = createChangeHandler(setCustomerInfoData);
  const handleInvitationCommonInfoChange = createChangeHandler(
    setInvitationCommonInfoData,
  );
  const handleInvitationCommonInfoBooleanChange = createBooleanChangeHandler(
    setInvitationCommonInfoData,
  );
  const handleInvitationInfoChange = createChangeHandler(setInvitationInfoData);

  // const handlePaperInvitationChange = createChangeHandler(
  //   setPaperInvitationInfoData,
  // );
  const handleCharterBusChange = createChangeHandler(setCharterBusData);
  const handleReceptionChange = createChangeHandler(setReceptionData);
  // const handleMobileInvitationChange = createChangeHandler(
  //   setMobileInvitationData,
  // );
  const handleGalleryChange = createChangeHandler(setGalleryData);
  const handleContactOptionChange = createChangeHandler(setContactOptionData);
  const handleGiftAccountChange = createChangeHandler(setGiftAccountData);
  const handleGuestbookChange = createChangeHandler(setGuestbookData);
  const handleRsvpChange = createBooleanChangeHandler(setRsvpData);
  const handleAdditionalRequestChange = createChangeHandler(
    setAdditionalRequestData,
  );
  // const handleMiscOptionChange = createChangeHandler(setMiscOptionData);

  return {
    productOrderData,
    customerInfoData,
    invitationCommonInfoData,
    invitationInfoData,
    // paperInvitationInfoData,
    charterBusData,
    receptionData,
    // mobileInvitationData,
    galleryData,
    contactOptionData,
    giftAccountData,
    guestbookData,
    rsvpData,
    additionalRequestData,
    // miscOptionData,

    handleProductOrderChange,
    handleCustomerInfoChange,
    handleInvitationCommonInfoChange,
    handleInvitationCommonInfoBooleanChange,
    handleInvitationInfoChange,
    // handlePaperInvitationChange,
    handleCharterBusChange,
    handleReceptionChange,
    // handleMobileInvitationChange,
    handleGalleryChange,
    handleContactOptionChange,
    handleGiftAccountChange,
    handleGuestbookChange,
    handleRsvpChange,
    handleAdditionalRequestChange,
    // handleMiscOptionChange,
  };
};

export default useOrderFormData;
