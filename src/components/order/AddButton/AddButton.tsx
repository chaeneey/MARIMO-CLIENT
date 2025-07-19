import { ButtonHTMLAttributes } from "react";

import { IcPlusGray0418 } from "@/assets/svgs";

import { addButtonTextStyle, addButtonWrapper } from "./AddButton.css";

const AddButton = ({
  children,
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={addButtonWrapper} onClick={onClick} type="button">
      <span className={addButtonTextStyle}>{children}</span>
      <IcPlusGray0418 width={18} height={18} />
    </button>
  );
};

export default AddButton;
