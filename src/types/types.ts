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
