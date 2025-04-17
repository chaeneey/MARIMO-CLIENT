import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import {
  InputContainer,
  InputErrorText,
  InputInfoText,
  InputStyle,
} from "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegisterReturn;
  error?: boolean;
  errorText?: string;
  infoText?: string;
}

const Input = ({
  name,
  register,
  error = false,
  errorText,
  infoText,
  placeholder,
}: InputProps) => {
  return (
    <div className={InputContainer}>
      <input
        id={name}
        {...register}
        className={InputStyle({ error })}
        placeholder={placeholder}
      />
      {error ? (
        <span className={InputErrorText}>{errorText}</span>
      ) : (
        <span className={InputInfoText}>{infoText}</span>
      )}
    </div>
  );
};

export default Input;
