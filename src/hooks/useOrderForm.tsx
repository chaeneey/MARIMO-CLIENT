import { useForm } from "react-hook-form";

export const useOrderForm = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      productOrderData: {
        invitationId: "",
        optionList: [
          { optionId: "", quantity: "" },
          { optionId: "", quantity: "" },
          { optionId: "", quantity: "" },
        ],
      },
      customerInfoData: {
        name: "",
        zoneCode: "",
        address: "",
        detailAddress: "",
        firstPhoneNumber: "010",
        secondPhoneNumber: "",
        thirdPhoneNumber: "",
        emailId: "",
        emailDomain: "직접 입력",
      },
      invitationCommonInfoData: {
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
        brideChristianName: "",

        weddingDate: "",
        weddingHour: "",
        weddingMinite: "",
        weddingVenueZoneCode: "",
        weddingVenueAddress: "",
        weddingVenueDetailAddress: "",
      },
      paperInfoData: {
        mainImage: "http://chaeneey.jpg",
        message: "",
      },
      mobileInfoData: {
        urlSlug: "",
        mainImage: "http://chaeneey.jpg",
        message: "",
      },
      charterBusData: {
        busStopLocation: "",
        busStopTimeList: [],
      },
      receptionData: {
        address: "",
        datetime: "",
        datetimeHour: "시간",
        datetimeMinute: "분",
      },
      galleryData: {
        imageList: [],
      },
      contactOptionData: {
        groomFatherPhoneNumber: "",
        groomMotherPhoneNumber: "",
        groomPhoneNumber: "",
        brideFatherPhoneNumber: "",
        brideMotherPhoneNumber: "",
        bridePhoneNumber: "",
      },
      giftAccountData: {
        groomGiftAccountList: [],
        brideGiftAccountList: [],
      },
      guestbookData: {
        adminPassword: "",
      },
      rsvpData: {
        hasPrimaryContactField: false,
        hasCompanionField: false,
        hasMealOptionField: false,
      },
      additionalRequestData: {
        requestText: "",
        attachmentList: [],
      },
      orderFormData: {
        hasCharterBus: false,
        hasReception: false,
        hasMobileInvitation: false,
        hasGallery: false,
        hasContactOption: false,
        hasGiftAccount: false,
        hasCalendar: false,
        hasMapNavigation: false,
        hasGuestbook: false,
        hasRsvp: false,
        hasAdditionalRequest: false,
      },
    },
  });

  return methods;
};
