"use client";
import { useState } from "react";

import { IcDeleteGray0428 } from "@/assets/svgs";

import * as styles from "./AgreeModal.css";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";

interface AgreeModalProps {
  onClose: () => void;
}

const AgreeModal = ({ onClose }: AgreeModalProps) => {
  const [agreePersonal, setAgreePersonal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false);

  const handleAgreeAll = (checked: boolean) => {
    setAgreeAll(checked);
    setAgreePersonal(checked);
    setAgreeTerms(checked);
    setAgreeMarketing(checked);
  };

  const handleIndividualChange = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    checked: boolean
  ) => {
    setter(checked);
    const newState = {
      personal: checked === true ? agreePersonal : !agreePersonal,
      terms: checked === true ? agreeTerms : !agreeTerms,
      marketing: checked === true ? agreeMarketing : !agreeMarketing,
    };

    const allChecked =
      newState.personal && newState.terms && newState.marketing;
    // const requiredChecked = newState.personal && newState.terms;

    setAgreeAll(allChecked);
  };

  const isRequiredAgreed = agreePersonal && agreeTerms;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <h1 className={styles.modalHeaderH1}>구매를 위한 약관동의</h1>
        <div onClick={onClose} className={styles.deleteBtnStyle}>
          <IcDeleteGray0428 width={28} height={28} />
        </div>
      </div>
      <div className={styles.questionBox}>
        <span className={styles.questionWrapper}>
          <CheckBox
            checked={agreePersonal}
            onChange={(checked) =>
              handleIndividualChange(setAgreePersonal, checked)
            }
          />
          [필수] 개인정보 수집 및 이용동의
        </span>
        <span className={styles.questionWrapper}>
          <CheckBox
            checked={agreeTerms}
            onChange={(checked) =>
              handleIndividualChange(setAgreeTerms, checked)
            }
          />
          [필수] 게시글 이용약관
        </span>
        <div className={styles.thirdQuestionWrapper}>
          <span className={styles.questionWrapper}>
            <CheckBox
              checked={agreeMarketing}
              onChange={(checked) =>
                handleIndividualChange(setAgreeMarketing, checked)
              }
            />
            [선택] 청첩장 할인 및 혜택 안내 수신동의
          </span>
          <span className={styles.subTextStyle}>
            수신 동의 시 청첩장 할인쿠폰, 이벤트 등에 관한 혜택을 이메일, SMS
            등을 통해 받으실 수 있습니다.
          </span>
        </div>
      </div>
      <span className={styles.questionWrapper}>
        <CheckBox checked={agreeAll} onChange={handleAgreeAll} />
        위의 사항에 대해 전체 동의합니다.
      </span>
      <div className={styles.buttonWrapper}>
        <Button size="50" color="lime01" disabled={!isRequiredAgreed}>
          주문하기
        </Button>
      </div>
    </div>
  );
};

export default AgreeModal;
