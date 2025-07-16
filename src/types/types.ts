export type ValueType = {
  keyValue: string;
  subValue?: string;
};

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

// orderPage Type
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

type OptionListType = {
  optionId: string;
  quantity: string;
};

type OrderFormType = {
  invitationId: string;
  optionList: OptionListType[];

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
