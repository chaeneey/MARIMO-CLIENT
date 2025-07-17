"use client";

import React from "react";

import { IcArrowUnderGray0518 } from "@/assets/svgs";
import { Option } from "@types";

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

export interface SelectBoxProps {
  label: string;
  options: Option[];
  selected: Option | null;
  onSelect: (option: Option) => void;
  variant?: "product" | "order";
  isOpen: boolean;
  onToggle: () => void;
}

const SelectBox = ({
  label,
  options,
  selected,
  onSelect,
  variant = "product",
  isOpen,
  onToggle,
}: SelectBoxProps) => {
  const handleSelect = (option: Option) => {
    onSelect(option);
    onToggle();
  };

  return (
    <div className={selectBoxLayout({ variant })}>
      <button
        className={`${selectBoxStyle} ${variant == "product" && isOpen && selectBoxBorderStyle.open}`}
        onClick={onToggle}
        type="button"
      >
        <span>
          {selected ? (
            <>
              <span>{selected.name}</span>{" "}
              <span className={liSubValueStyle}>{selected.optionDetail}</span>
            </>
          ) : (
            <span>{label}</span>
          )}
        </span>
        <IcArrowUnderGray0518 className={arrowIconStyle} />
      </button>

      {isOpen && (
        <ul className={ulStyle({ variant })}>
          {options.map((option, idx) => (
            <li
              key={option.id}
              className={liStyle}
              onClick={() => handleSelect(option)}
            >
              <div className={liOptionStyle}>
                <div className={liOptionLeftStyle}>
                  <span>{option.name}</span>{" "}
                  {option.optionDetail && (
                    <span className={liSubValueStyle}>
                      ({option.optionDetail})
                    </span>
                  )}
                </div>
                <span>{option.price.toLocaleString()}원</span>
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
