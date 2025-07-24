import { ButtonHTMLAttributes } from "react";

import { buttonColorStyle, buttonSizeStyle, disabledStyle } from "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: string;
  size: "56" | "50" | "40" | "38" | "30" | "35";
  color: "lime01" | "lime03" | "lime04" | "gray01" | "gray" | "white" | "stroke";
}

const Button = ({
  children,
  size,
  color,
  type = "button",
  disabled,
  ...props
}: ButtonProps) => {
  const className = [
    buttonSizeStyle({ size }),
    buttonColorStyle({ color }),
    disabled && disabledStyle,
  ].join(" ");

  return (
    <button type={type} disabled={disabled} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
