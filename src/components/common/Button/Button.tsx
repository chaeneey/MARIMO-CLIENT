import { ButtonHTMLAttributes } from "react";

import { buttonColorStyle, buttonSizeStyle } from "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "56" | "50" | "38" | "30" | "35";
  color: "lime01" | "lime03" | "lime04" | "gray" | "white" | "stroke";
}

const Button = ({ children, size, color, ...props }: ButtonProps) => {
  const className = [
    buttonSizeStyle({ size }),
    buttonColorStyle({ color }),
  ].join(" ");

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
