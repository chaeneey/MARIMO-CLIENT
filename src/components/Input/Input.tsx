"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";

import { IcBtnDelete } from "@/assets/svgs";

import {
  deleteButtonStyle,
  inputContainer,
  inputErrorText,
  inputInfoText,
  inputStyle,
  inputWrapper,
} from "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  infoMessage?: string;
  handleClearInput?: () => void;
  maxWidth?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { errorMessage, infoMessage, handleClearInput, value, maxWidth, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={inputContainer} style={{ maxWidth }}>
        <div className={inputWrapper}>
          <input
            ref={ref}
            className={inputStyle({ errorMessage: !!errorMessage })}
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {value && isFocused && handleClearInput && (
            <IcBtnDelete
              className={deleteButtonStyle}
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleClearInput}
            />
          )}
        </div>

        {errorMessage ? (
          <span className={inputErrorText}>{errorMessage}</span>
        ) : (
          infoMessage && <span className={inputInfoText}>{infoMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
