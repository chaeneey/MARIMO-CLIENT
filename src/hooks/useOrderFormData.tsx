import { useState } from "react";

type OptionListType = {
  optionId: string;
  quantity: string;
};

type OrderFormType = {
  invitationId: string;
  optionList: OptionListType[];
  customerInfo: {
    name: string;
    zoneCode: string;
    address: string;
    detailAddress?: string;
    phoneNumber: string;
    email: string;
  };

  invitationCommonInfo: {
    groomFatherDeceased: boolean;
    hasGroomFatherChristianName: boolean;
    groomFatherName?: string;
    groomFatherChristianName?: string;
    groomMotherDeceased: boolean;
    hasGroomMotherChristianName: boolean;
    groomMotherName?: string;
    groomMotherChristianName?: boolean;
    groomName: string;
    brideFatherDeceased: boolean;
    hasBrideFatherChristianName: boolean;
    brideFatherName?: string;
    brideFatherChristianName?: string;
    brideMotherDeceased: false;
    hasBrideMotherChristianName: false;
    brideMotherName?: string;
    brideMotherChristianName?: string;
    brideName: string;

    weddingDatetime: string;
    weddingVenueZoneCode: string;
    weddingVenueAddress: string;
    weddingVenueDetailAddress?: string;
  };

  paperInvitationInfo: {
    mainImage: string;
    message: string;
  };

  hasCharterBus: boolean;
  charterBus?: {
    busStopLocation: string;
    busStopTimeList: string[];
  };

  hasReception: boolean;
  reception?: {
    address: string;
    datetime: string[];
  };

  hasMobileInvitation: boolean;
  mobileInvitationInfo?: {
    url: string;
    mainImage: string;
    message: string;
  };

  hasGallery: boolean;
  gallery?: {
    imageList: string[];
  };

  hasContactOption: boolean;
  contactOption?: {
    groomFatherPhoneNumber: string;
    groomMotherPhoneNumber: string;
    groomPhoneNumber: string;
    brideFatherPhoneNumber: string;
    brideMotherPhoneNumber: string;
    bridePhoneNumber: string;
  };

  hasGiftAccount: boolean;
  GiftAccount?: {
    groomGiftAccountList: string[];
    brideGiftAccountList: string[];
  };

  hasCalendar: boolean;
  hasMapNavigation: boolean;

  hasGuestbook: boolean;
  guestbook?: {
    adminPassword: string;
  };

  hasRsvp: boolean;
  rsvp?: {
    hasPrimaryContactField: boolean;
    hasCompanionField: boolean;
    hasMealOptionField: boolean;
  };

  hasAdditionalRequest: boolean;
  additionalRequest?: {
    requestText: string;
    attachmentList: string[];
  };
};

const useOrderFormData = () => {
  const [orderFormData, setOrderFormData] = useState({
    invitationId: "",
    optionList: [
      {
        optionId: "",
        quantity: "",
      },
      {
        optionId: "",
        quantity: "",
      },
      {
        optionId: "",
        quantity: "",
      },
    ],
    customerInfo: {
      name: "",
      zoneCode: "",
      address: "",
      detailAddress: "",
      phoneNumber: "",
      email: "",
    },

    invitationCommonInfo: {
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
    },

    paperInvitationInfo: {
      mainImage: "",
      message: "",
    },

    hasCharterBus: false,
    charterBus: {
      busStopLocation: "",
      busStopTimeList: [],
    },
    hasReception: false,
    reception: {
      address: "",
      datetime: [],
    },
    hasMobileInvitation: false,
    mobileInvitationInfo: {
      url: "",
      mainImage: "",
      message: "",
    },
    hasGallery: false,
    gallery: {
      imageList: [],
    },
    hasContactOption: false,
    contactOption: {
      groomFatherPhoneNumber: "",
      groomMotherPhoneNumber: "",
      groomPhoneNumber: "",
      brideFatherPhoneNumber: "",
      brideMotherPhoneNumber: "",
      bridePhoneNumber: "",
    },
    hasGiftAccount: false,
    GiftAccount: {
      groomGiftAccountList: [],
      brideGiftAccountList: [],
    },
    hasCalendar: false,
    hasMapNavigation: false,
    hasGuestbook: false,
    guestbook: {
      adminPassword: "",
    },
    hasRsvp: false,
    rsvp: {
      hasPrimaryContactField: false,
      hasCompanionField: false,
      hasMealOptionField: false,
    },
    hasAdditionalRequest: false,
    additionalRequest: {
      requestText: "",
      attachmentList: [],
    },
  });

  const handleOrderFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof OrderFormType,
  ) => {
    const value = e.target.value;
    setOrderFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return {
    orderFormData,
    handleOrderFormChange,
  };
};

export default useOrderFormData;
