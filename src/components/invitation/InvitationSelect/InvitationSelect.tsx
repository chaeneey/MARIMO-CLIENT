"use client";

import Link from "next/link";
import { useState } from "react";

import { Button, CustomImage, SelectBox } from "@/components/common";
import convertToSelectOptions from "@/utils/convertToSelectOptions";
import { InvitationItemDetail, ValueType } from "@types";

import * as styles from "./InvitationSelect.css";

const InvitationSelect = ({ invitationItemDetail }: InvitationItemDetail) => {
  const {
    mainImageUrl,
    name,
    discountRate,
    price,
    description,
    optionGroupList,
  } = invitationItemDetail;
  const [formState, setFormState] = useState({
    quantity: { keyValue: "", subValue: "" },
    sticker: { keyValue: "", subValue: "" },
    envelope: { keyValue: "", subValue: "" },
    ribbon: { keyValue: "", subValue: "" },
    service: { keyValue: "", subValue: "" },
    mobile: { keyValue: "", subValue: "" },
  });

  const handleSelect = (key: keyof typeof formState, value: ValueType) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <section className={styles.sectionStyle}>
      <div className={styles.invitationImageStyle}>
        <CustomImage src={mainImageUrl} alt={`${mainImageUrl}-${name}`} />
      </div>
      <div>
        <div className={styles.invitationInfoBox}>
          <div className={styles.invitationInfoTop}>
            <span className={styles.invitationTitleStyle}>{name}</span>
            <div className={styles.dividerStyle} />
            <span className={styles.discountRateStyle}>{discountRate}%</span>
            <span className={styles.priceStyle}>{price.toLocaleString()}</span>
          </div>
          <small className={styles.descriptionStyle}>{description}</small>
        </div>
        <ul className={styles.ulStyle}>
          <li className={styles.liStyle}>
            <span className={styles.optionTextStyle}>주문 수량</span>
            <div className={styles.selectBoxWrapper}>
              <SelectBox
                label="수량 (필수)"
                options={convertToSelectOptions(optionGroupList, "QUANTITY")}
                selected={formState.quantity}
                onSelect={(value) => handleSelect("quantity", value)}
                variant="product"
              />
            </div>
          </li>
          <li className={styles.liStyle}>
            <span className={styles.optionTextStyle}>스티커</span>
            <div className={styles.selectBoxWrapper}>
              <SelectBox
                label="종류 (선택)"
                options={convertToSelectOptions(optionGroupList, "STICKER")}
                selected={formState.sticker}
                onSelect={(value) => handleSelect("sticker", value)}
                variant="product"
              />
            </div>
          </li>
          <li className={styles.liStyle}>
            <span className={styles.optionTextStyle}>봉투</span>
            <div className={styles.selectBoxWrapper}>
              <SelectBox
                label="종류 (선택)"
                options={convertToSelectOptions(optionGroupList, "ENVELOPE")}
                selected={formState.envelope}
                onSelect={(value) => handleSelect("envelope", value)}
                variant="product"
              />
            </div>
          </li>
          <li className={styles.liStyle}>
            <span className={styles.optionTextStyle}>리본 수량</span>
            <div className={styles.selectBoxWrapper}>
              <SelectBox
                label="종류 (선택)"
                options={convertToSelectOptions(optionGroupList, "RIBBON")}
                selected={formState.ribbon}
                onSelect={(value) => handleSelect("ribbon", value)}
                variant="product"
              />
            </div>
          </li>
          <li className={styles.liStyle}>
            <span className={styles.optionTextStyle}>추가 서비스</span>
            <div className={styles.selectBoxWrapper}>
              <SelectBox
                label="추가 서비스 (선택)"
                options={convertToSelectOptions(optionGroupList, "ADDITIONAL")}
                selected={formState.service}
                onSelect={(value) => handleSelect("service", value)}
                variant="product"
              />
            </div>
          </li>
          <li className={styles.liStyle}>
            <span className={styles.optionTextStyle}>모바일 청첩장</span>
            <div className={styles.selectBoxWrapper}>
              <SelectBox
                label="무료 제공 (선택)"
                options={convertToSelectOptions(optionGroupList, "MOBILE")}
                selected={formState.mobile}
                onSelect={(value) => handleSelect("mobile", value)}
                variant="product"
              />
            </div>
          </li>
        </ul>
        <div className={styles.orderButtonWrapper}>
          <Link href={"/invitation/order"}>
            <Button size="56" color="lime01">
              주문하기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvitationSelect;
