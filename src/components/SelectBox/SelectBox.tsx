"use client";

import React, { useState } from "react";
import { selectBoxStyle } from "./SelectBox.css";

interface SelectBoxProps {
  label: string;
  options: string[];
  selected?: string;
  onSelect: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  options,
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div>
      <button className={selectBoxStyle} onClick={toggleDropdown}>
        <span>{selected || label}</span>
        <p>화살표</p>
      </button>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
