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
  phoneNumber: string;
  email: string;
};

export type InvitationCommonInfo = {
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
