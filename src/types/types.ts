export interface Option {
  id: number;
  name: string;
  optionDetail?: string;
  price: number;
}

export type InvitationItem = {
  id: number;
  imageUrl: string;
  hasBundle: boolean;
  name: string;
  discountRate: number;
  price: number;
  quantity: string;
};

export type InvitationItemList = {
  invitationList: InvitationItem[];
};
export interface Option {
  id: number;
  name: string;
  optionDetail?: string;
  price: number;
}

export interface OptionGroup {
  optionType:
    | "QUANTITY"
    | "STICKER"
    | "ENVELOPE"
    | "RIBBON"
    | "ADDITIONAL"
    | "MOBILE";
  optionList: Option[];
}

export interface InvitationItemDetail {
  mainImageUrl: string;
  name: string;
  discountRate: number;
  price: number;
  description: string;
  optionGroupList: OptionGroup[];
  detailImageList: string[];
}

export interface PreVideoDetail {
  mainImageUrl: string;
  name: string;
  discountRate: number;
  price: number;
  description: string;
  sampleVideoUrl: string;
}

export type PreVideoItem = {
  id: number;
  imageUrl: string;
  sampleVideoUrl: string;
  name: string;
  discountRate: number;
  price: number;
};

export type PreVideoItemList = {
  preVideoList: PreVideoItem[];
};

export interface InvitationCommonInfo {
  groomFatherName: string;
  groomMotherName: string;
  groomMotherChristianName?: string;
  groomName: string;

  brideFatherName: string;
  brideFatherChristianName?: string;
  brideMotherName: string;
  brideName: string;

  weddingDatetime: string;
  weddingVenueAddress: string;
}

export interface CharterBus {
  busStopLocation: string;
  busStopTimeList: string[];
}

export interface Reception {
  address: string;
  datetime: string[];
}

export interface PaperInvitationInfo {
  mainImage: string;
  message: string;
  hasCharterBus: boolean;
  charterBus?: CharterBus;
  hasReception: boolean;
  reception?: Reception;
}

export interface MobileInvitationInfo {
  url: string;
  mainImage: string;
  message: string;
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
  giftAccount?: {
    groomGiftAccountList: {
      bank: string;
      holder: string;
      number: string;
    }[];
    brideGiftAccountList: {
      bank: string;
      holder: string;
      number: string;
    }[];
  };
  hasCalendar: boolean;
  hasMapNavigation: boolean;
  hasGuestbook: boolean;
  guestbook?: {
    adminPassword: string;
  };
  hasKakaoShare: boolean;
  hasRsvp: boolean;
  rsvp?: {
    hasPrimaryContactField: boolean;
    hasCompanionField: boolean;
    hasMealOptionField: boolean;
  };
}

// orderPage Type 시작
export type CustomerInfoType = {
  name: string;
  zoneCode: string;
  address: string;
  detailAddress?: string;
  // phoneNumber: string;
  // email: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  thirdPhoneNumber: string;
  // email: "",
  emailId: string;
  emailDomain: string;
};

export type InvitationCommonInfoType = {
  groomFatherDeceased: boolean;
  hasGroomFatherChristianName: boolean;
  groomFatherName?: string;
  groomFatherChristianName?: string;

  groomMotherDeceased: boolean;
  hasGroomMotherChristianName: boolean;
  groomMotherName?: string;
  groomMotherChristianName?: string;

  hasGroomChristianName: boolean;
  groomName: string;
  groomChristianName?: string;

  brideFatherDeceased: boolean;
  hasBrideFatherChristianName: boolean;
  brideFatherName?: string;
  brideFatherChristianName?: string;

  brideMotherDeceased: boolean;
  hasBrideMotherChristianName: boolean;
  brideMotherName?: string;
  brideMotherChristianName?: string;

  hasBrideChristianName: boolean;
  brideName: string;
  brideChristianName: string;

  // weddingDateTime: string;
  weddingDate: string;
  weddingHour: string;
  weddingMinite: string;
  weddingVenueZoneCode: string;
  weddingVenueAddress: string;
  weddingVenueDetailAddress?: string;
};

export type PaperInfoType = {
  mainImage: string;
  message: string;
};

export type MobileInfoType = {
  urlSlug: string;
  mainImage: string;
  message: string;
};

export type CharterBusType = {
  busStopLocation: string;
  busStopTimeList: string[];
};

export type ReceptionType = {
  address: string;
  datetimeHour: string;
  datetimeMinute: string;
  datetime: string;
};

export type ContactOptionType = {
  groomFatherPhoneNumber: string;
  groomMotherPhoneNumber: string;
  groomPhoneNumber: string;
  brideFatherPhoneNumber: string;
  brideMotherPhoneNumber: string;
  bridePhoneNumber: string;
};

export type GalleryType = {
  imageList: string[];
};

export type GuestbookType = {
  adminPassword: string;
};

export type GiftAccountType = {
  groomGiftAccountList: AccountType[];
  brideGiftAccountList: AccountType[];
};

type AccountType = {
  bank: string;
  account: string;
  holder: string;
};

export type RsvpType = {
  hasPrimaryContactField: boolean;
  hasCompanionField: boolean;
  hasMealOptionField: boolean;
};

export type AdditionalRequestType = {
  requestText: string;
  attachmentList: string[];
};

export type OptionListType = {
  optionId: string;
  quantity: string;
};

export type ProductOrderType = {
  invitationId: string;
  optionList: OptionListType[];
};

export type OrderFormType = {
  hasCharterBus: boolean;
  hasReception: boolean;
  hasMobileInvitation: boolean;
  hasGallery: boolean;
  hasContactOption: boolean;
  hasGiftAccount: boolean;
  hasCalendar: boolean;
  hasMapNavigation: boolean;
  hasGuestbook: boolean;
  hasRsvp: boolean;
  hasAdditionalRequest: boolean;
};
// orderPage Type 여기까지

// types.ts
export interface PostOrderInfoRequest {
  invitationId: number;
  optionList: { optionId: number; quantity: number }[];
  customerInfo: {
    name: string;
    zoneCode: string;
    address: string;
    detailAddress: string;
    phoneNumber: string;
    email: string;
  };
  invitationCommonInfo: {
    groomFatherDeceased: boolean;
    hasGroomFatherChristianName: boolean;
    groomFatherName: string;
    groomMotherDeceased: boolean;
    hasGroomMotherChristianName: boolean;
    groomMotherName: string;
    groomMotherChristianName?: string;
    hasGroomChristianName: boolean;
    groomName: string;
    brideFatherDeceased: boolean;
    hasBrideFatherChristianName: boolean;
    brideFatherName: string;
    brideFatherChristianName?: string;
    brideMotherDeceased: boolean;
    hasBrideMotherChristianName: boolean;
    brideMotherName: string;
    hasBrideChristianName: boolean;
    brideName: string;
    brideChristianName?: string;
    weddingDateTime: string;
    weddingVenueZoneCode: string;
    weddingVenueAddress: string;
    weddingVenueDetailAddress: string;
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
    dateTime: string;
  };
  hasMobileInvitation: boolean;
  mobileInvitationInfo?: {
    urlSlug: string;
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
  giftAccount?: {
    groomGiftAccountList: { bank: string; holder: string; number: string }[];
    brideGiftAccountList: { bank: string; holder: string; number: string }[];
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
}

export interface PostOrderInfoResponse {
  orderCode: string;
}
