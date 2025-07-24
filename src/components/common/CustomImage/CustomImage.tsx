"use client";
import Image from "next/image";
import React from "react";

import { imageStyle, imageWrapperStyle } from "./CustomImage.css";

export interface ImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const CustomImage = ({ src, alt, priority }: ImageProps) => {
  return (
    <div className={imageWrapperStyle}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={imageStyle}
        priority={priority}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default CustomImage;
