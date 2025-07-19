"use client";

import Image from "next/image";
import { ChangeEvent, DragEvent, useState } from "react";

import {
  buttonWithTextStyle,
  countTextStyle,
  ImageDragBoxContainer,
  ImageDragBoxStyle,
  textStyle,
} from "./ImageDragBox.css";
import Button from "../Button/Button";

const ImageDragBox = () => {
  // 나중에 부모 컴포넌트에 넣을 기능
  const [files, setFiles] = useState<File[]>([]);

  const MAX_FILES = 10;

  const handleFileSelect = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    const totalFiles = files.length + fileArray.length;

    if (totalFiles > MAX_FILES) {
      alert("최대 10개의 파일까지만 업로드할 수 있습니다.");
      return;
    }

    setFiles((prev) => [...prev, ...fileArray]);

    const newPreviews = fileArray.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviews]);
  };

  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [, setIsActive] = useState(false);

  const handleDragStart = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(true);
  };

  const handleDragEnd = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(false);
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(false);
    handleFileSelect(e.dataTransfer?.files ?? null);
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e?.preventDefault();
    e.stopPropagation();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files);
    e.target.value = "";
  };

  return (
    <section className={ImageDragBoxContainer}>
      <div className={buttonWithTextStyle}>
        <Button color="gray" size="35">
          파일 업로드
        </Button>
        <span className={textStyle}>또는 파일을 끌어서 놓으세요.</span>
      </div>

      <label
        className={ImageDragBoxStyle}
        onDragEnter={handleDragStart}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          multiple
          type="file"
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {previewUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`preview-${index}`}
              width={100}
              height={100}
              objectFit="cover"
              unoptimized
            />
          ))}
        </div>

        <span
          className={countTextStyle}
        >{`${files.length} / ${MAX_FILES}`}</span>
      </label>
    </section>
  );
};

export default ImageDragBox;
