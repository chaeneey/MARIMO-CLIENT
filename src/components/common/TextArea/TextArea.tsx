"use client";
import { forwardRef, TextareaHTMLAttributes } from "react";

import {
  countTextStyle,
  textAreaContainer,
  textAreaErrorText,
  textAreaStyle,
  textAreaWrapper,
} from "./TextArea.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
  currentLength: number;
  maxLength: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ errorMessage, currentLength, maxLength, value, ...props }, ref) => {
    return (
      <div className={textAreaContainer}>
        <div className={textAreaWrapper({ errorMessage: !!errorMessage })}>
          <textarea
            ref={ref}
            {...props}
            className={textAreaStyle}
            value={value}
          />
          <span className={countTextStyle}>
            {currentLength} / {maxLength}
          </span>
        </div>

        {errorMessage && (
          <span className={textAreaErrorText}>{errorMessage}</span>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
