"use client";

import React, { useState } from "react";

import { IcArrowUnderGray05 } from "@/assets/svgs";
import { ValueType } from "@types";

import {
  arrowIconStyle,
  dividerStyle,
  liOptionLeftStyle,
  liOptionStyle,
  liStyle,
  liSubValueStyle,
  selectBoxBorderStyle,
  selectBoxLayout,
  selectBoxStyle,
  ulStyle,
} from "./SelectBox.css";

interface Option {
  value: ValueType;
  price?: string;
}
export interface SelectBoxProps {
  label: string;
  options: Option[];
  selected: ValueType;
  onSelect: (value: ValueType) => void;
  variant?: "product" | "order";
}

const SelectBox = ({
  label,
  options,
  selected,
  onSelect,
  variant = "product",
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: ValueType) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={selectBoxLayout({ variant })}>
      <button
        className={`${selectBoxStyle} ${variant == "product" && isOpen && selectBoxBorderStyle.open}`}
        onClick={toggleDropdown}
        type="button"
      >
        <span>
          {selected.keyValue ? (
            <>
              <span>{selected.keyValue}</span>{" "}
              <span className={liSubValueStyle}>{selected.subValue}</span>
            </>
          ) : (
            <span>{label}</span>
          )}
        </span>

        <IcArrowUnderGray05 className={arrowIconStyle} />
      </button>

      {isOpen && (
        <ul className={ulStyle({ variant })}>
          {options.map((option, idx) => (
            <li
              key={option.value.keyValue}
              className={liStyle}
              onClick={() => handleSelect(option.value)}
            >
              <div className={liOptionStyle}>
                <div className={liOptionLeftStyle}>
                  <span>{option.value.keyValue}</span>
                  <span className={liSubValueStyle}>
                    {option.value.subValue}
                  </span>
                </div>
                <span>{option.price}</span>
              </div>
              {idx !== options.length - 1 && <div className={dividerStyle} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
