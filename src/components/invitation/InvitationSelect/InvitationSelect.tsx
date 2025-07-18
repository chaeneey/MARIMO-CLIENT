"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Button,
  CustomImage,
  SelectBox,
  Modal,
  AgreeModal,
} from "@/components/common";
import { InvitationItemDetail, Option } from "@types";

import * as styles from "./InvitationSelect.css";
import SelectedOptionCard from "../SelectedOptionCard/SelectedOptionCard";

interface SelectedOption {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const optionKeys = [
  { key: "quantity", label: "수량 (필수)", text: "주문 수량" },
  { key: "sticker", label: "종류 (선택)", text: "스티커" },
  { key: "envelope", label: "종류 (선택)", text: "봉투" },
  { key: "ribbon", label: "종류 (선택)", text: "리본 수량" },
  { key: "additional", label: "추가 서비스 (선택)", text: "추가 서비스" },
  { key: "mobile", label: "무료 제공 (선택)", text: "모바일 청첩장" },
];

interface InvitationSelectProps {
  invitationId: number;
  invitationItemDetail: InvitationItemDetail;
}

const InvitationSelect = ({
  invitationId,
  invitationItemDetail,
}: InvitationSelectProps) => {
  const router = useRouter();

  const {
    mainImageUrl,
    name,
    discountRate,
    price,
    description,
    optionGroupList,
  } = invitationItemDetail;

  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [formState, setFormState] = useState({
    quantity: null,
    sticker: null,
    envelope: null,
    ribbon: null,
    service: null,
    mobile: null,
  });

  const [openBox, setOpenBox] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(selectedOptions);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleBox = (key: string) => {
    setOpenBox((prev) => (prev === key ? null : key));
  };

  const handleSelect = (key: keyof typeof formState, option: Option) => {
    setFormState((prev) => ({
      ...prev,
      [key]: option,
    }));

    const fixedQuantity = key === "quantity" || key === "mobile" ? 1 : 0;

    const newOption: SelectedOption = {
      id: option.id,
      type: key,
      name: option.name,
      price: option.price,
      quantity: fixedQuantity || 1,
    };

    setSelectedOptions((prev) => {
      const exists = prev.find((opt) => opt.id === key);
      if (exists) {
        return prev.map((opt) =>
          opt.id === key ? { ...opt, ...newOption } : opt
        );
      }
      return [...prev, newOption];
    });
  };

  const handleIncrease = (id: string) => {
    setSelectedOptions((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, quantity: opt.quantity + 1 } : opt
      )
    );
  };

  const handleDecrease = (id: string) => {
    setSelectedOptions((prev) =>
      prev.map((opt) =>
        opt.id === id && opt.quantity > 1
          ? { ...opt, quantity: opt.quantity - 1 }
          : opt
      )
    );
  };

  const handleFinalOrder = () => {
    localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
    localStorage.setItem("invitationId", String(invitationId));
    router.push("/invitation/order");
  };

  const getOptionsByKey = (key: string) => {
    const group = optionGroupList.find(
      (group) => group.optionType === key.toUpperCase()
    );
    return group?.optionList ?? [];
  };

  const isOrderDisabled = !formState.quantity;

  const totalPrice = selectedOptions.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

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
          {optionKeys.map(({ key, label, text }) => (
            <li key={key} className={styles.liStyle}>
              <span className={styles.optionTextStyle}>{text}</span>
              <div className={styles.selectBoxWrapper}>
                <SelectBox
                  label={label}
                  selected={formState[key]}
                  options={getOptionsByKey(key)}
                  onSelect={(option) => handleSelect(key, option)}
                  variant="product"
                  isOpen={openBox === key}
                  onToggle={() => toggleBox(key)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.selectedOptionCardWrapper}>
          {selectedOptions.map((opt) => {
            const matchedType = Object.keys(formState).find(
              (key) => formState[key]?.id === opt.id
            );

            return (
              <SelectedOptionCard
                key={opt.id}
                id={opt.id}
                type={matchedType || ""}
                name={opt.name}
                price={opt.price}
                quantity={opt.quantity}
                onIncrease={() => handleIncrease(opt.id)}
                onDecrease={() => handleDecrease(opt.id)}
              />
            );
          })}
        </div>
        <div className={styles.finalPriceDivider} />
        <div className={styles.finalPriceWrapper}>
          <span className={styles.finalPriceLeftTextStyle}>총 주문금액</span>
          <span className={styles.finalPriceTextStyle}>
            {totalPrice.toLocaleString()}원
          </span>
        </div>
        <div className={styles.orderButtonWrapper}>
          <Button
            size="56"
            color="lime01"
            disabled={isOrderDisabled}
            onClick={() => setIsModalOpen(true)}
          >
            주문하기
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <AgreeModal
            onClose={handleModalClose}
            onFinalOrder={handleFinalOrder}
          />
        </Modal>
      )}
    </section>
  );
};

export default InvitationSelect;
