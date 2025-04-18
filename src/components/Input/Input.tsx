import { forwardRef, InputHTMLAttributes, useState } from "react";

import { IcBtnDelete } from "@/assets/svgs";

import {
  deleteButtonStyle,
  InputContainer,
  InputErrorText,
  InputInfoText,
  InputStyle,
  InputWrapper,
} from "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  infoMessage?: string;
  handleClearInput?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, infoMessage, handleClearInput, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={InputContainer}>
        <div className={InputWrapper}>
          <input
            ref={ref}
            className={InputStyle({ errorMessage: !!errorMessage })}
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {value && isFocused && handleClearInput && (
            <IcBtnDelete
              width={18}
              height={18}
              className={deleteButtonStyle}
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleClearInput}
            />
          )}
        </div>

        {errorMessage ? (
          <span className={InputErrorText}>{errorMessage}</span>
        ) : (
          <span className={InputInfoText}>{infoMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
