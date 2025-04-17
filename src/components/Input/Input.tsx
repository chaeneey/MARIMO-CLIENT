import { forwardRef, InputHTMLAttributes } from "react";
import { UseFormSetValue } from "react-hook-form";

import { IcBtnDelete } from "@/assets/svgs";

import {
  deleteButtonStyle,
  InputContainer,
  InputErrorText,
  InputInfoText,
  InputStyle,
  InputWrapper,
} from "./Input.css";

type FormValue = "orderName" | "email";
interface FormValues {
  orderName: string;
  email: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  infoMessage?: string;
  content: FormValue;
  setValue: UseFormSetValue<FormValues>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, infoMessage, value, content, setValue, ...props }, ref) => {
    const handleClearInput = () => {
      setValue(content, "");
    };

    return (
      <div className={InputContainer}>
        <div className={InputWrapper}>
          <input
            ref={ref}
            className={InputStyle({ errorMessage: !!errorMessage })}
            {...props}
          />

          {value && (
            <IcBtnDelete
              width={18}
              height={18}
              className={deleteButtonStyle}
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
