import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { buttonStyle } from "./IUButton.css";

export interface IUButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const IUButton = ({ onClick }: IUButtonProps) => {
  return (
    <button className={buttonStyle} onClick={onClick}>
      클릭 후 업로드
    </button>
  );
};

export default IUButton;
