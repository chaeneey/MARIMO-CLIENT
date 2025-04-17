import { forwardRef, InputHTMLAttributes } from "react";

import {
  InputContainer,
  InputErrorText,
  InputInfoText,
  InputStyle,
} from "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  infoMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, infoMessage, ...props }, ref) => {
    return (
      <div className={InputContainer}>
        <input
          ref={ref}
          className={InputStyle({ errorMessage: !!errorMessage })}
          {...props}
        />
        {errorMessage ? (
          <span className={InputErrorText}>{errorMessage}</span>
        ) : (
          <span className={InputInfoText}>{infoMessage}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
