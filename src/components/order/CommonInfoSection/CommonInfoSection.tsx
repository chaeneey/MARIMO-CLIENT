"use client";

import { ChangeEvent } from "react";

import { Button, Input } from "@/components/common";
import CheckBox from "@/components/common/CheckBox/CheckBox";
import { useDaumPostcode } from "@/hooks/useDaumPostcode";
import { InvitationCommonInfoType } from "@types";

import * as styles from "./CommonInfoSection.css";
import OrderSelectBox from "../OrderSelectBox/OrderSelectBox";

interface CommonInfoSectionProps {
  invitationCommonInfoData: InvitationCommonInfoType;
  handleInvitationCommonInfoChange: (
    key: keyof InvitationCommonInfoType,
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleInvitationCommonInfoBooleanChange: (
    key: keyof InvitationCommonInfoType,
  ) => (checked: boolean) => void;
}

const CommonInfoSection = ({
  invitationCommonInfoData,
  handleInvitationCommonInfoChange,
  handleInvitationCommonInfoBooleanChange,
}: CommonInfoSectionProps) => {
  // 예식 날짜 포맷 설정
  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value;
    raw = raw.replace(/[^0-9]/g, "");
    raw = raw.slice(0, 8);
    let formatted = "";
    if (raw.length <= 4) {
      formatted = raw;
    } else if (raw.length <= 6) {
      formatted = `${raw.slice(0, 4)}-${raw.slice(4)}`;
    } else {
      formatted = `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
    }

    handleInvitationCommonInfoChange("weddingDate")({
      target: { value: formatted },
    } as ChangeEvent<HTMLInputElement>);
  };

  // 주소 API
  const handleAddressData = (address: string, zoneCode: string) => {
    handleInvitationCommonInfoChange("weddingVenueAddress")({
      target: { value: address },
    } as ChangeEvent<HTMLInputElement>);

    handleInvitationCommonInfoChange("weddingVenueZoneCode")({
      target: { value: zoneCode },
    } as ChangeEvent<HTMLInputElement>);
  };

  const { handleClick } = useDaumPostcode(handleAddressData);

  return (
    <>
      <section className={styles.nameInfoContainer}>
        <span className={styles.inputTitleTextStyle}>신랑측 정보</span>
        <div className={styles.nameInfoWrapper}>
          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>아버님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <div className={styles.nameInfoInputAddStyle}>
                <Input
                  placeholder={
                    invitationCommonInfoData.groomFatherDeceased
                      ? ""
                      : "성함을 입력해주세요"
                  }
                  maxWidth="32rem"
                  value={invitationCommonInfoData.groomFatherName}
                  onChange={handleInvitationCommonInfoChange("groomFatherName")}
                  readOnly={invitationCommonInfoData.groomFatherDeceased}
                />
                {invitationCommonInfoData.hasGroomFatherChristianName && (
                  <Input
                    placeholder="세례명을 입력해주세요"
                    maxWidth="32rem"
                    value={invitationCommonInfoData.groomFatherChristianName}
                    onChange={handleInvitationCommonInfoChange(
                      "groomFatherChristianName",
                    )}
                  />
                )}
              </div>

              <div className={styles.nameInfoCheckboxWrapper}>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox
                    checked={invitationCommonInfoData.groomFatherDeceased}
                    onChange={handleInvitationCommonInfoBooleanChange(
                      "groomFatherDeceased",
                    )}
                  />
                  <span className={styles.nameInfoCheckboxTextStyle}>故</span>
                </div>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox
                    checked={
                      invitationCommonInfoData.hasGroomFatherChristianName
                    }
                    onChange={handleInvitationCommonInfoBooleanChange(
                      "hasGroomFatherChristianName",
                    )}
                  />
                  <span className={styles.nameInfoCheckboxTextStyle}>
                    세례명
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>어머님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <div className={styles.nameInfoInputAddStyle}>
                <Input
                  placeholder={
                    invitationCommonInfoData.groomMotherDeceased
                      ? ""
                      : "성함을 입력해주세요"
                  }
                  maxWidth="32rem"
                  value={invitationCommonInfoData.groomMotherName}
                  onChange={handleInvitationCommonInfoChange("groomMotherName")}
                  readOnly={invitationCommonInfoData.groomMotherDeceased}
                />
                {invitationCommonInfoData.hasGroomMotherChristianName && (
                  <Input
                    placeholder="세례명을 입력해주세요"
                    maxWidth="32rem"
                    value={invitationCommonInfoData.groomMotherChristianName}
                    onChange={handleInvitationCommonInfoChange(
                      "groomMotherChristianName",
                    )}
                  />
                )}
              </div>

              <div className={styles.nameInfoCheckboxWrapper}>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox
                    checked={invitationCommonInfoData.groomMotherDeceased}
                    onChange={handleInvitationCommonInfoBooleanChange(
                      "groomMotherDeceased",
                    )}
                  />
                  <span className={styles.nameInfoCheckboxTextStyle}>故</span>
                </div>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox
                    checked={
                      invitationCommonInfoData.hasGroomMotherChristianName
                    }
                    onChange={handleInvitationCommonInfoBooleanChange(
                      "hasGroomMotherChristianName",
                    )}
                  />
                  <span className={styles.nameInfoCheckboxTextStyle}>
                    세례명
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>신랑님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <div className={styles.nameInfoInputAddStyle}>
                <Input
                  placeholder="성함을 입력해주세요"
                  maxWidth="32rem"
                  value={invitationCommonInfoData.groomName}
                  onChange={handleInvitationCommonInfoChange("groomName")}
                />
                {invitationCommonInfoData.hasGroomChristianName && (
                  <Input
                    placeholder="세례명을 입력해주세요"
                    maxWidth="32rem"
                    value={invitationCommonInfoData.groomChristianName}
                    onChange={handleInvitationCommonInfoChange(
                      "groomChristianName",
                    )}
                  />
                )}
              </div>

              <div className={styles.nameInfoCheckboxStyle}>
                <CheckBox
                  checked={invitationCommonInfoData.hasGroomChristianName}
                  onChange={handleInvitationCommonInfoBooleanChange(
                    "hasGroomChristianName",
                  )}
                />
                <span className={styles.nameInfoCheckboxTextStyle}>세례명</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nameInfoContainer}>
        <span className={styles.inputTitleTextStyle}>신부측 정보</span>
        <div className={styles.nameInfoWrapper}>
          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>아버님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <div className={styles.nameInfoInputAddStyle}>
                <Input
                  placeholder={
                    invitationCommonInfoData.brideFatherDeceased
                      ? ""
                      : "성함을 입력해주세요"
                  }
                  maxWidth="32rem"
                  value={invitationCommonInfoData.brideFatherName}
                  onChange={handleInvitationCommonInfoChange("brideFatherName")}
                  readOnly={invitationCommonInfoData.brideFatherDeceased}
                />
                {invitationCommonInfoData.hasBrideFatherChristianName && (
                  <Input
                    placeholder="세례명을 입력해주세요"
                    maxWidth="32rem"
                    value={invitationCommonInfoData.brideFatherChristianName}
                    onChange={handleInvitationCommonInfoChange(
                      "brideFatherChristianName",
                    )}
                  />
                )}
              </div>
              <div className={styles.nameInfoCheckboxWrapper}>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox
                    checked={invitationCommonInfoData.brideFatherDeceased}
                    onChange={handleInvitationCommonInfoBooleanChange(
                      "brideFatherDeceased",
                    )}
                  />
                  <span className={styles.nameInfoCheckboxTextStyle}>故</span>
                </div>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox
                    checked={
                      invitationCommonInfoData.hasBrideFatherChristianName
                    }
                    onChange={handleInvitationCommonInfoBooleanChange(
                      "hasBrideFatherChristianName",
                    )}
                  />
                  <span className={styles.nameInfoCheckboxTextStyle}>
                    세례명
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>어머님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <div className={styles.nameInfoInputAddStyle}>
                <Input
                  placeholder={
                    invitationCommonInfoData.brideMotherDeceased
                      ? ""
                      : "성함을 입력해주세요"
                  }
                  maxWidth="32rem"
                  value={invitationCommonInfoData.brideMotherName}
                  onChange={handleInvitationCommonInfoChange("brideMotherName")}
                  readOnly={invitationCommonInfoData.brideMotherDeceased}
                />
                {invitationCommonInfoData.hasBrideMotherChristianName && (
                  <Input
                    placeholder="세례명을 입력해주세요"
                    maxWidth="32rem"
                    value={invitationCommonInfoData.brideMotherChristianName}
                    onChange={handleInvitationCommonInfoChange(
                      "brideMotherChristianName",
                    )}
                  />
                )}
              </div>
              <div className={styles.nameInfoCheckboxWrapper}>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox
                    checked={invitationCommonInfoData.brideMotherDeceased}
                    onChange={handleInvitationCommonInfoBooleanChange(
                      "brideMotherDeceased",
                    )}
                  />
                  <span className={styles.nameInfoCheckboxTextStyle}>故</span>
                </div>
                <div className={styles.nameInfoCheckboxStyle}>
                  <CheckBox
                    checked={
                      invitationCommonInfoData.hasBrideMotherChristianName
                    }
                    onChange={handleInvitationCommonInfoBooleanChange(
                      "hasBrideMotherChristianName",
                    )}
                  />
                  <span className={styles.nameInfoCheckboxTextStyle}>
                    세례명
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.nameInfoInputWrapper}>
            <span className={styles.nameInfoSubTextStyle}>신부님</span>
            <div className={styles.nameInfoInputWithCheckbox}>
              <div className={styles.nameInfoInputAddStyle}>
                <Input
                  placeholder="성함을 입력해주세요"
                  maxWidth="32rem"
                  value={invitationCommonInfoData.brideName}
                  onChange={handleInvitationCommonInfoChange("brideName")}
                />
                {invitationCommonInfoData.hasBrideChristianName && (
                  <Input
                    placeholder="세례명을 입력해주세요"
                    maxWidth="32rem"
                    value={invitationCommonInfoData.groomChristianName}
                    onChange={handleInvitationCommonInfoChange(
                      "groomChristianName",
                    )}
                  />
                )}
              </div>

              <div className={styles.nameInfoCheckboxStyle}>
                <CheckBox
                  checked={invitationCommonInfoData.hasBrideChristianName}
                  onChange={handleInvitationCommonInfoBooleanChange(
                    "hasBrideChristianName",
                  )}
                />
                <span className={styles.nameInfoCheckboxTextStyle}>세례명</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cautionContainer}>
        <span className={styles.cautionTitleStyle}>주문 시 유의사항</span>
        <div className={styles.cautionTextWrapper}>
          <span className={styles.cautionTextStyle}>
            {`신랑, 신부 이름 중 성은 대부분 입력하지 않지만, 아버님의 성함을 기재하지 않는 경우 성을 표기합니다.`}
          </span>
          <span className={styles.cautionTextStyle}>
            {`고인의 성함은 통상적으로 청첩장에 기재하지 않지만, 원하시는 경우 카카오톡채널 1:1 문의 부탁드립니다.`}
          </span>
        </div>
      </section>

      <section className={styles.dateContainer}>
        <span className={styles.inputTextStyle}>예식일시</span>
        <div className={styles.dateInputWrapper}>
          <Input
            maxWidth="32rem"
            placeholder="8글자로 입력해주세요"
            value={invitationCommonInfoData.weddingDate}
            onChange={handleChangeDate}
            maxLength={10}
          />
          <OrderSelectBox
            label="시간"
            options={[
              { value: { keyValue: "08시" } },
              { value: { keyValue: "09시" } },
              { value: { keyValue: "10시" } },
              { value: { keyValue: "11시" } },
              { value: { keyValue: "12시" } },
              { value: { keyValue: "13시" } },
              { value: { keyValue: "14시" } },
              { value: { keyValue: "15시" } },
              { value: { keyValue: "16시" } },
              { value: { keyValue: "17시" } },
              { value: { keyValue: "18시" } },
              { value: { keyValue: "19시" } },
              { value: { keyValue: "20시" } },
              { value: { keyValue: "21시" } },
              { value: { keyValue: "22시" } },
            ]}
            selected={{ keyValue: invitationCommonInfoData.weddingHour }}
            onSelect={(value) =>
              handleInvitationCommonInfoChange("weddingHour")({
                target: { value: value.keyValue },
              } as ChangeEvent<HTMLInputElement>)
            }
            variant="order"
          />

          <OrderSelectBox
            label="분"
            options={[
              { value: { keyValue: "00분" } },
              { value: { keyValue: "05분" } },
              { value: { keyValue: "10분" } },
              { value: { keyValue: "15분" } },
              { value: { keyValue: "20분" } },
              { value: { keyValue: "25분" } },
              { value: { keyValue: "30분" } },
              { value: { keyValue: "35분" } },
              { value: { keyValue: "40분" } },
              { value: { keyValue: "45분" } },
              { value: { keyValue: "50분" } },
              { value: { keyValue: "55분" } },
            ]}
            selected={{ keyValue: invitationCommonInfoData.weddingMinite }}
            onSelect={(value) =>
              handleInvitationCommonInfoChange("weddingMinite")({
                target: { value: value.keyValue },
              } as ChangeEvent<HTMLInputElement>)
            }
            variant="order"
          />
        </div>
      </section>

      <section className={styles.adressWrapper}>
        <h3 className={styles.inputTextStyle}>주소</h3>
        <div className={styles.customerAdressInputWrapper}>
          <div className={styles.customerAdressSearchWrapper}>
            <Input
              value={invitationCommonInfoData.weddingVenueZoneCode}
              onChange={handleInvitationCommonInfoChange(
                "weddingVenueZoneCode",
              )}
              maxWidth="32rem"
              placeholder="우편번호를 입력해주세요"
              readOnly={true}
            />
            <Button size="56" color="stroke" onClick={handleClick}>
              주소검색
            </Button>
          </div>
          <Input
            maxWidth="62rem"
            readOnly={true}
            value={invitationCommonInfoData.weddingVenueAddress}
            onChange={handleInvitationCommonInfoChange("weddingVenueAddress")}
          />
          <Input
            maxWidth="62rem"
            placeholder="상세 주소를 입력해주세요. 예시) 마리빌 205호"
            value={invitationCommonInfoData.weddingVenueDetailAddress}
            onChange={handleInvitationCommonInfoChange(
              "weddingVenueDetailAddress",
            )}
          />
        </div>
      </section>
    </>
  );
};

export default CommonInfoSection;
