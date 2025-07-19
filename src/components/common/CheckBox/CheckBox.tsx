"use client";
import { checkboxStyle } from "./CheckBox.css";

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div
      className={checkboxStyle({
        state: checked ? "checked" : "unchecked",
      })}
      onClick={handleClick}
    />
  );
};

export default CheckBox;
