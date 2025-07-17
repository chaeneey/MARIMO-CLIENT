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

export type InvitationInfoType = {
  urlPath?: string;
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

export type OrderFormType = {
  invitationId: string;
  optionList: OptionListType[];
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

// 여기까지
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
