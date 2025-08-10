"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { IcBtnDelete } from "@/assets/svgs";
import { Input } from "@/components/common";
import { GiftAccountType } from "@types";

import {
  accountSectionContainer,
  accountSubTextStyle,
  inputColumnWrapper,
  inputErrorTextStyle,
  inputInfoTextStyle,
  inputRowWrapper,
  inputTitleTextStyle,
  inputTitleWrapper,
  inputWrapper,
  selectedAccountInfoContainer,
  selectedAccountInfoTextStyle,
  selectedAccountInfoWrapper,
} from "./AccountSection.css";
import AddButton from "../AddButton/AddButton";

interface AccountSectionProps {
  giftAccountData: GiftAccountType;
  handleGiftAccountChange: (
    key: keyof GiftAccountType
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onValidChange: (isValid: boolean) => void;
}

const AccountSection = ({
  giftAccountData,
  handleGiftAccountChange,
  onValidChange,
}: AccountSectionProps) => {
  const [giftAccount, setGiftAccount] = useState({
    bride: {
      bank: "",
      number: "",
      holder: "",
    },
    groom: {
      bank: "",
      number: "",
      holder: "",
    },
  });

  const [groomAccountListError, setGroomAccountListError] = useState<
    string | undefined
  >(undefined);
  const [brideAccountListError, setBrideAccountListError] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    const isValid =
      !groomAccountListError &&
      !brideAccountListError &&
      giftAccountData.brideGiftAccountList.length > 0 &&
      giftAccountData.groomGiftAccountList.length > 0;

    onValidChange(isValid);
  }, [groomAccountListError, brideAccountListError, giftAccountData]);

  const handleAccountInfoChange =
    (key: "bride" | "groom", detailKey: "bank" | "number" | "holder") =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setGiftAccount((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          [detailKey]: value,
        },
      }));
    };

  const handleClickAddButton = (who: "groom" | "bride") => {
    if (
      giftAccount[who].bank !== "" ||
      giftAccount[who].holder !== "" ||
      giftAccount[who].number !== ""
    ) {
      const newAccountInfo = {
        bank: giftAccount[who].bank,
        number: giftAccount[who].number,
        holder: giftAccount[who].holder,
      };

      const currentList =
        who === "groom"
          ? giftAccountData.groomGiftAccountList
          : giftAccountData.brideGiftAccountList;

      if (currentList.length >= 3) {
        if (who === "groom") {
          setGroomAccountListError("계좌는 최대 3개까지 등록할 수 있습니다.");
        } else {
          setBrideAccountListError("계좌는 최대 3개까지 등록할 수 있습니다.");
        }
        return;
      }

      if (who === "groom") {
        setGroomAccountListError(undefined);
      } else {
        setBrideAccountListError(undefined);
      }

      const newList = [...currentList, newAccountInfo];

      handleGiftAccountChange(
        who === "groom" ? "groomGiftAccountList" : "brideGiftAccountList"
      )({
        target: { value: newList },
      } as unknown as ChangeEvent<HTMLInputElement>);
    }
  };

  const handleClickDeleteButton = (
    who: "groomGiftAccountList" | "brideGiftAccountList",
    index: number
  ) => {
    const updatedList = giftAccountData[who].filter((_, idx) => idx !== index);

    // 삭제 후 0개면 에러
    if (updatedList.length < 1) {
      if (who === "groomGiftAccountList") {
        setGroomAccountListError("계좌 정보를 1개 이상 등록해주세요.");
      } else {
        setBrideAccountListError("계좌 정보를 1개 이상 등록해주세요.");
      }
    } else {
      if (who === "groomGiftAccountList") {
        setGroomAccountListError(undefined);
      } else {
        setBrideAccountListError(undefined);
      }
    }

    handleGiftAccountChange(who)({
      target: { value: updatedList },
    } as unknown as ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <section className={accountSectionContainer}>
        <section className={inputTitleWrapper}>
          <span className={inputTitleTextStyle}>신랑측 정보</span>
          <span className={inputInfoTextStyle}>
            계좌는 최대 3개까지 입력 가능합니다.
          </span>
        </section>
        <section className={inputColumnWrapper}>
          <AddButton onClick={() => handleClickAddButton("groom")}>
            계좌추가
          </AddButton>
          <div className={inputRowWrapper}>
            <span className={accountSubTextStyle}>계좌정보</span>

            <div className={selectedAccountInfoContainer}>
              <div className={inputWrapper}>
                <Input
                  placeholder="은행"
                  maxWidth="20rem"
                  value={giftAccount.groom.bank}
                  onChange={handleAccountInfoChange("groom", "bank")}
                />
                <Input
                  placeholder="예금주"
                  maxWidth="20rem"
                  value={giftAccount.groom.holder}
                  onChange={handleAccountInfoChange("groom", "holder")}
                />
                <Input
                  placeholder="계좌번호"
                  maxWidth="28rem"
                  value={giftAccount.groom.number}
                  onChange={handleAccountInfoChange("groom", "number")}
                />
              </div>

              {/* 신랑 계좌 에러 메시지 */}
              {groomAccountListError && (
                <span className={inputErrorTextStyle}>
                  {groomAccountListError}
                </span>
              )}
              <div className={selectedAccountInfoContainer}>
                {giftAccountData.groomGiftAccountList.length > 0 &&
                  giftAccountData.groomGiftAccountList.map(
                    (accountInfo, idx) => {
                      return (
                        <div key={idx} className={selectedAccountInfoWrapper}>
                          <span
                            className={selectedAccountInfoTextStyle}
                          >{`${accountInfo.bank}/${accountInfo.holder}/${accountInfo.number} `}</span>
                          <IcBtnDelete
                            width={18}
                            height={18}
                            onClick={() =>
                              handleClickDeleteButton(
                                "groomGiftAccountList",
                                idx
                              )
                            }
                          />
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className={accountSectionContainer}>
        <section className={inputTitleWrapper}>
          <span className={inputTitleTextStyle}>신부측 정보</span>
          <span className={inputInfoTextStyle}>
            계좌는 최대 3개까지 입력 가능합니다.
          </span>
        </section>
        <section className={inputColumnWrapper}>
          <AddButton onClick={() => handleClickAddButton("bride")}>
            계좌추가
          </AddButton>
          <div className={inputRowWrapper}>
            <span className={accountSubTextStyle}>계좌정보</span>

            <div className={selectedAccountInfoContainer}>
              <div className={inputWrapper}>
                <Input
                  placeholder="은행"
                  maxWidth="20rem"
                  value={giftAccount.bride.bank}
                  onChange={handleAccountInfoChange("bride", "bank")}
                />
                <Input
                  placeholder="예금주"
                  maxWidth="20rem"
                  value={giftAccount.bride.holder}
                  onChange={handleAccountInfoChange("bride", "holder")}
                />
                <Input
                  placeholder="계좌번호"
                  maxWidth="28rem"
                  value={giftAccount.bride.number}
                  onChange={handleAccountInfoChange("bride", "number")}
                />
              </div>

              {/* 신부 계좌 에러 메시지 */}
              {brideAccountListError && (
                <span className={inputErrorTextStyle}>
                  {brideAccountListError}
                </span>
              )}

              <div className={selectedAccountInfoContainer}>
                {giftAccountData.brideGiftAccountList.length > 0 &&
                  giftAccountData.brideGiftAccountList.map(
                    (accountInfo, idx) => {
                      return (
                        <div key={idx} className={selectedAccountInfoWrapper}>
                          <span
                            className={selectedAccountInfoTextStyle}
                          >{`${accountInfo.bank}/${accountInfo.holder}/${accountInfo.number} `}</span>
                          <IcBtnDelete
                            width={18}
                            height={18}
                            onClick={() =>
                              handleClickDeleteButton(
                                "brideGiftAccountList",
                                idx
                              )
                            }
                          />
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AccountSection;
