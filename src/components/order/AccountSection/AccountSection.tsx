"use client";

import { ChangeEvent, useState } from "react";

import { IcBtnDelete } from "@/assets/svgs";
import { Input } from "@/components/common";
import { GiftAccountType } from "@types";

import {
  accountSectionContainer,
  accountSubTextStyle,
  inputColumnWrapper,
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
    key: keyof GiftAccountType,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const AccountSection = ({
  giftAccountData,
  handleGiftAccountChange,
}: AccountSectionProps) => {
  const [giftAccount, setGiftAccount] = useState({
    bride: {
      bank: "",
      account: "",
      holder: "",
    },
    groom: {
      bank: "",
      account: "",
      holder: "",
    },
  });

  const handleAccountInfoChange =
    (key: "bride" | "groom", detailKey: "bank" | "account" | "holder") =>
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
      giftAccount[who].account !== ""
    ) {
      const newAccountInfo = {
        bank: giftAccount[who].bank,
        account: giftAccount[who].account,
        holder: giftAccount[who].holder,
      };

      if (who == "groom") {
        handleGiftAccountChange("groomGiftAccountList")({
          target: {
            value: [...giftAccountData.groomGiftAccountList, newAccountInfo],
          },
        } as unknown as ChangeEvent<HTMLInputElement>);
      } else {
        handleGiftAccountChange("brideGiftAccountList")({
          target: {
            value: [...giftAccountData.brideGiftAccountList, newAccountInfo],
          },
        } as unknown as ChangeEvent<HTMLInputElement>);
      }
    }
  };

  const handleClickDeleteButton = (
    who: "groomGiftAccountList" | "brideGiftAccountList",
    index: number, // 삭제할 항목의 인덱스
  ) => {
    const updatedList = giftAccountData[who].filter((_, idx) => idx !== index); // 해당 인덱스를 제외한 배열로 업데이트

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
                  value={giftAccount.groom.account}
                  onChange={handleAccountInfoChange("groom", "account")}
                />
              </div>
              <div className={selectedAccountInfoContainer}>
                {giftAccountData.groomGiftAccountList.length > 0 &&
                  giftAccountData.groomGiftAccountList.map(
                    (accountInfo, idx) => {
                      return (
                        <div key={idx} className={selectedAccountInfoWrapper}>
                          <span
                            className={selectedAccountInfoTextStyle}
                          >{`${accountInfo.bank}/${accountInfo.holder}/${accountInfo.account} `}</span>
                          <IcBtnDelete
                            width={18}
                            height={18}
                            onClick={() =>
                              handleClickDeleteButton(
                                "groomGiftAccountList",
                                idx,
                              )
                            }
                          />
                        </div>
                      );
                    },
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
                  value={giftAccount.bride.account}
                  onChange={handleAccountInfoChange("bride", "account")}
                />
              </div>

              <div className={selectedAccountInfoContainer}>
                {giftAccountData.brideGiftAccountList.length > 0 &&
                  giftAccountData.brideGiftAccountList.map(
                    (accountInfo, idx) => {
                      return (
                        <div key={idx} className={selectedAccountInfoWrapper}>
                          <span
                            className={selectedAccountInfoTextStyle}
                          >{`${accountInfo.bank}/${accountInfo.holder}/${accountInfo.account} `}</span>
                          <IcBtnDelete
                            width={18}
                            height={18}
                            onClick={() =>
                              handleClickDeleteButton(
                                "brideGiftAccountList",
                                idx,
                              )
                            }
                          />
                        </div>
                      );
                    },
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
