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
