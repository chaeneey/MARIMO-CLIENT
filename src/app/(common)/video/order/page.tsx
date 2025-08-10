"use client";

import Link from "next/link";
import { useState } from "react";

import { usePostVideoOrderInfo } from "@/apis/domains/order/usePostVideoOrderInfo";
import { Accordion, Button, ImageDragBox } from "@/components/common";
import {
  MemoSection,
  OrderInfoSection,
  VideoInfoSection,
} from "@/components/order";
import useOrderFormData from "@/hooks/useOrderFormData";
import { PostVideoOrderInfoRequest } from "@types";

import * as styles from "./page.css";

const Page = () => {
  const {
    customerInfoData,
    additionalRequestData,
    videoCommonInfoData,
    mediaListData,
    handleCustomerInfoChange,
    handleAdditionalRequestChange,
    handleVideoCommonInfoChange,
    // handleMediaListChange
  } = useOrderFormData();

  const [hasAdditionalRequest, setHasAdditionalRequest] = useState(false);

  const [formValidity, setFormValidity] = useState({
    customerInfo: false,
    videoCommonInfo: false,
    additionalRequest: false,
  });

  const isFormValid = () => {
    if (!formValidity.customerInfo) {
      return false;
    }
    if (!formValidity.videoCommonInfo) {
      return false;
    }
    if (hasAdditionalRequest) {
      if (!formValidity.additionalRequest) {
        return false;
      }
    }

    return true;
  };

  const submitButtonDisabled = !isFormValid();

  const accordionItems = [
    {
      title: "주문자 정보",
      content: (
        <OrderInfoSection
          customerInfoData={customerInfoData}
          handleCustomerInfoChange={handleCustomerInfoChange}
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({ ...prev, customerInfo: isValid }))
          }
        />
      ),
    },
    {
      title: "식전영상 공통정보 입력",
      content: (
        <VideoInfoSection
          videoCommonInfoData={videoCommonInfoData}
          handleVideoCommonInfoChange={handleVideoCommonInfoChange}
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({ ...prev, videoCommonInfo: isValid }))
          }
        />
      ),
    },
    { title: "사진 / 영상 업로드", content: <ImageDragBox /> },
    {
      title: "기타 요청사항",
      hasCheckbox: true,
      content: (
        <MemoSection
          additionalRequestData={additionalRequestData}
          handleAdditionalRequestChange={handleAdditionalRequestChange}
          onValidChange={(isValid) =>
            setFormValidity((prev) => ({
              ...prev,
              additionalRequest: isValid,
            }))
          }
        />
      ),
      checkboxState: hasAdditionalRequest,
      handleCheckboxStateChange: setHasAdditionalRequest,
    },
  ];

  const { mutate: postVideoInfo } = usePostVideoOrderInfo();

  const handleSubmit = () => {
    const phoneNumber = `${customerInfoData.firstPhoneNumber}-${customerInfoData.secondPhoneNumber}-${customerInfoData.thirdPhoneNumber}`;
    const email = `${customerInfoData.emailId}@${customerInfoData.emailDomain}`;

    const cleanedCustomerInfo = {
      name: customerInfoData.name,
      zoneCode: customerInfoData.zoneCode,
      address: customerInfoData.address,
      detailAddress: customerInfoData.detailAddress,
      phoneNumber,
      email,
    };

    const cleanedVideoCommonInfo = {
      groomName: videoCommonInfoData.groomName,
      brideName: videoCommonInfoData.brideName,
      weddingDateTime: `${videoCommonInfoData.weddingDate} ${videoCommonInfoData.weddingHour} ${videoCommonInfoData.weddingMinute}`,
    };

    const payload: PostVideoOrderInfoRequest = {
      preVideoId: Number(localStorage.getItem("videoId") ?? 0),
      customerInfo: cleanedCustomerInfo,
      preVideoCommonInfo: cleanedVideoCommonInfo,
      ...mediaListData,
      hasAdditionalRequest: hasAdditionalRequest,
      ...(hasAdditionalRequest && { additionalRequest: additionalRequestData }),
    };

    postVideoInfo(payload, {
      onSuccess: (response) => {
        localStorage.setItem("orderCode", response.orderCode);
        // alert(`주문이 완료되었습니다! 주문코드: ${response.orderCode}`);
      },
      onError: (error) => {
        alert("주문 중 오류가 발생했습니다. 다시 시도해주세요.");
        console.error(error);
      },
    });
  };

  return (
    <form className={styles.orderPageLayout}>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.titleTextStyle}>식전영상 주문하기</h1>
          <Link href={"/video/order/complete"}>
            <Button
              size="50"
              color="lime01"
              type="button"
              disabled={submitButtonDisabled}
              onClick={handleSubmit}
            >
              주문하기
            </Button>
          </Link>
        </div>

        <div className={styles.orderBarStyle} />
      </div>

      <div className={styles.accordionContainer}>
        {accordionItems.map(
          (
            {
              title,
              content,
              checkboxState,
              handleCheckboxStateChange,
              hasCheckbox,
            },
            idx
          ) => (
            <Accordion
              key={idx}
              title={title}
              checkboxState={checkboxState}
              handleCheckboxStateChange={handleCheckboxStateChange}
              hasCheckbox={hasCheckbox}
            >
              {content && content}
            </Accordion>
          )
        )}
      </div>
    </form>
  );
};

export default Page;
