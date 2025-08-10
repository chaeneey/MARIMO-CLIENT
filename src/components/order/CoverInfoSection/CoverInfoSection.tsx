"use client";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";

import { fetchUrlSlug } from "@/apis/domains/order/fetchUrlSlug";
import { Button, Input, IUButton, Modal, TextArea } from "@/components/common";
import { MobileInfoType, PaperInfoType } from "@types";

import * as styles from "./CoverInfoSection.css";
import GreetingsSampleModal from "../GreetingsSampleModal/GreetingsSampleModal";
import { s } from "framer-motion/client";

interface CoverInfoSectionType {
  type?: "paper" | "mobile";
  invitationInfoData: PaperInfoType | MobileInfoType;
  handleInvitationInfoChange: (
    key: keyof PaperInfoType | keyof MobileInfoType
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onValidChange: (isValid: boolean) => void;
}

const CoverInfoSection = ({
  type = "paper",
  invitationInfoData,
  handleInvitationInfoChange,
  onValidChange,
}: CoverInfoSectionType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkUrlSlug, setCheckUrlSlug] = useState<"INFO" | "FAIL" | "SUCCESS">(
    "INFO"
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickButton = async () => {
    try {
      const result = await fetchUrlSlug(
        (invitationInfoData as MobileInfoType).urlSlug
      );

      console.log("result", result);

      if (result == null) {
        setCheckUrlSlug("SUCCESS");
      }

      console.log(checkUrlSlug);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
      setCheckUrlSlug("FAIL");
    }
  };

  const [urlSlugError, setUrlSlugError] = useState<string | undefined>(
    undefined
  );
  const [messageError, setMessageError] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    let isValid;
    if (type === "paper") {
      isValid = !messageError && !!invitationInfoData.message;
    } else {
      isValid =
        !messageError &&
        !!invitationInfoData.message &&
        !urlSlugError &&
        !!(invitationInfoData as MobileInfoType).urlSlug &&
        checkUrlSlug == "SUCCESS";
    }
    onValidChange(isValid);
  }, [messageError, urlSlugError, invitationInfoData]);

  const handleUrlSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^a-z0-9]/g, "");
    if (filteredValue !== inputValue) {
      e.target.value = filteredValue;
    }
    handleInvitationInfoChange("urlSlug")(e);

    if (!filteredValue.trim()) {
      setUrlSlugError("모바일 청첩장 URL을 입력해주세요.");
    } else if (filteredValue.length < 3 || filteredValue.length > 15) {
      setUrlSlugError("3자 이상 15자 이하로 입력해주세요.");
    } else {
      setUrlSlugError(undefined);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    handleInvitationInfoChange("message")(e);

    if (!value.trim()) {
      setMessageError("인사말을 입력해주세요.");
    } else {
      setMessageError(undefined);
    }
  };

  return (
    <>
      {type == "mobile" && (
        <section className={styles.coverContentContainer}>
          <div className={styles.inputWithErrorMessage}>
            <span className={styles.inputTitleTextStyle}>
              모바일 청첩장 URL 기입
            </span>
            {checkUrlSlug == "INFO" && (
              <span className={styles.inputDefaultTextStyle}>
                중복 검사를 진행해주세요.
              </span>
            )}
            {checkUrlSlug == "SUCCESS" && (
              <span className={styles.inputSuccessTextStyle}>
                사용할 수 있는 URL 입니다.
              </span>
            )}
            {checkUrlSlug == "FAIL" && (
              <span className={styles.inputErrorTextStyle}>
                중복된 주소입니다.
              </span>
            )}
          </div>

          <div className={styles.urlWrapper}>
            <span
              className={styles.urlTextStyle}
            >{`https://mcard.marimo.co.kr/`}</span>

            <Input
              maxWidth="32rem"
              placeholder="영어 소문자로 주소를 생성해주세요"
              value={
                type === "mobile"
                  ? (invitationInfoData as MobileInfoType).urlSlug
                  : ""
              }
              onChange={handleUrlSlugChange}
              errorMessage={urlSlugError}
              maxLength={15}
            />

            <Button color="gray" size="35" onClick={handleClickButton}>
              중복 확인
            </Button>
          </div>
        </section>
      )}

      <section className={styles.coverContentContainer}>
        <span className={styles.inputTitleTextStyle}>
          {type == "mobile" && "모바일"} 청첩장 표지 업로드
        </span>

        <IUButton onUpload={() => {}} />

        <section className={styles.cautionContainer}>
          <span className={styles.cautionTitleStyle}>주문 시 유의사항</span>
          <div className={styles.cautionTextWrapper}>
            <span className={styles.cautionTextStyle}>
              {`핸드폰 촬영사진은 불가합니다. 스튜디오의 원본 사진(고해상도)을 권장합니다.`}
            </span>
            <span className={styles.cautionTextStyle}>
              {`사진 크기는 해상도 200dpi 이상, 용량 2MB 이상의 원본 사진으로 첨부해주세요`}
            </span>
          </div>
        </section>
      </section>

      <section className={styles.coverContentContainer}>
        <div className={styles.textWithButtonWrapper}>
          <span className={styles.inputTitleTextStyle}>인사말</span>
          <Button color="gray" size="35" onClick={openModal}>
            샘플 확인
          </Button>
        </div>

        <TextArea
          placeholder="반드시 오탈자, 띄어쓰기가 제대로 되어있는지 다시 한 번 확인해 주세요!"
          currentLength={invitationInfoData.message.length}
          maxLength={150}
          value={invitationInfoData.message}
          onChange={handleMessageChange}
          errorMessage={messageError}
        />
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <GreetingsSampleModal onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default CoverInfoSection;
