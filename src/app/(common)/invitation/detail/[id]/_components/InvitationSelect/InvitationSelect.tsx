"use client";

import { useState } from "react";

import { Button, CustomImage, SelectBox } from "@/components";
import { ValueType } from "@types";

import * as styles from "./InvitationSelect.css";

const product = {
  imageUrl: "/images/감딸기.jpeg",
  title: "이건 이런 청첩장이라구요?",
  description: "이건 이런 청첩장이라니까요? 이런 스타일을 가지고 있어요!",
  discountRate: 15,
  price: 304000,
  id: 1,
};

const selectOptions = {
  quantity: [
    { value: { keyValue: "100장", subValue: "기본 수량" } },
    { value: { keyValue: "150장", subValue: "+10,000원" } },
    { value: { keyValue: "200장", subValue: "+20,000원" } },
  ],
  sticker: [
    { value: { keyValue: "기본 스티커", subValue: "" } },
    { value: { keyValue: "고급 스티커", subValue: "+1,000원" } },
  ],
  envelope: [
    { value: { keyValue: "흰색 봉투", subValue: "기본 제공" } },
    { value: { keyValue: "크림 봉투", subValue: "+500원" } },
  ],
  ribbon: [
    { value: { keyValue: "없음", subValue: "" } },
    { value: { keyValue: "리본 포함", subValue: "+3,000원" } },
  ],
  service: [
    { value: { keyValue: "없음", subValue: "" } },
    { value: { keyValue: "엽서 추가", subValue: "+2,000원" } },
  ],
  mobile: [{ value: { keyValue: "제공", subValue: "무료 제공" } }],
};

const InvitationSelect = () => {
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
        <CustomImage
          src={product.imageUrl}
          alt={`${product.imageUrl}-${product.id}`}
        />
      </div>
      <div>
        <div className={styles.invitationInfoBox}>
          <div className={styles.invitationInfoTop}>
            <span className={styles.invitationTitleStyle}>{product.title}</span>
            <div className={styles.dividerStyle} />
            <span className={styles.discountRateStyle}>
              {product.discountRate}%
            </span>
            <span className={styles.priceStyle}>{product.price}</span>
          </div>
          <small className={styles.descriptionStyle}>
            {product.description}
          </small>
        </div>
        <ul className={styles.ulStyle}>
          <li className={styles.liStyle}>
            <span className={styles.optionTextStyle}>주문 수량</span>
            <div className={styles.selectBoxWrapper}>
              <SelectBox
                label="수량 (필수)"
                options={selectOptions.quantity}
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
                options={selectOptions.sticker}
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
                options={selectOptions.envelope}
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
                options={selectOptions.ribbon}
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
                options={selectOptions.service}
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
                options={selectOptions.mobile}
                selected={formState.mobile}
                onSelect={(value) => handleSelect("mobile", value)}
                variant="product"
              />
            </div>
          </li>
        </ul>
        <div className={styles.orderButtonWrapper}>
          <Button size="56" color="lime01">
            주문하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvitationSelect;
