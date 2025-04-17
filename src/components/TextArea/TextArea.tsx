import { forwardRef, TextareaHTMLAttributes } from "react";

import {
  CountTextStyle,
  TextAreaContainer,
  TextAreaErrorText,
  TextAreaStyle,
  TextAreaWrapper,
} from "./TextArea.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
  currentLength: number;
  maxLength?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ errorMessage, currentLength, maxLength, ...props }, ref) => {
    return (
      <div className={TextAreaContainer}>
        <div className={TextAreaWrapper}>
          <textarea
            ref={ref}
            {...props}
            className={TextAreaStyle({ errorMessage: !!errorMessage })}
            maxLength={maxLength}
          />
          <span className={CountTextStyle}>
            {currentLength} / {maxLength}
          </span>
        </div>

        {errorMessage && (
          <span className={TextAreaErrorText}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
