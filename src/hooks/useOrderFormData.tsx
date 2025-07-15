import { useState } from "react";

import { createChangeHandler } from "@/utils/createChangeHandler";

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
    phoneNumber: "",
    email: "",
  });

  const [invitationCommonInfoData, setInvitationCommonInfoData] = useState({
    groomFatherDeceased: false,
    hasGroomFatherChristianName: false,
    groomFatherName: "",
    groomFatherChristianName: "",
    groomMotherDeceased: false,
    hasGroomMotherChristianName: false,
    groomMotherName: "",
    groomMotherChristianName: false,
    groomName: "",
    brideFatherDeceased: false,
    hasBrideFatherChristianName: false,
    brideFatherName: "",
    brideFatherChristianName: "",
    brideMotherDeceased: false,
    hasBrideMotherChristianName: false,
    brideMotherName: "",
    brideMotherChristianName: "",
    brideName: "",
    weddingDatetime: "",
    weddingVenueZoneCode: "",
    weddingVenueAddress: "",
    weddingVenueDetailAddress: "",
  });

  const [paperInvitationInfoData, setPaperInvitationInfoData] = useState({
    mainImage: "",
    message: "",
  });

  const [charterBusData, setCharterBusData] = useState({
    hasCharterBus: false,
    busStopLocation: "",
    busStopTimeList: [] as string[],
  });

  const [receptionData, setReceptionData] = useState({
    hasReception: false,
    address: "",
    datetime: [] as string[],
  });

  const [mobileInvitationData, setMobileInvitationData] = useState({
    hasMobileInvitation: false,
    url: "",
    mainImage: "",
    message: "",
  });

  const [galleryData, setGalleryData] = useState({
    hasGallery: false,
    imageList: [] as string[],
  });

  const [contactOptionData, setContactOptionData] = useState({
    hasContactOption: false,
    groomFatherPhoneNumber: "",
    groomMotherPhoneNumber: "",
    groomPhoneNumber: "",
    brideFatherPhoneNumber: "",
    brideMotherPhoneNumber: "",
    bridePhoneNumber: "",
  });

  const [giftAccountData, setGiftAccountData] = useState({
    hasGiftAccount: false,
    groomGiftAccountList: [] as {
      bank: string;
      account: string;
      owner: string;
    }[],
    brideGiftAccountList: [] as {
      bank: string;
      account: string;
      owner: string;
    }[],
  });

  const [rsvpData, setRsvpData] = useState({
    hasRsvp: false,
    hasPrimaryContactField: false,
    hasCompanionField: false,
    hasMealOptionField: false,
  });

  const [additionalRequestData, setAdditionalRequestData] = useState({
    hasAdditionalRequest: false,
    requestText: "",
    attachmentList: [] as File[],
  });

  const [miscOptionData, setMiscOptionData] = useState({
    hasCalendar: false,
    hasMapNavigation: false,
  });

  // handle 함수
  const handleProductOrderChange = createChangeHandler(setProductOrderData);
  const handleCustomerInfoChange = createChangeHandler(setCustomerInfoData);
  const handleInvitationCommonInfoChange = createChangeHandler(
    setInvitationCommonInfoData,
  );
  const handlePaperInvitationChange = createChangeHandler(
    setPaperInvitationInfoData,
  );
  const handleCharterBusChange = createChangeHandler(setCharterBusData);
  const handleReceptionChange = createChangeHandler(setReceptionData);
  const handleMobileInvitationChange = createChangeHandler(
    setMobileInvitationData,
  );
  const handleGalleryChange = createChangeHandler(setGalleryData);
  const handleContactOptionChange = createChangeHandler(setContactOptionData);
  const handleGiftAccountChange = createChangeHandler(setGiftAccountData);
  const handleRsvpChange = createChangeHandler(setRsvpData);
  const handleAdditionalRequestChange = createChangeHandler(
    setAdditionalRequestData,
  );
  const handleMiscOptionChange = createChangeHandler(setMiscOptionData);

  return {
    productOrderData,
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
    miscOptionData,

    handleProductOrderChange,
    handleCustomerInfoChange,
    handleInvitationCommonInfoChange,
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
  };
};

export default useOrderFormData;
