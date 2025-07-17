"use client";
import { ChangeEvent, useRef } from "react";

import { buttonStyle, inputStyle } from "./IUButton.css";

export interface IUButtonProps {
  onUpload: (files: File[] | File) => void;
  multiple?: boolean;
}

const IUButton = ({ onUpload, multiple = false }: IUButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;

    if (multiple) {
      onUpload(Array.from(fileList));
    } else {
      onUpload(fileList[0]);
    }

    // 선택 후 같은 파일 다시 선택 가능하게
    e.target.value = "";
  };
  return (
    <>
      <button className={buttonStyle} onClick={handleClick} type="button">
        클릭 후 업로드
      </button>
      <input
        type="file"
        ref={inputRef}
        multiple={multiple}
        onChange={handleChange}
        className={inputStyle}
      />
    </>
  );
};

export default IUButton;
